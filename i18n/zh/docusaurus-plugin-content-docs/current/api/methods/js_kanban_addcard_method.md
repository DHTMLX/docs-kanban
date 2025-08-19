---
sidebar_label: addCard()
title: addCard 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 addCard 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# addCard()

### 描述

@short: 将新卡片插入到看板中

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

- `columnId` - （必填）卡片将被添加到的列的 ID  
- `id` - （可选）新卡片的标识符  
- `rowId` - （可选）卡片应放置的行的 ID  
- `before` - （可选）新卡片将插入到该卡片之前的 ID  
- `select` - （可选）指定添加后是否选中新卡片  
- `card` - （可选）表示新卡片的数据对象  

:::info
完整的 **card** 参数列表请参见 [**这里**](/api/config/js_kanban_cards_config.md)
:::

### 示例

~~~jsx {7-12}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 在 "backlog" 列中添加新卡片
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" }
});
~~~

:::tip
也可以将卡片 ID 包含在 **card** 对象中
:::
