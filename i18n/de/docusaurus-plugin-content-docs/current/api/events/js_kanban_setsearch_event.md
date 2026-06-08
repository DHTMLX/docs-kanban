---
sidebar_label: set-search
title: set-search Ereignis API
description: Lesen Sie die set-search Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das bei der Suche nach Karten ausgelöst wird.
---

# set-search

### Beschreibung

@short: Wird ausgelöst, wenn nach Karten gesucht wird

### Verwendung

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### Parameter

Der Callback des **set-search** Events kann ein Objekt mit den folgenden Parametern erhalten:

- `value` - (erforderlich) der Suchwert
- `by` - (optional) das Kartenfeld, nach dem gesucht wird

:::info
Für die Handhabung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung auf das "set-search" Event
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~