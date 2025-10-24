---
sidebar_label: POST /columns
title: POST /columns
description: 您可以在DHTMLX JavaScript看板库的文档中了解POST /columns REST路由。浏览开发者指南和API参考，尝试代码示例和在线演示，并下载DHTMLX看板的免费30天试用版本。
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

**相关文档**: [Working with server](guides/working_with_server.md)