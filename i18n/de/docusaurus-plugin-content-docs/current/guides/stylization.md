---
sidebar_label: Stilisierung
title: Stilisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über Stilisierung. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Stilisierung

Mit Kanban ist es sehr einfach, das Aussehen von **Spalten**, **Zeilen** und **Karten** mithilfe der Eigenschaften [`columnShape.css`](/api/config/js_kanban_columnshape_config), [`rowShape.css`](/api/config/js_kanban_rowshape_config) und [`cardShape.css`](/api/config/js_kanban_cardshape_config) individuell anzupassen. Diese Optionen ermöglichen es Ihnen, Spalten, Zeilen und Karten mit bedingten Stilen zu versehen.

Wenn Sie noch weiter gehen möchten, können Sie eigene CSS-Klassen zu jeder spezifischen **Spalte**, **Zeile** oder **Karte** mit den Eigenschaften [`columns.css`](/api/config/js_kanban_columns_config), [`rows.css`](/api/config/js_kanban_rows_config) und [`cards.css`](/api/config/js_kanban_cards_config) hinzufügen.

Sie haben außerdem die Flexibilität, jeden Teil der Kanban-Oberfläche so zu gestalten, dass er zu den Anforderungen Ihres Projekts passt. Dafür stehen zahlreiche CSS-Variablen zur Verfügung. Kanban bietet zwei Haupttypen von Variablen:
- CSS-Variablen für die **Kanban**-Stilisierung
- CSS-Variablen aus der **WX**-Bibliothek (decken Steuerelemente, Kalender und andere UI-Elemente ab)

:::info
Die **WX**-Bibliothek wird im Hintergrund für einige interne Komponenten verwendet. Sie steuert kleinere UI-Bereiche in Kanban, wie Steuerelemente und Kalender.
:::

## Standardstil

~~~css
.wx-material-theme {
    /* WX library css variables */
    --wx-field-width: 100%;
    --wx-theme-name: material;
    /* end of WX library css variables */

    /* Kanban  css variables*/
    --wx-kanban-background: #f1f1f1;

    /*  column styles */
    --wx-kanban-column-width: 300px;
    --wx-kanban-column-height: 300px;

    /* toolbar styles */
    --wx-kanban-toolbar-height: 56px;
    --wx-kanban-toolbar-align: center;
    --wx-kanban-toolbar-justify: flex-start;
    --wx-kanban-toolbar-control-hover: rgba(0, 0, 0, 0.07);
    --wx-kanban-toolbar-control-active: rgba(0, 0, 0, 0.15);
    --wx-kanban-toolbar-border: var(--wx-border);

    /* card styles */
    --wx-kanban-card-field-padding: 12px;
    --wx-kanban-content-background: var(--wx-background);
    --wx-kanban-card-border: var(--wx-border);
    --wx-kanban-card-border-radius: 6px;
    --wx-kanban-header-border-radius: var(--wx-kanban-card-border-radius);

    /* row styles */
    --wx-kanban-row-line: var(--wx-border);

    /* user icon styles */
    --wx-kanban-user-icon-size: 36px;

    /* editor styles */
    --wx-kanban-header-height: 64px;
    --wx-kanban-editor-width: 569px;
    --wx-kanban-editor-height: auto;
    --wx-kanban-editor-x-padding: 20px;
    --wx-kanban-editor-background: var(--wx-kanban-content-background);
    --wx-kanban-editor-top-border: none;

    /* column styles */
    --wx-kanban-over-limit-color: var(--wx-color-danger);
    --wx-kanban-collapsed-column-width: 44px;
    --wx-kanban-z-index: 1;

    /* progress control styles*/
    --wx-progress-height: 4px;
    --wx-kanban-progress-inactive-color: #dbdbdb;

    /* menu styles */
    --wx-kanban-menu-min-width: 100px;

    /* box and shadow styles*/
    --wx-kanban-shadow: none;
    --wx-kanban-box-border: var(--wx-border);

    /* collapsed column styles */
    --wx-kanban-collapsed-padding: var(--wx-padding);
    --wx-kanban-collapsed-margin: 0px;
    --wx-kanban-collapsed-background: transparent;
    --wx-kanban-collapsed-background-hover: #dfdfdf;

/* End of Kanban  CSS variables*/
}
~~~

:::tip Hinweis
Zukünftige Kanban-Versionen könnten einige Variablen anpassen oder umbenennen. Es ist ratsam, nach einem Update die Variablennamen zu überprüfen und sicherzustellen, dass Ihre Stile weiterhin wie erwartet funktionieren.
:::

## Eingebaute Themes

Es gibt einige eingebaute Themes, die Sie über die [`theme`](/api/config/js_kanban_theme_config)-Eigenschaft oder durch Aufruf der [`setTheme()`](/api/methods/js_kanban_settheme_method)-Methode verwenden können. Verfügbare Themes sind **material**, **willow** und **willow-dark**.

:::important
Alternativ zur `theme`-Eigenschaft können Sie das Theme wechseln, indem Sie die entsprechende *css*-Klasse zu Ihren Kanban-Containern hinzufügen:

- **Material Theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow Theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark Theme**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

Alternativ können Sie auch einfach die CSS-Datei aus dem Skins-Ordner für das gewünschte Theme einbinden:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

Hier ein kurzes Beispiel, das das **willow-dark**-Theme in Aktion zeigt:
<iframe src="https://snippet.dhtmlx.com/k3iw6ti0?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Scroll-Stil

Auch die Kanban-Scrollbar lässt sich individuell gestalten. Verwenden Sie dazu einfach die CSS-Klasse `.wx-styled-scroll`. Prüfen Sie zuvor die [Browserunterstützung](https://caniuse.com/css-scrollbar) für benutzerdefinierte Scrollbars, bevor Sie sich auf diese Funktion verlassen.

~~~html {4} title="index.html"
<!--container for Toolbar-->
<div id="toolbar"></div> //
<!--container for Kanban-->
<div id="root" class="wx-styled-scroll"></div>
~~~

## Benutzerdefinierter Stil

Hier sehen Sie ein Beispiel, wie Sie Ihren eigenen benutzerdefinierten Stil zu Kanban hinzufügen können:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Anpassungsfähigkeit

Dieses Beispiel demonstriert, wie Kanban mit Hilfe von benutzerdefinierten CSS-Stilen adaptiv gestaltet werden kann:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Anpassung](../customization)
