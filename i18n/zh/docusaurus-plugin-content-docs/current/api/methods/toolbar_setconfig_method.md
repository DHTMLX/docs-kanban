---
sidebar_label: setConfig()
title: Toolbar setConfig 方法 API
description: 阅读 DHTMLX Kanban 的 Toolbar setConfig 方法 API。了解如何在运行时更新 Toolbar 配置。
---

# setConfig()

### 描述

@short: 设置 Toolbar 的新配置参数

### 用法

~~~jsx {}
setConfig(config: object): void;
~~~

### 参数

- `config` - （必需）Toolbar 配置对象。完整属性列表请参见 [这里](api/overview/main_overview.md#toolbar-properties)

:::note
该方法仅更改您传入的参数。
:::

### 示例

~~~jsx {6-8}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 创建 Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 设置 Toolbar 的新配置参数
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~