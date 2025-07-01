---
sidebar_label: set-search
title: set-search Ereignis
description: Entdecken Sie das set-search Ereignis in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Sehen Sie sich Entwickleranleitungen an, erkunden Sie API-Referenzen, testen Sie Codebeispiele und Live-Demos und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# set-search

### Beschreibung

@short: Wird ausgelöst, wenn eine Kartensuche ausgeführt wird

### Verwendung

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### Parameter

Der Callback für das **set-search** Ereignis erhält ein Objekt mit folgenden Parametern:

- `value` - (erforderlich) der Suchbegriff
- `by` - (optional) das Kartenfeld, nach dem gesucht wird

:::info
Um interne Ereignisse zu verarbeiten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "set-search" Ereignis hören
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~
