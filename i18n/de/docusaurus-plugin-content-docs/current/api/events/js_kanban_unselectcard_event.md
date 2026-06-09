---
sidebar_label: unselect-card
title: unselect-card Ereignis API
description: Lesen Sie die unselect-card Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Aufheben der Auswahl einer Karte ausgelöst wird.
---

# unselect-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte abgewählt wird

### Verwendung

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Parameter

Der Callback des **unselect-card** Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `id` - (erforderlich) die ID der Karte, die abgewählt wird

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Abonnieren des "unselect-card" Events
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~