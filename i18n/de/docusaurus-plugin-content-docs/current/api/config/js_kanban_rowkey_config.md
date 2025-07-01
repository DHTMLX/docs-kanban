---
sidebar_label: rowKey
title: rowKey Konfiguration
description: Entdecken Sie die rowKey-Konfiguration in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Finden Sie Entwickleranleitungen und API-Referenzen, experimentieren Sie mit Codebeispielen und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# rowKey

### Beschreibung

@short: Optional. Legt fest, wie eine Karte einer Reihe zugewiesen wird.

:::info
Um Karten in Reihen (Swimlanes) zu organisieren, müssen Sie einen **benutzerdefinierten Schlüssel** definieren, der der **ID** der Reihe in den Kartendaten entspricht. Anschließend setzen Sie die **rowKey**-Eigenschaft in der Konfiguration des Widgets auf diesen *benutzerdefinierten Schlüssel*.
:::

### Verwendung

~~~jsx {}
rowKey?: string;
~~~  

### Beispiel

~~~jsx {4,8,16}
const cards = [
    {
        label: "Backlog task",
        row_custom_key: "feature"
    },
    {
        label: "In progress task",
        row_custom_key: "done"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    rowKey: "row_custom_key",
    // weitere Parameter
});
~~~

**Verwandte Beispiel:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
