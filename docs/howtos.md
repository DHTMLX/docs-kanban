---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: You can explore the How-tos page of DHTMLX JavaScript Kanban library in the documentation Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How-tos

This page provides all the information that you need to configure JavaScript Kanban. If you are interested in detailed information about the working principles behind Kanban, refer to the corresponding sections below.

## Basic principles

In this section you can find out basic principles of work with Kanban

| Topic                                         | Description                                              |
| --------------------------------------------- | ---------------------------------------------------------|
| [](guides/initialization.md)                  | Learn how to initialize Kanban ([Example](https://snippet.dhtmlx.com/gb50vyip?mode=wide&text=kanban))|
| [](guides/configuration.md)                   | Learn how to configure Kanban                            |
| [](guides/customization.md)                   | Learn how to customize Kanban                            |
| [](guides/stylization.md)                     | Learn how to stylize Kanban                              |
| [](guides/localization.md)                    | Learn how to localize Kanban ([Example](https://snippet.dhtmlx.com/hrblf1mm?mode=wide&text=kanban))|

## API reference

In this section you can find out corresponding references of Kanban API

| Topic                                                 | Description                                              |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban events](api/overview/events_overview.md)      | Learn how to work with Kanban events                     |
| [Kanban methods](api/overview/methods_overview.md)    | Learn how to work with Kanban methods                    |
| [Kanban properties](api/overview/properties_overview.md)| Learn how to work with Kanban properties               |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)| Learn how to work with Event Bus methods        |
| [RestDataProvider methods](api/overview/internal_rest_overview.md)| Learn how to work with RestDataProvider methods|
| [State methods](api/overview/internal_state_overview.md)| Learn how to work with State methods                   |
| [Toolbar methods](api/overview/toolbar_methods_overview.md)| Learn how to work with Toolbar methods              |
| [Toolbar properties](api/overview/toolbar_properties_overview.md)| Learn how to work with Toolbar properties     |

## How to work with cards

In these sections you can find out how to perform operations with cards, work with cards data and corfigure cards

### Performing operations with cards

| Topic                                                        | Description                                 |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](api/methods/js_kanban_addcard_method.md)  | Learn how to add new cards ([Example](https://snippet.dhtmlx.com/61crsls3?text=kanban))|
| [Deleting cards](api/methods/js_kanban_deletecard_method.md) | Learn how to delete cards ([Example](https://snippet.dhtmlx.com/61crsls3?text=kanban)) |
| [Moving cards](api/methods/js_kanban_movecard_method.md)     | Learn how to move cards ([Example](https://snippet.dhtmlx.com/61crsls3?text=kanban))   |
| [Scrolling to the desired cards](api/methods/js_kanban_scroll_method.md)| Learn how to scroll Kanban to the desired card|
| [Searching for cards](api/methods/js_kanban_setsearch_method.md)| Learn how to search for cards            |
| [Selecting cards](api/methods/js_kanban_selectcard_method.md)| Learn how to select cards                   |
| [Sorting cards](api/methods/js_kanban_setsort_method.md)     | Learn how to sort cards                     |
| [Unselecting cards](api/methods/js_kanban_unselectcard_method.md)| Learn how to unselect cards             |

### Working with card data

| Topic                                                        | Description                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Getting card data](api/methods/js_kanban_getcard_method.md) | Learn how to get the card data                      |
| [Loading card data](api/config/js_kanban_cards_config.md)    | Learn how to load the initial card data             |
| [Parsing card data](api/methods/js_kanban_parse_method.md)   | Learn how to parse the card data                    |
| [Serializing card data](api/methods/js_kanban_serialize_method.md)| Learn how to serialize the card data ([Example](https://snippet.dhtmlx.com/61crsls3?text=kanban))|
| [Updating card data](api/methods/js_kanban_updatecard_method.md)| Learn how to update the card data                |

### Configuring cards

| Topic                                                        | Description                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Adding new cards](api/config/js_kanban_readonly_config.md)  | Learn how to enable/disable an ability to add new cards|
| [Binding cards into columns](api/config/js_kanban_columnkey_config.md) | Learn how to bind cards into columns      |
| [Binding cards into rows](api/config/js_kanban_rowkey_config.md) | Learn how to bind cards into rows               |
| [Configuring a card appearance](api/config/js_kanban_cardshape_config.md)| Learn how to configure a card appearance|
| [Configuring a cards menu](api/config/js_kanban_cardshape_config.md)| Learn how to configure a cards context menu  ([Example](https://snippet.dhtmlx.com/8eo65gr5?text=#kanban))|
| [Customizing a card appearance](api/config/js_kanban_cardtemplate_config.md)| Learn how to customize a card appearance using templates ([Example](https://snippet.dhtmlx.com/8rhdq81d?text=kanban))|
| [Dragging cards](api/config/js_kanban_readonly_config.md)    | Learn how to enable/disable an ability to drag-n-drop cards|
| [Editing cards](api/config/js_kanban_readonly_config.md)     | Learn how to enable/disable an ability to edit cards|
| [Lazy rendering](api/config/js_kanban_rendertype_config.md)| Learn how to enable/disable **lazy rendering** of a big number of cards ([Example](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](api/config/js_kanban_columns_config.md)     | Learn how to limit cards for columns and swimlanes (**WIP validation**) ([Example](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](api/config/js_kanban_readonly_config.md)   | Learn how to enable/disable an ability to select cards|
| [Setting a fix height of cards](api/config/js_kanban_cardheight_config.md)| Learn how to set a fix height of cards   |
| [Updating card settings](api/methods/js_kanban_setconfig_method.md)| Learn how to update card settings               |

## How to work with a card editor

In this section you can find out how to work with a card editor

| Topic                                                        | Description                                            |
| ------------------------------------------------------------ | -------------------------------------------------------|
| [Autosaving mode](api/config/js_kanban_editorautosave_config.md)| Learn how to enable/disable an editor autosave mode |
| [Configuring an editor appearance](api/config/js_kanban_editorshape_config.md)| Learn how to configure an editor appearance|
| [Updating editor settings](api/methods/js_kanban_setconfig_method.md)| Learn how to update editor settings            |

## How to work with columns

In these sections you can find out how to perform operations with colums and work with columns data

### Performing operations with columns

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new columns](api/methods/js_kanban_addcolumn_method.md) | Learn how to add new columns ([Example](https://snippet.dhtmlx.com/61crsls3?text=kanban))|
| [Configuring a columns menu](api/config/js_kanban_columnshape_config.md)| Learn how to configure a columns context menu ([Example](https://snippet.dhtmlx.com/8eo65gr5?text=#kanban))|
| [Deleting columns](api/methods/js_kanban_deletecolumn_method.md)| Learn how to delete columns                         |
| [Moving columns](api/methods/js_kanban_movecolumn_method.md)    | Learn how to move columns                           |
| [Scrolling to the desired columns](api/methods/js_kanban_scroll_method.md)| Learn how to scroll Kanban to the desired column |
| [Separate scrolling for columns](api/config/js_kanban_scrolltype_config.md)| Learn how to set a separate scrolling for each column ([Example](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|

### Working with column data

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column](api/methods/js_kanban_getareacards_method.md)| Learn how to get the card data of the column |
| [Loading column data](api/config/js_kanban_columns_config.md)    | Learn how to load the initial column data          |
| [Parsing column data](api/methods/js_kanban_parse_method.md)     | Learn how to parse the column data                 |
| [Serializing column data](api/methods/js_kanban_serialize_method.md)| Learn how to serialize the column data          |
| [Updating column data](api/methods/js_kanban_updatecolumn_method.md)| Learn how to update the column data             |

## How to work with rows (swimlanes)

In these sections you can find out how to perform operations with rows and work with rows data

### Performing operations with rows (swimlanes)

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new rows](api/methods/js_kanban_addrow_method.md)       | Learn how to add new rows (swimlanes)               |
| [Configuring a rows menu](api/config/js_kanban_rowshape_config.md)| Learn how to configure a rows (swimlanes) context menu ([Example](https://snippet.dhtmlx.com/8eo65gr5?text=#kanban))|
| [Deleting rows](api/methods/js_kanban_deleterow_method.md)      | Learn how to delete rows (swimlanes)                |
| [Moving rows](api/methods/js_kanban_moverow_method.md)          | Learn how to move rows (swimlanes)                  |
| [Scrolling to the desired row](api/methods/js_kanban_scroll_method.md)| Learn how to scroll Kanban to the desired row (swimlane)|

### Working with row (swimlane) data

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column and row](api/methods/js_kanban_getareacards_method.md)| Learn how to get the card data of the column and row |
| [Loading row data](api/config/js_kanban_rows_config.md)         | Learn how to load the initial row data              |
| [Parsing row data](api/methods/js_kanban_parse_method.md)       | Learn how to parse the row data                     |
| [Serializing row data](api/methods/js_kanban_serialize_method.md)| Learn how to serialize the row data                |
| [Updating row data](api/methods/js_kanban_updaterow_method.md)  | Learn how to update the row data                    |

## How to work with events

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Executing events](api/internal/js_kanban_exec_method.md)   | Learn how to execute the inner event               |
| [Intercepting events](api/internal/js_kanban_intercept_method.md)| Learn how to intercept the inner event        |
| [List of inner events](api/overview/events_overview.md)     | See the list of Kanban inner events                |
| [Reordering events](api/internal/js_kanban_setnext_method.md)| Learn how to add the inner event into the Event Bus order |
| [Subscribing on events](api/internal/js_kanban_on_method.md)| Learn how to subscribe on the inner event          |

## How to work with Kanban REST API

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Loading server data for cards](api/provider/js_kanban_getcards_method.md)| Learn how to load server data for cards |
| [Loading server data for columns](api/provider/js_kanban_getcolumns_method.md)| Learn how to load server data for columns |
| [Loading server data for rows](api/provider/js_kanban_getrows_method.md)| Learn how to load server data for rows |
| [Working with server](guides/working_with_server.md)        | Learn how to work with server via REST API ([Example](https://snippet.dhtmlx.com/f25y0809?text=kanban))|

## How to work with Kanban state

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Getting StateStore and DataStore](api/internal/js_kanban_getstores_method.md)| Learn how to get StateStore and DataStore objects |
| [Getting StateStore properties](api/internal/js_kanban_getstate_method.md)| Learn how to get an object of the StateStore properties |
| [Getting StateStore reactive properties](api/internal/js_kanban_getreactivestate_method.md)| Learn how to get an object of the StateStore reactive properties |

## How to work with Toolbar

| Topic                                                       | Description                                           |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Configuring a searchbar on Toolbar](api/config/toolbar_items_config.md) | Learn how to configure a searchbar on Toolbar ([Example](https://snippet.dhtmlx.com/s5r5h4ju?text=kanban))|
| [Configuring a sort control on Toolbar](api/config/toolbar_items_config.md) | Learn how to configure a sort control on Toolbar ([Example](https://snippet.dhtmlx.com/s5r5h4ju?text=kanban))|
| [Configuring Toolbar controls](api/config/toolbar_items_config.md)| Learn how to configure, customize and reorder the Toolbar contols ([Example](https://snippet.dhtmlx.com/s5r5h4ju?text=kanban)) |
| [Including Kanban API in Toolbar](api/config/toolbar_api_config.md) | Learn how to include and use Kanban API in Toolbar |
| [Localizing Toolbar](api/config/toolbar_locale_config.md) | Learn how to localize Toolbar |

## How to work with TypeScript

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScript](guides/typescript_support.md)     | Learn how to work with TypeScript                  |

## Any questions left?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
You can also leave your questions in the comments below!
:::