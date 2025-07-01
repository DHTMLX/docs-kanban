---
sidebar_label: theme
title: theme Konfiguration
description: Entdecken Sie die (Toolbar) theme-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# theme

### Beschreibung

@short: Optional. Gibt das auf die Toolbar angewendete Theme an.

### Verwendung

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
Zusätzlich zum Setzen der `theme`-Eigenschaft können Sie das gewünschte Theme anwenden, indem Sie die entsprechenden *css*-Klassen zu den Widget-Containern hinzufügen:

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

Alternativ können Sie einfach das gewünschte Theme-Stylesheet aus dem Skins-Ordner einbinden:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Standardkonfiguration

Die Toolbar verwendet standardmäßig das **Material**-Theme. Sie können auch auf die Themes **Willow** oder **Willow-Dark** wechseln.

:::tip
Um das Theme zur Laufzeit zu ändern, verwenden Sie die Methode [**setConfig()**](../../methods/toolbar_setconfig_method).
:::

### Beispiel

~~~jsx {5,11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // setzt das Anfangstheme auf "willow-dark"
    // weitere Parameter
});
// Toolbar erstellen
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // setzt das Anfangstheme auf "willow-dark"
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version v1.4 eingeführt

**Verwandte Artikel:** [Stylisierung](/guides/stylization)

**Verwandte Beispiele:**
- [Kanban. Verwendung von Themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Einbinden eines Themes als Stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Wechseln des Themes über die CSS-Klasse](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
