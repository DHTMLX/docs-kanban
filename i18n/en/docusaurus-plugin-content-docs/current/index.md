---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DHTMLX Kanban overview

JavaScript Kanban is a handy tool for visualizing workflows. It makes it easier to see how business processes are going and gives a clear picture of how much work is on each team member's plate. The widget is flexible—use as many cards, columns, or swimlanes as needed. Since it’s built entirely with JavaScript and CSS, it’s simple to set up, customize, and plug into any web app or website.

## Kanban structure­

### Toolbar

The **Toolbar** is a separate part of the Kanban interface. It comes with a search bar for finding cards, a control to sort cards by different parameters, undo/redo buttons for managing history, and options for adding new columns and rows. The searching and sorting logic can be tailored, and the Toolbar layout is easy to update—add your own elements or rearrange the built-in ones. More details are in the [Configuration](guides/configuration.md#toolbar) section.

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
    src={toolbar}
    alt="Kanban Toolbar"
    className="img_border"
/>

### Board

The **Board** is the main area in Kanban. Here, cards are organized into columns and rows (swimlanes). The look of the cards can be changed as needed, and custom templates are supported. More info is available in the [Configuration](guides/configuration.md#cards) section.

On the **Board** panel, there are several things you can do with ***cards***, ***columns***, and ***rows***:

- Add cards by hitting the plus icon (as long as column and swimlane limits allow)
- Leave comments and votes on tasks through the editor panel ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Create links between tasks using the editor ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Remove cards, columns, or rows from the context menu (three dots icon)
- Duplicate cards using the context menu or with the `Ctrl (Command)`+`D` shortcut (works for multiple cards)
- Export Kanban data to a JSON file
- Use keyboard shortcuts for Kanban history:
    - `Ctrl (Command)`+`Z` to undo the last action
    - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` to redo an action
- Move cards around by dragging them to new spots (across rows and columns)
- Move columns and rows using the context menu (three dots icon)
- Rename columns and rows by double-clicking labels or using the context menu
- Open the card editor by clicking any card
- Collapse or expand rows by clicking the arrow next to the row label
- Collapse or expand columns by clicking the arrow next to the column label
- Select multiple cards:
    - Hold `Shift` and click to select several cards in the same column
    - Hold `Ctrl (Command)` and click to select cards in different columns

import board from '@site/static/img/js_kanban_board.png';

<img
    src={board}
    alt="Kanban Board"
    className="img_border"
/>

### Editor

The **Editor** is a modal panel with fields and controls for updating a selected card. Just click a card to bring up the editor. The layout and fields of the editor can be changed to fit your needs. More about this is in the [Configuration](guides/configuration.md#editor) section.

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="Kanban Editor"
    className="img_border"
/>

## What's next

To start using Kanban in your project, check out the [How to start](how_to_start.md) tutorial for step-by-step help.