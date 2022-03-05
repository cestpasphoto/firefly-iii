<?php

/**
 * validation.php
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

declare(strict_types=1);

return [
    'missing_where'                  => 'Dem Array fehlt die „where”-Klausel',
    'missing_update'                 => 'Dem Array fehlt die „update”-Klausel',
    'invalid_where_key'              => 'JSON enthält einen ungültigen Schlüssel für die „where”-Klausel',
    'invalid_update_key'             => 'JSON enthält einen ungültigen Schlüssel für die „update”-Klausel',
    'invalid_query_data'             => 'Das Feld %s:%s Ihrer Abfrage enthält ungültige Daten.',
    'invalid_query_account_type'     => 'Ihre Abfrage enthält unzulässigerweise Konten unterschiedlicher Typen.',
    'invalid_query_currency'         => 'Ihre Abfrage enthält unzulässigerweise Konten mit unterschiedlicher Währungseinstellung.',
    'iban'                           => 'Dies ist keine gültige IBAN.',
    'zero_or_more'                   => 'Der Wert darf nicht negativ sein.',
    'date_or_time'                   => 'Der Wert muss ein gültiges Datum oder Zeitangabe sein (ISO 8601).',
    'source_equals_destination'      => 'Das Quellkonto entspricht dem Zielkonto.',
    'unique_account_number_for_user' => 'Diese Kontonummer scheint bereits verwendet zu sein.',
    'unique_iban_for_user'           => 'Dieser IBAN scheint bereits verwendet zu werden.',
    'deleted_user'                   => 'Aufgrund von Sicherheitsbeschränkungen ist eine Registrierung mit dieser E-Mail-Adresse nicht zugelassen.',
    'rule_trigger_value'             => 'Dieser Wert ist für den ausgewählten Auslöser ungültig.',
    'rule_action_value'              => 'Dieser Wert ist für die gewählte Aktion ungültig.',
    'file_already_attached'          => 'Die hochgeladene Datei „:name” ist diesem Objekt bereits angehängt.',
    'file_attached'                  => 'Datei „:name” erfolgreich hochgeladen.',
    'must_exist'                     => 'Die ID in Feld :attribute existiert nicht in der Datenbank.',
    'all_accounts_equal'             => 'Alle Konten in diesem Feld müssen identisch sein.',
    'group_title_mandatory'          => 'Ein Gruppentitel ist zwingend erforderlich, wenn mehr als eine Buchung vorliegt.',
    'transaction_types_equal'        => 'Alle Aufteilungen müssen vom gleichen Typ sein.',
    'invalid_transaction_type'       => 'Ungültige Transaktionstyp',
    'invalid_selection'              => 'Ihre Auswahl ist ungültig.',
    'belongs_user'                   => 'Dieser Wert ist für dieses Feld ungültig.',
    'at_least_one_transaction'       => 'Sie brauchen mindestens eine Transaktion.',
    'at_least_one_repetition'        => 'Mindestens eine Wiederholung erforderlich.',
    'require_repeat_until'           => 'Erfordert entweder eine Anzahl von Wiederholungen oder ein Enddatum (repeat_until). Nicht beides.',
    'require_currency_info'          => 'Der Inhalt dieses Feldes ist ohne Währungsinformationen ungültig.',
    'not_transfer_account'           => 'Dieses Konto ist kein Konto, welches für Buchungen genutzt werden kann.',
    'require_currency_amount'        => 'Der Inhalt dieses Feldes ist ohne Fremdbetragsangaben ungültig.',
    'equal_description'              => 'Die Transaktionsbeschreibung darf nicht der globalen Beschreibung entsprechen.',
    'file_invalid_mime'              => 'Die Datei „:name” ist vom Typ „:mime”, welcher nicht zum Hochladen zugelassen ist.',
    'file_too_large'                 => 'Die Datei „:name” ist zu groß.',
    'belongs_to_user'                => 'Der Wert von :attribute ist unbekannt.',
    'accepted'                       => ':attribute muss akzeptiert werden.',
    'bic'                            => 'Dies ist kein gültiger BIC.',
    'at_least_one_trigger'           => 'Regel muss mindestens einen Auslöser enthalten',
    'at_least_one_active_trigger'    => 'Der Regel muss mindestens ein aktiver Auslöser zugeordnet sein.',
    'at_least_one_action'            => 'Regel muss mindestens eine Aktion enthalten',
    'at_least_one_active_action'     => 'Der Regel muss mindestens eine aktive Aktion zugeordnet sein.',
    'base64'                         => 'Dies sind keine gültigen base64-kodierten Daten.',
    'model_id_invalid'               => 'Die angegebene ID scheint für dieses Modell ungültig zu sein.',
    'less'                           => ':attribute muss kleiner als 10.000.000 sein',
    'active_url'                     => ':attribute ist keine gültige URL.',
    'after'                          => ':attribute muss ein Datum nach :date sein.',
    'date_after'                     => 'Das Startdatum muss vor dem Enddatum liegen.',
    'alpha'                          => ':attribute darf nur Buchstaben enthalten.',
    'alpha_dash'                     => ':attribute darf nur Buchstaben, Zahlen und Bindestrichen enthalten.',
    'alpha_num'                      => ':attribute darf nur Buchstaben und Zahlen enthalten.',
    'array'                          => ':attribute muss eine Liste sein.',
    'unique_for_user'                => 'Es gibt bereits einen Eintrag mit diesem :attribute.',
    'before'                         => ':attribute muss ein Datum vor dem :date sein.',
    'unique_object_for_user'         => 'Dieser Name wird bereits verwendet.',
    'unique_account_for_user'        => 'Dieser Kontoname wird bereits verwendet.',
    'between.numeric'                => ':attribute muss zwischen :min und :max liegen.',
    'between.file'                   => ':attribute muss zwischen :min und :max Kilobytes groß sein.',
    'between.string'                 => ':attribute muss zwischen :min und :max Zeichen lang sein.',
    'between.array'                  => ':attribute muss zwischen :min und :max Elemente enthalten.',
    'boolean'                        => ':attribute Feld muss wahr oder falsch sein.',
    'confirmed'                      => ':attribute Bestätigung stimmt nicht überein.',
    'date'                           => ':attribute ist kein gültiges Datum.',
    'date_format'                    => ':attribute entspricht nicht dem Format :format.',
    'different'                      => ':attribute und :other müssen sich unterscheiden.',
    'digits'                         => ':attribute muss :digits Stellen haben.',
    'digits_between'                 => ':attribute muss zwischen :min und :max Stellen haben.',
    'email'                          => ':attribute muss eine gültige E-Mail Adresse sein.',
    'filled'                         => ':attribute Feld muss ausgefüllt sein.',
    'exists'                         => ':attribute ist ungültig.',
    'image'                          => ':attribute muss ein Bild sein.',
    'in'                             => ':attribute ist ungültig.',
    'integer'                        => ':attribute muss eine Ganzzahl sein.',
    'ip'                             => ':attribute muss eine gültige IP-Adresse sein.',
    'json'                           => ':attribute muss ein gültiger JSON-String sein.',
    'max.numeric'                    => ':attribute darf nicht größer als :max sein.',
    'max.file'                       => ':attribute darf nicht größer als :max Kilobytes sein.',
    'max.string'                     => ':attribute darf nicht mehr als :max Zeichen enthalten.',
    'max.array'                      => ':attribute darf nicht mehr als :max Elemente enthalten.',
    'mimes'                          => ':attribute muss eine Datei des Typ :values sein.',
    'min.numeric'                    => ':attribute muss mindestens :min sein.',
    'lte.numeric'                    => 'Das Attribut :attribute muss kleiner oder gleich :value sein.',
    'min.file'                       => ':attribute muss mindestens :min Kilobytes groß sein.',
    'min.string'                     => ':attribute muss mindestens :min Zeichen enthalten.',
    'min.array'                      => ':attribute muss mindestens :min Elemente enthalten.',
    'not_in'                         => ':attribute ist ungültig.',
    'numeric'                        => ':attribute muss eine Zahl sein.',
    'numeric_native'                 => 'Die native Betrag muss eine Zahl sein.',
    'numeric_destination'            => 'Der Zielbeitrag muss eine Zahl sein.',
    'numeric_source'                 => 'Der Quellbetrag muss eine Zahl sein.',
    'regex'                          => 'Das Format von :attribute ist ungültig.',
    'required'                       => ':attribute Feld muss ausgefüllt sein.',
    'required_if'                    => ':attribute Feld ist notwendig, wenn :other :value entspricht.',
    'required_unless'                => ':attribute Feld ist notwendig, außer :other ist in :values enthalten.',
    'required_with'                  => ':attribute Feld ist notwendig falls :values vorhanden sind.',
    'required_with_all'              => ':attribute Feld ist notwendig falls :values vorhanden sind.',
    'required_without'               => ':attribute Feld ist notwendig, falls :values nicht vorhanden ist.',
    'required_without_all'           => ':attribute Feld ist notwendig, falls kein :values vorhanden ist.',
    'same'                           => ':attribute und :other müssen übereinstimmen.',
    'size.numeric'                   => ':attribute muss :size sein.',
    'amount_min_over_max'            => 'Der Mindestbetrag darf nicht größer als der Höchstbetrag sein.',
    'size.file'                      => ':attribute muss :size Kilobytes groß sein.',
    'size.string'                    => ':attribute muss :size Zeichen enthalten.',
    'size.array'                     => ':attribute muss :size Elemente enthalten.',
    'unique'                         => ':attribute ist bereits vergeben.',
    'string'                         => ':attribute muss eine Zeichenfolge sein.',
    'url'                            => ':attribute Format ist ungültig.',
    'timezone'                       => ':attribute muss in einem gültigen Bereich liegen.',
    '2fa_code'                       => ':attribute Feld ist ungültig.',
    'dimensions'                     => 'Das :attribute hat eine ungültige Auflösung.',
    'distinct'                       => 'Der Wert von :attribute existiert bereits.',
    'file'                           => 'Das :attribute muss eine Datei sein.',
    'in_array'                       => ':attribute existiert nicht in :other.',
    'present'                        => 'Das :attribute Feld muss vorhanden sein.',
    'amount_zero'                    => 'Der Gesamtbetrag darf nicht Null sein.',
    'current_target_amount'          => 'Der aktuelle Betrag muss niedriger als der Zielbetrag sein.',
    'unique_piggy_bank_for_user'     => 'Der Name des Sparschweins muss eindeutig sein.',
    'unique_object_group'            => 'Der Gruppenname muss eindeutig sein',
    'starts_with'                    => 'Der Wert muss mit :values beginnen.',
    'unique_webhook'                 => 'Sie haben bereits einen Webhook mit diesen Werten.',
    'unique_existing_webhook'        => 'Sie haben bereits einen anderen Webhook mit diesen Werten.',
    'same_account_type'              => 'Beide Konten müssen vom selben Kontotyp sein',
    'same_account_currency'          => 'Beiden Konten muss die gleiche Währung zugeordnet sein',

    'secure_password'             => 'Dies ist ein unsicheres Passwort. Bitte versuchen Sie es erneut. Weitere Informationen finden Sie unter https://github.com/firefly-iii/help/wiki/Secure-password',
    'valid_recurrence_rep_type'   => 'Ungültige Wiederholungsart für Daueraufträge.',
    'valid_recurrence_rep_moment' => 'Ungültiges Wiederholungsmoment für diese Art der Wiederholung.',
    'invalid_account_info'        => 'Ungültige Kontodaten.',
    'attributes'                  => [
        'email'                   => 'E-Mail Adresse',
        'description'             => 'Beschreibung',
        'amount'                  => 'Betrag',
        'transactions.*.amount'   => 'Buchungsbetrag',
        'name'                    => 'Name',
        'piggy_bank_id'           => 'Sparschwein ID',
        'targetamount'            => 'Zielbetrag',
        'opening_balance_date'    => 'Datum des Eröffnungskontostands',
        'opening_balance'         => 'Eröffnungskontostand',
        'match'                   => 'Übereinstimmung',
        'amount_min'              => 'Mindestbetrag',
        'amount_max'              => 'Höchstbetrag',
        'title'                   => 'Bezeichnung',
        'tag'                     => 'Schlagwort',
        'transaction_description' => 'Transaktionsbeschreibung',
        'rule-action-value.1'     => 'Regelaktionswert #1',
        'rule-action-value.2'     => 'Regelaktionswert #2',
        'rule-action-value.3'     => 'Regelaktionswert #3',
        'rule-action-value.4'     => 'Regelaktionswert #4',
        'rule-action-value.5'     => 'Regelaktionswert #5',
        'rule-action.1'           => 'Aktionsregel #1',
        'rule-action.2'           => 'Aktionsregel #2',
        'rule-action.3'           => 'Aktionsregel #3',
        'rule-action.4'           => 'Aktionsregel #4',
        'rule-action.5'           => 'Aktionsregel #5',
        'rule-trigger-value.1'    => 'Regelauslösewert #1',
        'rule-trigger-value.2'    => 'Regelauslösewert #2',
        'rule-trigger-value.3'    => 'Regelauslösewert #3',
        'rule-trigger-value.4'    => 'Regelauslösewert #4',
        'rule-trigger-value.5'    => 'Regelauslösewert #5',
        'rule-trigger.1'          => 'Regel #1 auslösen',
        'rule-trigger.2'          => 'Regel #2 auslösen',
        'rule-trigger.3'          => 'Regel #3 auslösen',
        'rule-trigger.4'          => 'Regel 4 auslösen',
        'rule-trigger.5'          => 'Regel #5 auslösen',
    ],

    // validation of accounts:
    'withdrawal_source_need_data' => 'Um fortzufahren, benötigen Sie eine gültige Quellkontenkennung und/oder einen gültigen Quellkontonamen.',
    'withdrawal_source_bad_data'  => 'Bei der Suche nach der Kennung „:id” oder dem Namen „:name” konnte kein gültiges Quellkonto gefunden werden.',
    'withdrawal_dest_need_data'   => 'Um fortzufahren, benötigen Sie eine gültige Zielkontenkennung und/oder einen gültigen Zielkontonamen.',
    'withdrawal_dest_bad_data'    => 'Bei der Suche nach Kennung „:id” oder Name „:name” konnte kein gültiges Zielkonto gefunden werden.',

    'generic_source_bad_data' => 'Bei der Suche nach der Kennung „:id” oder dem Namen „:name” konnte kein gültiges Quellkonto gefunden werden.',

    'deposit_source_need_data' => 'Um fortzufahren, benötigen Sie eine gültige Quellkontenkennung und/oder einen gültigen Quellkontonamen.',
    'deposit_source_bad_data'  => 'Bei der Suche nach der Kennung „:id” oder dem Namen „:name” konnte kein gültiges Quellkonto gefunden werden.',
    'deposit_dest_need_data'   => 'Um fortzufahren, benötigen Sie eine gültige Zielkontenkennung und/oder einen gültigen Zielkontonamen.',
    'deposit_dest_bad_data'    => 'Bei der Suche nach der Kennung „:id” oder dem Namen „:name” konnte kein gültiges Zielkonto gefunden werden.',
    'deposit_dest_wrong_type'  => 'Das übermittelte Zielkonto entspricht nicht dem geforderten Typ.',

    'transfer_source_need_data' => 'Um fortzufahren, benötigen Sie eine gültige Quellkontenkennung und/oder einen gültigen Quellkontonamen.',
    'transfer_source_bad_data'  => 'Bei der Suche nach der Kennung „:id” oder dem Namen „:name” konnte kein gültiges Quellkonto gefunden werden.',
    'transfer_dest_need_data'   => 'Um fortzufahren, benötigen Sie eine gültige Zielkontenkennung und/oder einen gültigen Zielkontonamen.',
    'transfer_dest_bad_data'    => 'Bei der Suche nach der Kennung „:id” oder dem Namen „:name” konnte kein gültiges Zielkonto gefunden werden.',
    'need_id_in_edit'           => 'Jeder Aufteilungen muss eine transaction_journal_id (entweder gültige ID oder 0) aufweisen.',

    'ob_source_need_data' => 'Sie benötigen eine gültige Quellkontonummer und/oder einen gültigen Quellkontonamen, um fortzufahren.',
    'lc_source_need_data' => 'Zum Fortfahren wird eine gültige Quellkonto-ID benötigt.',
    'ob_dest_need_data'   => 'Sie benötigen eine gültige Zielkontennummer und/oder einen gültigen Zielkontonamen, um fortzufahren.',
    'ob_dest_bad_data'    => 'Bei der Suche nach der ID ":id" oder dem Namen ":name" konnte kein gültiges Zielkonto gefunden werden.',

    'generic_invalid_source'      => 'Sie können dieses Konto nicht als Quellkonto verwenden.',
    'generic_invalid_destination' => 'Sie können dieses Konto nicht als Zielkonto verwenden.',

    'generic_no_source'      => 'Sie müssen Informationen zum Quellkonto angeben.',
    'generic_no_destination' => 'Sie müssen Informationen zum Zielkonto angeben.',

    'gte.numeric' => ':attribute muss größer oder gleich :value sein.',
    'gt.numeric'  => ':attribute muss größer als :value sein.',
    'gte.file'    => ':attribute muss größer oder gleich :value Kilobytes sein.',
    'gte.string'  => ':attribute muss mindestens :value Zeichen enthalten.',
    'gte.array'   => ':attribute muss mindestens :value Elemente enthalten.',

    'amount_required_for_auto_budget' => 'Betrag ist erforderlich.',
    'auto_budget_amount_positive'     => 'Der Betrag muss größer als Null sein.',
    'auto_budget_period_mandatory'    => 'Der Zeitraum für das automatische Budget ist ein Pflichtfeld.',
];
