/*
 * index.js
 * Copyright (c) 2022 james@firefly-iii.org
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

export default {
    "config": {
        "html_language": "da",
        "month_and_day_fns": "d MMMM y"
    },
    "form": {
        "name": "Navn",
        "amount_min": "Minimumsbel\u00f8b",
        "amount_max": "Maksimumbel\u00f8b",
        "url": "URL",
        "title": "Titel",
        "first_date": "F\u00f8rste dato",
        "repetitions": "Gentagelser",
        "description": "Beskrivelse",
        "iban": "IBAN",
        "skip": "Spring over",
        "date": "Dato"
    },
    "list": {
        "name": "Navn",
        "account_number": "Konto nummer",
        "currentBalance": "Nuv\u00e6rende saldo",
        "lastActivity": "Seneste aktivitet",
        "active": "Aktiv?"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "Budget",
        "subscriptions": "Abonnementer",
        "transactions": "Transaktioner",
        "title_expenses": "Udgifter",
        "title_withdrawal": "Udgifter",
        "title_revenue": "Indt\u00e6gter \/ indkomster",
        "title_deposit": "Indt\u00e6gter \/ indkomster",
        "title_transfer": "Overf\u00f8rsler",
        "title_transfers": "Overf\u00f8rsler",
        "asset_accounts": "Aktivkonti",
        "expense_accounts": "Udgiftskonti",
        "revenue_accounts": "Indt\u00e6gtskonti",
        "liabilities_accounts": "G\u00e6ld"
    },
    "firefly": {
        "administration_index": "Financial administration",
        "actions": "Handlinger",
        "edit": "Rediger",
        "delete": "Slet",
        "reconcile": "Afstem",
        "create_new_asset": "Opret ny aktivkonto",
        "confirm_action": "Bekr\u00e6ft",
        "new_budget": "Nyt budget",
        "new_asset_account": "Ny aktivkonto",
        "newTransfer": "New transfer",
        "submission_options": "Submission options",
        "apply_rules_checkbox": "Apply rules",
        "fire_webhooks_checkbox": "Fire webhooks",
        "newDeposit": "New deposit",
        "newWithdrawal": "New expense",
        "bills_paid": "Betalte regninger",
        "left_to_spend": "Left to spend",
        "no_budget": "(no budget)",
        "budgeted": "Budgetteret",
        "spent": "Spent",
        "no_bill": "(no bill)",
        "rule_trigger_source_account_starts_choice": "Kildekontonavn starter med..",
        "rule_trigger_source_account_ends_choice": "Kildekontonavnet slutter med..",
        "rule_trigger_source_account_is_choice": "Kildekontonavn er..",
        "rule_trigger_source_account_contains_choice": "Kildekontonavnet indeholder..",
        "rule_trigger_account_id_choice": "Either account ID is exactly..",
        "rule_trigger_source_account_id_choice": "Kildekonto ID er pr\u00e6cis..",
        "rule_trigger_destination_account_id_choice": "Destinationskonto ID er pr\u00e6cis..",
        "rule_trigger_account_is_cash_choice": "Either account is cash",
        "rule_trigger_source_is_cash_choice": "Kildekonto er (kontant) konto",
        "rule_trigger_destination_is_cash_choice": "Destinationskonto er (kontant) konto",
        "rule_trigger_source_account_nr_starts_choice": "Kildekontonummer \/ IBAN starter med..",
        "rule_trigger_source_account_nr_ends_choice": "Kildekontonummer \/ IBAN slutter med..",
        "rule_trigger_source_account_nr_is_choice": "Kildekontonummer \/ IBAN er..",
        "rule_trigger_source_account_nr_contains_choice": "Kildekontonummer \/ IBAN indeholder..",
        "rule_trigger_destination_account_starts_choice": "Destinationskontonavnet starter med..",
        "rule_trigger_destination_account_ends_choice": "Destinationskontonavnet slutter med..",
        "rule_trigger_destination_account_is_choice": "Destinationskontonavnet er..",
        "rule_trigger_destination_account_contains_choice": "Destinationskontonavnet indeholder..",
        "rule_trigger_destination_account_nr_starts_choice": "Destinationskontonummer \/ IBAN starter med..",
        "rule_trigger_destination_account_nr_ends_choice": "Destinationskontonummer \/ IBAN slutter med..",
        "rule_trigger_destination_account_nr_is_choice": "Destinationskontonummer \/ IBAN er..",
        "rule_trigger_destination_account_nr_contains_choice": "Destinationskontonummer \/ IBAN indeholder..",
        "rule_trigger_transaction_type_choice": "Transaktionen er af type..",
        "rule_trigger_category_is_choice": "Kategorien er..",
        "rule_trigger_amount_less_choice": "Amount is less than or equal to ..",
        "rule_trigger_amount_is_choice": "Amount is..",
        "rule_trigger_amount_more_choice": "Amount is more than or equal to..",
        "rule_trigger_description_starts_choice": "Beskrivelsen starter med..",
        "rule_trigger_description_ends_choice": "Beskrivelsen slutter med..",
        "rule_trigger_description_contains_choice": "Beskrivelsen indeholder..",
        "rule_trigger_description_is_choice": "Beskrivelsen er..",
        "rule_trigger_date_on_choice": "Transaction date is..",
        "rule_trigger_date_before_choice": "Transaktionsdato er f\u00f8r..",
        "rule_trigger_date_after_choice": "Transaktionsdatoen er efter..",
        "rule_trigger_created_at_on_choice": "Transaction was made on..",
        "rule_trigger_updated_at_on_choice": "Transaction was last edited on..",
        "rule_trigger_budget_is_choice": "Budgettet er..",
        "rule_trigger_tag_is_choice": "Any tag is..",
        "rule_trigger_currency_is_choice": "Transaktionsvalutaen er..",
        "rule_trigger_foreign_currency_is_choice": "Udenlandsk transaktionsvaluta er..",
        "rule_trigger_has_attachments_choice": "Har mindst s\u00e5 mange vedh\u00e6ftede filer",
        "rule_trigger_has_no_category_choice": "Har ingen kategori",
        "rule_trigger_has_any_category_choice": "Har en (vilk\u00e5rlig) kategori",
        "rule_trigger_has_no_budget_choice": "Har intet budget",
        "rule_trigger_has_any_budget_choice": "Har et (noget) budget",
        "rule_trigger_has_no_bill_choice": "Har ingen regning",
        "rule_trigger_has_any_bill_choice": "Har en (valgfri) regning",
        "rule_trigger_has_no_tag_choice": "Har ingen tag(s)",
        "rule_trigger_has_any_tag_choice": "Har en eller flere (nogen) tags",
        "rule_trigger_any_notes_choice": "Har (nogen) noter",
        "rule_trigger_no_notes_choice": "Har ingen noter",
        "rule_trigger_notes_is_choice": "Notes are..",
        "rule_trigger_notes_contains_choice": "Notes contain..",
        "rule_trigger_notes_starts_choice": "Notes start with..",
        "rule_trigger_notes_ends_choice": "Notes end with..",
        "rule_trigger_bill_is_choice": "Regningen er..",
        "rule_trigger_external_id_is_choice": "External ID is..",
        "rule_trigger_internal_reference_is_choice": "Internal reference is..",
        "rule_trigger_journal_id_choice": "Transaktionsjournal ID er..",
        "rule_trigger_any_external_url_choice": "Transaction has an (any) external URL",
        "rule_trigger_no_external_url_choice": "Transaction has no external URL",
        "rule_trigger_id_choice": "Transaction ID is..",
        "rule_action_delete_transaction_choice": "DELETE transaction(!)",
        "rule_action_set_category_choice": "Set category to ..",
        "rule_action_clear_category_choice": "Ryd alle kategorier",
        "rule_action_set_budget_choice": "Set budget to ..",
        "rule_action_clear_budget_choice": "Ryd ethvert budget",
        "rule_action_add_tag_choice": "Add tag ..",
        "rule_action_remove_tag_choice": "Remove tag ..",
        "rule_action_remove_all_tags_choice": "Fjern alle tags",
        "rule_action_set_description_choice": "Set description to ..",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "Set destination account to ..",
        "rule_action_append_notes_choice": "Append notes with ..",
        "rule_action_prepend_notes_choice": "Prepend notes with ..",
        "rule_action_clear_notes_choice": "Fjern alle noter",
        "rule_action_set_notes_choice": "Set notes to ..",
        "rule_action_link_to_bill_choice": "Link to a bill ..",
        "rule_action_convert_deposit_choice": "Konverter transaktionen til et indskud",
        "rule_action_convert_withdrawal_choice": "Konverter transaktionen til en udbetaling",
        "rule_action_convert_transfer_choice": "Konverter transaktionen til en overf\u00f8rsel",
        "placeholder": "[Placeholder]",
        "recurrences": "Recurring transactions",
        "title_expenses": "Udgifter",
        "title_withdrawal": "Udgifter",
        "title_revenue": "Indt\u00e6gter \/ indkomst",
        "pref_1D": "En dag",
        "pref_1W": "En uge",
        "pref_1M": "En m\u00e5ned",
        "pref_3M": "Tre m\u00e5neder (kvartal)",
        "pref_6M": "Seks m\u00e5neder",
        "pref_1Y": "Et \u00e5r",
        "repeat_freq_yearly": "\u00e5rligt",
        "repeat_freq_half-year": "hvert halve \u00e5r",
        "repeat_freq_quarterly": "kvartalsvis",
        "repeat_freq_monthly": "m\u00e5nedligt",
        "repeat_freq_weekly": "ugentligt",
        "single_split": "Opdel",
        "asset_accounts": "Aktivkonti",
        "expense_accounts": "Udgiftskonti",
        "liabilities_accounts": "G\u00e6ld",
        "undefined_accounts": "Accounts",
        "name": "Name",
        "revenue_accounts": "Indt\u00e6gtskonti",
        "description": "Description",
        "category": "Kategori",
        "title_deposit": "Indt\u00e6gter \/ indkomster",
        "title_transfer": "Overf\u00f8rsler",
        "title_transfers": "Overf\u00f8rsler",
        "piggyBanks": "Spareb\u00f8sser",
        "rules": "Regler",
        "accounts": "Konti",
        "categories": "Kategorier",
        "tags": "Etiketter",
        "object_groups_page_title": "Groups",
        "reports": "Rapporter",
        "webhooks": "Webhooks",
        "currencies": "Currencies",
        "administration": "Administration",
        "profile": "Profile",
        "source_account": "Kildekonto",
        "destination_account": "Destinationskonto",
        "amount": "Bel\u00f8b",
        "date": "Date",
        "time": "Time",
        "preferences": "Preferences",
        "transactions": "Transaktioner",
        "balance": "Saldo",
        "budgets": "Budgetter",
        "subscriptions": "Abonnementer",
        "welcome_back": "Hvad spiller?",
        "bills_to_pay": "Regninger til betaling",
        "net_worth": "Nettoformue",
        "pref_last365": "Sidste \u00e5r",
        "pref_last90": "Sidste 90 dage",
        "pref_last30": "Sidste 30 dage",
        "pref_last7": "Sidste 7 dage",
        "pref_YTD": "\u00c5r til dato",
        "pref_QTD": "Kvartal til dato",
        "pref_MTD": "M\u00e5ned til dato"
    }
}
