---
sidebar_label: api.detach()
title: detach 方法
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 detach 方法。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
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