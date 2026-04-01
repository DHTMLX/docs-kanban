---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DHTMLX Kanban overview

JavaScript Kanban is a widget for workflow visualization. It helps you track team workload and understand where work is getting stuck. The component works with any number of cards, columns, and swimlanes. Written in pure JavaScript and CSS, it integrates into any web app or page without extra dependencies.

## Kanban structure­

### Toolbar

The **Toolbar** is a separate part of the Kanban interface. It includes a search bar for *searching* cards, a control for *sorting* cards by specified parameters, two controls for managing history (*undo/redo*), and controls for *adding new columns and rows*. You can customize the search and sort logic, add custom elements, or reorder the built-in controls. Read more in the [Configuration](guides/configuration.md#toolbar) section.

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
  src={toolbar}
  alt="Kanban Toolbar"
  className="img_border"
/>

### Board

The **Board** is the main part of Kanban. It consists of cards distributed into columns and rows (swimlanes). You can configure card appearance and apply a custom template. Read more in the [Configuration](guides/configuration.md#cards) section.

On the **Board** you can work with ***cards***, ***columns***, and ***rows*** in the following ways:

- add new cards by clicking on the plus icon (in accordance with the specified *limits* for each column and swimlane)
- add comments and votes for tasks via the editor panel ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- set links between tasks via the editor ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- delete cards, columns and rows using a context menu (a 3 dots icon)
- duplicate cards using a context menu (a 3 dots icon) or the `Ctrl (Command)`+`D` shortcuts (allows duplicating multiple cards)
- export Kanban data to a JSON file
- manage Kanban history using the following shortcuts:
    - `Ctrl (Command)`+`Z` - reverts the last operation in Kanban (one step back in the Kanban history)
    - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` - repeats the operation that was reverted by the *undo* action (one step forward in the Kanban history)
- move cards by dragging them to the desired place (row and column)
- move columns and rows using a context menu (a 3 dots icon)
- rename columns and rows by double-clicking on the corresponding labels or using a context menu (a 3 dots icon)
- open the card editor by clicking on a card
- collapse/uncollapse rows by clicking on the arrow icon on the left of the row label
- collapse/uncollapse columns by clicking on the arrow icon on the left of the column label
- select multiple cards using the following shortcuts:
    - `Shift` +  clicking on the corresponding cards, to select multiple cards in the same column
    - `Ctrl (Command)` + clicking on the corresponding cards, to select multiple cards in different columns

import board from '@site/static/img/js_kanban_board.png';

<img
  src={board}
  alt="Kanban Board"
  className="img_border"
/>

### Editor

The **Editor** is a modal panel with fields and controls for managing the selected card's data. To open the editor, click on a card. You can add custom fields and controls to the editor structure. Read more in the [Configuration](guides/configuration.md#editor) section.

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="Kanban Editor"
  className="img_border"
/>

## What's next

Follow the [How to start](how_to_start.md) guide to add Kanban to your application.
