---
sidebar_label: currentUser
title: currentUser 配置 API
description: 阅读 DHTMLX Kanban 的 currentUser 配置 API。了解如何为评论、投票和协作设置当前用户。
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