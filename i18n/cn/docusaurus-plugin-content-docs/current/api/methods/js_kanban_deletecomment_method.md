---
sidebar_label: deleteComment()
title: deleteComment 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 deleteComment 方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# deleteComment()

### 描述

@short: 使用评论的 ID 从卡片中移除评论

### 用法

~~~jsx {}
deleteComment({
    id?: string | number, 
    cardId: string | number
}): void;
~~~

### 参数

- `id` - （可选）需要删除的评论 ID
- `cardId` - （必需）包含该评论的卡片 ID

### 示例

~~~jsx {7-10}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 删除评论
board.deleteComment({
    id: 1,
    cardId: 1,
});
~~~

**更新日志:** 本方法自 v1.4 版本起新增
