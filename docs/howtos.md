---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: You can explore the How-tos page of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How-tos

This page is a complete reference for getting started, setting up, tweaking, and managing JavaScript Kanban.

## Basic principles

Here are the main things to know when working with Kanban.

| Topic | Description |
| --------------------------------------------- | ---------------------------------------------------------|
| [Initialization](/guides/initialization) | How to set up Kanban ([Example](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [Configuration](/guides/configuration) | Ways to configure Kanban |
| [Customization](/guides/customization) | Steps to customize Kanban |
| [Stylization](/guides/stylization) | Options for styling Kanban |
| [Localization](/guides/localization) | How to localize Kanban ([Example](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API reference

Here are the Kanban API references you might need.

| Topic | Description |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban events](/api/overview/events_overview) | Working with Kanban events |
| [Kanban methods](/api/overview/methods_overview) | Using Kanban methods |
| [Kanban properties](/api/overview/properties_overview)| Accessing Kanban properties |
| [Event Bus methods](/api/overview/internal_eventbus_overview)| Event Bus methods |
| [RestDataProvider methods](/api/overview/internal_rest_overview)| RestDataProvider methods|
| [State methods](/api/overview/internal_state_overview)| State methods |
| [Toolbar methods](/api/overview/toolbar_methods_overview)| Toolbar methods |
| [Toolbar properties](/api/overview/toolbar_properties_overview)| Toolbar properties |

## How to work with cards

These sections cover how to manage cards, handle card data, and set up cards just how you want.

### Performing operations with cards

| Topic | Description |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](/api/methods/js_kanban_addcard_method) | How to add new cards ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](/api/methods/js_kanban_deletecard_method) | How to delete cards ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](/api/methods/js_kanban_movecard_method) | How to move cards ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Scrolling to the desired cards](/api/methods/js_kanban_scroll_method)| How to scroll Kanban to a specific card|
| [Searching for cards](/api/methods/js_kanban_setsearch_method)| How to search for cards |
| [Selecting cards](/api/methods/js_kanban_selectcard_method)| How to select cards |
| [Sorting cards](/api/methods/js_kanban_setsort_method) | How to sort cards |
| [Unselecting cards](/api/methods/js_kanban_unselectcard_method)| How to unselect cards |
| [Adding links between cards](/api/config/js_kanban_links_config)| How to add links between cards ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### Working with card data

| Topic | Description |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Getting card data](/api/methods/js_kanban_getcard_method) | How to get card data |
| [Getting cards state](/api/internal/js_kanban_getstate_method) | How to get card state |
| [Getting cards reactive state](/api/internal/js_kanban_getreactivestate_method) | How to get card reactive state |
| [Loading card data](/api/config/js_kanban_cards_config) | How to load initial card data |
| [Parsing card data](/api/methods/js_kanban_parse_method) | How to parse card data |
| [Serializing card data](/api/methods/js_kanban_serialize_method)| How to serialize card data ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](/api/methods/js_kanban_updatecard_method)| How to update card data |

### Configuring cards

