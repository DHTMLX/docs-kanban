---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: Sie können die How-tos-Seite der DHTMLX JavaScript Kanban-Bibliothek in der Dokumentation erkunden. Stöbern Sie in Entwicklerhandbüchern und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# How-tos

Diese Seite ist eine vollständige Referenz zum Einstieg, zur Einrichtung, Anpassung und Verwaltung von JavaScript Kanban.

## Grundprinzipien

Hier sind die wichtigsten Punkte, die Sie beim Arbeiten mit Kanban wissen sollten.

| Thema                                         | Beschreibung                                              |
| --------------------------------------------- | ---------------------------------------------------------|
| [Initialisierung](/guides/initialization)                  | Einrichtung von Kanban ([Beispiel](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [Konfiguration](/guides/configuration)                   | Möglichkeiten zur Konfiguration von Kanban               |
| [Anpassung](/guides/customization)                   | Schritte zur Anpassung von Kanban                        |
| [Stilisierung](/guides/stylization)                     | Optionen zur Gestaltung von Kanban                       |
| [Lokalisierung](/guides/localization)                    | Kanban lokalisieren ([Beispiel](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API-Referenz

Hier finden Sie die Kanban API-Referenzen, die Sie benötigen könnten.

| Thema                                                 | Beschreibung                                              |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban-Ereignisse](/api/overview/events_overview.md)      | Arbeiten mit Kanban-Ereignissen                     |
| [Kanban-Methoden](/api/overview/methods_overview.md)    | Verwendung von Kanban-Methoden                    |
| [Kanban-Eigenschaften](/api/overview/properties_overview.md)| Zugriff auf Kanban-Eigenschaften               |
| [Event Bus-Methoden](/api/overview/internal_eventbus_overview.md)| Event Bus-Methoden        |
| [RestDataProvider-Methoden](/api/overview/internal_rest_overview.md)| RestDataProvider-Methoden|
| [State-Methoden](/api/overview/internal_state_overview.md)| State-Methoden                   |
| [Toolbar-Methoden](/api/overview/toolbar_methods_overview.md)| Toolbar-Methoden              |
| [Toolbar-Eigenschaften](/api/overview/toolbar_properties_overview.md)| Toolbar-Eigenschaften     |

## Arbeiten mit Karten

Diese Abschnitte behandeln das Verwalten von Karten, das Arbeiten mit Kartendaten und die individuelle Anpassung von Karten.

### Operationen mit Karten durchführen

| Thema                                                        | Beschreibung                                 |
| ------------------------------------------------------------ | --------------------------------------------|
| [Neue Karten hinzufügen](/api/methods/js_kanban_addcard_method.md)  | Neue Karten hinzufügen ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Karten löschen](/api/methods/js_kanban_deletecard_method.md) | Karten löschen ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Karten verschieben](/api/methods/js_kanban_movecard_method.md)     | Karten verschieben ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban))   |
| [Zur gewünschten Karte scrollen](/api/methods/js_kanban_scroll_method.md)| Kanban zu einer bestimmten Karte scrollen|
| [Karten suchen](/api/methods/js_kanban_setsearch_method.md)| Karten suchen            |
| [Karten auswählen](/api/methods/js_kanban_selectcard_method.md)| Karten auswählen                   |
| [Karten sortieren](/api/methods/js_kanban_setsort_method.md)     | Karten sortieren                     |
| [Auswahl von Karten aufheben](/api/methods/js_kanban_unselectcard_method.md)| Auswahl von Karten aufheben             |
| [Verknüpfungen zwischen Karten hinzufügen](/api/config/js_kanban_links_config.md)| Verknüpfungen zwischen Karten herstellen ([Beispiel](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### Arbeiten mit Kartendaten

| Thema                                                        | Beschreibung                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Kartendaten abrufen](/api/methods/js_kanban_getcard_method.md) | Kartendaten abrufen                      |
| [Kartenstatus abrufen](/api/internal/js_kanban_getstate_method.md) | Kartenstatus abrufen                 |
| [Reaktiven Kartenstatus abrufen](/api/internal/js_kanban_getreactivestate_method.md) | Reaktiven Kartenstatus abrufen |
| [Kartendaten laden](/api/config/js_kanban_cards_config.md)    | Initiale Kartendaten laden             |
| [Kartendaten parsen](/api/methods/js_kanban_parse_method.md)   | Kartendaten parsen                    |
| [Kartendaten serialisieren](/api/methods/js_kanban_serialize_method.md)| Kartendaten serialisieren ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Kartendaten aktualisieren](/api/methods/js_kanban_updatecard_method.md)| Kartendaten aktualisieren                |

### Karten konfigurieren

