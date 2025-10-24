---
sidebar_label: setConfig()
title: setConfig 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setConfig 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# setConfig()

### 描述

@short: 设置看板的新配置参数

### 用法

~~~jsx {}
setConfig(config: object): void;
~~~

### 参数

- `config` - （必需）看板配置对象。完整属性列表请参见 [这里](api/overview/main_overview.md#kanban-properties)

:::tip
使用此方法，您可以配置看板控件并加载数据。该方法不会更改历史记录（您无法更改历史记录）。
:::

### 示例

~~~jsx {10-20,22-23}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// 创建工具栏
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// 指定看板的新配置参数
board.setConfig({
    columnKey: "stage",
    rowKey: "type",
    cardShape,
    editorShape,
    editor: {
       autoSave: false
    },
    /* 其他参数 */
});
                        
// 指定工具栏的新配置参数
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~