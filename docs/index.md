---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DHTMLX Kanban overview

JavaScript Kanban is a widget for workflow visualization. It helps you track team workload and understand where work is getting stuck. The component works with any number of cards, columns, and swimlanes. Written in pure JavaScript and CSS, it integrates into any web app or page without extra dependencies.

## Kanban structure­

Kanban has three independent UI components: the **Toolbar**, the **Board**, and the **Editor**. The Toolbar and Editor are optional. The Board is the core.

### Toolbar

The **Toolbar** is a separate component. Initialize it in its own container. It includes:

- a search bar for filtering cards
- a sort control for ordering cards by specified parameters
- undo/redo controls for managing history
- buttons to add new columns and rows

You can customize the search and sort logic, add custom elements, or reorder the built-in controls. Read more in the [Configuration](guides/configuration.md#toolbar) section.

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
  src={toolbar}
  alt="Kanban Toolbar"
  className="img_border"
/>

### Board

The **Board** is the main component. It distributes cards across columns and rows (swimlanes). You can configure card appearance and apply a custom template. Read more in the [Configuration](guides/configuration.md#cards) section.

On the board you can work with cards, columns, and rows:

- add new cards by clicking the plus icon (subject to *limits* set per column and swimlane)
- add comments and votes via the editor panel ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- set links between cards via the editor ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- delete cards, columns, and rows using the context menu (three-dot icon)
- duplicate cards using the context menu or `Ctrl (Command)`+`D` (supports multiple cards)
- export board data to a JSON file
- manage history using keyboard shortcuts:
  - `Ctrl (Command)`+`Z` — reverts the last operation
  - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` — repeats the last reverted operation
- move cards by dragging them to a different column or row
- move columns and rows using the context menu
- rename columns and rows by double-clicking their labels or using the context menu
- open the card editor by clicking on a card
- collapse/uncollapse rows by clicking the arrow icon next to the row label
- collapse/uncollapse columns by clicking the arrow icon next to the column label
- select multiple cards:
    - `Shift` + click — selects multiple cards in the same column
    - `Ctrl (Command)` + click — selects cards across different columns

import board from '@site/static/img/js_kanban_board.png';

<img
  src={board}
  alt="Kanban Board"
  className="img_border"
/>

### Editor

The **Editor** is a modal panel with fields and controls for managing the selected card's data. To open it, click on a card. You can add custom fields and controls to the editor structure. Read more in the [Configuration](guides/configuration.md#editor) section.

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="Kanban Editor"
  className="img_border"
/>

## What's next

Follow the [How to start](how_to_start.md) guide to add Kanban to your application.
