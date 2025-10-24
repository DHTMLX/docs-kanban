---
sidebar_label: POST /links
title: POST /links
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 POST /links REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# POST `/links`

### 描述

@short: 创建一个新的链接并返回包含新链接 ID 的 json 对象

该路由处理对 `/links` 路径发起的 **HTTP POST** 请求。

### 请求体

服务器期望接收包含以下属性的 json 对象：

| 名称        | 类型                   | 描述               |
| ----------- | ---------------------- | ------------------ |
| `source`    | *number* 或 *string*   | *必需*。起始链接的 ID。 |
| `target`    | *number* 或 *string*   | *必需*。结束链接的 ID。 |
| `relation`  | *string*               | *必需*。链接创建的关系类型。 |

示例：

~~~json
{
    "source": 1,
    "target": 2,
    "relation": "relatesTo"
}
~~~

### 响应

路由返回一个包含新链接 ID 的 json 对象。

示例：

~~~json
{ 
   "id": 1
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)