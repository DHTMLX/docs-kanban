---
sidebar_label: What's new
title: What's New
description: You can explore what's new in DHTMLX Kanban and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# What's new

If you are updating Kanban from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 1.1.1

Released on February 28, 2022
### Fixes

- Custom editor field doesn't work without defining it in a card shape
- Selecting the required card from the dropdown menu of the search bar

## Version 1.1

Released on February 15, 2022

### New functionality

- The ability to *collapse/uncollapse* columns using an arrow on the left of the column label
- The ability to *limit* the number of cards for the columns and swimlanes
- The ability to *move* columns via the context menu (a 3 dots icon)
- The ability to *move* rows via the context menu (a 3 dots icon)
- The ability to *select multiple cards* of the same column using the familiar **Shift** + **click** combination
- The ability to use [TypeScript definitions](../../guides/typescript_support) of Kanban

### New API

- New **events** for moving columns and rows: 
	[`move-column`](../../api/events/js_kanban_movecolumn_event)
	and
	[`move-row`](../../api/events/js_kanban_moverow_event)
- New **methods** for moving columns and rows: 
	[`moveColumn()`](../../api/methods/js_kanban_movecolumn_method) 
	and
	[`moveRow()`](../../api/methods/js_kanban_moverow_method)

### Updates

- The [`columns`](../../api/config/js_kanban_columns_config) property was updated and extended by the following parameters:
	- ***`collapsed`***
	- ***`limit`***
	- ***`strictLimit`***

## Version 1.0

Released on November 23, 2021

### Initial functionality

- The ability to work with **cards** in the following way:
	-	add new cards
	- select cards (multiselection)
	- delete cards
	- search for cards
	- reorder cards by dragging them to the desired column (and row)
	- manage the card data via the editor:
		- label
		- description
		- progress
		- start date
		- end date
		- color
		- priority
		- attachment (*files* and *pictures*)
		- *custom fields*

- Ability to work with **columns** and **rows** in the following way:
	- add new columns and rows
	- delete columns and rows
	- rename columns and rows
	- collapse/uncollapse rows

- [Localization](../../guides/localization)
- [Integration with backend](../../guides/working_with_server) (Go and Node)
- Cross browser compatibility
- Touch support