---
sidebar_label: api
title: Toolbar api 配置 API
description: 阅读 DHTMLX Kanban 的 Toolbar api 配置 API。了解如何将工具栏连接到 Kanban 内部 API。
---

# api

### 描述

@short: 必填。包含 Kanban 内部 API 的对象

:::info
此处，**Kanban 的内部 API** 用于位于 Toolbar 上的 **控件**
:::

### 用法

~~~jsx {}
api: object;
~~~

### 示例

~~~jsx {7}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

**相关文档：** [配置](guides/configuration.md#toolbar)

**相关示例：** [Kanban. 自定义工具栏](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)