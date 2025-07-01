---
sidebar_label: api
title: api 配置
description: 在 DHTMLX JavaScript 看板库文档中，探索（工具栏）api 配置。查找开发者指南、API 参考、代码示例、在线演示及 DHTMLX 看板的免费30天试用。
---

# api

### 描述

@short: 必填。表示看板内部 API 的对象。

:::info
这里的**看板内部 API**指的是工具栏上的**控件**。
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

**相关文章:** [配置](/guides/configuration#工具栏)

**相关示例:** [看板. 自定义工具栏](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
