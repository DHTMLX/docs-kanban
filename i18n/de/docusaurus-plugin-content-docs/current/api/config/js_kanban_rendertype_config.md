---
sidebar_label: renderType
title: renderType Konfiguration
description: Sie können mehr über die renderType-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# renderType

### Beschreibung

@short: Optional. Definiert eine Art der Kartenanzeige

:::info
Diese Eigenschaft wird verwendet, wenn mit einer großen Anzahl von Karten gearbeitet wird. Wenn sie auf *"lazy"* gesetzt wird, rendert das Widget nur den sichtbaren Teil der Karten, die auf dem Board angezeigt werden. Dies kann die Leistung des Widgets erheblich verbessern.
:::

### Verwendung

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
Wenn Sie die Einstellungen `renderType: "lazy"` und [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) kombinieren, vergessen Sie nicht, eine statische Höhe für die Karten über die Eigenschaft [`cardHeight`](api/config/js_kanban_cardheight_config.md) anzugeben. Andernfalls werden die Karten nicht korrekt angezeigt.
:::

### Standardkonfiguration

~~~jsx {}
renderType: "default"
~~~

### Beispiel

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in Version 1.2 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#cards)

**Verwandtes Beispiel:** [Kanban. Fixierte Überschriften, Lazy Rendering und Spalten-Scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)