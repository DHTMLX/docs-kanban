---
sidebar_label: drag-card
title: drag-card Event
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Kanban-Bibliothek mehr über das drag-card Event erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# drag-card

### Beschreibung

@short: Dieses Event wird ausgelöst, sobald eine Karte per Drag-and-Drop verschoben wird.

### Verwendung

~~~jsx {}
"drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### Parameter

Der Callback für das **drag-card** Event erhält ein Objekt mit den folgenden Eigenschaften:

- `id` - (erforderlich) die ID der gerade gezogenen Karte
- `columnId` - (erforderlich) die ID der Spalte, in der sich die Karte aktuell befindet
- `rowId` - (optional) die ID der Zeile, in der sich die Karte aktuell befindet
- `before` - (optional) die ID der Karte, die unmittelbar nach der gezogenen Karte in der Spalte erscheint
- `source` - (optional) ein Array mit den IDs der verschobenen Karten

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung zum "drag-card" Event
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Änderungsprotokoll:** Dieses Event ist seit Version 1.4 verfügbar

**Verwandtes Beispiel:** [Kanban. Deaktivieren des Drag-and-Drop für bestimmte Spalten](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
