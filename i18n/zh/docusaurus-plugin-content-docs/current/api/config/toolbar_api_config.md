---
sidebar_label: api
title: api 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 (Toolbar) api 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
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