---
sidebar_label: POST /rows
title: POST /rows
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 POST /rows REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# POST /rows

### 描述

@short: 添加一行新数据，并返回包含该行 ID 的 JSON 对象。

此路由处理发送到 **'/rows'** 端点的 **HTTP POST** 请求。

### 请求体

服务器期望接收一个包含以下属性的 JSON 对象:

| 名称         | 类型        | 描述                                         |
| ------------ | ----------- | -------------------------------------------- |
| `label`      | string      | *必填*。要添加的新行的名称。                   |
| `collapsed`  | boolean     | *可选*。表示行（泳道）的初始状态。默认状态为展开（**false**）。设置为 **true** 表示行初始为折叠状态。|

示例:

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~

### 响应

响应包含一个 JSON 对象，内含新创建行的 ID。

示例:

~~~json
{    
   "id": 2
}
~~~

HTTP 状态码表示请求是否成功（**200**）或发生错误（**500**）。

---

**相关文档**:[Working with server](/guides/working_with_server.md)
