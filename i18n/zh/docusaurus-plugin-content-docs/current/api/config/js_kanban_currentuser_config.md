---
sidebar_label: currentUser
title: currentUser 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 currentUser 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费30天评估版。
---

# currentUser

### 描述

@short: 可选。表示当前用户的 ID

:::note
当前用户 ID 应当与 [`cardShape.users`](/api/config/js_kanban_cardshape_config.md) 属性中列出的某个 ID 匹配。如果未提供此 ID，评论将仅以只读模式访问。
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

**更新日志:** 此属性在版本 1.4 中引入

**相关示例:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
