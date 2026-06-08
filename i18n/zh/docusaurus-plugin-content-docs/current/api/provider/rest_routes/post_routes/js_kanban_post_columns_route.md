---
sidebar_label: POST /columns
title: POST /columns REST 路由 API
description: 阅读 DHTMLX Kanban 的 POST /columns REST 路由 API。了解如何创建新列并返回其 ID。
---

# POST `/columns`

### 描述

@short: 添加一个新列并返回包含列ID的json对象

该路由处理对路径`/columns`的**HTTP POST**请求。

### 请求体

服务器期望接收一个包含以下属性的json对象：

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *必填*。要添加的新列名称。|

示例：

~~~json
{
    "label": "New column",
}
~~~

### 响应

该路由返回一个包含新列ID的json对象。

示例：

~~~json
{ 
   "id": 4
}
~~~

HTTP状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
