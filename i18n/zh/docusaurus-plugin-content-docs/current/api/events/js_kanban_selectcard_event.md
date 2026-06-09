---
sidebar_label: select-card
title: select-card 事件 API
description: 阅读 DHTMLX Kanban 的 select-card 事件 API。了解如何处理选择卡片时触发的事件。
---

# select-card

### 描述

@short: 当选择卡片时触发

### 用法

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### 参数

**select-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）被选中卡片的 ID
- `groupMode` - （可选）多选模式（默认值为 false）

:::info
处理内部事件时，您可以使用[**事件总线方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "select-card" 事件
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~