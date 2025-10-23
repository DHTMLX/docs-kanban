---
sidebar_label: api
title: api Konfiguration
description: Sie können die (Toolbar) api Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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