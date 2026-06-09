---
sidebar_label: start-drag-card
title: start-drag-card 事件 API
description: 阅读 DHTMLX Kanban 的 start-drag-card 事件 API。了解如何处理开始拖动卡片时触发的事件。
---

# start-drag-card

### 描述

@short: 当开始拖动卡片时触发

### 用法

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### 参数

**start-drag-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）被拖动卡片的 ID
- `columnId` - （必需）卡片当前所在列的 ID
- `rowId` - （可选）卡片当前所在行的 ID
- `before` - （可选）当前位于被拖动卡片之后的卡片 ID
- `source` - （可选）被移动卡片 ID 组成的数组

:::info
要处理内部事件，您可以使用 [**Event Bus 方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "start-drag-card" 事件
board.api.on("start-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**更新日志：** 该事件自 v1.4 版本起添加

**相关示例：** [Kanban. 禁用对特定列的拖放](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)