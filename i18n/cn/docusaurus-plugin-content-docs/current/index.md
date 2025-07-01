---
sidebar_label: Kanban 概览
title: JavaScript Kanban 概览
slug: /
description: 您可以在文档中了解 DHTMLX JavaScript Kanban 库的整体概况。浏览开发者指南和 API 参考，试用代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天试用版。
---

# DHTMLX Kanban 概览

JavaScript Kanban 是一个便捷的工作流程可视化工具。它帮助您更清晰地了解业务流程并掌握团队的工作负载。该工具非常灵活，可以处理任意数量的卡片、列和泳道。由于它基于纯 JavaScript 和 CSS 构建，安装和自定义都非常简单，能够无缝集成到任何网页应用或页面中。

## Kanban 结构

### 工具栏

Kanban 的 **工具栏** 位于界面的独立区域。它内置了卡片搜索框、用于不同方式排序卡片的控件、管理历史记录的撤销/重做按钮，以及添加新列和行的操作控件。您可以灵活调整搜索和排序的方式，也可以通过添加自定义元素或改变内置元素顺序来个性化工具栏。详细内容请参考 [Configuration](./guides/configuration#工具栏) 部分。

![Kanban Toolbar](/assets/js_kanban_toolbar.png)

### 看板

**看板** 是 Kanban 的核心操作区。在这里，卡片按照列和行（泳道）进行排列。您可以灵活调整卡片的外观，或使用自定义模板。详情请参阅 [Configuration](./guides/configuration#卡片) 部分。

在 **看板** 面板中，您可以通过多种方式与 ***卡片***、***列*** 和 ***行*** 进行交互:

- 点击加号图标添加新卡片（每列和泳道有 *限制* 时需遵守）
- 通过编辑器面板为任务添加评论和投票（[示例](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)）
- 在编辑器中设置任务之间的关联（[示例](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)）
- 通过右键菜单（三点图标）删除卡片、列和行
- 在右键菜单（三点图标）中或通过 `Ctrl (Command)`+`D` 快捷键复制卡片（可一次复制多个卡片）
- 将 Kanban 数据导出为 JSON 文件
- 使用以下快捷键管理 Kanban 历史记录:
    - `Ctrl (Command)`+`Z` 撤销上一个操作（后退到 Kanban 历史的上一步）
    - `Ctrl (Command)`+`Y` 或 `Ctrl (Command)`+`Shift`+`Z` 重做刚撤销的操作（前进到 Kanban 历史的下一步）
- 拖拽卡片到任意列或行，实现自由移动
- 使用右键菜单（三点图标）移动列和行
- 双击标签或通过右键菜单（三点图标）重命名列和行
- 点击卡片即可打开卡片编辑器
- 点击行标签左侧的箭头图标，可折叠或展开行
- 点击列标签左侧的箭头图标，可折叠或展开列
- 使用以下快捷键多选卡片:
    - `Shift` + 点击，可在同一列选择多张卡片
    - `Ctrl (Command)` + 点击，可跨列选择多张卡片

![Kanban Board](/assets/js_kanban_board.png)

### 编辑器

**编辑器** 以弹窗的形式出现，提供用于更新所选卡片详细信息的字段和控件。点击任意卡片即可打开编辑器。您也可以根据需要自定义编辑器，添加新的字段或控件。更多信息请参见 [Configuration](./guides/configuration#编辑器) 部分。

![Kanban Editor](/assets/js_kanban_editor.png)

## 接下来

要在您的应用中开始使用 Kanban，请前往 [How to start](./how_to_start) 教程获取详细的分步指导。
