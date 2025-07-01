---
sidebar_label: api
title: api Konfiguration
description: Entdecken Sie die (Toolbar) api Konfiguration in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Finden Sie Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos und eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# api

### Beschreibung

@short: Erforderlich. Ein Objekt, das die interne API von Kanban repräsentiert

:::info
Hier bezieht sich die **interne API von Kanban** auf die **Steuerelemente**, die in der Toolbar zu finden sind.
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

**Verwandte Artikel:** [Konfiguration](/guides/configuration#toolbar)

**Verwandte Beispiele:** [Kanban. Benutzerdefinierte Toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
