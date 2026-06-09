---
sidebar_label: POST /rows
title: POST /rows REST 路由 API
description: 阅读 DHTMLX Kanban 的 POST /rows REST 路由 API。了解如何创建新行并返回其 ID。
---

# POST /rows

### 描述

@short: 添加一行新数据，并返回包含该行 ID 的 JSON 对象。

此路由处理发送到 **'/rows'** 路径的 **HTTP POST** 请求。

### 请求负载

服务器期望接收一个包含以下属性的 JSON 对象：

| 名称       | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *必填项*。要添加的新行的名称。|
| `collapsed`   |  boolean | *可选项*。该行（泳道）的当前状态。默认情况下，行是展开的（值为 **false**）。如果为 **true**，则该行初始时为折叠状态。|

示例：

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~

### 响应

该路由返回一个包含新行 ID 的 JSON 对象。

示例：

~~~json
{    
   "id": 2
}
~~~

HTTP 状态码指示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
