---
sidebar_label: Arbeiten mit Daten
title: Arbeiten mit Daten
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit Daten arbeiten. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Arbeiten mit Daten

Dieser Leitfaden behandelt Datenoperationen in Kanban: das Laden von Anfangsdaten, das Lesen und Exportieren von Daten, das Ändern von Karten, Spalten, Zeilen und Links sowie die Verwaltung von Kommentaren und der Auswahl.

## Anfangsdaten laden

Beim Initialisieren von Kanban übergeben Sie die Anfangsdaten über die Eigenschaften [`columns`](api/config/js_kanban_columns_config.md), [`cards`](api/config/js_kanban_cards_config.md), [`rows`](api/config/js_kanban_rows_config.md) und [`links`](api/config/js_kanban_links_config.md).

Das folgende Code-Beispiel übergibt Daten für Spalten, Karten, Zeilen und Links an den Kanban-Konstruktor:

~~~jsx {1,17,81,94,106-109}
const columns = [ // Daten für Spalten
    {
        label: "Backlog",
        id: "backlog"
    },
    {
        label: "In progress",
        id: "inprogress"
    },
    {
        label: "Testing",
        id: "testing"
    },
    {...}
];

const cards = [ // Daten für Karten
    {
        id: 1,
        label: "Integration with React",
        priority: 1,
        color: "#65D3B3",
        description: "Some description...",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        progress: 25,
        users: [1,2,3,4],
        sprint: "1.0",
        column: "backlog",
        type: "feature",
        css: "red",
        votes: [4,6,9],
        comments: [
            {
                id: 1,
                userId: 9,
                cardId: 6,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays.",
                date: new Date(),
            },{...}
        ]
    },
    {
        id: 2,
        label: "Archive the cards/boards ",
        priority: 2,
        color: "#FFC975",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        sprint: "1.0",
        column: "backlog",
        type: "feature"
    },
    {
        label: "Searching and filtering",
        priority: 1,
        color: "#65D3B3",

        start_date: new Date("01/05/2021"),

        sprint: "1.2",
        column: "backlog",
        type: "task"
    },
    {
        label: "Set the tasks priorities",
        priority: 2,
        color: "#58C3FE",

        sprint: "1.2",
        column: "inprogress",
        type: "feature"
    },
    {...}
];

const rows = [ // Daten für Zeilen
    {
        label: "Feature",
        id: "feature"
    },
    {
        label: "Task",
        id: "task",
        collapsed: true
    },
    {...}
];

const links = [
    {
        id: "link_1",
        source: 1,
        target: 2,
        relation: "relatesTo",
    },
    {...}
];

// Kanban mit den Anfangsdaten initialisieren
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Daten aus einer lokalen Quelle laden {#load-data-from-a-local-source}

Verwenden Sie [`setConfig()`](api/methods/js_kanban_setconfig_method.md) oder [`parse()`](api/methods/js_kanban_parse_method.md), um Daten für Spalten, Zeilen, Karten und Links nach der Initialisierung zu laden:

~~~js {4}
const board = new kanban.Kanban("#root", {});

// Laden von Daten in Kanban
board.setConfig({ columns, cards, rows });

// oder board.parse({ columns, cards, rows });
~~~

## Daten mit Gantt und Scheduler synchronisieren

Für die Integration mit mehreren Widgets siehe [Integration mit DHTMLX-Widgets](guides/integration.md#gantt-and-scheduler).

## Daten abrufen

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) — gibt Datenobjekte aller Karten der angegebenen Spalte (und optional Zeile) zurück
- [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md) — gibt Datenobjekte aller Karten der angegebenen Spalte zurück
- [`getCard()`](api/methods/js_kanban_getcard_method.md) — gibt ein Datenobjekt einer Karte anhand der ID zurück
- [`serialize()`](api/methods/js_kanban_serialize_method.md) — gibt die Kanban-Daten als JSON-Objekt zurück

## Status abrufen

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) — gibt die reaktiven Eigenschaften des *DataStore* zurück
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) — gibt die aktuellen Eigenschaften des *DataStore* zurück
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) — gibt `{ data: DataStore }` zurück

## Daten exportieren

- [`export.json()`](api/internal/js_kanban_json_method.md) — lädt die Kanban-Daten als JSON-Datei herunter

## Neue Elemente hinzufügen

- [`addCard()`](api/methods/js_kanban_addcard_method.md) — fügt eine neue Karte hinzu
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) — fügt eine neue Spalte hinzu
- [`addRow()`](api/methods/js_kanban_addrow_method.md) — fügt eine neue Zeile hinzu
- [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) — dupliziert eine Karte anhand der ID

## Elemente aktualisieren

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) — aktualisiert eine Karte anhand der ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) — aktualisiert eine Spalte anhand der ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) — aktualisiert eine Zeile anhand der ID

## Elemente löschen

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) — entfernt eine Karte anhand der ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) — entfernt eine Spalte anhand der ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) — entfernt eine Zeile anhand der ID

## Elemente verschieben

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) — verschiebt eine Karte in die Zielspalte und -zeile
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) — verschiebt eine Spalte an eine neue Position
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) — verschiebt eine Zeile an eine neue Position

## Kommentare verwalten

- [`addComment()`](api/methods/js_kanban_addcomment_method.md) — fügt einer Karte anhand der ID einen Kommentar hinzu
- [`updateComment()`](api/methods/js_kanban_updatecomment_method.md) — aktualisiert einen Kommentar anhand der ID
- [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md) — löscht einen Kommentar anhand der ID

## Links verwalten

- [`addLink()`](api/methods/js_kanban_addlink_method.md) — fügt einen neuen Link zwischen Karten hinzu
- [`deleteLink()`](api/methods/js_kanban_deletelink_method.md) — löscht einen Link anhand der ID

## Kartenauswahl verwalten

- [`getSelection()`](api/methods/js_kanban_getselection_method.md) — gibt die IDs der aktuell ausgewählten Karten zurück
- [`selectCard()`](api/methods/js_kanban_selectcard_method.md) — wählt eine Karte anhand der ID aus
- [`unselectCard()`](api/methods/js_kanban_unselectcard_method.md) — hebt die Auswahl einer Karte anhand der ID auf

## Beispiel

Das folgende Beispiel verwendet die Kanban-API, um Daten zur Laufzeit zu bearbeiten:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
