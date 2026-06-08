---
sidebar_label: move-card
title: move-card 事件 API
description: 阅读 DHTMLX Kanban 的 move-card 事件 API。了解如何处理移动卡片时触发的事件。
---

# move-card

### 描述

@short: 在移动卡片时触发

### 用法

~~~jsx {}
"move-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 参数

**move-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）将被移动的卡片的 ID
- `columnId` - （必需）卡片将被放置到的列的 ID
- `rowId` - （可选）卡片将被放置到的行的 ID
- `before` - （可选）新卡片将被放置在其前面的卡片的 ID
- `skipProvider` - （可选）启用或禁用阻止请求发送到服务器

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
// 订阅 "move-card" 事件
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**相关示例：** [Kanban. 禁用特定列的拖放功能](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)