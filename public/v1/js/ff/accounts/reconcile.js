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

/** global: overviewUri, transactionsUri, indexUri,accounting */

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
    // Define number of maximum items to uncheck in order to keep short computing time
    // Here are some pre-computed values ensuring less than 1e7 combinations to explore
    // 10 -> 10, 20 -> 20, 22 -> 22, 24 -> 12, 26 -> 9, 30 -> 8, 40 -> 6, 50 -> 5, 100 -> 4
    // next line is a magic formula fitting these values
    let max_nb_items = (d_size <= 22) ? d_size : Math.floor( 13*(d_size-22)**-0.3 );
    console.log('debug smart_reconcile:', target_sum, max_sum, max_nb_items);
    // Result is list of items NOT to check
    let result = smart_reconcile_aux(amounts, 0, max_nb_items, 0, max_sum-target_sum);
    return result;
}

// Recursive function, try to add the amounts after the 'nth' one to achieve 'target_sum'
// without exceeding maximum number of items 'remain_to_take'
// Returns null if not possible else boolean array listing which items to check
function smart_reconcile_aux(amounts, nth_number, remain_to_take, current_sum, target_sum) {
    // Stop if no more transactions can be checked
    if (Math.abs(current_sum - target_sum) < 0.01) return Array(amounts.length-nth_number).fill(false);
    if (remain_to_take == 0 || nth_number == amounts.length) return null;

    // Try without using current number
    let result = smart_reconcile_aux(amounts, nth_number+1, remain_to_take, current_sum, target_sum);
    if (result) {
        result.unshift(false);
        return result;
    }

    // Try using current number
    let new_amount = amounts[nth_number];
    let new_sum = current_sum + new_amount;
    if (Math.abs(new_sum - target_sum) < 1e-8) return [true].concat(Array(amounts.length-nth_number-1).fill(false));
    result = smart_reconcile_aux(amounts, nth_number+1, remain_to_take-1, new_sum, target_sum);
    if (result) result.unshift(true);
    return result;
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
    var uri = overviewUri.replace('%start%', $('input[name="start_date"]').val()).replace('%end%', $('input[name="end_date"]').val());


    $.getJSON(uri, variables).done(function (data) {
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
    var uri = transactionsUri.replace('%start%', $('input[name="start_date"]').val()).replace('%end%', $('input[name="end_date"]').val());
    var index = indexUri.replace('%start%', $('input[name="start_date"]').val()).replace('%end%', $('input[name="end_date"]').val());
    window.history.pushState('object or string', "Reconcile account", index);

    $.getJSON(uri).done(placeTransactions).catch(exceptionHandling)
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
