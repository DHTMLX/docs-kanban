---
sidebar_label: unselect-card
title: unselect-card 事件 API
description: 阅读 DHTMLX Kanban 的 unselect-card 事件 API。了解如何处理取消选择卡片时触发的事件。
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