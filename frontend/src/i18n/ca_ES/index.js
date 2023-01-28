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
        "html_language": "ca",
        "month_and_day_fns": "d MMMM y"
    },
    "form": {
        "name": "Nom",
        "amount_min": "Import m\u00ednim",
        "amount_max": "Import m\u00e0xim",
        "url": "URL",
        "title": "T\u00edtol",
        "first_date": "Primera data",
        "repetitions": "Repeticions",
        "description": "Descripci\u00f3",
        "iban": "IBAN",
        "skip": "Ometre",
        "date": "Data"
    },
    "list": {
        "name": "Nom",
        "account_number": "N\u00famero de compte",
        "currentBalance": "Saldo actual",
        "lastActivity": "Darrera activitat",
        "active": "Est\u00e0 actiu?"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "Pressupostos",
        "subscriptions": "Subscripcions",
        "transactions": "Transaccions",
        "title_expenses": "Despeses",
        "title_withdrawal": "Despeses",
        "title_revenue": "Ingressos \/ salari",
        "title_deposit": "Ingressos \/ salari",
        "title_transfer": "Transfer\u00e8ncies",
        "title_transfers": "Transfer\u00e8ncies",
        "asset_accounts": "Comptes d'actius",
        "expense_accounts": "Comptes de despeses",
        "revenue_accounts": "Comptes d'ingressos",
        "liabilities_accounts": "Passius"
    },
    "firefly": {
        "actions": "Accions",
        "edit": "Editar",
        "delete": "Eliminar",
        "reconcile": "Consolidar",
        "create_new_asset": "Crear un nou compte d'actius",
        "confirm_action": "Confirmar acci\u00f3",
        "new_budget": "Nou pressupost",
        "new_asset_account": "Nou compte d'actiu",
        "newTransfer": "Nova transfer\u00e8ncia",
        "submission_options": "Opcions de tramesa",
        "apply_rules_checkbox": "Aplicar regles",
        "fire_webhooks_checkbox": "Disparar webhooks",
        "newDeposit": "Nou dip\u00f2sit",
        "newWithdrawal": "Nova despesa",
        "bills_paid": "Factures pagades",
        "left_to_spend": "Queda per gastar",
        "no_budget": "(cap pressupost)",
        "budgeted": "Pressupostat",
        "spent": "Gastat",
        "no_bill": "(cap factura)",
        "rule_trigger_source_account_starts_choice": "El nom del compte d'origen comen\u00e7a per..",
        "rule_trigger_source_account_ends_choice": "El nom del compte d'origen acaba amb..",
        "rule_trigger_source_account_is_choice": "El nom del compte d'origen \u00e9s..",
        "rule_trigger_source_account_contains_choice": "El nom del compte d'origen cont\u00e9..",
        "rule_trigger_account_id_choice": "L'ID d'un dels comptes \u00e9s exactament..",
        "rule_trigger_source_account_id_choice": "L'ID del compte d'origen \u00e9s exactament..",
        "rule_trigger_destination_account_id_choice": "L'ID del compte de dest\u00ed \u00e9s exactament..",
        "rule_trigger_account_is_cash_choice": "Un dels comptes \u00e9s d'efectiu",
        "rule_trigger_source_is_cash_choice": "El compte d'origen \u00e9s el compte (efectiu)",
        "rule_trigger_destination_is_cash_choice": "El compte de dest\u00ed \u00e9s el compte (efectiu)",
        "rule_trigger_source_account_nr_starts_choice": "El n\u00famero \/ IBAN del compte d'origen comen\u00e7a per..",
        "rule_trigger_source_account_nr_ends_choice": "El n\u00famero \/ IBAN del compte d'origen acaba amb..",
        "rule_trigger_source_account_nr_is_choice": "El n\u00famero \/ IBAN del compte d'origen \u00e9s..",
        "rule_trigger_source_account_nr_contains_choice": "El n\u00famero \/ IBAN del compte d'origen cont\u00e9..",
        "rule_trigger_destination_account_starts_choice": "El nom del compte de dest\u00ed comen\u00e7a per..",
        "rule_trigger_destination_account_ends_choice": "El nom del compte de dest\u00ed acaba amb..",
        "rule_trigger_destination_account_is_choice": "El nom del compte de dest\u00ed \u00e9s..",
        "rule_trigger_destination_account_contains_choice": "El nom del compte de dest\u00ed cont\u00e9..",
        "rule_trigger_destination_account_nr_starts_choice": "El n\u00famero \/ IBAN del compte de dest\u00ed comen\u00e7a per..",
        "rule_trigger_destination_account_nr_ends_choice": "El n\u00famero \/ IBAN del compte de dest\u00ed acaba amb..",
        "rule_trigger_destination_account_nr_is_choice": "El n\u00famero \/ IBAN del compte de dest\u00ed \u00e9s..",
        "rule_trigger_destination_account_nr_contains_choice": "El n\u00famero \/ IBAN del compte de dest\u00ed cont\u00e9..",
        "rule_trigger_transaction_type_choice": "La transacci\u00f3 \u00e9s del tipus..",
        "rule_trigger_category_is_choice": "La categoria \u00e9s..",
        "rule_trigger_amount_less_choice": "La quantitat \u00e9s inferior a..",
        "rule_trigger_amount_is_choice": "La quantitat \u00e9s..",
        "rule_trigger_amount_more_choice": "La quantitat \u00e9s superior a..",
        "rule_trigger_description_starts_choice": "La descripci\u00f3 comen\u00e7a per..",
        "rule_trigger_description_ends_choice": "La descripci\u00f3 acaba amb..",
        "rule_trigger_description_contains_choice": "La descripci\u00f3 cont\u00e9..",
        "rule_trigger_description_is_choice": "La descripci\u00f3 \u00e9s..",
        "rule_trigger_date_on_choice": "La data de la transacci\u00f3 \u00e9s..",
        "rule_trigger_date_before_choice": "La data de la transacci\u00f3 \u00e9s anterior a..",
        "rule_trigger_date_after_choice": "La data de la transacci\u00f3 \u00e9s posterior a..",
        "rule_trigger_created_at_on_choice": "La transacci\u00f3 es va fer el..",
        "rule_trigger_updated_at_on_choice": "La transacci\u00f3 es va editar per \u00faltim cop el..",
        "rule_trigger_budget_is_choice": "El pressupost \u00e9s..",
        "rule_trigger_tag_is_choice": "Qualsevol etiqueta \u00e9s..",
        "rule_trigger_currency_is_choice": "La moneda de la transacci\u00f3 \u00e9s..",
        "rule_trigger_foreign_currency_is_choice": "La moneda estrangera de la transacci\u00f3 \u00e9s..",
        "rule_trigger_has_attachments_choice": "Com a m\u00ednim t\u00e9 aquest nombre d'adjunts",
        "rule_trigger_has_no_category_choice": "No t\u00e9 categoria",
        "rule_trigger_has_any_category_choice": "T\u00e9 categoria (qualsevol)",
        "rule_trigger_has_no_budget_choice": "No t\u00e9 pressupost",
        "rule_trigger_has_any_budget_choice": "T\u00e9 un pressupost (qualsevol)",
        "rule_trigger_has_no_bill_choice": "No t\u00e9 factura",
        "rule_trigger_has_any_bill_choice": "T\u00e9 una factura (qualsevol)",
        "rule_trigger_has_no_tag_choice": "No t\u00e9 etiqueta(es)",
        "rule_trigger_has_any_tag_choice": "T\u00e9 una o m\u00e9s etiquetes (qualsevol)",
        "rule_trigger_any_notes_choice": "T\u00e9 notes (qualsevol)",
        "rule_trigger_no_notes_choice": "No t\u00e9 notes",
        "rule_trigger_notes_is_choice": "Les notes s\u00f3n..",
        "rule_trigger_notes_contains_choice": "Les notes contenen..",
        "rule_trigger_notes_starts_choice": "Les notes comencen per..",
        "rule_trigger_notes_ends_choice": "Les notes acaben amb..",
        "rule_trigger_bill_is_choice": "La factura \u00e9s..",
        "rule_trigger_external_id_is_choice": "L'ID externa \u00e9s..",
        "rule_trigger_internal_reference_is_choice": "La refer\u00e8ncia interna \u00e9s..",
        "rule_trigger_journal_id_choice": "L'ID del llibre de transaccions \u00e9s..",
        "rule_trigger_any_external_url_choice": "La transacci\u00f3 t\u00e9 URL extern",
        "rule_trigger_no_external_url_choice": "La transacci\u00f3 no t\u00e9 URL extern",
        "rule_trigger_id_choice": "L'ID de la transacci\u00f3 \u00e9s..",
        "rule_action_delete_transaction_choice": "ELIMINAR transacci\u00f3(!)",
        "rule_action_set_category_choice": "Establir categoria a ..",
        "rule_action_clear_category_choice": "Esborrar qualsevol categoria",
        "rule_action_set_budget_choice": "Establir pressupost a ..",
        "rule_action_clear_budget_choice": "Esborrar qualsevol pressupost",
        "rule_action_add_tag_choice": "Afegir etiqueta ..",
        "rule_action_remove_tag_choice": "Eliminar etiqueta ..",
        "rule_action_remove_all_tags_choice": "Eliminar totes les etiquetes",
        "rule_action_set_description_choice": "Estableix la descripci\u00f3 a ..",
        "rule_action_update_piggy_choice": "Afegir\/eliminar la quantitat de la transacci\u00f3 a\/de la guardiola ..",
        "rule_action_append_description_choice": "Afegir a la descripci\u00f3 ..",
        "rule_action_prepend_description_choice": "Preposar a la descripci\u00f3 ..",
        "rule_action_set_source_account_choice": "Establir el compte d'origen a ..",
        "rule_action_set_destination_account_choice": "Establir el compte de dest\u00ed a ..",
        "rule_action_append_notes_choice": "Afegir a les notes ..",
        "rule_action_prepend_notes_choice": "Preposar a les notes ..",
        "rule_action_clear_notes_choice": "Eliminar qualsevol nota",
        "rule_action_set_notes_choice": "Establir les notes a ..",
        "rule_action_link_to_bill_choice": "Enlla\u00e7ar a una factura ..",
        "rule_action_convert_deposit_choice": "Convertir la transacci\u00f3 a un dip\u00f2sit",
        "rule_action_convert_withdrawal_choice": "Convertir la transacci\u00f3 en una retirada",
        "rule_action_convert_transfer_choice": "Convertir la transacci\u00f3 en una transfer\u00e8ncia",
        "placeholder": "[Placeholder]",
        "recurrences": "Transaccions recurrents",
        "title_expenses": "Despeses",
        "title_withdrawal": "Despeses",
        "title_revenue": "Ingressos \/ salari",
        "pref_1D": "Un dia",
        "pref_1W": "Una setmana",
        "pref_1M": "Un mes",
        "pref_3M": "Tres mesos (trimestre)",
        "pref_6M": "Sis mesos",
        "pref_1Y": "Un any",
        "repeat_freq_yearly": "anualment",
        "repeat_freq_half-year": "cada mig any",
        "repeat_freq_quarterly": "trimestralment",
        "repeat_freq_monthly": "mensualment",
        "repeat_freq_weekly": "setmanalment",
        "single_split": "Divisi\u00f3",
        "asset_accounts": "Comptes d'actius",
        "expense_accounts": "Comptes de despeses",
        "liabilities_accounts": "Passius",
        "undefined_accounts": "Comptes",
        "name": "Nom",
        "revenue_accounts": "Comptes d'ingressos",
        "description": "Descripci\u00f3",
        "category": "Categoria",
        "title_deposit": "Ingressos \/ salari",
        "title_transfer": "Transfer\u00e8ncies",
        "title_transfers": "Transfer\u00e8ncies",
        "piggyBanks": "Guardioles",
        "rules": "Regles",
        "accounts": "Comptes",
        "categories": "Categories",
        "tags": "Etiquetes",
        "object_groups_page_title": "Grups",
        "reports": "Informes",
        "webhooks": "Webhooks",
        "currencies": "Monedes",
        "administration": "Administraci\u00f3",
        "profile": "Perfil",
        "source_account": "Compte d'origen",
        "destination_account": "Compte de dest\u00ed",
        "amount": "Import",
        "date": "Data",
        "time": "Hora",
        "preferences": "Configuraci\u00f3",
        "transactions": "Transaccions",
        "balance": "Saldo",
        "budgets": "Pressupostos",
        "subscriptions": "Subscripcions",
        "welcome_back": "Qu\u00e8 est\u00e0 passant?",
        "bills_to_pay": "Factures a pagar",
        "net_worth": "Valor net",
        "pref_last365": "L'any passat",
        "pref_last90": "\u00daltims 90 dies",
        "pref_last30": "\u00daltims 30 dies",
        "pref_last7": "\u00daltims 7 dies",
        "pref_YTD": "Any en curs",
        "pref_QTD": "Trimestre en curs",
        "pref_MTD": "Mes en curs"
    }
}
