---
sidebar_label: scrollType
title: scrollType Konfiguration
description: Entdecken Sie die scrollType-Konfiguration in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# scrollType

### Beschreibung

@short: Optional. Gibt an, wie das Scrollen funktioniert.

### Verwendung

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
Wenn `scrollType` auf `"column"` gesetzt ist, kann jede Spalte unabhängig gescrollt werden.
:::

### Standardkonfiguration

~~~jsx {}
scrollType: "default"
~~~

:::important
Wenn Sie [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md) zusammen mit `scrollType: "default"` verwenden, stellen Sie sicher, dass Sie eine feste Kartenhöhe über die [`cardHeight`](/api/config/js_kanban_cardheight_config.md) Eigenschaft festlegen. Ohne diese Einstellung werden die Karten nicht angezeigt.
:::

### Beispiel

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    scrollType: "column",
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version v1.2 eingeführt

**Verwandte Artikel:** [Konfiguration](/guides/configuration#karten)

**Verwandte Beispiel:** [Kanban. Feste Kopfzeilen, Lazy Rendering und Spalten-Scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
