---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DHTMLX Kanban overview

DHTMLX Kanban is a JavaScript widget for building Kanban boards. No framework required — just a JS file and a CSS file.

The widget has three parts: **Toolbar**, **Board**, and **Editor**. They're loosely coupled. The Toolbar is optional. The Editor fields are configured independently of the card fields (this distinction matters once you start customizing both).

## Kanban structure

### Toolbar

The **Toolbar** is a separate component — it's not embedded in the board. It holds the search bar, sort control, undo/redo buttons, and controls to add columns and rows.

You can reorder the built-in controls, remove the ones you don't need, or inject custom elements. See [Configuration → Toolbar](guides/configuration.md#toolbar) for details.

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
  src={toolbar}
  alt="Kanban Toolbar"
  className="img_border"
/>

### Board

The **Board** is the main working area. Cards are organized into columns (stages) and rows (swimlanes). Card appearance is configurable — you can use predefined fields or replace the default template entirely. See [Configuration → Cards](guides/configuration.md#cards).

On the board you can:

- Add cards via the plus icon (subject to column and swimlane limits)
- Add comments and votes via the editor panel ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Link cards to each other via the editor ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Delete, duplicate, or move cards, columns, and rows via the context menu
- Duplicate multiple selected cards at once with `Ctrl (Command)`+`D`
- Export board data to JSON
- Undo/redo with keyboard shortcuts:
  - `Ctrl (Command)`+`Z` — undo
  - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` — redo
- Drag cards to a different column or row
- Rename columns and rows by double-clicking their labels or via the context menu
- Open the card editor by clicking a card
- Collapse/expand rows and columns via the arrow icon
- Select multiple cards:
  - `Shift` + click — cards in the same column
  - `Ctrl (Command)` + click — cards across different columns

import board from '@site/static/img/js_kanban_board.png';

<img
  src={board}
  alt="Kanban Board"
  className="img_border"
/>

### Editor

The **Editor** opens when you click a card. It shows the fields for that card's data.

By default it renders whatever fields you've enabled in `cardShape`. You can add more fields and controls on top of that. See [Configuration → Editor](guides/configuration.md#editor).

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="Kanban Editor"
  className="img_border"
/>

## What's next

To put a board on a page, start with [How to start](how_to_start.md).
