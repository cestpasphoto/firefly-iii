/*
 * reconcile.js
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

var balanceDifference = 0;
var difference = 0;
var selectedAmount = 0;
var initialSelectedAmount = 0;
var reconcileStarted = false;
var changedBalances = false;

/**
 *
 */
$(function () {
    "use strict";

    /*
    Respond to changes in balance statements.
     */
    $('input[type="number"]').on('change', function () {
        //console.log('On type=number change.');
        if (reconcileStarted) {
            //console.log('Reconcile has started.');
            calculateBalanceDifference();
            difference = balanceDifference - selectedAmount;
            updateDifference();

            trigger_smart_reconcile();
            difference = balanceDifference - selectedAmount;
            updateDifference();
        }
        changedBalances = true;
    });

    /*
    Respond to changes in the date range.
     */
    $('input[type="date"]').on('change', function () {
        //console.log('On type=date change.');
        if (reconcileStarted) {
            //console.log('Reconcile has started.');
            // hide original instructions.
            $('.select_transactions_instruction').hide();

            // show date-change warning
            $('.date_change_warning').show();

            // show update button
            $('.change_date_button').show();
        }
    });

    $('.change_date_button').click(startReconcile);
    $('.start_reconcile').click(startReconcile);
    $('.store_reconcile').click(storeReconcile);

});

function smart_reconcile(amounts, target_sum) {
    let d_size = amounts.length;
    let max_sum = amounts.reduce((a, b) => a + b);
    // Define number of maximum items to exclude in order to keep short computing time
    // Here are some pre-computed values ensuring less than 1e7 combinations to explore
    // 10 -> 10, 20 -> 20, 22 -> 22, 24 -> 12, 26 -> 9, 30 -> 8, 40 -> 6, 50 -> 5, 100 -> 4
    // next line is a magic formula fitting these values
    let max_nb_unchecked_items = (d_size <= 22) ? d_size : Math.floor( 13*(d_size-22)**-0.3 );
    console.log('debug smart_reconcile:', target_sum, max_sum, max_nb_unchecked_items);
    // Result will be list of items to EXCLUDE from reconcile
    let result = solve_knapsack(amounts, amounts.length, max_nb_unchecked_items, 0, max_sum-target_sum);
    return result;
}

// Find combination of transactions whose sum equals to target, with a preference
// to pick minimum number of transactions and new transactions first. (remember
// that pick = exclude some reconcile).
// Tree exploration through recursive function:
// Add transactions from index-1 to 0 to achieve target_sum without picking more
// than remain_to_take items 
// Returns null if not possible, else boolean array listing which transactions to pick
function solve_knapsack(amounts, index, remain_to_take, current_sum, target_sum) {
    // Stop if no more transactions can be checked
    if (Math.abs(current_sum - target_sum) < 0.001) return Array(index).fill(false);
    if (remain_to_take == 0 || index == 0) return null;

    // Try not to pick current transaction
    let result = solve_knapsack(amounts, index-1, remain_to_take, current_sum, target_sum);
    if (result) {
        result.push(false);
        return result;
    }

    // Try picking current transaction
    let new_amount = amounts[index-1];
    let new_sum = current_sum + new_amount;
    if (Math.abs(new_sum - target_sum) < 0.001) return Array(index-1).fill(false).concat([true]);
    result = solve_knapsack(amounts, index-1, remain_to_take-1, new_sum, target_sum);
    if (result) {
        result.push(true);
        return result;
    }

    // No solution
    return null;
}

function trigger_smart_reconcile() {
    // Gather all data
    let amounts = [];
    $('.reconcile_checkbox').each(function (i, v) {
        var check = $(v);
        amounts.push(parseFloat(check.val()));
    });

    // Call core function, better to serch for items to uncheck than the ones to check
    var items_to_uncheck = smart_reconcile(amounts, initialSelectedAmount - balanceDifference);
    if (items_to_uncheck) {
        // Set checkboxes
        $('.reconcile_checkbox').each(function (i, v) {
            var check = $(v);
            changeReconciledBoxAndUpdate(check, !items_to_uncheck[i]);
        });
    } else {
        console.log('Cant find a solution for smart reconcile');
    }
}

