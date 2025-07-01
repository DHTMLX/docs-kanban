---
sidebar_label: POST /columns
title: POST /columns
description: 您可以在DHTMLX JavaScript看板库的文档中了解POST /columns REST路由。浏览开发者指南和API参考，试用代码示例和实时演示，并免费下载30天试用版本的DHTMLX看板。
---

# POST `/columns`

### 描述

@short: 添加一个新列并返回包含该列ID的JSON对象。

此路由处理发送到`/columns`端点的**HTTP POST**请求。

### 请求负载

服务器期望接收一个包含以下属性的JSON对象:

| 名称        | 类型        | 描述           |
| ----------- | ----------- | -------------- |
| `label`     |  string     | *必填*。要创建的新列的名称。|

示例:

~~~json
{
    "label": "New column",
}
~~~

### 响应

响应包含一个包含新创建列ID的JSON对象。

示例:

~~~json
{ 
   "id": 4
}
~~~

HTTP状态码表示请求是否成功（response.status == 200）或发生错误（response.status == 500）。

---

**相关文章**:[与服务器交互](/guides/working_with_server.md)
