---
sidebar_label: end-drag-card
title: end-drag-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 end-drag-card 事件。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# end-drag-card

### 描述

@short: 当停止拖动卡片时触发

### 用法

~~~jsx {}
"end-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### 参数

**end-drag-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `id` - （必需）被拖动卡片的 ID
- `columnId` - （必需）卡片当前所在列的 ID
- `rowId` - （可选）卡片当前所在行的 ID
- `before` - （可选）当前位于拖动卡片之后的卡片 ID
- `source` - （可选）被移动卡片 ID 组成的数组

:::info
处理内部事件时，可以使用 [**Event Bus 方法**](api/overview/main_overview.md/#event-bus-methods)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 订阅 "end-drag-card" 事件
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**更新日志：** 该事件在 v1.4 版本中添加

**相关示例：** [看板。禁用特定列的拖放](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)