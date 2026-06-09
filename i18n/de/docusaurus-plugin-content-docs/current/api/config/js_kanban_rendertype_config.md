---
sidebar_label: renderType
title: renderType Konfiguration API
description: Lesen Sie die renderType Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie Lazy Rendering aktivieren und große Boards optimieren.
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
Wenn Sie `renderType: "lazy"` mit [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) verwenden, sollten Sie ebenfalls die Höhe der Karten über die [`cardHeight`](api/config/js_kanban_cardheight_config.md) Eigenschaft festlegen. Obwohl eine variable Kartenhöhe für diesen Layouttyp unterstützt wird, kann dies bei benutzerdefiniertem Karteninhalt zu Instabilitäten führen.

Wenn `cardHeight` nicht gesetzt ist, greift das Widget auf eine experimentelle Näherung der Kartenhöhen zurück, die auf [`cardShape`](api/config/js_kanban_cardshape_config.md) basiert. Für Boards mit einem benutzerdefinierten [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) sollte stattdessen eine benutzerdefinierte [`getCardHeight`](api/config/js_kanban_getcardheight_config.md)-Funktion angegeben werden.
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
