---
sidebar_label: scrollType
title: scrollType Konfiguration API
description: Lesen Sie die scrollType Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie das Board-Scrollen und das Spalten-Scroll-Verhalten konfigurieren.
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
Wenn Sie [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) mit `scrollType: "column"` verwenden, sollten Sie ebenfalls die Höhe der Karten über die Eigenschaft [`cardHeight`](api/config/js_kanban_cardheight_config.md) festlegen. Obwohl eine variable Höhe für Karten bei diesem Layouttyp unterstützt wird, kann dies bei individuellem Karteninhalt zu einer instabilen Darstellung führen.

Wenn `cardHeight` nicht festgelegt ist, greift das Widget auf eine experimentelle Näherung der Kartenhöhen basierend auf [`cardShape`](api/config/js_kanban_cardshape_config.md) zurück. Für Boards mit einem benutzerdefinierten [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) sollte stattdessen eine benutzerdefinierte [`getCardHeight`](api/config/js_kanban_getcardheight_config.md)-Funktion angegeben werden.
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
