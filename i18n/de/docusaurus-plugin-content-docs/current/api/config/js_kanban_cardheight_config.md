---
sidebar_label: cardHeight
title: cardHeight Konfiguration
description: Sie können mehr über die cardHeight-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# cardHeight

### Beschreibung

@short: Optional. Die Höhe der Karten

### Verwendung

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
Wenn Sie die Einstellungen [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) und [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) kombinieren, vergessen Sie nicht, eine statische Höhe für die Karten über die Eigenschaft `cardHeight` anzugeben. Wenn Sie dies nicht tun, werden die Karten nicht angezeigt.
:::

### Beispiel

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    cardHeight: 150, // px
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in Version v1.2 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#cards)

**Verwandte Beispiel:** [Kanban. Lazy rendering und Spalten-Scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)