---
sidebar_label: theme
title: theme Konfiguration
description: Erkunden Sie die Theme-Konfigurationsoptionen in der DHTMLX JavaScript Kanban-Bibliothek Dokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen, Live-Demos an und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# theme

### Beschreibung

@short: Optional. Definiert ein Theme, das auf das Kanban-Board angewendet wird

### Verwendung

~~~jsx {}
theme?: {
    name: string, // "material" (Standard) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
Neben der Einstellung der `theme`-Eigenschaft ist es auch möglich, ein Theme anzuwenden, indem die entsprechenden *css*-Klassen direkt zu den Widget-Containern hinzugefügt werden:

- **Material Theme**
~~~html {}
    <!-- Kanban-Toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban-Container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow Theme**
~~~html {}
    <!-- Kanban-Toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban-Container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark Theme**
~~~html {}
    <!-- Kanban-Toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban-Container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

Alternativ können Sie das gewünschte Theme einbinden, indem Sie das zugehörige Stylesheet aus dem Skins-Ordner verlinken:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Parameter

Hier sind die Parameter, mit denen Sie das **theme** konfigurieren können:

- `theme` - (optional) ein Objekt mit Theme-Einstellungen. Es unterstützt:
    - `name` - (erforderlich) der Name des Themes, das auf das Kanban angewendet werden soll
    - `fonts` - (optional) steuert, ob Schriftarten vom CDN (wxi Schriftart) geladen werden

:::tip
Die **Willow** und **Willow-Dark** Themes sind ebenfalls verfügbar. Um das Theme dynamisch zu wechseln, kann die Methode [`setTheme()`](../../methods/js_kanban_settheme_method) verwendet werden.
:::

### Standardkonfiguration

Das Kanban-Board verwendet standardmäßig das **Material** Theme.

~~~jsx {}
theme: {
    name: "material",
    fonts: true
}
~~~

### Beispiel

~~~jsx {5-8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: {
        name: "willow-dark", // setzt initial das "willow-dark" Theme
        fonts: false
    }
    // weitere Parameter
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version v1.4 eingeführt

**Verwandte Artikel:** [Stylisierung](/guides/stylization)

**Verwandte Beispiele:**
- [Kanban. Verwendung von Themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Einbinden eines Themes als Stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Ändern eines Themes über die CSS-Klasse](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
