---
sidebar_label: add-card
title: add-card 事件
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 add-card 事件。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
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

**add-card** 事件的回调函数可以接收一个包含以下参数的对象：

- `columnId` - （必需）目标列的 ID
- `id` - （可选）新卡片的 ID
- `rowId` - （可选）目标行的 ID
- `before` - （可选）新卡片将被放置在该卡片之前的卡片 ID
- `select` - （可选）是否启用/禁用选中新添加的卡片
- `card` - （可选）新卡片的数据对象。完整的卡片参数列表请参见 [这里](api/config/js_kanban_cards_config.md)
- `skipProvider` - （可选）是否启用/禁用阻止请求发送到服务器

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
// 订阅 "add-card" 事件
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~