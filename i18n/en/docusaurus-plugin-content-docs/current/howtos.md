---
sidebar_label: How-tos
title: JavaScript Kanban How-Tos
description: You can explore the How-tos page of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# How-tos

Here’s a handy reference for getting started with JavaScript Kanban, including setup, configuration, customization, and everyday use.

## Basic principles

This section covers the essentials for working with Kanban.

| Topic                                         | Description                                              |
| --------------------------------------------- | ---------------------------------------------------------|
| [Initialization](guides/initialization.md)                  | How to get Kanban up and running ([Example](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [Configuration](guides/configuration.md)                   | How to tweak Kanban settings                            |
| [Customization](guides/customization.md)                   | Ways to adjust Kanban to fit your needs                 |
| [Stylization](guides/stylization.md)                     | Options for changing Kanban’s look and feel             |
| [Localization](guides/localization.md)                    | How to set up Kanban for different languages ([Example](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API reference

Here you’ll find links to all the main Kanban API docs.

| Topic                                                 | Description                                              |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban events](api/overview/events_overview.md)      | Details on handling Kanban events                        |
| [Kanban methods](api/overview/methods_overview.md)    | Overview of available Kanban methods                     |
| [Kanban properties](api/overview/properties_overview.md)| Info on Kanban properties                             |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)| Working with Event Bus methods              |
| [RestDataProvider methods](api/overview/internal_rest_overview.md)| Using RestDataProvider methods               |
| [State methods](api/overview/internal_state_overview.md)| Managing state with State methods                      |
| [Toolbar methods](api/overview/toolbar_methods_overview.md)| Toolbar method options                              |
| [Toolbar properties](api/overview/toolbar_properties_overview.md)| Toolbar property details                     |

## How to work with cards

These sections break down how to manage cards, handle card data, and adjust card settings.

### Performing operations with cards

| Topic                                                        | Description                                 |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](api/methods/js_kanban_addcard_method.md)  | Steps for adding new cards ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](api/methods/js_kanban_deletecard_method.md) | How to remove cards ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](api/methods/js_kanban_movecard_method.md)     | How to move cards around ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))   |
| [Scrolling to the desired cards](api/methods/js_kanban_scroll_method.md)| How to scroll to a specific card|
| [Searching for cards](api/methods/js_kanban_setsearch_method.md)| How to find cards quickly            |
| [Selecting cards](api/methods/js_kanban_selectcard_method.md)| How to select cards                   |
| [Sorting cards](api/methods/js_kanban_setsort_method.md)     | How to sort cards                     |
| [Unselecting cards](api/methods/js_kanban_unselectcard_method.md)| How to unselect cards             |
| [Adding links between cards](api/config/js_kanban_links_config.md)| How to link cards together ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### Working with card data

| Topic                                                        | Description                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Getting card data](api/methods/js_kanban_getcard_method.md) | How to access card data                      |
| [Getting cards state](api/internal/js_kanban_getstate_method.md) | How to check the current state of cards                 |
| [Getting cards reactive state](api/internal/js_kanban_getreactivestate_method.md) | How to get the reactive state for cards |
| [Loading card data](api/config/js_kanban_cards_config.md)    | How to load initial card info             |
| [Parsing card data](api/methods/js_kanban_parse_method.md)   | How to parse card data                    |
| [Serializing card data](api/methods/js_kanban_serialize_method.md)| How to serialize card data ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](api/methods/js_kanban_updatecard_method.md)| How to update card info                |

### Configuring cards

