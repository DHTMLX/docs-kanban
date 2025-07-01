---
sidebar_label: renderType
title: renderType Konfiguration
description: Sie können die renderType-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek nachlesen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# renderType

### Beschreibung

@short: Optional. Gibt an, wie die Karten dargestellt werden.

:::info
Diese Einstellung ist besonders nützlich beim Umgang mit einer großen Anzahl von Karten. Wenn sie auf *"lazy"* gesetzt wird, rendert das Widget nur die Karten, die aktuell sichtbar auf dem Board sind, was die Leistung erheblich verbessern kann.
:::

### Verwendung

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
Wenn `renderType: "lazy"` zusammen mit [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md) verwendet wird, stellen Sie sicher, dass eine feste Höhe für Karten über die [`cardHeight`](/api/config/js_kanban_cardheight_config.md) Eigenschaft eingestellt ist. Andernfalls könnten die Karten nicht korrekt angezeigt werden.
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
    // weitere Parameter
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version v1.2 eingeführt

**Verwandte Artikel:** [Konfiguration](/guides/configuration#karten)

**Verwandtes Beispiel:** [Kanban. Feste Überschriften, Lazy Rendering und Spalten-Scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
