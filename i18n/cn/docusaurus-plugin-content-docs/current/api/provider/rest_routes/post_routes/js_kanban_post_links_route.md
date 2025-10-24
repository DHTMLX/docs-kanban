---
sidebar_label: POST /links
title: POST /links
description: 探索 DHTMLX JavaScript 看板库文档中的 POST /links REST 路由。查看开发者指南、API 参考、示例代码、在线演示，并免费下载 30 天试用版的 DHTMLX 看板。
---

# POST `/links`

### 描述

@short: 添加一个新的链接并返回包含新链接 ID 的 JSON 对象

此路由处理发送到 `/links` 端点的 **HTTP POST** 请求。

### 请求体

服务器期望接收一个包含以下属性的 JSON 对象:

| 名称        | 类型                   | 描述 |
| ----------- | ---------------------- | ----------- |
| `masterId`  |  *number* 或 *string*  | *必需*。主链接的 ID。 |
| `slaveId`   |  *number* 或 *string*  | *必需*。从链接的 ID。  |
| `relation`  |  *string*              | *必需*。定义链接所表示的关系类型。 |

示例:

~~~json
{
    "masterId": 1,
    "slaveId": 2,
    "relation": "relatesTo",
}
~~~

### 响应

响应返回一个包含新创建链接 ID 的 JSON 对象。

示例:

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码指示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**:
- [Working with server](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
