---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move REST 路由 API
description: 阅读 DHTMLX Kanban 的 PUT /columns/{id}/move REST 路由 API。了解如何将列移动到指定位置。
---

# PUT `/columns/{id}/move`

### 描述

@short: 通过将列移动到指定位置来更改列的位置。

此路由处理发送到 `columns/{id}/move` 的 **HTTP PUT** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要移动的列的标识符。|

### 请求体

服务器期望接收一个包含以下属性的 JSON 对象:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *可选*。要将移动的列放置在其前面的列的 ID。|

示例:

~~~json
{
    "before": 3
}
~~~

### 响应

服务器返回一个 JSON 对象，指示被移动列的 ID。

示例:

~~~json
{
    "id": 4
}
~~~

HTTP 状态码表示请求的结果:状态码 200 表示成功，500 表示发生错误。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
