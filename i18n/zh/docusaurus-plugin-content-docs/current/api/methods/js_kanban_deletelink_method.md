---
sidebar_label: deleteLink()
title: deleteLink 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 deleteLink 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# deleteLink()

### 描述

@short: 从看板数据存储中删除指定的链接。

### 用法

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### 参数

- `id` - （必需）需要删除的链接的 ID

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// 通过 ID 删除链接
board.deleteLink({ id: 5 });
~~~

**更新日志:** 该方法在 v1.5 版本中添加