| Topic | Description |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Adding new cards](/api/config/js_kanban_readonly_config) | Turning on or off the option to add new cards|
| [Binding cards into columns](/api/config/js_kanban_columnkey_config) | How to link cards to columns |
| [Binding cards into rows](/api/config/js_kanban_rowkey_config) | How to link cards to rows |
| [Configuring a card appearance](/api/config/js_kanban_cardshape_config)| How to set up how a card looks|
| [Configuring a cards menu](/api/config/js_kanban_cardshape_config)| How to set up the cards context menu ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](/api/config/js_kanban_cardtemplate_config)| How to use templates to change card appearance ([Example](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](/api/config/js_kanban_readonly_config) | Turning on or off drag-n-drop for cards|
| [Editing cards](/api/config/js_kanban_readonly_config) | Turning on or off editing for cards|
| [Lazy rendering](/api/config/js_kanban_rendertype_config)| Turning on or off **lazy rendering** for many cards ([Example](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](/api/config/js_kanban_columns_config) | Setting limits for columns and swimlanes (**WIP validation**) ([Example](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](/api/config/js_kanban_readonly_config) | Turning on or off card selection|
| [Setting a fix height of cards](/api/config/js_kanban_cardheight_config)| How to set a fixed height for cards |
| [Updating card settings](/api/methods/js_kanban_setconfig_method)| How to update card settings |

## How to work with a card editor

Check here for details on using the card editor.

| Topic | Description |
| ------------------------------------------------------------ | -------------------------------------------------------|
| [Autosaving mode](/api/config/js_kanban_editorautosave_config)| How to turn editor autosave on or off |
| [Configuring editor fields](/guides/configuration/#editor)| How to set up editor fields |
| [Configuring the editor](/guides/configuration/#configuring-the-editor)| How to set up the editor |
| [Updating editor settings](/api/methods/js_kanban_setconfig_method)| How to update editor settings |

## How to work with columns

Here's how to manage columns and handle column data.

### Performing operations with columns

| Topic | Description |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new columns](/api/methods/js_kanban_addcolumn_method) | How to add new columns ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](/api/config/js_kanban_columnshape_config)| How to set up the columns context menu ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](/api/methods/js_kanban_deletecolumn_method)| How to delete columns |
| [Moving columns](/api/methods/js_kanban_movecolumn_method) | How to move columns |
| [Scrolling to the desired columns](/api/methods/js_kanban_scroll_method)| How to scroll Kanban to a specific column |
| [Separate scrolling for columns](/api/config/js_kanban_scrolltype_config)| How to give each column its own scrolling ([Example](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### Working with column data

| Topic | Description |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column](/api/methods/js_kanban_getareacards_method)| How to get card data for a column |
| [Getting columns state](/api/internal/js_kanban_getstate_method) | How to get column state |
| [Getting columns reactive state](/api/internal/js_kanban_getreactivestate_method) | How to get column reactive state |
| [Loading column data](/api/config/js_kanban_columns_config) | How to load initial column data |
| [Parsing column data](/api/methods/js_kanban_parse_method) | How to parse column data |
| [Serializing column data](/api/methods/js_kanban_serialize_method)| How to serialize column data |
| [Updating column data](/api/methods/js_kanban_updatecolumn_method)| How to update column data |

## How to work with rows (swimlanes)

These sections show how to manage rows (swimlanes) and handle their data.

### Performing operations with rows (swimlanes)

| Topic | Description |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new rows](/api/methods/js_kanban_addrow_method) | How to add new rows (swimlanes) |
| [Configuring a rows menu](/api/config/js_kanban_rowshape_config)| How to set up the rows (swimlanes) context menu ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](/api/methods/js_kanban_deleterow_method) | How to delete rows (swimlanes) |
| [Moving rows](/api/methods/js_kanban_moverow_method) | How to move rows (swimlanes) |
| [Scrolling to the desired row](/api/methods/js_kanban_scroll_method)| How to scroll Kanban to a specific row (swimlane)|

### Working with row (swimlane) data

| Topic | Description |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column and row](/api/methods/js_kanban_getareacards_method)| How to get card data for a column and row |
| [Getting rows state](/api/internal/js_kanban_getstate_method) | How to get row state |
| [Getting rows reactive state](/api/internal/js_kanban_getreactivestate_method) | How to get row reactive state |
| [Loading row data](/api/config/js_kanban_rows_config) | How to load initial row data |
| [Parsing row data](/api/methods/js_kanban_parse_method) | How to parse row data |
| [Serializing row data](/api/methods/js_kanban_serialize_method)| How to serialize row data |
| [Updating row data](/api/methods/js_kanban_updaterow_method) | How to update row data |

## How to work with events

| Topic | Description |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Executing events](/api/internal/js_kanban_exec_method) | Running an inner event |
| [Intercepting events](/api/internal/js_kanban_intercept_method)| How to intercept an inner event |
| [List of inner events](/api/overview/events_overview) | Kanban inner events list |
| [Reordering events](/api/internal/js_kanban_setnext_method)| How to change Event Bus order for an inner event |
| [Subscribing on events](/api/internal/js_kanban_on_method)| How to subscribe to an inner event |

## How to work with Kanban REST API

| Topic | Description |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Loading server data for cards](/api/provider/rest_methods/js_kanban_getcards_method)| How to load card data from the server |
| [Loading server data for columns](/api/provider/rest_methods/js_kanban_getcolumns_method)| How to load column data from the server |
| [Loading server data for rows](/api/provider/rest_methods/js_kanban_getrows_method)| How to load row data from the server |
| [Working with server](/guides/working_with_server) | How to work with the server via REST API ([Example](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## How to work with Kanban state

| Topic | Description |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Getting StateStore and DataStore](/api/internal/js_kanban_getstores_method)| How to get StateStore and DataStore objects |
| [Getting StateStore properties](/api/internal/js_kanban_getstate_method)| How to get StateStore property objects |
| [Getting StateStore reactive properties](/api/internal/js_kanban_getreactivestate_method)| How to get StateStore reactive property objects |

## How to work with Toolbar

| Topic | Description |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Configuring a searchbar on Toolbar](/api/config/toolbar_items_config) | How to set up a searchbar on Toolbar ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](/api/config/toolbar_items_config) | How to set up a sort control on Toolbar ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](/api/config/toolbar_items_config)| How to set up, customize, and reorder Toolbar controls ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)) |
| [Including Kanban API in Toolbar](/api/config/toolbar_api_config) | How to include and use the Kanban API in Toolbar |
| [Localizing Toolbar](/api/config/toolbar_locale_config) | How to localize Toolbar |

## How to work with TypeScript

| Topic | Description |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScript](/guides/typescript_support) | How to use TypeScript with Kanban |

## Any questions left?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
Questions can also go in the comments below!
:::
