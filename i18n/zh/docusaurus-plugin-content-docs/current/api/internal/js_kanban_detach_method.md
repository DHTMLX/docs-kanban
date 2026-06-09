---
sidebar_label: api.detach()
title: detach 方法 API
description: 阅读 DHTMLX Kanban 的 detach 方法 API。了解如何移除或分离事件监听器。
---

# api.detach()

## 描述

@short: 允许移除/分离事件监听器

## 用法

~~~jsx
api.detach(tag: number | string | symbol ): void;
~~~

## 参数

- `tag` - 用于在创建事件处理程序时标识该处理程序的标签

### 示例

~~~jsx {11}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

board.api.on("move-card", ({ id, columnId }) => {
    console.log("Move the card");
}, { tag: "move" });

board.api.detach("move");
~~~

**更新日志**：该内部方法自 v1.7 版本起添加