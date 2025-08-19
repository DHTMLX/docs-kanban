---
sidebar_label: end-drag-card
title: end-drag-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 end-drag-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# end-drag-card

### 描述

@short: 当卡片拖拽操作结束时触发

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

**end-drag-card** 事件的回调函数接收一个包含以下详细信息的对象:

- `id` - （必填）被拖拽卡片的 ID
- `columnId` - （必填）当前卡片所在列的 ID
- `rowId` - （可选）卡片所在行的 ID
- `before` - （可选）在该卡片之后的卡片 ID
- `source` - （可选）包含移动卡片 ID 的数组

:::info
若需管理内部事件，您可以使用[**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "end-drag-card" 事件
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**更新日志:** 此事件自 v1.4 版本起支持

**相关示例:** [看板。禁用特定列的拖放](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