| Thema                                                        | Beschreibung                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Neue Karten hinzufügen](/api/config/js_kanban_readonly_config.md)  | Hinzufügen neuer Karten aktivieren oder deaktivieren|
| [Karten an Spalten binden](/api/config/js_kanban_columnkey_config.md) | Karten mit Spalten verknüpfen      |
| [Karten an Zeilen binden](/api/config/js_kanban_rowkey_config.md) | Karten mit Zeilen verknüpfen               |
| [Darstellung einer Karte konfigurieren](/api/config/js_kanban_cardshape_config.md)| Darstellung einer Karte einstellen|
| [Kontextmenü für Karten konfigurieren](/api/config/js_kanban_cardshape_config.md)| Kontextmenü für Karten einrichten  ([Beispiel](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Kartendarstellung anpassen](/api/config/js_kanban_cardtemplate_config.md)| Vorlagen zur Anpassung der Kartendarstellung verwenden ([Beispiel](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Drag & Drop für Karten](/api/config/js_kanban_readonly_config.md)    | Drag & Drop für Karten aktivieren oder deaktivieren|
| [Karten bearbeiten](/api/config/js_kanban_readonly_config.md)     | Kartenbearbeitung aktivieren oder deaktivieren|
| [Lazy Rendering](/api/config/js_kanban_rendertype_config.md)| **Lazy Rendering** für viele Karten aktivieren oder deaktivieren ([Beispiel](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Kartenlimit festlegen](/api/config/js_kanban_columns_config.md)     | Limits für Spalten und Swimlanes setzen (**WIP-Validierung**) ([Beispiel](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Kartenauswahl](/api/config/js_kanban_readonly_config.md)   | Kartenauswahl aktivieren oder deaktivieren|
| [Feste Kartenhöhe einstellen](/api/config/js_kanban_cardheight_config.md)| Feste Höhe für Karten einstellen   |
| [Karteneinstellungen aktualisieren](/api/methods/js_kanban_setconfig_method.md)| Karteneinstellungen aktualisieren               |

## Arbeiten mit dem Karten-Editor

Hier finden Sie Details zur Verwendung des Karten-Editors.

| Thema                                                        | Beschreibung                                            |
| ------------------------------------------------------------ | -------------------------------------------------------|
| [Autosave-Modus](/api/config/js_kanban_editorautosave_config.md)| Editor-Autosave aktivieren oder deaktivieren |
| [Editor-Felder konfigurieren](/guides/configuration/#editor)| Editor-Felder einrichten         |
| [Editor konfigurieren](/guides/configuration/#konfiguration-des-editors)| Editor einrichten |
| [Editoreinstellungen aktualisieren](/api/methods/js_kanban_setconfig_method.md)| Editoreinstellungen aktualisieren            |

## Arbeiten mit Spalten

So verwalten Sie Spalten und arbeiten mit Spaltendaten.

### Operationen mit Spalten durchführen

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Neue Spalten hinzufügen](/api/methods/js_kanban_addcolumn_method.md) | Neue Spalten hinzufügen ([Beispiel](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Kontextmenü für Spalten konfigurieren](/api/config/js_kanban_columnshape_config.md)| Kontextmenü für Spalten einrichten ([Beispiel](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Spalten löschen](/api/methods/js_kanban_deletecolumn_method.md)| Spalten löschen                         |
| [Spalten verschieben](/api/methods/js_kanban_movecolumn_method.md)    | Spalten verschieben                           |
| [Zur gewünschten Spalte scrollen](/api/methods/js_kanban_scroll_method.md)| Kanban zu einer bestimmten Spalte scrollen |
| [Separates Scrollen für Spalten](/api/config/js_kanban_scrolltype_config.md)| Einzelnes Scrollen für jede Spalte aktivieren ([Beispiel](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### Arbeiten mit Spaltendaten

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Kartendaten einer Spalte abrufen](/api/methods/js_kanban_getareacards_method.md)| Kartendaten einer Spalte abrufen |
| [Spaltenstatus abrufen](/api/internal/js_kanban_getstate_method.md) | Spaltenstatus abrufen               |
| [Reaktiven Spaltenstatus abrufen](/api/internal/js_kanban_getreactivestate_method.md) | Reaktiven Spaltenstatus abrufen |
| [Spaltendaten laden](/api/config/js_kanban_columns_config.md)    | Initiale Spaltendaten laden          |
| [Spaltendaten parsen](/api/methods/js_kanban_parse_method.md)     | Spaltendaten parsen                 |
| [Spaltendaten serialisieren](/api/methods/js_kanban_serialize_method.md)| Spaltendaten serialisieren          |
| [Spaltendaten aktualisieren](/api/methods/js_kanban_updatecolumn_method.md)| Spaltendaten aktualisieren             |

## Arbeiten mit Zeilen (Swimlanes)

Diese Abschnitte zeigen, wie Sie Zeilen (Swimlanes) verwalten und deren Daten bearbeiten.

### Operationen mit Zeilen (Swimlanes) durchführen

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Neue Zeilen hinzufügen](/api/methods/js_kanban_addrow_method.md)       | Neue Zeilen (Swimlanes) hinzufügen               |
| [Kontextmenü für Zeilen konfigurieren](/api/config/js_kanban_rowshape_config.md)| Kontextmenü für Zeilen (Swimlanes) einrichten ([Beispiel](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Zeilen löschen](/api/methods/js_kanban_deleterow_method.md)      | Zeilen (Swimlanes) löschen                |
| [Zeilen verschieben](/api/methods/js_kanban_moverow_method.md)          | Zeilen (Swimlanes) verschieben                  |
| [Zur gewünschten Zeile scrollen](/api/methods/js_kanban_scroll_method.md)| Kanban zu einer bestimmten Zeile (Swimlane) scrollen|

### Arbeiten mit Zeilendaten (Swimlane-Daten)

| Thema                                                           | Beschreibung                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Kartendaten einer Spalte und Zeile abrufen](/api/methods/js_kanban_getareacards_method.md)| Kartendaten für eine Spalte und Zeile abrufen |
| [Zeilenstatus abrufen](/api/internal/js_kanban_getstate_method.md) | Zeilenstatus abrufen                     |
| [Reaktiven Zeilenstatus abrufen](/api/internal/js_kanban_getreactivestate_method.md) | Reaktiven Zeilenstatus abrufen |
| [Zeilendaten laden](/api/config/js_kanban_rows_config.md)         | Initiale Zeilendaten laden              |
| [Zeilendaten parsen](/api/methods/js_kanban_parse_method.md)       | Zeilendaten parsen                     |
| [Zeilendaten serialisieren](/api/methods/js_kanban_serialize_method.md)| Zeilendaten serialisieren                |
| [Zeilendaten aktualisieren](/api/methods/js_kanban_updaterow_method.md)  | Zeilendaten aktualisieren                    |

## Arbeiten mit Ereignissen

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Ereignisse ausführen](/api/internal/js_kanban_exec_method.md)   | Ein internes Ereignis auslösen               |
| [Ereignisse abfangen](/api/internal/js_kanban_intercept_method.md)| Ein internes Ereignis abfangen        |
| [Liste der internen Ereignisse](/api/overview/events_overview.md)     | Liste der Kanban-internen Ereignisse                |
| [Ereignisreihenfolge ändern](/api/internal/js_kanban_setnext_method.md)| Reihenfolge im Event Bus für ein internes Ereignis ändern |
| [Auf Ereignisse abonnieren](/api/internal/js_kanban_on_method.md)| Auf ein internes Ereignis abonnieren          |

## Arbeiten mit Kanban REST API

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Serverdaten für Karten laden](/api/provider/rest_methods/js_kanban_getcards_method.md)| Kartendaten vom Server laden |
| [Serverdaten für Spalten laden](/api/provider/rest_methods/js_kanban_getcolumns_method.md)| Spaltendaten vom Server laden |
| [Serverdaten für Zeilen laden](/api/provider/rest_methods/js_kanban_getrows_method.md)| Zeilendaten vom Server laden |
| [Mit dem Server arbeiten](/guides/working_with_server.md)        | Arbeiten mit dem Server über die REST API ([Beispiel](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## Arbeiten mit Kanban-Status

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [StateStore und DataStore abrufen](/api/internal/js_kanban_getstores_method.md)| StateStore- und DataStore-Objekte abrufen |
| [StateStore-Eigenschaften abrufen](/api/internal/js_kanban_getstate_method.md)| StateStore-Eigenschaftsobjekte abrufen |
| [Reaktive StateStore-Eigenschaften abrufen](/api/internal/js_kanban_getreactivestate_method.md)| Reaktive StateStore-Eigenschaftsobjekte abrufen |

## Arbeiten mit der Toolbar

| Thema                                                       | Beschreibung                                           |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Suchleiste in der Toolbar konfigurieren](/api/config/toolbar_items_config.md) | Suchleiste in der Toolbar einrichten ([Beispiel](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Sortiersteuerung in der Toolbar konfigurieren](/api/config/toolbar_items_config.md) | Sortiersteuerung in der Toolbar einrichten ([Beispiel](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Toolbar-Steuerelemente konfigurieren](/api/config/toolbar_items_config.md)| Toolbar-Steuerelemente einrichten, anpassen und sortieren ([Beispiel](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)) |
| [Kanban API in der Toolbar einbinden](/api/config/toolbar_api_config.md) | Kanban API in der Toolbar einbinden und verwenden |
| [Toolbar lokalisieren](/api/config/toolbar_locale_config.md) | Toolbar lokalisieren |

## Arbeiten mit TypeScript

| Thema                                                       | Beschreibung                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Arbeiten mit TypeScript](/guides/typescript_support.md)     | Kanban mit TypeScript verwenden                  |

## Noch Fragen?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
Fragen können auch unten in den Kommentaren gestellt werden!
:::
