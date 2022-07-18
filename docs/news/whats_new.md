---
sidebar_label: What's new
title: What's New
description: You can explore what's new in DHTMLX Kanban and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# What's new

If you are updating Kanban from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 1.2

Released on June 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### New functionality 

- Adding new cards via a column menu (see the [**example**](https://snippet.dhtmlx.com/8eo65gr5?text=#kanban))
- Lazy rendering (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))
- Scrolling for separate columns (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))
- Scrolling Kanban to the new created cards, columns and rows (API and UI) (see the [**example**](https://snippet.dhtmlx.com/5hcx01h4?text=#kanban))
- Sorting cards (API and UI) (see the [**example**](https://snippet.dhtmlx.com/74nyuv14?text=#kanban))

### New API

- **Events:**
	[`scroll`](../../api/events/js_kanban_scroll_event),
	[`set-edit`](../../api/events/js_kanban_setedit_event), and
	[`set-sort`](../../api/events/js_kanban_setsort_event)

- **Methods:**
	[`scroll()`](../../api/methods/js_kanban_scroll_method),
	[`setEdit()`](../../api/methods/js_kanban_setedit_method),
	[`setSort()`](../../api/methods/js_kanban_setsort_method), and 
	[`getUsers()`](../../api/provider/js_kanban_getusers_method),

- **Properties:**
	[`cardHeight`](../../api/config/js_kanban_cardheight_config),
	[`columnShape`](../../api/config/js_kanban_columnshape_config),
	[`rowShape`](../../api/config/js_kanban_rowshape_config), 
	[`renderType`](../../api/config/js_kanban_rendertype_config), and
	[`scrollType`](../../api/config/js_kanban_scrolltype_config)

### Updates

#### Properties

- The [`items`](../../api/config/toolbar_items_config) property of Toolbar is updated
- The ***start_date***, ***end_date***, ***menu*** and ***users*** parameters (fields) of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property are updated
- The ***multiselect*** type of the [`editorShape`](../../api/config/js_kanban_editorshape_config) property is updated

#### Methods

- The [`api.getReactiveState()`](../../api/internal/js_kanban_getreactivestate_method) method is updated
- The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method is updated
- The [`api.getStores()`](../../api/internal/js_kanban_getstores_method) method is updated
- The [`setLocale()`](../../api/methods/js_kanban_setlocale_method) method of Kanban is updated
- The [`setLocale()`](../../api/methods/toolbar_setlocale_method) method of Toolbar is updated

#### Common

- Prefixes of CSS classes (*see the [Stylization](../../guides/stylization) section*)
- Locale structure (*see the [Localization](../../guides/localization) section*)

### Fixes

- Binding cards to swimlanes via the `rowKey` config works incorrectly
- Clicking on card menu opens editor
- Dragging several cards works incorrectly
- Editing cards when `select: false` (**readonly** config) works incorrectly
- Selecting new added cards via the `addCard()` method works incorrectly
- The `label: false` and `menu: false` parameters of the `cardShape` property work incorrectly

## Version 1.1.1

Released on February 28, 2022

[Review of release on the blog](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Fixes

- Custom editor field doesn't work without defining it in a cardShape config
- Selecting the required card from the dropdown menu of the search bar

## Version 1.1

Released on February 15, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### New functionality

- The ability to *collapse/expand* columns using an arrow on the left of the column label
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

#### Properties

- The [`cards`](../../api/config/js_kanban_cards_config) property is became optional

- The [`columns`](../../api/config/js_kanban_columns_config) property is became optional and extended by the following parameters:
	- ***collapsed***
	- ***limit***
	- ***strictLimit***

- The ***color*** parameter of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property is updated

#### Methods

- The [`addColumn`](../../api/methods/js_kanban_addcolumn_method) method is updated
- The [`addRow`](../../api/methods/js_kanban_addrow_method) method is updated
- The [`updateCard`](../../api/methods/js_kanban_updatecard_method) method is updated
- The [`updateColumn`](../../api/methods/js_kanban_updatecolumn_method) method is updated
- The [`updateRow`](../../api/methods/js_kanban_updaterow_method) method is updated
- The [`parse`](../../api/methods/js_kanban_parse_method) method is updated

#### Events

- The [`add-column`](../../api/events/js_kanban_addcolumn_event) event is updated
- The [`add-row`](../../api/events/js_kanban_addrow_event) event is updated
- The [`update-card`](../../api/events/js_kanban_updatecard_event) event is updated
- The [`update-column`](../../api/events/js_kanban_updatecolumn_event) event is updated
- The [`update-row`](../../api/events/js_kanban_updaterow_event) event is updated

## Version 1.0

Released on November 23, 2021

[Review of release on the blog](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Initial functionality

- The ability to work with **cards** in the following way:
	- add new cards
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
	- collapse/expand rows

- [Localization](../../guides/localization)
- [Integration with backend](../../guides/working_with_server) (Go and Node)
- Cross browser compatibility
- Touch support
