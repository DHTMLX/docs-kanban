---
sidebar_label: drag-card
title: drag-card Ereignis API
description: Lesen Sie die drag-card Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Verschieben einer Karte per Drag & Drop ausgelöst wird.
---

# drag-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte per Drag & Drop verschoben wird

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

Der Callback des **drag-card** Ereignisses kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der gezogenen Karte
- `columnId` - (erforderlich) die ID der Spalte, in der sich die Karte aktuell befindet
- `rowId` - (optional) die ID der Zeile, in der sich die Karte aktuell befindet
- `before` - (optional) die ID einer Karte, die sich aktuell nach der gezogenen Karte in der Spalte befindet
- `source` - (optional) das Array der IDs der verschobenen Karten

:::info
Für die Handhabung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "drag-card" Ereignis abonnieren
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version v1.4 hinzugefügt

**Verwandtes Beispiel:** [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)