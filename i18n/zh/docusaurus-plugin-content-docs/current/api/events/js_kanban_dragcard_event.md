---
sidebar_label: drag-card
title: drag-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 drag-card 事件。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX 看板的 30 天试用版。
---

# drag-card

### 描述

@short: 当通过拖放移动卡片时触发

### 用法

~~~jsx {}
"drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### 参数

**drag-card** 事件的回调函数可接收一个包含以下参数的对象：

- `id` - （必需）被拖动卡片的 ID
- `columnId` - （必需）卡片当前所在列的 ID
- `rowId` - （可选）卡片当前所在行的 ID
- `before` - （可选）卡片在列中当前位于被拖动卡片之后的卡片 ID
- `source` - （可选）被移动卡片 ID 的数组

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
// 订阅 "drag-card" 事件
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**更新日志：** 该事件自 v1.4 版本起添加

**相关示例：** [看板。禁用特定列的拖放功能](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)