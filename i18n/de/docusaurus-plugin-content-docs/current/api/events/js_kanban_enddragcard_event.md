---
sidebar_label: end-drag-card
title: end-drag-card Event
description: Sie können mehr über das end-drag-card Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# end-drag-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karten-Zieh-Aktion beendet wird

### Verwendung

~~~jsx {}
"end-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Parameter

Der Callback für das **end-drag-card** Event erhält ein Objekt mit folgenden Details:

- `id` - (erforderlich) die ID der gezogenen Karte
- `columnId` - (erforderlich) die ID der Spalte, in der sich die Karte jetzt befindet
- `rowId` - (optional) die ID der Reihe, in der die Karte platziert wurde
- `before` - (optional) die ID der Karte, die der gezogenen Karte in der Spalte folgt
- `source` - (optional) ein Array mit den IDs der verschobenen Karten

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "end-drag-card" Event hören
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Änderungsprotokoll:** Dieses Event ist seit Version v1.4 verfügbar

**Verwandtes Beispiel:** [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
