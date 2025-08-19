---
sidebar_label: move-card
title: move-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 move-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# move-card

### 描述

@short: 当卡片被移动时触发

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

**move-card** 事件的回调函数接收一个包含以下属性的对象:

- `id` - （必需）被移动的卡片的 ID
- `columnId` - （必需）卡片将被放置的列的 ID
- `rowId` - （可选）卡片将被放置的行的 ID
- `before` - （可选）移动的卡片将插入到其前面的卡片的 ID
- `skipProvider` - （可选）控制是否阻止向服务器发送请求

:::info
要管理内部事件，您可以使用 [**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
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

**相关示例:** [Kanban. 禁用特定列的拖放](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
