---
sidebar_label: unselect-card
title: unselect-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 unselect-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# unselect-card

### 描述

@short: 当取消选择卡片时触发

### 用法

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### 参数

**unselect-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）要取消选择的卡片的 ID

:::info
处理内部事件时，您可以使用 [**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "unselect-card" 事件
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~