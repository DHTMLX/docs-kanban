---
sidebar_label: cardHeight
title: cardHeight Konfiguration
description: Sie können mehr über die cardHeight Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# cardHeight

### Beschreibung

@short: Optional. Definiert die Höhe der Karten.

### Verwendung

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
Wenn Sie [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md) zusammen mit [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md) verwenden, ist es wichtig, eine feste Höhe für die Karten mit der Eigenschaft `cardHeight` festzulegen. Ohne diese Einstellung sind die Karten nicht sichtbar.
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

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 1.2 eingeführt

**Verwandte Artikel:** [Konfiguration](/guides/configuration#karten)

**Verwandtes Beispiel:** [Kanban. Lazy rendering und Spalten-Scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
