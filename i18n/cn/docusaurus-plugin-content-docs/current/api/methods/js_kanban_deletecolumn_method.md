---
sidebar_label: deleteColumn()
title: deleteColumn 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 deleteColumn 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX 看板的30天试用版。
---

# deleteColumn()

### 描述

@short: 从看板数据存储中删除指定的列。

### 用法

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### 参数

- `id` - （必填）要删除的列的 ID

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 通过列的 ID 删除该列
board.deleteColumn({ id: "backlog" });
~~~
