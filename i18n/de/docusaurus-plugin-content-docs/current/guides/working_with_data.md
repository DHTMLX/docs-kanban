---
sidebar_label: Arbeiten mit Daten
title: Arbeiten mit Daten
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit Daten arbeiten. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Arbeiten mit Daten

## Initiales Laden von Daten

Beim Initialisieren von Kanban können Sie die Anfangsdaten für [**columns**](api/config/js_kanban_columns_config.md), [**cards**](api/config/js_kanban_cards_config.md), [**rows**](api/config/js_kanban_rows_config.md) und [**links**](api/config/js_kanban_links_config.md) bereitstellen.

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

// Initialisierung von Kanban mit den Anfangsdaten für Spalten, Karten und Zeilen
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Laden von Daten aus einer lokalen Quelle

Um Daten für ***columns***, ***rows***, ***cards*** und ***links*** aus einer lokalen Quelle zu laden, können Sie die Methode [`setConfig()`](api/methods/js_kanban_setconfig_method.md) oder [`parse()`](api/methods/js_kanban_parse_method.md) verwenden. 

~~~js {4}
const board = new kanban.Kanban("#root", {});

// Laden von Daten in Kanban
board.setConfig({ columns, cards, rows });

// oder board.parse({ columns, cards, rows });
~~~

## Kanban-Daten mit Gantt und Scheduler synchronisieren

In diesem Beispiel sehen Sie, wie Kanban-Daten mit anderen DHTMLX-Widgets, nämlich [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) und [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/), synchronisiert werden können:

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Kanban-Daten abrufen

Um Kanban-Daten abzurufen, können Sie folgende Methoden verwenden:

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) - gibt ein Array mit Datenobjekten aller Karten der angegebenen Spalte (und Zeile) zurück
- [`getCard()`](api/methods/js_kanban_getcard_method.md) - gibt ein Datenobjekt einer Karte anhand der angegebenen ID zurück
- [`serialize()`](api/methods/js_kanban_serialize_method.md) - serialisiert Kanban-Daten zu JSON

## Kanban-Status abrufen

Um den Status von Kanban abzurufen, können Sie folgende Methoden verwenden:

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) - gibt ein Objekt mit den reaktiven Eigenschaften des *StateStore* zurück
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) - gibt ein Objekt mit den aktuellen Eigenschaften des *StateStore* zurück
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) - gibt ein Objekt mit den *StateStore* und *DataStore* Objekten zurück

## Kanban-Daten exportieren

Um Kanban-Daten zu exportieren, können Sie folgende Methode verwenden:

- [`export.json()`](api/internal/js_kanban_json_method.md) - exportiert die Kanban-Daten in eine JSON-Datei

## Neue Elemente hinzufügen

Um neue *cards*, *columns* und *rows* hinzuzufügen, können Sie die folgenden Methoden verwenden:

- [`addCard()`](api/methods/js_kanban_addcard_method.md) - fügt eine neue Karte zu Kanban hinzu
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) - fügt eine neue Spalte zu Kanban hinzu
- [`addRow()`](api/methods/js_kanban_addrow_method.md) - fügt eine neue Zeile zu Kanban hinzu

## Elemente aktualisieren

Um *cards*, *columns* und *rows* zu aktualisieren, können Sie die folgenden Methoden verwenden:

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) - aktualisiert die Kartendaten anhand der angegebenen ID
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) - aktualisiert die Spaltendaten anhand der angegebenen ID
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) - aktualisiert die Zeilendaten anhand der angegebenen ID

## Elemente löschen

Um *cards*, *columns* und *rows* zu entfernen, können Sie die folgenden Methoden verwenden:

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) - entfernt eine Karte aus Kanban anhand der angegebenen ID
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) - entfernt eine Spalte aus Kanban anhand der angegebenen ID
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) - entfernt eine Zeile aus Kanban anhand der angegebenen ID

## Elemente verschieben

Um *cards*, *columns* und *rows* zu verschieben, können Sie die folgenden Methoden verwenden:

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) - verschiebt eine Karte in die gewünschte Spalte und Zeile
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) - verschiebt eine Spalte an die gewünschte Position
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) - verschiebt eine Zeile an die gewünschte Position

## Beispiel

In diesem Beispiel sehen Sie, wie Sie die Kanban-API für die Arbeit mit Daten verwenden können:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
