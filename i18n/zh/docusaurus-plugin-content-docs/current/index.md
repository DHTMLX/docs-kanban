---
sidebar_label: 看板概览
title: JavaScript 看板概览
slug: /
description: 您可以在文档中了解 DHTMLX JavaScript 看板库的概况。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的30天免费试用版。
---

# DHTMLX 看板概览

JavaScript 看板是一种高效的工作流程可视化解决方案。该组件有助于更好地理解业务流程，并全面掌握团队工作负载。这一灵活的工具可支持任意数量的卡片、列和泳道。组件完全采用纯 JavaScript 和 CSS 编写，可轻松设置和自定义，并集成到任何 Web 应用或网页中。

## 看板结构

### 工具栏

看板的**工具栏**是界面的独立部分。它包含用于*搜索*卡片的搜索栏、根据指定参数*排序*卡片的控件、两个用于管理历史记录（*撤销/重做*）的控件，以及用于*添加新列和行*的控件。您可以灵活管理搜索和排序逻辑，也可以通过添加自定义元素或调整内置元素顺序来更改工具栏结构。详细内容请参见[配置](guides/configuration.md#toolbar)章节。

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
    src={toolbar}
    alt="Kanban Toolbar"
    className="img_border"
/>

### 看板

**看板**是 Kanban 的主要部分。它由分布在各列和各行（泳道）中的卡片组成。您可以灵活配置卡片的外观，也可以应用自定义模板。详细内容请参见[配置](guides/configuration.md#cards)章节。

在**看板**面板上，您可以通过以下方式操作***卡片***、***列***和***行***：

- 点击加号图标添加新卡片（根据每个列和泳道的*限制*）
- 通过编辑面板为任务添加评论和投票（[示例](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）
- 通过编辑器为任务设置链接（[示例](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)）
- 使用上下文菜单（三点图标）删除卡片、列和行
- 使用上下文菜单（三点图标）或 `Ctrl (Command)`+`D` 快捷键复制卡片（可批量复制卡片）
- 将看板数据导出为 JSON 文件
- 通过以下快捷键管理看板历史记录：
    - `Ctrl (Command)`+`Z` - 撤销看板中的上一步操作（回退一步）
    - `Ctrl (Command)`+`Y` 或 `Ctrl (Command)`+`Shift`+`Z` - 重做刚才撤销的操作（前进一步）
- 拖动卡片到目标位置（行和列）以移动卡片
- 使用上下文菜单（三点图标）移动列和行
- 双击对应标签或使用上下文菜单（三点图标）重命名列和行
- 点击卡片显示卡片编辑器
- 点击行标签左侧的箭头图标收起/展开行
- 点击列标签左侧的箭头图标收起/展开列
- 使用以下快捷键选择多张卡片：
    - 按住 `Shift` 并点击相应卡片，可在同一列中多选卡片
    - 按住 `Ctrl (Command)` 并点击相应卡片，可在不同列中多选卡片

import board from '@site/static/img/js_kanban_board.png';

<img
    src={board}
    alt="Kanban Board"
    className="img_border"
/>

### 编辑器

**编辑器**是一个模态面板，由用于管理所选卡片数据的字段和控件组成。点击想要编辑的卡片即可显示编辑器。您可以灵活配置编辑器结构，添加新字段和控件。详细内容请参见[配置](guides/configuration.md#editor)章节。

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="Kanban Editor"
    className="img_border"
/>

## 后续操作

现在，您可以在应用程序中开始使用看板了。请参考[快速开始](how_to_start.md)教程获取指导。