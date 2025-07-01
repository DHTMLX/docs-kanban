---
sidebar_label: start-drag-card
title: start-drag-card 事件
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 start-drag-card 事件。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并免费下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# start-drag-card

### 描述

@short: 当卡片开始被拖动时触发

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

**start-drag-card** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被拖动卡片的 ID
- `columnId` - （必需）卡片当前所在列的 ID
- `rowId` - （可选）卡片当前所在行的 ID
- `before` - （可选）卡片在列中紧随被拖动卡片之后的卡片 ID
- `source` - （可选）包含被移动卡片 ID 的数组

:::info
要操作内部事件，可以使用 [**Event Bus 方法**](/api/overview/main_overview.md/#事件总线方法)。
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

**更新日志:** 本事件自版本 1.4 起引入

**相关示例:** [Kanban. 禁用特定列的拖放功能](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
