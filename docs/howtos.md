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
| [](guides/initialization.md)                  | Learn how to initialize Kanban                           |
| [](guides/configuration.md)                   | Learn how to configure Kanban                            |
| [](guides/customization.md)                   | Learn how to customize Kanban                            |
| [](guides/localization.md)                    | Learn how to localize Kanban                             |

## API reference

In this section you can find out corresponding references of Kanban API

| Topic                                                 | Description                                              |
| ----------------------------------------------------- | ---------------------------------------------------------|
| [Kanban methods](api/overview/methods_overview.md)    | Learn how to work with Kanban methods                    |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)| Learn how to work with Event Bus methods        |
| [State methods](api/overview/internal_state_overview.md)| Learn how to work with State methods                   |
| [RestDataProvider methods](api/overview/internal_rest_overview.md)| Learn how to work with RestDataProvider methods|
| [Kanban events](api/overview/events_overview.md)      | Learn how to work with Kanban events                     |
| [Kanban properties](api/overview/properties_overview.md)| Learn how to work with Kanban properties               |

## How to work with cards

In these sections you can find out how to perform operations with cards, work with cards data and corfigure cards

### Performing operations with cards

| Topic                                                        | Description                                 |
| ------------------------------------------------------------ | --------------------------------------------|
| [Adding new cards](api/methods/js_kanban_addcard_method.md)  | Learn how to add new cards                  |
| [Deleting cards](api/methods/js_kanban_deletecard_method.md) | Learn how to delete cards                   |
| [Moving cards](api/methods/js_kanban_movecard_method.md)     | Learn how to move cards                     |
| [Selecting cards](api/methods/js_kanban_selectcard_method.md)| Learn how to select cards                   |
| [Searching for cards](api/methods/js_kanban_setsearch_method.md)| Learn how to search for cards            |
| [Unselecting cards](api/methods/js_kanban_unselectcard_method.md)| Learn how to unselect cards             |

### Working with card data

| Topic                                                        | Description                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Getting card data](api/methods/js_kanban_getcard_method.md) | Learn how to get the card data                      |
| [Loading card data](api/config/js_kanban_cards_config.md)    | Learn how to load the initial card data             |
| [Parsing card data](api/methods/js_kanban_parse_method.md)   | Learn how to parse the card data                    |
| [Serializing card data](api/methods/js_kanban_serialize_method.md)| Learn how to serialize the card data           |
| [Updating card data](api/methods/js_kanban_updatecard_method.md)| Learn how to update the card data                |

### Configuring cards

| Topic                                                        | Description                                         |
| ------------------------------------------------------------ | ----------------------------------------------------|
| [Adding new cards](api/config/js_kanban_readonly_config.md)  | Learn how to enable/disable an ability to add new cards|
| [Binding cards into columns](api/config/js_kanban_columnkey_config.md) | Learn how to bind cards into columns      |
| [Binding cards into rows](api/config/js_kanban_rowkey_config.md) | Learn how to bind cards into rows               |
| [Configuring a card appearance](api/config/js_kanban_cardshape_config.md)| Learn how to configure a card appearance|
| [Customizing a card appearance](api/config/js_kanban_cardtemplate_config.md)| Learn how to customize a card appearance using templates|
| [Dragging cards](api/config/js_kanban_readonly_config.md)    | Learn how to enable/disable an ability to drag-n-drop cards|
| [Editing cards](api/config/js_kanban_readonly_config.md)     | Learn how to enable/disable an ability to edit cards|
| [Selecting cards](api/config/js_kanban_readonly_config.md)   | Learn how to enable/disable an ability to select cards|
| [Updating card settings](api/methods/js_kanban_setconfig_method.md)| Learn how to update card settings             |

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
| [Adding new columns](api/methods/js_kanban_addcolumn_method.md) | Learn how to add new columns                        |
| [Deleting columns](api/methods/js_kanban_deletecolumn_method.md)| Learn how to delete columns                         |
| [Moving columns](api/methods/js_kanban_movecolumn_method.md)    | Learn how to move columns                           |

### Working with column data

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Getting card data of the column](api/methods/js_kanban_getareacards_method.md)| Learn how to get the card data of the column |
| [Loading column data](api/config/js_kanban_columns_config.md)    | Learn how to load the initial column data          |
| [Parsing column data](api/methods/js_kanban_parse_method.md)     | Learn how to parse the column data                 |
| [Serializing column data](api/methods/js_kanban_serialize_method.md)| Learn how to serialize the column data          |
| [Updating column data](api/methods/js_kanban_updatecolumn_method.md)| Learn how to update the column data             |

## How to work with rows

In these sections you can find out how to perform operations with rows and work with rows data

### Performing operations with rows

| Topic                                                           | Description                                         |
| --------------------------------------------------------------- | ----------------------------------------------------|
| [Adding new rows](api/methods/js_kanban_addrow_method.md)       | Learn how to add new rows                           |
| [Deleting rows](api/methods/js_kanban_deleterow_method.md)      | Learn how to delete rows                            |
| [Moving rows](api/methods/js_kanban_moverow_method.md)          | Learn how to move rows                              |

### Working with row data

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
| [List of inner events](api/overview/events_overview.md)     | See the list of Kanban inner events                |
| [Subscribing on events](api/internal/js_kanban_on_method.md)| Learn how to subscribe on the inner event          |
| [Executing events](api/internal/js_kanban_exec_method.md)   | Learn how to execute the inner event               |
| [Intercepting events](api/internal/js_kanban_intercept_method.md)| Learn how to intercept the inner event        |
| [Reordering events](api/internal/js_kanban_setnext_method.md)| Learn how to add the inner event into the Event Bus order|

## How to work with Kanban REST API

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with server](guides/working_with_server.md)         | Learn how to work with server via REST API         |
| [Loading server data for cards](api/provider/js_kanban_getcards_method.md)| Learn how to load server data for cards |
| [Loading server data for columns](api/provider/js_kanban_getcolumns_method.md)| Learn how to load server data for columns |
| [Loading server data for rows](api/provider/js_kanban_getrows_method.md)| Learn how to load server data for rows |

## How to work with Kanban state

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Getting StateStore reactive properties](api/internal/js_kanban_getreactivestate_method.md)| Learn how to get an object of the StateStore reactive properties |
| [Getting StateStore properties](api/internal/js_kanban_getstate_method.md)| Learn how to get an object of the StateStore properties |
| [Getting StateStore and DataStore](api/internal/js_kanban_getstores_method.md)| Learn how to get StateStore and DataStore objects |

## How to work with Kanban Toolbar

| Topic                                                       | Description                                           |
| ----------------------------------------------------------- | ------------------------------------------------------|
| [Using Kanban API in the Toolbar](api/config/toolbar_api_config.md) | Learn how to include and use Kanban API in the Toolbar |
| [Configuring Toolbar controls](api/config/toolbar_items_config.md)| Learn how to configure, customize and reorder Toolbar contols |

## How to work with TypeScript

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScripts](guides/typescript_support.md)    | Learn how to work with TypeScript                  |

## Any questions left?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
You can also ask your questions using a special form at the bottom part of each documentation page!
:::