| Topic                                                        | Description                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Adding new cards](api/config/js_kanban_readonly_config.md)  | Enable or disable adding new cards|
| [Binding cards into columns](api/config/js_kanban_columnkey_config.md) | How to assign cards to columns      |
| [Binding cards into rows](api/config/js_kanban_rowkey_config.md) | How to assign cards to rows               |
| [Configuring a card appearance](api/config/js_kanban_cardshape_config.md)| Options for card appearance|
| [Configuring a cards menu](api/config/js_kanban_cardshape_config.md)| How to set up a context menu for cards  ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](api/config/js_kanban_cardtemplate_config.md)| How to use templates for card appearance ([Example](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](api/config/js_kanban_readonly_config.md)    | Enable or disable drag-and-drop for cards|
| [Editing cards](api/config/js_kanban_readonly_config.md)     | Enable or disable editing for cards|
| [Lazy rendering](api/config/js_kanban_rendertype_config.md)| Enable or disable lazy rendering for lots of cards ([Example](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](api/config/js_kanban_columns_config.md)     | Set limits for cards in columns or swimlanes (**WIP validation**) ([Example](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](api/config/js_kanban_readonly_config.md)   | Enable or disable card selection|
| [Setting a fix height of cards](api/config/js_kanban_cardheight_config.md)| How to set a fixed card height   |
| [Updating card settings](api/methods/js_kanban_setconfig_method.md)| How to update card settings               |

## How to work with a card editor

Here’s how to use and configure the card editor.

| Topic                                                        | Description                                            |
| ------------------------------------------------------------ | -------------------------------------------------------|
| [Autosaving mode](api/config/js_kanban_editorautosave_config.md)| Enable or disable autosave for the editor |
| [Configuring editor fields](guides/configuration.md#editor)| How to set up editor fields                     |
| [Configuring the editor](guides/configuration.md#configuring-the-editor)| How to adjust editor settings           |
| [Updating editor settings](api/methods/js_kanban_setconfig_method.md)| How to update editor settings            |

## How to work with columns

These sections explain how to manage columns and deal with their data.

### Performing operations with columns

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new columns](api/methods/js_kanban_addcolumn_method.md) | How to add columns ([Example](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](api/config/js_kanban_columnshape_config.md)| How to set up a context menu for columns ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](api/methods/js_kanban_deletecolumn_method.md)| How to remove columns                         |
| [Moving columns](api/methods/js_kanban_movecolumn_method.md)    | How to move columns                           |
| [Scrolling to the desired columns](api/methods/js_kanban_scroll_method.md)| How to scroll to a specific column |
| [Separate scrolling for columns](api/config/js_kanban_scrolltype_config.md)| How to enable separate scrolling for each column ([Example](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### Working with column data

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column](api/methods/js_kanban_getareacards_method.md)| How to get cards for a specific column |
| [Getting columns state](api/internal/js_kanban_getstate_method.md) | How to check the current state of columns               |
| [Getting columns reactive state](api/internal/js_kanban_getreactivestate_method.md) | How to get the reactive state for columns |
| [Loading column data](api/config/js_kanban_columns_config.md)    | How to load initial column data          |
| [Parsing column data](api/methods/js_kanban_parse_method.md)     | How to parse column data                 |
| [Serializing column data](api/methods/js_kanban_serialize_method.md)| How to serialize column data          |
| [Updating column data](api/methods/js_kanban_updatecolumn_method.md)| How to update column info             |

## How to work with rows (swimlanes)

These sections go over row (swimlane) operations and data management.

### Performing operations with rows (swimlanes)

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new rows](api/methods/js_kanban_addrow_method.md)       | How to add rows (swimlanes)               |
| [Configuring a rows menu](api/config/js_kanban_rowshape_config.md)| How to set up a context menu for rows ([Example](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](api/methods/js_kanban_deleterow_method.md)      | How to remove rows (swimlanes)                |
| [Moving rows](api/methods/js_kanban_moverow_method.md)          | How to move rows (swimlanes)                  |
| [Scrolling to the desired row](api/methods/js_kanban_scroll_method.md)| How to scroll to a specific row (swimlane)|

### Working with row (swimlane) data

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column and row](api/methods/js_kanban_getareacards_method.md)| How to get cards for a specific column and row |
| [Getting rows state](api/internal/js_kanban_getstate_method.md) | How to check the current state of rows                     |
| [Getting rows reactive state](api/internal/js_kanban_getreactivestate_method.md) | How to get the reactive state for rows |
| [Loading row data](api/config/js_kanban_rows_config.md)         | How to load initial row data              |
| [Parsing row data](api/methods/js_kanban_parse_method.md)       | How to parse row data                     |
| [Serializing row data](api/methods/js_kanban_serialize_method.md)| How to serialize row data                |
| [Updating row data](api/methods/js_kanban_updaterow_method.md)  | How to update row info                    |

## How to work with events

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Executing events](api/internal/js_kanban_exec_method.md)   | How to trigger inner events               |
| [Intercepting events](api/internal/js_kanban_intercept_method.md)| How to intercept inner events        |
| [List of inner events](api/overview/events_overview.md)     | List of Kanban’s built-in events                |
| [Reordering events](api/internal/js_kanban_setnext_method.md)| How to change the order of inner events in the Event Bus |
| [Subscribing on events](api/internal/js_kanban_on_method.md)| How to subscribe to inner events          |

## How to work with Kanban REST API

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Loading server data for cards](api/provider/rest_methods/js_kanban_getcards_method.md)| How to pull card data from the server |
| [Loading server data for columns](api/provider/rest_methods/js_kanban_getcolumns_method.md)| How to pull column data from the server |
| [Loading server data for rows](api/provider/rest_methods/js_kanban_getrows_method.md)| How to pull row data from the server |
| [Working with server](guides/working_with_server.md)        | How to use the REST API with Kanban ([Example](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## How to work with Kanban state

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Getting StateStore and DataStore](api/internal/js_kanban_getstores_method.md)| How to access StateStore and DataStore objects |
| [Getting StateStore properties](api/internal/js_kanban_getstate_method.md)| How to get StateStore property objects |
| [Getting StateStore reactive properties](api/internal/js_kanban_getreactivestate_method.md)| How to get StateStore’s reactive property objects |

## How to work with Toolbar

| Topic                                                       | Description                                           |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Configuring a searchbar on Toolbar](api/config/toolbar_items_config.md) | How to add a searchbar to the Toolbar ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](api/config/toolbar_items_config.md) | How to add a sort control to the Toolbar ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](api/config/toolbar_items_config.md)| How to set up, customize, and reorder Toolbar controls ([Example](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)) |
| [Including Kanban API in Toolbar](api/config/toolbar_api_config.md) | How to use Kanban API features in the Toolbar |
| [Localizing Toolbar](api/config/toolbar_locale_config.md) | How to localize the Toolbar |

## How to work with TypeScript

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScript](guides/typescript_support.md)     | How to use Kanban with TypeScript                  |

## Any questions left?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
Questions can also be posted in the comments below!
:::