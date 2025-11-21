---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: Sie können die How-tos-Seite der DHTMLX JavaScript Kanban-Bibliothek in der Dokumentation erkunden. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# How-tos

Diese Seite bietet eine umfassende Referenz zur Initialisierung, Konfiguration, Anpassung und Arbeit mit JavaScript Kanban.

## Grundprinzipien

In diesem Abschnitt erfahren Sie die grundlegenden Prinzipien der Arbeit mit Kanban.

| Thema                                         | Beschreibung                                              |
| --------------------------------------------- | ---------------------------------------------------------|
| [Initialisierung](guides/initialization.md)                  | Lernen Sie, wie Sie Kanban initialisieren ([Beispiel](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [Konfiguration](guides/configuration.md)                   | Lernen Sie, wie Sie Kanban konfigurieren                  |
| [Anpassung](guides/customization.md)                   | Lernen Sie, wie Sie Kanban anpassen                       |
| [Stilierung](guides/stylization.md)                     | Lernen Sie, wie Sie Kanban gestalten                      |
| [Lokalisierung](guides/localization.md)                    | Lernen Sie, wie Sie Kanban lokalisieren ([Beispiel](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API-Referenz

In diesem Abschnitt finden Sie die entsprechenden Referenzen zur Kanban API.

| Thema                                                 | Beschreibung                                              |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban events](api/overview/events_overview.md)      | Lernen Sie, wie Sie mit Kanban-Events arbeiten           |
| [Kanban methods](api/overview/methods_overview.md)    | Lernen Sie, wie Sie mit Kanban-Methoden arbeiten         |
| [Kanban properties](api/overview/properties_overview.md)| Lernen Sie, wie Sie mit Kanban-Eigenschaften arbeiten  |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)| Lernen Sie, wie Sie mit Event Bus-Methoden arbeiten |
| [RestDataProvider methods](api/overview/internal_rest_overview.md)| Lernen Sie, wie Sie mit RestDataProvider-Methoden arbeiten|
| [State methods](api/overview/internal_state_overview.md)| Lernen Sie, wie Sie mit State-Methoden arbeiten        |
| [Toolbar methods](api/overview/toolbar_methods_overview.md)| Lernen Sie, wie Sie mit Toolbar-Methoden arbeiten     |
| [Toolbar properties](api/overview/toolbar_properties_overview.md)| Lernen Sie, wie Sie mit Toolbar-Eigenschaften arbeiten|

## Arbeiten mit Karten

In diesen Abschnitten erfahren Sie, wie Sie Operationen mit Karten durchführen, mit Kartendaten arbeiten und Karten konfigurieren.

### Operationen mit Karten durchführen

| Thema                                                        | Beschreibung                                 |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](api/methods/js_kanban_addcard_method.md)  | Lernen Sie, wie Sie neue Karten hinzufügen ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](api/methods/js_kanban_deletecard_method.md) | Lernen Sie, wie Sie Karten löschen ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](api/methods/js_kanban_movecard_method.md)     | Lernen Sie, wie Sie Karten verschieben ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban))   |
| [Scrolling to the desired cards](api/methods/js_kanban_scroll_method.md)| Lernen Sie, wie Sie Kanban zur gewünschten Karte scrollen|
| [Searching for cards](api/methods/js_kanban_setsearch_method.md)| Lernen Sie, wie Sie nach Karten suchen            |
| [Selecting cards](api/methods/js_kanban_selectcard_method.md)| Lernen Sie, wie Sie Karten auswählen                   |
| [Sorting cards](api/methods/js_kanban_setsort_method.md)     | Lernen Sie, wie Sie Karten sortieren                     |
| [Unselecting cards](api/methods/js_kanban_unselectcard_method.md)| Lernen Sie, wie Sie Karten abwählen             |
| [Adding links between cards](api/config/js_kanban_links_config.md)| Lernen Sie, wie Sie Verknüpfungen zwischen Karten hinzufügen ([Beispiel](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### Arbeiten mit Kartendaten

| Thema                                                        | Beschreibung                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Getting card data](api/methods/js_kanban_getcard_method.md) | Lernen Sie, wie Sie Kartendaten abrufen              |
| [Getting cards state](api/internal/js_kanban_getstate_method.md) | Lernen Sie, wie Sie den Kartenstatus abrufen      |
| [Getting cards reactive state](api/internal/js_kanban_getreactivestate_method.md) | Lernen Sie, wie Sie den reaktiven Kartenstatus abrufen|
| [Loading card data](api/config/js_kanban_cards_config.md)    | Lernen Sie, wie Sie die initialen Kartendaten laden             |
| [Parsing card data](api/methods/js_kanban_parse_method.md)   | Lernen Sie, wie Sie Kartendaten parsen                    |
| [Serializing card data](api/methods/js_kanban_serialize_method.md)| Lernen Sie, wie Sie Kartendaten serialisieren ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](api/methods/js_kanban_updatecard_method.md)| Lernen Sie, wie Sie Kartendaten aktualisieren         |

