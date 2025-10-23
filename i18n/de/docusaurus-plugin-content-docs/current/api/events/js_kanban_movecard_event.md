---
sidebar_label: move-card
title: move-card Ereignis
description: Sie können mehr über das move-card Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# move-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte verschoben wird

### Verwendung

~~~jsx {}
"move-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **move-card** Ereignisses kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (erforderlich) die ID der Karte, die verschoben wird
- `columnId` - (erforderlich) die ID der Spalte, in die die Karte eingefügt wird
- `rowId` - (optional) die ID der Zeile, in die die Karte eingefügt wird
- `before` - (optional) die ID der Karte, vor der die neue Karte platziert wird
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern der Anfrage an den Server

:::info
Zur Handhabung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "move-card" Ereignis abonnieren
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Verwandtes Beispiel:** [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)