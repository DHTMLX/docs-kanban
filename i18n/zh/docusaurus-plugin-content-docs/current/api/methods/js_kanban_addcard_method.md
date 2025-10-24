---
sidebar_label: addCard()
title: addCard 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 addCard 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# addCard()

### 描述

@short: 向看板中添加一个新卡片

### 用法

~~~jsx {}
addCard({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object
}): void;
~~~

### 参数

- `columnId` - （必填）目标列的 ID  
- `id` - （可选）新卡片的 ID  
- `rowId` - （可选）目标行的 ID  
- `before` - （可选）新卡片将被放置在该卡片 ID 之前  
- `select` - （可选）是否选中新添加的卡片  
- `card` - （可选）新卡片的数据对象  

:::info
完整的 **card** 参数列表请见 [**这里**](api/config/js_kanban_cards_config.md)
:::

### 示例

~~~jsx {7-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 向 "backlog" 列添加新卡片
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" }
});
~~~

:::tip
您也可以在 **card** 对象中指定新卡片的 ID
:::