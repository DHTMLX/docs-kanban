---
sidebar_label: rowKey
title: rowKey Konfiguration
description: Sie können mehr über die rowKey Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# rowKey

### Beschreibung

@short: Optional. Definiert die Zugehörigkeit der Karte zur Zeile

:::info
Um die Karten in Zeilen (Swimlanes) zu verteilen, müssen Sie einen **benutzerdefinierten Schlüssel** angeben und ihn auf die **ID** der gewünschten Zeile im Kartendatenobjekt setzen. Die Eigenschaft **rowKey** muss in der Widget-Konfigurationsobjekt auf diesen *benutzerdefinierten Schlüssel* gesetzt werden.
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
    // andere Parameter
});
~~~

**Verwandte Beispiel:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)