### Karten konfigurieren

| Thema                                                        | Beschreibung                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Adding new cards](api/config/js_kanban_readonly_config.md)  | Lernen Sie, wie Sie das Hinzufügen neuer Karten aktivieren/deaktivieren|
| [Binding cards into columns](api/config/js_kanban_columnkey_config.md) | Lernen Sie, wie Sie Karten an Spalten binden      |
| [Binding cards into rows](api/config/js_kanban_rowkey_config.md) | Lernen Sie, wie Sie Karten an Zeilen binden            |
| [Configuring a card appearance](api/config/js_kanban_cardshape_config.md)| Lernen Sie, wie Sie das Erscheinungsbild einer Karte konfigurieren|
| [Configuring a cards menu](api/config/js_kanban_cardshape_config.md)| Lernen Sie, wie Sie ein Kontextmenü für Karten konfigurieren ([Beispiel](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](api/config/js_kanban_cardtemplate_config.md)| Lernen Sie, wie Sie das Erscheinungsbild einer Karte mit Vorlagen anpassen ([Beispiel](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](api/config/js_kanban_readonly_config.md)    | Lernen Sie, wie Sie das Ziehen und Ablegen von Karten aktivieren/deaktivieren|
| [Editing cards](api/config/js_kanban_readonly_config.md)     | Lernen Sie, wie Sie das Bearbeiten von Karten aktivieren/deaktivieren|
| [Lazy rendering](api/config/js_kanban_rendertype_config.md)| Lernen Sie, wie Sie das **Lazy Rendering** für viele Karten aktivieren/deaktivieren ([Beispiel](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](api/config/js_kanban_columns_config.md)     | Lernen Sie, wie Sie Karten für Spalten und Swimlanes begrenzen (**WIP-Validierung**) ([Beispiel](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](api/config/js_kanban_readonly_config.md)   | Lernen Sie, wie Sie das Auswählen von Karten aktivieren/deaktivieren|
| [Setting a fix height of cards](api/config/js_kanban_cardheight_config.md)| Lernen Sie, wie Sie eine feste Höhe für Karten einstellen|
| [Updating card settings](api/methods/js_kanban_setconfig_method.md)| Lernen Sie, wie Sie Karteneinstellungen aktualisieren|

## Arbeiten mit einem Karteneditor

In diesem Abschnitt erfahren Sie, wie Sie mit einem Karteneditor arbeiten.

| Thema                                                        | Beschreibung                                            |
| ------------------------------------------------------------ | -------------------------------------------------------|
| [Autosaving mode](api/config/js_kanban_editorautosave_config.md)| Lernen Sie, wie Sie den Auto-Speicher-Modus für den Editor aktivieren/deaktivieren|
| [Configuring editor fields](guides/configuration.md#editor)| Lernen Sie, wie Sie Editorfelder konfigurieren             |
| [Configuring the editor](guides/configuration.md#den-editor-konfigurieren)| Lernen Sie, wie Sie den Editor konfigurieren         |
| [Updating editor settings](api/methods/js_kanban_setconfig_method.md)| Lernen Sie, wie Sie Editoreinstellungen aktualisieren      |

## Arbeiten mit Spalten

In diesen Abschnitten erfahren Sie, wie Sie Operationen mit Spalten durchführen und mit Spaltendaten arbeiten.

### Operationen mit Spalten durchführen

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new columns](api/methods/js_kanban_addcolumn_method.md) | Lernen Sie, wie Sie neue Spalten hinzufügen ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](api/config/js_kanban_columnshape_config.md)| Lernen Sie, wie Sie ein Kontextmenü für Spalten konfigurieren ([Beispiel](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](api/methods/js_kanban_deletecolumn_method.md)| Lernen Sie, wie Sie Spalten löschen                         |
| [Moving columns](api/methods/js_kanban_movecolumn_method.md)    | Lernen Sie, wie Sie Spalten verschieben                     |
| [Scrolling to the desired columns](api/methods/js_kanban_scroll_method.md)| Lernen Sie, wie Sie Kanban zur gewünschten Spalte scrollen |
| [Separate scrolling for columns](api/config/js_kanban_scrolltype_config.md)| Lernen Sie, wie Sie ein separates Scrollen für jede Spalte einstellen ([Beispiel](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### Arbeiten mit Spaltendaten

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column](api/methods/js_kanban_getareacards_method.md)| Lernen Sie, wie Sie die Kartendaten einer Spalte abrufen|
| [Getting columns state](api/internal/js_kanban_getstate_method.md) | Lernen Sie, wie Sie den Spaltenstatus abrufen      |
| [Getting columns reactive state](api/internal/js_kanban_getreactivestate_method.md) | Lernen Sie, wie Sie den reaktiven Spaltenstatus abrufen|
| [Loading column data](api/config/js_kanban_columns_config.md)    | Lernen Sie, wie Sie die initialen Spaltendaten laden          |
| [Parsing column data](api/methods/js_kanban_parse_method.md)     | Lernen Sie, wie Sie Spaltendaten parsen                 |
| [Serializing column data](api/methods/js_kanban_serialize_method.md)| Lernen Sie, wie Sie Spaltendaten serialisieren      |
| [Updating column data](api/methods/js_kanban_updatecolumn_method.md)| Lernen Sie, wie Sie Spaltendaten aktualisieren         |

## Arbeiten mit Zeilen (Swimlanes)

In diesen Abschnitten erfahren Sie, wie Sie Operationen mit Zeilen durchführen und mit Zeilendaten arbeiten.

### Operationen mit Zeilen (Swimlanes) durchführen

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new rows](api/methods/js_kanban_addrow_method.md)       | Lernen Sie, wie Sie neue Zeilen (Swimlanes) hinzufügen         |
| [Configuring a rows menu](api/config/js_kanban_rowshape_config.md)| Lernen Sie, wie Sie ein Kontextmenü für Zeilen (Swimlanes) konfigurieren ([Beispiel](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](api/methods/js_kanban_deleterow_method.md)      | Lernen Sie, wie Sie Zeilen (Swimlanes) löschen                  |
| [Moving rows](api/methods/js_kanban_moverow_method.md)          | Lernen Sie, wie Sie Zeilen (Swimlanes) verschieben              |
| [Scrolling to the desired row](api/methods/js_kanban_scroll_method.md)| Lernen Sie, wie Sie Kanban zur gewünschten Zeile (Swimlane) scrollen|

### Arbeiten mit Zeilen- (Swimlane-) Daten

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column and row](api/methods/js_kanban_getareacards_method.md)| Lernen Sie, wie Sie die Kartendaten einer Spalte und Zeile abrufen|
| [Getting rows state](api/internal/js_kanban_getstate_method.md) | Lernen Sie, wie Sie den Zeilenstatus abrufen               |
| [Getting rows reactive state](api/internal/js_kanban_getreactivestate_method.md) | Lernen Sie, wie Sie den reaktiven Zeilenstatus abrufen|
| [Loading row data](api/config/js_kanban_rows_config.md)         | Lernen Sie, wie Sie die initialen Zeilendaten laden              |
| [Parsing row data](api/methods/js_kanban_parse_method.md)       | Lernen Sie, wie Sie Zeilendaten parsen                     |
| [Serializing row data](api/methods/js_kanban_serialize_method.md)| Lernen Sie, wie Sie Zeilendaten serialisieren                |
| [Updating row data](api/methods/js_kanban_updaterow_method.md)  | Lernen Sie, wie Sie Zeilendaten aktualisieren                |

## Arbeiten mit Events

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Executing events](api/internal/js_kanban_exec_method.md)   | Lernen Sie, wie Sie interne Events ausführen        |
| [Intercepting events](api/internal/js_kanban_intercept_method.md)| Lernen Sie, wie Sie interne Events abfangen    |
| [List of inner events](api/overview/events_overview.md)     | Sehen Sie die Liste der Kanban-internen Events      |
| [Reordering events](api/internal/js_kanban_setnext_method.md)| Lernen Sie, wie Sie interne Events in die Event Bus-Reihenfolge einfügen|
| [Subscribing on events](api/internal/js_kanban_on_method.md)| Lernen Sie, wie Sie sich auf interne Events abonnieren|

## Arbeiten mit der Kanban REST API

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Loading server data for cards](api/provider/rest_methods/js_kanban_getcards_method.md)| Lernen Sie, wie Sie Serverdaten für Karten laden|
| [Loading server data for columns](api/provider/rest_methods/js_kanban_getcolumns_method.md)| Lernen Sie, wie Sie Serverdaten für Spalten laden|
| [Loading server data for rows](api/provider/rest_methods/js_kanban_getrows_method.md)| Lernen Sie, wie Sie Serverdaten für Zeilen laden|
| [Working with server](guides/working_with_server.md)        | Lernen Sie, wie Sie mit dem Server über die REST API arbeiten ([Beispiel](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## Arbeiten mit Kanban-Status

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Getting StateStore and DataStore](api/internal/js_kanban_getstores_method.md)| Lernen Sie, wie Sie StateStore- und DataStore-Objekte erhalten|
| [Getting StateStore properties](api/internal/js_kanban_getstate_method.md)| Lernen Sie, wie Sie ein Objekt der StateStore-Eigenschaften erhalten|
| [Getting StateStore reactive properties](api/internal/js_kanban_getreactivestate_method.md)| Lernen Sie, wie Sie ein Objekt der reaktiven StateStore-Eigenschaften erhalten|

## Arbeiten mit der Toolbar

| Thema                                                       | Beschreibung                                           |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Configuring a searchbar on Toolbar](api/config/toolbar_items_config.md) | Lernen Sie, wie Sie eine Suchleiste in der Toolbar konfigurieren ([Beispiel](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](api/config/toolbar_items_config.md) | Lernen Sie, wie Sie eine Sortiersteuerung in der Toolbar konfigurieren ([Beispiel](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](api/config/toolbar_items_config.md)| Lernen Sie, wie Sie die Toolbar-Steuerelemente konfigurieren, anpassen und anordnen ([Beispiel](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Including Kanban API in Toolbar](api/config/toolbar_api_config.md) | Lernen Sie, wie Sie die Kanban API in die Toolbar einbinden und verwenden|
| [Localizing Toolbar](api/config/toolbar_locale_config.md) | Lernen Sie, wie Sie die Toolbar lokalisieren|

## Arbeiten mit TypeScript

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScript](guides/typescript_support.md)     | Lernen Sie, wie Sie mit TypeScript arbeiten         |

## Noch Fragen?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Fragen Sie die Community</a> </button>

:::info
Sie können Ihre Fragen auch unten in den Kommentaren hinterlassen!
:::