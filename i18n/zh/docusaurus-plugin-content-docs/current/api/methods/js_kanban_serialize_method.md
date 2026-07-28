---
sidebar_label: serialize()
title: serialize 方法 API
description: 阅读 DHTMLX Kanban 的 serialize 方法 API。了解如何将看板数据序列化为 JSON。
---

# serialize()

### 描述

@short: 将 Kanban 数据序列化为 JSON

### 用法

~~~jsx {}
serialize(): object;
~~~

### 返回值

该方法返回 Kanban 数据的对象  

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...],
    links: [{...}, {...}, ...]
}
~~~

### 示例

~~~jsx {7}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 获取 Kanban 数据对象
board.serialize();
~~~