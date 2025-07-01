---
sidebar_label: 自定义
title: 自定义
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解自定义功能。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版。
---

# 自定义

除了配置选项之外，Kanban 还为外观和行为的调整提供了丰富的方式。您可以为卡片设置自定义模板，调整卡片、列和行的右键菜单，改变工具栏的布局和功能，并通过自定义 CSS 样式让 Kanban 拥有独特的外观。

## 自定义卡片

要让卡片显示为自定义样式，可以使用 [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md) 属性。该属性允许您通过回调函数为 Kanban 添加自有的样式和逻辑。请参考下方代码片段了解其用法:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义右键菜单

如果您需要自定义卡片、列或行的右键菜单，可以使用 [`cardShape`](/api/config/js_kanban_cardshape_config.md)、[`columnShape`](/api/config/js_kanban_columnshape_config.md) 和 [`rowShape`](/api/config/js_kanban_rowshape_config.md) 属性。下方示例展示了如何进行设置:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义工具栏

您可以通过 [`items`](/api/config/toolbar_items_config.md) 属性按需调整工具栏。在其数组中添加您需要的控件，自由排序，并根据需求修改其行为。

参考下方代码片段，了解如何自定义如下内容:

- 控件的顺序
- 搜索栏及其行为
- 排序控件及其行为
- 自定义控件及其功能

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义样式

如果您想更改 Kanban 的外观，可以尝试调整相关的 *CSS 变量*。更多细节请参见 [**样式化**](../stylization) 章节。

下方代码片段展示了如何为 Kanban 应用自定义样式:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
