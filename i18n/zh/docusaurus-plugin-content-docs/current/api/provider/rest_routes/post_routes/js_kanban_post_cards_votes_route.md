---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: 您可以在DHTMLX JavaScript看板库的文档中了解POST /cards/{cardId}/vote REST路由。浏览开发者指南和API参考，尝试代码示例和实时演示，并下载DHTMLX看板的免费30天试用版。
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