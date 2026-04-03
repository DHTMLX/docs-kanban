---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DHTMLX Kanban overview

DHTMLX Kanban is a JavaScript widget for building Kanban boards. It's written in pure JavaScript and CSS, so you can drop it into any web page or app without framework dependencies.

The widget is made up of three parts: **Toolbar**, **Board**, and **Editor**. Understanding how these relate to each other will help you configure each one correctly — they're loosely coupled, but they share data through a common API.

## Kanban structure

### Toolbar

The **Toolbar** is a separate component that sits above the board. It gives your users a search bar, sort controls, undo/redo buttons, and controls for adding columns and rows.

You can customize it: reorder the built-in controls, remove ones you don't need, or inject your own elements. See [Configuration](guides/configuration.md#toolbar) for details.

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
  src={toolbar}
  alt="Kanban Toolbar"
  className="img_border"
/>

### Board

The **Board** is where cards live. Cards are organized into columns (stages) and rows (swimlanes). You can control which fields appear on each card and apply a fully custom card template if the defaults don't fit your use case. See [Configuration](guides/configuration.md#cards).

Here's what you and your users can do on the board:

- Add cards via the plus icon (subject to column and swimlane limits you define)
- Add comments and votes through the editor panel ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
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

The **Editor** opens when you click a card. It shows the fields for that card's data and lets your users edit them directly.

You can configure which fields appear in the editor and add custom fields on top of the defaults. The editor fields are linked to card fields through shared key names — you'll see how this works in [Configuration](guides/configuration.md#editor).

import editor from '@site/static/img/js_kanban_editor.png';

<img
  src={editor}
  alt="Kanban Editor"
  className="img_border"
/>

## What's next

To add the board to your page, start with [How to start](how_to_start.md).
