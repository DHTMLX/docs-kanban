---
sidebar_label: scrollType
title: scrollType Konfiguration
description: Sie können die scrollType-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# scrollType

### Beschreibung

@short: Optional. Definiert eine Art des Scrollens

### Verwendung

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
Wenn Sie die Einstellung `scrollType: "column"` verwenden, können Sie jede Spalte separat scrollen.
:::

### Standardkonfiguration

~~~jsx {}
scrollType: "default"
~~~

:::important
Wenn Sie die Einstellungen [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) und `scrollType: "default"` kombinieren, vergessen Sie nicht, eine statische Höhe für die Karten über die Eigenschaft [`cardHeight`](api/config/js_kanban_cardheight_config.md) anzugeben. Andernfalls werden die Karten nicht angezeigt.
Wenn Sie `renderType: "lazy"` mit [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) verwenden, sollten Sie ebenfalls die Höhe der Karten festlegen. Obwohl eine variable Höhe für Karten bei diesem Layouttyp unterstützt wird, kann dies bei individuellem Karteninhalt zu einer instabilen Darstellung führen.
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

**Änderungsprotokoll:** Die Eigenschaft wurde in Version v1.2 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#cards)

**Verwandtes Beispiel:** [Kanban. Feste Kopfzeilen, Lazy Rendering und Spaltenscroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