// Change status of el to targetState and update all variables
// If targetState is null, then assumes that state is alreay changed and only update variables
function changeReconciledBoxAndUpdate(el, targetState) {
    var amount = parseFloat(el.val());
    var journalId = parseInt(el.data('id'));
    var identifier = 'checked_' + journalId;
    console.log('in changeReconciledBoxAndUpdate(' + journalId + ') with amount ' + amount + ' selected amount ' + selectedAmount + ' and targetState=' + targetState);

    if (targetState != null) {
        // do nothing if line is already in target state
        if (el.prop('checked') === targetState) {
            return;
        }
        el.prop('checked', targetState);
    }

    // if checked, add to selected amount
    if (el.prop('checked') === true && el.data('younger') === false) {
        selectedAmount = selectedAmount - amount;
        //console.log('checked = true and younger = false so selected amount = ' + selectedAmount);
        localStorage.setItem(identifier, 'true');
    }
    // if unchecked, substract from selected amount
    if (el.prop('checked') === false && el.data('younger') === false) {
        selectedAmount = selectedAmount + amount;
        //console.log('checked = false and younger = false so selected amount = ' + selectedAmount);
        localStorage.setItem(identifier, 'false');
    }
    difference = balanceDifference - selectedAmount;
    //console.log('Difference is now ' + difference);
    updateDifference();
}

function selectAllReconcile(e) {
    // loop all, check.
    var el = $(e.target);
    var doCheck = true;
    if (el.prop('checked') === true) {
        $('.check_all_btn').prop('checked', true);
    }
    if (el.prop('checked') === false) {
        $('.check_all_btn').prop('checked', false);
        doCheck = false;
    }

    $('.reconcile_checkbox').each(function (i, v) {
        var check = $(v);
        changeReconciledBoxAndUpdate(check, doCheck);
    });

    updateDifference();
}

function storeReconcile() {
    //console.log('in storeReconcile()');
    // get modal HTML:
    var ids = [];
    $.each($('.reconcile_checkbox:checked'), function (i, v) {
        var obj = $(v);
        if (obj.data('inrange') === true) {
            //console.log('Added item with amount to list of checked ' + obj.val());
            ids.push(obj.data('id'));
        } else {
            //console.log('Ignored item with amount because is not in range ' + obj.val());
        }
    });
    var cleared = [];
    $.each($('input[class="cleared"]'), function (i, v) {
        var obj = $(v);
        //console.log('Added item with amount to list of cleared ' + obj.val());
        // todo here we need to check previous transactions etc.
        cleared.push(obj.data('id'));
    });

    var variables = {
        startBalance: parseFloat($('input[name="start_balance"]').val()),
        endBalance: parseFloat($('input[name="end_balance"]').val()),
        startDate: $('input[name="start_date"]').val(),
        startEnd: $('input[name="end_date"]').val(),
        journals: ids,
        cleared: cleared,
    };
    var url = overviewUrl.replace('%start%', $('input[name="start_date"]').val()).replace('%end%', $('input[name="end_date"]').val());


    $.getJSON(url, variables).done(function (data) {
        $('#defaultModal').empty().html(data.html).modal('show');
    });
}

/**
 * What happens when you check a checkbox:
 * @param e
 */
function checkReconciledBox(e) {
    changeReconciledBoxAndUpdate($(e.target), null);
}


/**
 * Calculate the difference between given start and end balance
 * and put it in balanceDifference.
 */
function calculateBalanceDifference() {
    //console.log('in calculateBalanceDifference()');
    var startBalance = parseFloat($('input[name="start_balance"]').val());
    var endBalance = parseFloat($('input[name="end_balance"]').val());
    balanceDifference = startBalance - endBalance;
}

/**
 * Grab all transactions, update the URL and place the set of transactions in the box.
 * This more or less resets the reconciliation.
 */
function getTransactionsForRange() {
    console.log('in getTransactionsForRange()');
    // clear out the box:
    $('#transactions_holder').empty().append($('<p>').addClass('text-center').html('<span class="fa fa-fw fa-spin fa-spinner"></span>'));
    var url = transactionsUrl.replace('%start%', $('input[name="start_date"]').val()).replace('%end%', $('input[name="end_date"]').val());
    var index = indexUrl.replace('%start%', $('input[name="start_date"]').val()).replace('%end%', $('input[name="end_date"]').val());
    window.history.pushState('object or string', "Reconcile account", index);

    $.getJSON(url).done(placeTransactions).catch(exceptionHandling)
}
function exceptionHandling() {
    $('#transactions_holder').empty().append($('<p>').addClass('text-center lead').html(selectRangeAndBalance));
    $('.start_reconcile').show();
    $('.initial_instructions').show();
}

