---
sidebar_label: currentUser
title: currentUser 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 currentUser 配置。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# currentUser

### 描述

@short: 可选。当前用户的 ID

:::note
当前用户 ID 需要对应于 [`cardShape.users`](api/config/js_kanban_cardshape_config.md) 属性中指定的某个 ID。如果未指定此 ID，评论将仅可供阅读。
:::

### 用法

~~~jsx {}
currentUser?: string | number; 
~~~

### 示例

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    currentUser: 1,
    // 其他参数
});
~~~

**更新日志：** 该属性在 v1.4 中添加

**相关示例：** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)