---
sidebar_label: deleteLink()
title: deleteLink 方法 API
description: 阅读 DHTMLX Kanban 的 deleteLink 方法 API。了解如何通过 ID 从看板中删除链接。
---

# deleteLink()

### 描述

@short: 从看板的数据存储中移除指定的链接

### 用法

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### 参数

- `id` - （必需）要删除的链接的 ID

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// 通过链接的 ID 删除链接
board.deleteLink({ id: 5 });
~~~

**更新日志：** 此方法自 v1.5 版本起添加