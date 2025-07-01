---
sidebar_label: start-drag-card
title: start-drag-card Event
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Kanban-Bibliothek mehr über das start-drag-card Event erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# start-drag-card

### Beschreibung

@short: Wird ausgelöst, wenn mit dem Ziehen einer Karte begonnen wird

### Verwendung

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Parameter

Der Callback für das **start-drag-card** Event erhält ein Objekt mit den folgenden Eigenschaften:

- `id` - (erforderlich) die ID der Karte, die gezogen wird
- `columnId` - (erforderlich) die ID der Spalte, in der sich die Karte aktuell befindet
- `rowId` - (optional) die ID der Zeile, in der die Karte aktuell positioniert ist
- `before` - (optional) die ID der Karte, die der gezogenen Karte in der Spalte folgt
- `source` - (optional) ein Array mit den IDs der Karten, die verschoben werden

:::info
Für die Arbeit mit internen Events können die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwendet werden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung auf das "start-drag-card" Event
board.api.on("start-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 1.4 eingeführt

**Verwandtes Beispiel:** [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
