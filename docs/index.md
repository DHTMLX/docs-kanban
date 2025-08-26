---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# DHTMLX Kanban overview

JavaScript Kanban is a handy tool for visualizing workflows. It makes it easier to see how your business processes work and get a sense of your team's workload. The tool is pretty adaptable, handling any number of cards, columns, and swimlanes. Since it's built with plain JavaScript and CSS, setting it up and customizing it is straightforward, and it fits right into any web app or web page.

## Kanban structure­

### Toolbar

The **Toolbar** in Kanban sits as a separate area of the interface. It comes with a search bar for finding cards, a control to sort cards by different options, undo/redo buttons for managing history, plus controls for adding new columns and rows. You can tweak how searching and sorting work, and it's easy to customize the Toolbar by adding your own elements or changing the order of the built-in ones. Details are in the [Configuration](/guides/configuration/#toolbar) section.

![Kanban Toolbar](/assets/js_kanban_toolbar.png)

### Board

The **Board** is where all the main action happens in Kanban. Here, cards are arranged into columns and rows (swimlanes). You can easily adjust how cards look or use your own templates. More on that in the [Configuration](/guides/configuration/#cards) section.

On the **Board** panel, you can interact with ***cards***, ***columns***, and ***rows*** in several ways:

- Add new cards by clicking the plus icon (keeping within any *limits* for each column and swimlane)
- Add comments and votes to tasks through the editor panel ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Set up links between tasks in the editor ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Delete cards, columns, and rows by using the context menu (three dots icon)
- Duplicate cards from the context menu (three dots icon) or with `Ctrl (Command)`+`D` (which lets you duplicate more than one card at once)
- Export Kanban data as a JSON file
- Manage Kanban history with these shortcuts:
    - `Ctrl (Command)`+`Z` to undo the last action (step back in Kanban history)
    - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` to redo something you just undid (step forward in Kanban history)
- Move cards around by dragging them wherever you want in columns or rows
- Move columns and rows using the context menu (three dots icon)
- Rename columns and rows by double-clicking their labels or through the context menu (three dots icon)
- Open a card editor just by clicking on a card
- Collapse or expand rows with the arrow icon to the left of the row label
- Collapse or expand columns with the arrow icon to the left of the column label
- Select more than one card with these shortcuts:
    - `Shift` + click to pick multiple cards in the same column
    - `Ctrl (Command)` + click to pick cards across different columns

![Kanban Board](/assets/js_kanban_board.png)

### Editor

The **Editor** pops up as a modal and gives you fields and controls to update details for the card you picked. Just click any card to bring it up. You can also set up the editor however you want by adding new fields or controls. Check out more info in the [Configuration](/guides/configuration/#editor) section.

![Kanban Editor](/assets/js_kanban_editor.png)

## What's next

To get started with Kanban in your app, head over to the [How to start](./how_to_start) tutorial for step-by-step help.
