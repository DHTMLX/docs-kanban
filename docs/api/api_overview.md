---
sidebar_label: API overview
title: API Overview
description: You can have an API overview of JavaScript Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# API overview

## Kanban constructor

~~~js
new kanban.Kanban("#root", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#kanban-properties))

## Toolbar constructor

~~~js
new kanban.Toolbar("#toolbar", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#kanban-properties))

## Kanban methods

| Name                                                      | Description                                              |
| ----------------------------------------------------------| ---------------------------------------------------------|
| [](api/methods/js_kanban_addcard_method.md)               | @getshort(api/methods/js_kanban_addcard_method.md)       |
| [](api/methods/js_kanban_addcolumn_method.md)             | @getshort(api/methods/js_kanban_addcolumn_method.md)     |
| [](api/methods/js_kanban_addrow_method.md)                | @getshort(api/methods/js_kanban_addrow_method.md)        |
| [](api/methods/js_kanban_deletecard_method.md)            | @getshort(api/methods/js_kanban_deletecard_method.md)    |
| [](api/methods/js_kanban_deletecolumn_method.md)          | @getshort(api/methods/js_kanban_deletecolumn_method.md)  |
| [](api/methods/js_kanban_deleterow_method.md)             | @getshort(api/methods/js_kanban_deleterow_method.md)     |
| [](api/methods/js_kanban_destructor_method.md)            | @getshort(api/methods/js_kanban_destructor_method.md)    |
| [](api/methods/js_kanban_getareacards_method.md)          | @getshort(api/methods/js_kanban_getareacards_method.md)  |
| [](api/methods/js_kanban_getcard_method.md)               | @getshort(api/methods/js_kanban_getcard_method.md)       |
| [](api/methods/js_kanban_getselection_method.md)          | @getshort(api/methods/js_kanban_getselection_method.md)  |
| [](api/methods/js_kanban_movecard_method.md)              | @getshort(api/methods/js_kanban_movecard_method.md)      |
| [](api/methods/js_kanban_parse_method.md)                 | @getshort(api/methods/js_kanban_parse_method.md)         |
| [](api/methods/js_kanban_selectcard_method.md)            | @getshort(api/methods/js_kanban_selectcard_method.md)    |
| [](api/methods/js_kanban_serialize_method.md)             | @getshort(api/methods/js_kanban_serialize_method.md)     |
| [](api/methods/js_kanban_setconfig_method.md)             | @getshort(api/methods/js_kanban_setconfig_method.md)     |
| [](api/methods/js_kanban_setlocale_method.md)             | @getshort(api/methods/js_kanban_setlocale_method.md)     |
| [](api/methods/js_kanban_setsearch_method.md)             | @getshort(api/methods/js_kanban_setsearch_method.md)     |
| [](api/methods/js_kanban_unselectcard_method.md)          | @getshort(api/methods/js_kanban_unselectcard_method.md)  |
| [](api/methods/js_kanban_updatecard_method.md)            | @getshort(api/methods/js_kanban_updatecard_method.md)    |
| [](api/methods/js_kanban_updatecolumn_method.md)          | @getshort(api/methods/js_kanban_updatecolumn_method.md)  |
| [](api/methods/js_kanban_updaterow_method.md)             | @getshort(api/methods/js_kanban_updaterow_method.md)     |

## Kanban internal API

### Event Bus methods

| Name                                                      | Description                                                  |
| ----------------------------------------------------------| ------------------------------------------------------------ |
| [](api/internal/js_kanban_exec_method.md)                 | @getshort(api/internal/js_kanban_exec_method.md)             |
| [](api/internal/js_kanban_intercept_method.md)            | @getshort(api/internal/js_kanban_intercept_method.md)        |
| [](api/internal/js_kanban_on_method.md)                   | @getshort(api/internal/js_kanban_on_method.md)               |
| [](api/internal/js_kanban_setnext_method.md)              | @getshort(api/internal/js_kanban_setnext_method.md)          |

### State methods

| Name                                                                   | Description                                                   |
| -----------------------------------------------------------------------| ------------------------------------------------------------- |
| [](api/internal/js_kanban_getreactivestate_method.md)                  | @getshort(api/internal/js_kanban_getreactivestate_method.md)  |
| [](api/internal/js_kanban_getstate_method.md)                          | @getshort(api/internal/js_kanban_getstate_method.md)          |
| [](api/internal/js_kanban_getstores_method.md)                         | @getshort(api/internal/js_kanban_getstores_method.md)         |

### RestDataProvider methods

| Name                                                    | Description                                            |
| --------------------------------------------------------| -------------------------------------------------------|
| [](api/provider/js_kanban_getcards_method.md)           | @getshort(api/provider/js_kanban_getcards_method.md)   |
| [](api/provider/js_kanban_getcolumns_method.md)         | @getshort(api/provider/js_kanban_getcolumns_method.md) |
| [](api/provider/js_kanban_getrows_method.md)            | @getshort(api/provider/js_kanban_getrows_method.md)    |

## Kanban properties

| Name                                                       | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [](api/config/js_kanban_cards_config.md)                   | @getshort(api/config/js_kanban_cards_config.md)          |
| [](api/config/js_kanban_cardshape_config.md)               | @getshort(api/config/js_kanban_cardshape_config.md)      |
| [](api/config/js_kanban_cardtemplate_config.md)            | @getshort(api/config/js_kanban_cardtemplate_config.md)   |
| [](api/config/js_kanban_columnkey_config.md)               | @getshort(api/config/js_kanban_columnkey_config.md)      |
| [](api/config/js_kanban_columns_config.md)                 | @getshort(api/config/js_kanban_columns_config.md)        |
| [](api/config/js_kanban_editorautosave_config.md)          | @getshort(api/config/js_kanban_editorautosave_config.md) |
| [](api/config/js_kanban_editorshape_config.md)             | @getshort(api/config/js_kanban_editorshape_config.md)    |
| [](api/config/js_kanban_locale_config.md)                  | @getshort(api/config/js_kanban_locale_config.md)         |
| [](api/config/js_kanban_readonly_config.md)                | @getshort(api/config/js_kanban_readonly_config.md)       |
| [](api/config/js_kanban_rowkey_config.md)                  | @getshort(api/config/js_kanban_rowkey_config.md)         |
| [](api/config/js_kanban_rows_config.md)                    | @getshort(api/config/js_kanban_rows_config.md)           |
| [](api/config/toolbar_api_config.md)                       | @getshort(api/config/toolbar_api_config.md)              |
| [](api/config/toolbar_items_config.md)                     | @getshort(api/config/toolbar_items_config.md)            |