// /**
//  * Loop over all transactions that have already been cleared (in the range)
//  * and add this to the selectedAmount.
//  *
//  */
// function includeClearedTransactions() {
//     $.each($('input[class="cleared"]'), function (i, v) {
//         var obj = $(v);
//         if (obj.data('younger') === false) {
//             //selectedAmount = selectedAmount - parseFloat(obj.val());
//         }
//     });
// }

/**
 * Loop over all transactions that have already been cleared (in the range)
 * and add this to the selectedAmount.
 *
 */
function includeClearedTransactions() {
    console.log('in includeClearedTransactions()');
    $.each($('input[class="cleared"]'), function (i, v) {
        var obj = $(v);
        var amount = parseFloat(obj.val());
        if (obj.data('inrange') === true) {
            console.log('Amount is ' + amount + '  and inrange = true');
            selectedAmount = selectedAmount - amount;
        } else {
            console.log('Amount is ' + amount + '  but inrange = FALSE so ignore.');
        }
    });
}

/**
 * Place the HTML for the transactions within the date range and update the balance difference.
 * @param data
 */
function placeTransactions(data) {
    console.log('in placeTransactions()');
    $('#transactions_holder').empty().html(data.html);

    // add checkbox thing
    $('.check_all_btn').click(selectAllReconcile);

    selectedAmount = 0;
    // update start + end balance when user has not touched them.
    if (!changedBalances) {
        $('input[name="start_balance"]').val(data.startBalance);
        $('input[name="end_balance"]').val(data.endBalance);
    }

    // as long as the dates are equal, changing the balance does not matter.
    calculateBalanceDifference();

    // any already cleared transactions must be added to / removed from selectedAmount.
    includeClearedTransactions();

    difference = balanceDifference - selectedAmount;
    updateDifference();
    initialSelectedAmount = selectedAmount;

    // loop al placed checkboxes and check them if necessary.
    restoreFromLocalStorage();


    // enable the check buttons:
    $('.reconcile_checkbox').prop('disabled', false).unbind('change').change(checkReconciledBox);

    // show the other instruction:
    $('.select_transactions_instruction').show();

    $('.store_reconcile').prop('disabled', false);
}

function restoreFromLocalStorage() {
    $('.reconcile_checkbox').each(function (i, v) {
        var el = $(v);
        var journalId = el.data('id')
        var identifier = 'checked_' + journalId;
        var amount = parseFloat(el.val());
        if (localStorage.getItem(identifier) === 'true') {
            el.prop('checked', true);
            // do balance thing:
            console.log('in restoreFromLocalStorage(' + journalId + ') with amount ' + amount + ' and selected amount ' + selectedAmount);
            // if checked, add to selected amount
            if (el.data('younger') === false) {
                selectedAmount = selectedAmount - amount;
                console.log('checked = true and younger = false so selected amount = ' + selectedAmount);
                localStorage.setItem(identifier, 'true');
            }
            difference = balanceDifference - selectedAmount;
            console.log('Difference is now ' + difference);
        }

    });
    updateDifference();
}

/**
 *
 * @returns {boolean}
 */
function startReconcile() {
    console.log('in startReconcile()');
    reconcileStarted = true;

    // hide the start button.
    $('.start_reconcile').hide();

    // hide the start instructions:
    $('.update_balance_instruction').hide();

    // hide date-change warning
    $('.date_change_warning').hide();

    // hide update button
    $('.change_date_button').hide();

    getTransactionsForRange();


    return false;
}

function updateDifference() {
    //console.log('in updateDifference()');
    var addClass = 'text-info';
    if (difference > 0.01) {
        addClass = 'text-success';
    }
    if (difference < -0.01) {
        addClass = 'text-danger';
    }
    $('#difference').addClass(addClass).text(accounting.formatMoney(difference));
}
