---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /rows/{id}/move REST 路由。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# PUT `/rows/{id}/move`

### 描述

@short: 通过将行移动到指定位置来更改其位置。

此路由处理发送到 `rows/{id}/move` 端点的 **HTTP PUT** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称       | 类型        | 描述       |
| ---------- | ----------- | ---------- |
| `id`       |  number     | *必需*。需要移动的行的标识符。|

### 请求体

请求体应包含一个 JSON 对象，具有以下属性:

| 名称       | 类型        | 描述       |
| ---------- | ----------- | ---------- |
| `before`   |  number     | *可选*。被移动的行应放置在其之前的行的 ID。|

示例:

~~~json
{
    "before": 3
}
~~~

### 响应

响应将是一个包含被移动行 ID 的 JSON 对象。

示例:

~~~json
{
    "id": 4
}
~~~

HTTP 状态码指示请求是成功（response.status == 200）还是失败（response.status == 500）。

---

**相关文档**: [与服务器交互](/guides/working_with_server.md)
