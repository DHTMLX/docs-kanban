---
sidebar_label: theme
title: theme Konfiguration
description: Sie können in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die (Toolbar) theme Konfiguration erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# theme

### Beschreibung

@short: Optional. Ein Theme, das auf die Toolbar angewendet wird

### Verwendung

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
Neben der Verwendung der Eigenschaft `theme` können Sie das gewünschte Theme auch anwenden, indem Sie die entsprechenden *css*-Klassen zu den Widget-Containern hinzufügen:

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

### Standardkonfiguration

Standardmäßig verwendet die Toolbar das **Material** Theme. Sie können es auch auf die **Willow** und **Willow-Dark** Themes einstellen.

:::tip
Um das aktuelle Theme dynamisch zu ändern, können Sie die Methode [**setConfig()**](api/methods/toolbar_setconfig_method.md) verwenden.
:::

### Beispiel

~~~jsx {5,11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // das "willow-dark" Theme wird initial gesetzt
    // weitere Parameter
});
// Toolbar erstellen
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // das "willow-dark" Theme wird initial gesetzt
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v1.4 hinzugefügt

**Verwandte Artikel:** [Stylisierung](guides/stylization.md)

**Verwandtes Beispiel:** [Kanban. Ändern eines Themes über die CSS-Klasse](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)