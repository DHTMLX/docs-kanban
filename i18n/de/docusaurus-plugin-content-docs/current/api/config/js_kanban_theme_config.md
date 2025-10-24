---
sidebar_label: theme
title: theme Konfiguration
description: Sie können die theme-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# theme

### Beschreibung

@short: Optional. Ein Theme, das auf Kanban angewendet wird

### Verwendung

~~~jsx {}
theme?: {
    name: string, // "material" (Standard) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
Neben der Verwendung der Eigenschaft `theme` können Sie das benötigte Theme auch anwenden, indem Sie die entsprechenden *css*-Klassen zu den Widget-Containern hinzufügen:

- **Material Theme**
~~~html {}
    <!-- Kanban Toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban Container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow Theme**
~~~html {}
    <!-- Kanban Toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban Container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark Theme**
~~~html {}
    <!-- Kanban Toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban Container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

oder binden Sie einfach das benötigte Theme von dem skins-Ordner auf der Seite ein:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Parameter

Zur Konfiguration des **theme** können Sie folgende Parameter verwenden.

- `theme` - (optional) ein Objekt mit Theme-Einstellungen. Hier können Sie folgende Parameter angeben:
    - `name` - (erforderlich) ein Theme-Name, der auf Kanban angewendet wird
    - `fonts` - (optional) aktiviert/deaktiviert das Laden der Schriftarten vom CDN (wxi font)

:::tip
Sie können auch die Themes **Willow** und **Willow-Dark** anwenden. Um das aktuelle Theme dynamisch zu ändern, können Sie die Methode [`setTheme()`](api/methods/js_kanban_settheme_method.md) verwenden.
:::

### Standardkonfiguration

Standardmäßig verwendet Kanban das **Material** Theme.

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
        name: "willow-dark", // das "willow-dark" Theme wird initial gesetzt
        fonts: false
    }
    // weitere Parameter
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in Version 1.4 hinzugefügt

**Verwandte Artikel:** [Stylisierung](guides/stylization.md)

**Verwandtes Beispiel:** [Kanban. Ändern eines Themes über die CSS-Klasse](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)