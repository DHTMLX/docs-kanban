---
sidebar_label: add-card
title: add-card 事件
description: 了解 DHTMLX JavaScript 看板库中 add-card 事件的工作原理。浏览开发者指南、API 参考、测试代码示例，查看实时演示，并获取 DHTMLX 看板的免费 30 天试用。
---

# add-card

### 描述

@short: 当添加新卡片时触发

### 用法

~~~jsx {}
"add-card": ({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object,
    skipProvider?: boolean,
}) => void;
~~~

### 参数

**add-card** 事件的回调接收一个包含以下属性的对象:

- `columnId` - （必填）卡片将被添加的列的 ID
- `id` - （可选）新卡片分配的 ID
- `rowId` - （可选）卡片应放置的行的 ID
- `before` - （可选）新卡片将被插入在其前面的卡片的 ID
- `select` - （可选）决定是否选中新添加的卡片
- `card` - （可选）表示新卡片的数据对象。卡片参数的完整详情请参阅 [这里](/api/config/js_kanban_cards_config.md)
- `skipProvider` - （可选）控制是否跳过向服务器的请求

:::info
若要管理内部事件，请参阅 [**事件总线方法**](/api/overview/main_overview.md/#事件总线方法)
:::

### 示例

~~~jsx {7-9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 监听 "add-card" 事件
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~
