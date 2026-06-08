---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote REST 路由 API
description: 阅读 DHTMLX Kanban 的 POST /cards/{cardId}/vote REST 路由 API。了解如何为卡片添加投票并返回投票用户的 ID。
---

# POST `/cards/{cardId}/vote`

### 描述

@short: 向卡片添加一个新的投票，并返回包含投票用户ID的json对象

该路由处理针对路径`/cards/{cardId}/vote`的**HTTP POST**请求。

### 请求体

无需请求体。

### 响应

该路由返回一个包含投票用户ID的json对象。

示例：

~~~json
{ 
   "id": 1
}
~~~

HTTP状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**: [与服务器交互](guides/working_with_server.md)