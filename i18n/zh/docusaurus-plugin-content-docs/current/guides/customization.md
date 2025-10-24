---
sidebar_label: 自定义
title: 自定义
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解自定义相关内容。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 自定义

除了配置 Kanban 以外，您还可以自定义其外观和行为。该组件允许您为卡片指定自定义模板、修改卡片、列和行的右键菜单、调整工具栏结构及功能，并为 Kanban 应用自定义 CSS 样式。

## 自定义卡片

要通过自定义模板展示卡片，您可以使用 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 属性。它是一个回调函数，允许您定义所需的样式和逻辑，并应用到 Kanban 上。请参见以下示例代码：

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义右键菜单

要自定义卡片、列和行的右键菜单，您可以分别使用 [`cardShape`](api/config/js_kanban_cardshape_config.md)、[`columnShape`](api/config/js_kanban_columnshape_config.md) 和 [`rowShape`](api/config/js_kanban_rowshape_config.md) 属性。请参见以下示例代码：

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义工具栏

要自定义工具栏的结构及其功能，您可以使用 [`items`](api/config/toolbar_items_config.md) 属性。在该配置的数组中，您可以定义所需的控件、按期望顺序排列它们，并修改它们的行为。

在下面的示例中，您可以看到如何自定义以下内容：

- 控件排列顺序
- 搜索栏及其行为
- 排序控件及其行为
- 自定义控件及其行为

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 自定义样式

您可以通过更改相应 *CSS 变量* 的值来自定义 Kanban 的外观。详细内容请参考 [**样式化**](guides/stylization.md) 部分。

以下示例展示了如何为 Kanban 应用自定义样式：

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>