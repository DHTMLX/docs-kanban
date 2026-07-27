---
sidebar_label: setConfig()
title: setConfig 方法 API
description: 阅读 DHTMLX Kanban 的 setConfig 方法 API。了解如何在运行时动态更新看板配置。
---

# setConfig()

### 描述

@short: 设置 Kanban 的新配置参数

### 用法

~~~jsx {}
setConfig(config: object): void;
~~~

### 参数

- `config` - （必需）Kanban 配置对象。完整属性列表请参见 [这里](api/overview/main_overview.md#kanban-properties)

:::tip
使用此方法，您可以配置 Kanban 控件并加载数据。该方法不会更改历史记录（您无法更改历史记录）。
:::

### 示例

~~~jsx {10-20,22-23}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// 创建 Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// 指定 Kanban 的新配置参数
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
                        
// 指定 Toolbar 的新配置参数
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~