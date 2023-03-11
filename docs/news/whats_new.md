---
sidebar_label: What's new
title: What's New
description: You can explore what's new in DHTMLX Kanban and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# What's new

If you are updating Kanban from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 1.4

Released on Month Day, 2022 [TODO]

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### New functionality

- An ability to add comments. See the following examples: 
	- [Kanban. Comments](https://snippet.dhtmlx.com/f9ponfsg)
	- [Kanban. Comments on a separate page](https://snippet.dhtmlx.com/waal2pd4)
	- [Kanban. HTML markup in comments](https://snippet.dhtmlx.com/q34l0yl4)
	- [Kanban. Markdown parser in comments](https://snippet.dhtmlx.com/25hvpo7n)
- An ability to limit users (see the [example](https://snippet.dhtmlx.com/2rlg4qvk))
- An ability to set links between cards (see the [example](https://snippet.dhtmlx.com/81qu7qh0))

### New API

- **Events:**
	[`add-comment`](../../api/events/js_kanban_addcomment_event),
	[`delete-comment`](../../api/events/js_kanban_deletecomment_event),
	[`update-comment`](../../api/events/js_kanban_updatecomment_event),
	[`add-link`](../../api/events/js_kanban_addlink_event),
	[`delete-link`](../../api/events/js_kanban_deletelink_event),
	[`start-drag-card`](../../api/events/js_kanban_startdragcard_event),
	[`drag-card`](../../api/events/js_kanban_dragcard_event) and
	[`end-drag-card`](../../api/events/js_kanban_enddragcard_event)

- **Methods:**
	[`addComment()`](../../api/methods/js_kanban_addcomment_method),
	[`deleteComment()`](../../api/methods/js_kanban_deletecomment_method) and
	[`updateComment()`](../../api/methods/js_kanban_updatecomment_method)

- **Properties:**
	[`currentUser`](../../api/config/js_kanban_currentuser_config)
	[`links`](../../api/config/js_kanban_links_config)

### Updates
- #### Properties

	- The [`cardShape`](../../api/config/js_kanban_cardshape_config) property is extended by the ***comments***, ***css*** and ***votes*** parameters.
	- The [`columnShape`](../../api/config/js_kanban_columnshape_config) property is extended by the ***css*** parameter.
	- The [`rowShape`](../../api/config/js_kanban_rowshape_config) property is extended by the ***css*** parameter.
	- The [`cards`](../../api/config/js_kanban_cards_config) property is extended by the ***parent*** and ***css***  parameter
	- The [`columns`](../../api/config/js_kanban_columns_config) property is extended by the ***css***  parameter
	- The [`rows`](../../api/config/js_kanban_rows_config) property is extended by the ***css***  parameter
	- The [`editorShape`](../../api/config/js_kanban_editorshape_config) property is extended by the [***comments***](../../guides/configuration/#comments-type) and [***links***](../../guides/configuration/#links-type) types, and ***format*** parameter for *date/dateRange* types
	- The [`editor`](../../api/config/js_kanban_editor_config) property is extended by the [***show*** and ***placement***](../../guides/configuration/#configuring-a-built-in-editor)  parameters

## Version 1.3

Released on September 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### New functionality

- Duplicating cards via API, a context menu (3 dots icon) or the `Ctrl (Command)` + `D` shortcuts (allows duplicating multiple cards)
- Exporting Kanban data to a JSON file
- Managing Kanban history:
	- via *Undo* and *Redo* controls on Toolbar
	- via shortcuts:
		- `Ctrl (Command)`+`Z` - undo action
		- `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` - redo action
	- via API

### New API

- **Events:**
	[`duplicate-card`](../../api/events/js_kanban_duplicatecard_event)

- **Methods:**
	[`duplicateCard()`](../../api/methods/js_kanban_duplicatecard_method),
	[`export.json()`](../../api/internal/js_kanban_json_method),
	[`getUsers()`](../../api/provider/js_kanban_getusers_method),
	[`redo()`](../../api/methods/js_kanban_redo_method) and
	[`undo()`](../../api/methods/js_kanban_undo_method)

- **Properties:**
	[`editor`](../../api/config/js_kanban_editor_config) and
	[`history`](../../api/config/js_kanban_history_config)

- **Common settings:**
	[`$meta`](../../api/common/js_kanban_meta_parameter)

### Deprecated API

- **Properties:**
	[`editorAutoSave`](../../api/config/js_kanban_editorautosave_config)

### Updates

- #### Events

	- The [`update-card`](../../api/events/js_kanban_updatecard_event) event of Kanban is updated
	- The [`update-column`](../../api/events/js_kanban_updatecolumn_event) event of Kanban is updated
	- The [`update-row`](../../api/events/js_kanban_updaterow_event) event of Kanban is updated

- #### Methods

	- The [`updateCard()`](../../api/methods/js_kanban_updatecard_method) method of Kanban is updated
	- The [`updateColumn()`](../../api/methods/js_kanban_updatecolumn_method) method of Kanban is updated
	- The [`updateRow()`](../../api/methods/js_kanban_updaterow_method) method of Kanban is updated

- #### Properties

	- The [`items`](../../api/config/toolbar_items_config) property of Toolbar is extended by the ***"undo"*** and ***"redo"*** parameters (controls)
	- The [`editorShape`](../../api/config/js_kanban_editorshape_config) property is extended by the ***dateRange*** type

## Version 1.2.2

Released on August 30, 2022

### Fixes

- Duplicating of some icons in menu and toolbar

## Version 1.2.1

Released on July 28, 2022

### Fixes​

- The `cardHeight` property doesn't work with the enabled `scrollType:"column"` config
- Uploader doesn't show uploaded files in card editor
- Localization doesn't work for "combo" and "progress" fields in card editor

## Version 1.2

Released on June 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### New functionality 

- Adding new cards via a column menu (see the [**example**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Lazy rendering (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Scrolling for separate columns (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Scrolling Kanban to the new created cards, columns and rows (API and UI) (see the [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Sorting cards (API and UI) (see the [**example**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### New API

- **Events:**
	[`scroll`](../../api/events/js_kanban_scroll_event),
	[`set-edit`](../../api/events/js_kanban_setedit_event), and
	[`set-sort`](../../api/events/js_kanban_setsort_event)

- **Methods:**
	[`scroll()`](../../api/methods/js_kanban_scroll_method),
	[`setEdit()`](../../api/methods/js_kanban_setedit_method) and
	[`setSort()`](../../api/methods/js_kanban_setsort_method)

- **Properties:**
	[`cardHeight`](../../api/config/js_kanban_cardheight_config),
	[`columnShape`](../../api/config/js_kanban_columnshape_config),
	[`rowShape`](../../api/config/js_kanban_rowshape_config), 
	[`renderType`](../../api/config/js_kanban_rendertype_config), and
	[`scrollType`](../../api/config/js_kanban_scrolltype_config)

### Updates

- #### Methods

	- The [`api.getReactiveState()`](../../api/internal/js_kanban_getreactivestate_method) method is updated
	- The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method is updated
	- The [`api.getStores()`](../../api/internal/js_kanban_getstores_method) method is updated
	- The [`setLocale()`](../../api/methods/js_kanban_setlocale_method) method of Kanban is updated
	- The [`setLocale()`](../../api/methods/toolbar_setlocale_method) method of Toolbar is updated

- #### Properties

	- The [`items`](../../api/config/toolbar_items_config) property of Toolbar is updated
	- The ***start_date***, ***end_date***, ***menu*** and ***users*** parameters (fields) of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property are updated
	- The ***multiselect*** type of the [`editorShape`](../../api/config/js_kanban_editorshape_config) property is updated

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
