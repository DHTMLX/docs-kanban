---
sidebar_label: api
title: Toolbar api Konfiguration API
description: Lesen Sie die Toolbar api Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie die Toolbar mit der internen Kanban-API verbinden.
---

# api

### Beschreibung

@short: Erforderlich. Ein Objekt mit der internen API von Kanban

:::info
In diesem Fall wird die **interne API von Kanban** für **Steuerelemente** verwendet, die sich auf der Toolbar befinden
:::

### Verwendung

~~~jsx {}
api: object;
~~~

### Beispiel

~~~jsx {7}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#toolbar)

**Verwandte Beispiel:** [Kanban. Benutzerdefinierte Toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)