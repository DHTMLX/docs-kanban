---
sidebar_label: Stilierung
title: Stilierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Stilierung. Durchstöbern Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Stilierung

Sie können das Erscheinungsbild von Kanban über CSS-Klassen und CSS-Variablen anpassen. Die folgenden Eigenschaften akzeptieren CSS-Klassen für Spalten, Zeilen und Karten:

- [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md), [`cardShape.css`](api/config/js_kanban_cardshape_config.md) — Funktionen, die eine CSS-Klasse bedingt basierend auf den Element-Daten zurückgeben
- [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md), [`cards.css`](api/config/js_kanban_cards_config.md) — eine CSS-Klasse als Zeichenfolge, die einem einzelnen Element zugewiesen wird

Weitere Details und Codebeispiele zu den bedingten `css`-Funktionen finden Sie unter [Bedingte CSS-Klassen](guides/customization.md#conditional-css-classes).

Das folgende Code-Snippet wendet eine CSS-Klasse auf eine bestimmte Spalte, Zeile und Karte an:

~~~jsx
const columns = [
    { id: "backlog", label: "Backlog", css: "highlighted" },
    // other columns
];
const rows = [
    { id: "feature", label: "Feature", css: "row-feature" },
    // other rows
];
const cards = [
    { id: 1, label: "Task", column: "backlog", css: "urgent" },
    // other cards
];
~~~

Neben elementspezifischem CSS stellt Kanban CSS-Variablen für das Theming bereit. Die Variablen gliedern sich in zwei Gruppen:

- Kanban-Variablen — definieren Kanban-spezifische Stile
- WX-Bibliotheksvariablen — gestalten gemeinsam genutzte UI-Elemente (Steuerelemente, Kalender)

:::info
Die WX-Bibliothek stellt interne Kanban-UI-Komponenten bereit. Behandeln Sie WX-Variablen als Teil der Kanban-Stilierung.
:::

## Theme-Variablen

Überschreiben Sie diese CSS-Variablen in Ihrem Stylesheet, um das Material-Theme anzupassen:

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
    --wx-kanban-card-field-padding: 10px;
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
    --wx-kanban-editor-background: var(--wx-background);
    --wx-kanban-editor-top-border: var(--wx-border);
    --wx-kanban-editor-modal-width: 1000px;
    --wx-editor-right-background: rgba(0, 0, 0, 0.03);
    --wx-editor-cancel-background: rgba(0, 0, 0, 0.04);

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
Variablennamen können sich in zukünftigen Versionen ändern. Überprüfen Sie die Namen nach einem Update und passen Sie die Stile in Ihrem Projekt entsprechend an.
:::

## Scroll-Stil

Wenden Sie die CSS-Klasse `.wx-styled-scroll` auf den Kanban-Container an, um einen benutzerdefinierten Scrollbar-Stil zu aktivieren. Prüfen Sie vor der Verwendung die [Browserkompatibilität](https://caniuse.com/css-scrollbar):

~~~html {4} title="index.html"
<!-- container for Toolbar -->
<div id="toolbar"></div>
<!-- container for Kanban -->
<div id="root" class="wx-styled-scroll"></div>
~~~

## Benutzerdefinierter Stil

Die folgende Demo wendet einen benutzerdefinierten Stil auf Kanban an:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Responsives Layout

Die folgende Demo erstellt ein responsives Kanban-Layout mit benutzerdefiniertem CSS:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Verwandte Artikel:** [Anpassung](guides/customization.md)
