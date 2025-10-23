---
sidebar_label: Stilierung
title: Stilierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Stilierung. Durchstöbern Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Stilierung

Mit Kanban können Sie das Aussehen von **Spalten**, **Zeilen** und **Karten** über die Eigenschaften [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md) und [`cardShape.css`](api/config/js_kanban_cardshape_config.md) anpassen. Diese Eigenschaften ermöglichen es Ihnen, Spalten, Zeilen und Karten bedingt zu gestalten.

Sie können außerdem einer einzelnen **Spalte**, **Zeile** oder **Karte** eine benutzerdefinierte CSS-Klasse zuweisen, indem Sie die Eigenschaften [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md) und [`cards.css`](api/config/js_kanban_cards_config.md) verwenden.

Darüber hinaus können Sie benutzerdefinierte Stile auf jeden Teil der Kanban-Oberfläche anwenden, um die Anforderungen Ihres Projekts zu erfüllen. Dafür stellt die Bibliothek eine Vielzahl von CSS-Variablen zur Verfügung. Beachten Sie, dass Kanban zwei Arten von Variablen enthält:
- CSS-Variablen, die sich auf den **Kanban**-Stil beziehen
- CSS-Variablen, die sich auf den Stil der **WX**-Bibliothek beziehen (*Steuerelemente, Kalender usw.*)

:::info
Beachten Sie, dass die **WX**-Bibliothek nur für interne Prozesse verwendet wird. Sie stellt einige kleine Elemente bereit, die in Kanban verwendet werden (*Steuerelemente, Kalender usw.*)
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
In zukünftigen Versionen von Kanban können sich die Variablen und deren Namen ändern. Bitte überprüfen Sie nach einem Update die Namen und passen Sie sie in Ihrem Code an, um Darstellungsprobleme der Komponente zu vermeiden.
:::

## Scroll-Stil

Sie können auch einen benutzerdefinierten Stil für die Scrollbar von Kanban anwenden. Verwenden Sie dafür die CSS-Klasse `.wx-styled-scroll`. Prüfen Sie vor der Verwendung die Kompatibilität mit modernen Browsern [hier](https://caniuse.com/css-scrollbar).

~~~html {4} title="index.html"
<!--container für Toolbar-->
<div id="toolbar"></div> //
<!--container für Kanban-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## Benutzerdefinierter Stil

In diesem Beispiel sehen Sie, wie Sie einen benutzerdefinierten Stil auf Kanban anwenden können.

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Adaptivität

In diesem Beispiel sehen Sie, wie Sie mit benutzerdefinierten CSS-Stilen eine adaptive Version von Kanban erstellen.

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Anpassung](guides/customization.md)