---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 PUT /rows/{id}/move REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
---

# PUT `/rows/{id}/move`

### 描述

@short: 将一行移动到指定位置

该路由处理对 `rows/{id}/move` 路径发起的 **HTTP PUT** 请求。

### 路径参数

以下参数在请求行中传递：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必需*. 要移动的行的 ID。|

### 请求体

服务器期望接收一个包含以下属性的 JSON 对象：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *可选*. 移动的行应放置在该 ID 行之前。|

示例：

~~~json
{
    "before": 3
}
~~~

### 响应

服务器返回一个包含被移动行 ID 的 JSON 对象。

示例：

~~~json
{
    "id": 4
}
~~~

HTTP 状态码显示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](guides/working_with_server.md)