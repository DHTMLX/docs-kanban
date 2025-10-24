---
sidebar_label: How-tos
title: JavaScript Kanban 使用方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中浏览 How-tos 页面。查阅开发者指南与 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# 使用方法

本页面为您提供关于 JavaScript Kanban 的初始化、配置、自定义及操作的完整参考。

## 基本原则

在本节中，您可以了解 Kanban 的基本使用原则

| 主题                                         | 描述                                              |
| --------------------------------------------- | ------------------------------------------------- |
| [](guides/initialization.md)                  | 学习如何初始化 Kanban ([示例](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [](guides/configuration.md)                   | 学习如何配置 Kanban                               |
| [](guides/customization.md)                   | 学习如何自定义 Kanban                             |
| [](guides/stylization.md)                     | 学习如何美化 Kanban                               |
| [](guides/localization.md)                    | 学习如何本地化 Kanban ([示例](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## API 参考

在本节中，您可以查阅 Kanban API 的相关参考

| 主题                                                 | 描述                                              |
| ---------------------------------------------------- | ------------------------------------------------- |
| [Kanban events](api/overview/events_overview.md)      | 学习如何处理 Kanban 事件                          |
| [Kanban methods](api/overview/methods_overview.md)    | 学习如何使用 Kanban 方法                          |
| [Kanban properties](api/overview/properties_overview.md)| 学习如何操作 Kanban 属性                        |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)| 学习如何使用 Event Bus 方法              |
| [RestDataProvider methods](api/overview/internal_rest_overview.md)| 学习如何使用 RestDataProvider 方法      |
| [State methods](api/overview/internal_state_overview.md)| 学习如何操作 State 方法                        |
| [Toolbar methods](api/overview/toolbar_methods_overview.md)| 学习如何使用 Toolbar 方法                   |
| [Toolbar properties](api/overview/toolbar_properties_overview.md)| 学习如何操作 Toolbar 属性                |

## 卡片操作方法

在这些章节中，您可以了解如何对卡片进行操作、处理卡片数据以及配置卡片。

### 卡片操作

| 主题                                                        | 描述                                   |
| ----------------------------------------------------------- | -------------------------------------- |
| [Adding new cards](api/methods/js_kanban_addcard_method.md)  | 学习如何添加新卡片 ([示例](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](api/methods/js_kanban_deletecard_method.md) | 学习如何删除卡片 ([示例](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](api/methods/js_kanban_movecard_method.md)     | 学习如何移动卡片 ([示例](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Scrolling to the desired cards](api/methods/js_kanban_scroll_method.md)| 学习如何滚动至指定卡片         |
| [Searching for cards](api/methods/js_kanban_setsearch_method.md)| 学习如何搜索卡片                 |
| [Selecting cards](api/methods/js_kanban_selectcard_method.md)| 学习如何选择卡片                   |
| [Sorting cards](api/methods/js_kanban_setsort_method.md)     | 学习如何排序卡片                   |
| [Unselecting cards](api/methods/js_kanban_unselectcard_method.md)| 学习如何取消选择卡片            |
| [Adding links between cards](api/config/js_kanban_links_config.md)| 学习如何在卡片间添加关联 ([示例](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### 卡片数据处理

| 主题                                                        | 描述                                     |
| ----------------------------------------------------------- | ---------------------------------------- |
| [Getting card data](api/methods/js_kanban_getcard_method.md) | 学习如何获取卡片数据                     |
| [Getting cards state](api/internal/js_kanban_getstate_method.md) | 学习如何获取卡片状态                  |
| [Getting cards reactive state](api/internal/js_kanban_getreactivestate_method.md) | 学习如何获取卡片响应式状态 |
| [Loading card data](api/config/js_kanban_cards_config.md)    | 学习如何加载初始卡片数据                 |
| [Parsing card data](api/methods/js_kanban_parse_method.md)   | 学习如何解析卡片数据                     |
| [Serializing card data](api/methods/js_kanban_serialize_method.md)| 学习如何序列化卡片数据 ([示例](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](api/methods/js_kanban_updatecard_method.md)| 学习如何更新卡片数据                 |

### 卡片配置

| 主题                                                        | 描述                                         |
| ----------------------------------------------------------- | -------------------------------------------- |
| [Adding new cards](api/config/js_kanban_readonly_config.md)  | 学习如何启用/禁用添加新卡片的能力            |
| [Binding cards into columns](api/config/js_kanban_columnkey_config.md) | 学习如何将卡片绑定到列            |
| [Binding cards into rows](api/config/js_kanban_rowkey_config.md) | 学习如何将卡片绑定到行                   |
| [Configuring a card appearance](api/config/js_kanban_cardshape_config.md)| 学习如何配置卡片外观              |
| [Configuring a cards menu](api/config/js_kanban_cardshape_config.md)| 学习如何配置卡片右键菜单 ([示例](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](api/config/js_kanban_cardtemplate_config.md)| 学习如何通过模板自定义卡片外观 ([示例](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](api/config/js_kanban_readonly_config.md)    | 学习如何启用/禁用卡片拖拽                   |
| [Editing cards](api/config/js_kanban_readonly_config.md)     | 学习如何启用/禁用卡片编辑                   |
| [Lazy rendering](api/config/js_kanban_rendertype_config.md)| 学习如何启用/禁用大量卡片的**懒加载渲染** ([示例](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](api/config/js_kanban_columns_config.md)     | 学习如何为列和泳道限制卡片数量（**WIP 校验**）([示例](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](api/config/js_kanban_readonly_config.md)   | 学习如何启用/禁用卡片选择                   |
| [Setting a fix height of cards](api/config/js_kanban_cardheight_config.md)| 学习如何设置卡片固定高度         |
| [Updating card settings](api/methods/js_kanban_setconfig_method.md)| 学习如何更新卡片设置                    |

## 卡片编辑器操作方法

在本节中，您可以了解如何操作卡片编辑器

| 主题                                                        | 描述                                          |
| ----------------------------------------------------------- | --------------------------------------------- |
| [Autosaving mode](api/config/js_kanban_editorautosave_config.md)| 学习如何启用/禁用编辑器自动保存模式      |
| [Configuring editor fields](guides/configuration.md#编辑器)| 学习如何配置编辑器字段                          |
| [Configuring the editor](guides/configuration.md#编辑器的配置)| 学习如何配置编辑器                 |
| [Updating editor settings](api/methods/js_kanban_setconfig_method.md)| 学习如何更新编辑器设置                   |

## 列操作方法

在这些章节中，您可以了解如何对列进行操作及处理列数据

### 列操作

| 主题                                                           | 描述                                         |
| -------------------------------------------------------------- | -------------------------------------------- |
| [Adding new columns](api/methods/js_kanban_addcolumn_method.md) | 学习如何添加新列 ([示例](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](api/config/js_kanban_columnshape_config.md)| 学习如何配置列右键菜单 ([示例](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](api/methods/js_kanban_deletecolumn_method.md)| 学习如何删除列                               |
| [Moving columns](api/methods/js_kanban_movecolumn_method.md)    | 学习如何移动列                               |
| [Scrolling to the desired columns](api/methods/js_kanban_scroll_method.md)| 学习如何滚动至指定列                    |
| [Separate scrolling for columns](api/config/js_kanban_scrolltype_config.md)| 学习如何为每一列设置独立滚动 ([示例](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### 列数据处理

| 主题                                                           | 描述                                         |
| -------------------------------------------------------------- | -------------------------------------------- |
| [Getting card data of the column](api/methods/js_kanban_getareacards_method.md)| 学习如何获取列下卡片数据            |
| [Getting columns state](api/internal/js_kanban_getstate_method.md) | 学习如何获取列状态                       |
| [Getting columns reactive state](api/internal/js_kanban_getreactivestate_method.md) | 学习如何获取列响应式状态         |
| [Loading column data](api/config/js_kanban_columns_config.md)    | 学习如何加载初始列数据                     |
| [Parsing column data](api/methods/js_kanban_parse_method.md)     | 学习如何解析列数据                         |
| [Serializing column data](api/methods/js_kanban_serialize_method.md)| 学习如何序列化列数据                    |
| [Updating column data](api/methods/js_kanban_updatecolumn_method.md)| 学习如何更新列数据                       |

## 行（泳道）操作方法

在这些章节中，您可以了解如何对行（泳道）进行操作及处理行数据

### 行（泳道）操作

| 主题                                                           | 描述                                         |
| -------------------------------------------------------------- | -------------------------------------------- |
| [Adding new rows](api/methods/js_kanban_addrow_method.md)       | 学习如何添加新行（泳道）                    |
| [Configuring a rows menu](api/config/js_kanban_rowshape_config.md)| 学习如何配置行（泳道）右键菜单 ([示例](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](api/methods/js_kanban_deleterow_method.md)      | 学习如何删除行（泳道）                      |
| [Moving rows](api/methods/js_kanban_moverow_method.md)          | 学习如何移动行（泳道）                      |
| [Scrolling to the desired row](api/methods/js_kanban_scroll_method.md)| 学习如何滚动至指定行（泳道）           |

### 行（泳道）数据处理

| 主题                                                           | 描述                                         |
| -------------------------------------------------------------- | -------------------------------------------- |
| [Getting card data of the column and row](api/methods/js_kanban_getareacards_method.md)| 学习如何获取列和行下的卡片数据    |
| [Getting rows state](api/internal/js_kanban_getstate_method.md) | 学习如何获取行状态                          |
| [Getting rows reactive state](api/internal/js_kanban_getreactivestate_method.md) | 学习如何获取行响应式状态           |
| [Loading row data](api/config/js_kanban_rows_config.md)         | 学习如何加载初始行数据                      |
| [Parsing row data](api/methods/js_kanban_parse_method.md)       | 学习如何解析行数据                          |
| [Serializing row data](api/methods/js_kanban_serialize_method.md)| 学习如何序列化行数据                     |
| [Updating row data](api/methods/js_kanban_updaterow_method.md)  | 学习如何更新行数据                          |

## 事件操作方法

| 主题                                                       | 描述                                        |
| ---------------------------------------------------------- | ------------------------------------------- |
| [Executing events](api/internal/js_kanban_exec_method.md)   | 学习如何执行内部事件                        |
| [Intercepting events](api/internal/js_kanban_intercept_method.md)| 学习如何拦截内部事件                 |
| [List of inner events](api/overview/events_overview.md)     | 查看 Kanban 内部事件列表                     |
| [Reordering events](api/internal/js_kanban_setnext_method.md)| 学习如何将内部事件插入 Event Bus 顺序      |
| [Subscribing on events](api/internal/js_kanban_on_method.md)| 学习如何订阅内部事件                        |

## Kanban REST API 操作方法

| 主题                                                       | 描述                                        |
| ---------------------------------------------------------- | ------------------------------------------- |
| [Loading server data for cards](api/provider/rest_methods/js_kanban_getcards_method.md)| 学习如何加载卡片的服务端数据        |
| [Loading server data for columns](api/provider/rest_methods/js_kanban_getcolumns_method.md)| 学习如何加载列的服务端数据         |
| [Loading server data for rows](api/provider/rest_methods/js_kanban_getrows_method.md)| 学习如何加载行的服务端数据           |
| [Working with server](guides/working_with_server.md)        | 学习如何通过 REST API 与服务端交互 ([示例](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## Kanban 状态操作方法

| 主题                                                       | 描述                                        |
| ---------------------------------------------------------- | ------------------------------------------- |
| [Getting StateStore and DataStore](api/internal/js_kanban_getstores_method.md)| 学习如何获取 StateStore 和 DataStore 对象|
| [Getting StateStore properties](api/internal/js_kanban_getstate_method.md)| 学习如何获取 StateStore 对象的属性         |
| [Getting StateStore reactive properties](api/internal/js_kanban_getreactivestate_method.md)| 学习如何获取 StateStore 响应式属性对象 |

## Toolbar 操作方法

| 主题                                                       | 描述                                           |
| ---------------------------------------------------------- | ---------------------------------------------- |
| [Configuring a searchbar on Toolbar](api/config/toolbar_items_config.md) | 学习如何在 Toolbar 配置搜索栏 ([示例](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](api/config/toolbar_items_config.md) | 学习如何在 Toolbar 配置排序控件 ([示例](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](api/config/toolbar_items_config.md)| 学习如何配置、自定义和排序 Toolbar 控件 ([示例](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Including Kanban API in Toolbar](api/config/toolbar_api_config.md) | 学习如何在 Toolbar 中集成和使用 Kanban API |
| [Localizing Toolbar](api/config/toolbar_locale_config.md) | 学习如何本地化 Toolbar                        |

## TypeScript 操作方法

| 主题                                                       | 描述                                        |
| ---------------------------------------------------------- | ------------------------------------------- |
| [Working with TypeScript](guides/typescript_support.md)     | 学习如何使用 TypeScript                     |

## 还有其他问题？

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
您也可以在下方评论区留言提问！
:::