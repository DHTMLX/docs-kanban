---
sidebar_label: move-card
title: move-card Event
description: Sie können mehr über das move-card Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklertools und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **move-card** Event erhält ein Objekt mit den folgenden Eigenschaften:

- `id` - (erforderlich) die ID der Karte, die verschoben wird
- `columnId` - (erforderlich) die ID der Spalte, in der die Karte platziert wird
- `rowId` - (optional) die ID der Zeile, in der die Karte platziert wird
- `before` - (optional) die ID der Karte, vor der die verschobene Karte eingefügt wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server verhindert werden soll

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Abonnieren des "move-card" Events
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Verwandtes Beispiel:** [Kanban. Deaktivieren von Drag & Drop für bestimmte Spalten](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
