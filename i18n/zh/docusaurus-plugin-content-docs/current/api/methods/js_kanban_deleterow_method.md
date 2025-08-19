---
sidebar_label: deleteRow()
title: deleteRow 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 deleteRow 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# deleteRow()

### 描述

@short: 从看板数据存储中删除指定的行。

### 用法

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### 参数

- `id` - （必需）要删除的行的标识符

### 示例

~~~jsx {7}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 使用行的 id 删除该行
board.deleteRow({ id: "feature" });
~~~
