---
sidebar_label: Arbeiten mit Daten
title: Arbeiten mit Daten
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit Daten arbeiten. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Arbeiten mit Daten

## Initiales Laden von Daten

Beim Einrichten von Kanban ist es möglich, Startdaten für [**columns**](/api/config/js_kanban_columns_config.md), [**cards**](/api/config/js_kanban_cards_config.md), [**rows**](/api/config/js_kanban_rows_config.md) und [**links**](/api/config/js_kanban_links_config.md) zu übergeben.

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
        masterId: 1,
        slaveId: 2,
        relation: "relatesTo",
    },
    {...}
];

// Initialisierung von Kanban mit den Startdaten für Spalten, Karten und Zeilen
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## Laden von Daten aus einer lokalen Quelle

Um Daten für ***columns***, ***rows*** und ***cards*** aus einer lokalen Quelle einzubinden, steht die Methode [`parse()`](/api/methods/js_kanban_parse_method.md) zur Verfügung. Übergeben Sie einfach ein Objekt mit den benötigten Daten.

~~~js {4}
const board = new kanban.Kanban("#root", {});

// Laden von Daten in Kanban
board.parse({ columns, cards, rows });
~~~

## Kanban-Daten mit Gantt und Scheduler synchronisieren

Hier sehen Sie ein Beispiel, wie Kanban-Daten mit anderen DHTMLX-Widgets wie [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) und [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/) synchronisiert werden können:

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Kanban-Daten abrufen

Es gibt verschiedene Methoden, um auf Kanban-Daten zuzugreifen:

- [`getAreaCards()`](/api/methods/js_kanban_getareacards_method.md) - gibt ein Array mit Datenobjekten aller Karten in einer bestimmten Spalte (und Zeile) zurück
- [`getCard()`](/api/methods/js_kanban_getcard_method.md) - gibt ein Datenobjekt einer Karte anhand ihrer ID zurück
- [`serialize()`](/api/methods/js_kanban_serialize_method.md) - serialisiert Kanban-Daten in JSON

## Kanban-Status abrufen

Um auf den Status von Kanban zuzugreifen, sind diese Methoden hilfreich:

- [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method.md) - gibt ein Objekt mit den reaktiven Eigenschaften aus *StateStore* zurück
- [`api.getState()`](/api/internal/js_kanban_getstate_method.md) - ruft ein Objekt mit den aktuellen Eigenschaften aus *StateStore* ab
- [`api.getStores()`](/api/internal/js_kanban_getstores_method.md) - liefert ein Objekt mit *StateStore* und *DataStore*

## Kanban-Daten exportieren

Zum Exportieren von Kanban-Daten können Sie verwenden:

- [`export.json()`](/api/internal/js_kanban_json_method.md) - exportiert Kanban-Daten als JSON-Datei

## Neue Einträge hinzufügen

Neue *cards*, *columns* und *rows* können mit diesen Methoden erstellt werden:

- [`addCard()`](/api/methods/js_kanban_addcard_method.md) - erstellt eine neue Karte in Kanban
- [`addColumn()`](/api/methods/js_kanban_addcolumn_method.md) - erstellt eine neue Spalte in Kanban
- [`addRow()`](/api/methods/js_kanban_addrow_method.md) - erstellt eine neue Zeile in Kanban

## Einträge aktualisieren

Wenn Sie *cards*, *columns* oder *rows* aktualisieren möchten, stehen Ihnen diese Methoden zur Verfügung:

- [`updateCard()`](/api/methods/js_kanban_updatecard_method.md) - aktualisiert Kartendaten anhand der ID
- [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method.md) - aktualisiert Spaltendaten anhand der ID
- [`updateRow()`](/api/methods/js_kanban_updaterow_method.md) - aktualisiert Zeilendaten anhand der ID

## Einträge löschen

*Cards*, *columns* und *rows* können mit den folgenden Methoden gelöscht werden:

- [`deleteCard()`](/api/methods/js_kanban_deletecard_method.md) - löscht eine Karte aus Kanban über die ID
- [`deleteColumn()`](/api/methods/js_kanban_deletecolumn_method.md) - löscht eine Spalte aus Kanban über die ID
- [`deleteRow()`](/api/methods/js_kanban_deleterow_method.md) - löscht eine Zeile aus Kanban über die ID

## Einträge verschieben

Um die Position von *cards*, *columns* oder *rows* zu ändern, verwenden Sie:

- [`moveCard()`](/api/methods/js_kanban_movecard_method.md) - verschiebt eine Karte in eine bestimmte Spalte und Zeile
- [`moveColumn()`](/api/methods/js_kanban_movecolumn_method.md) - verschiebt eine Spalte auf die gewünschte Position
- [`moveRow()`](/api/methods/js_kanban_moverow_method.md) - verschiebt eine Zeile auf die gewünschte Position

## Beispiel

Hier ein Beispiel, das zeigt, wie Sie mit der Kanban-API Daten verwalten können:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
