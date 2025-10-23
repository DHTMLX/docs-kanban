---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /cards/{id}/move REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# PUT `/cards/{id}/move`

### 描述

@short: 将卡片移动到指定位置

该路由处理对路径 `cards/{id}/move` 发送的 **HTTP PUT** 请求。

### 路径参数

以下参数在请求行中发送：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *必需*。要移动的卡片的 ID。如果请求移动多个卡片，id 应设置为 0。|

:::info
当移动多个卡片时，请确保 `id` 设置为 0，否则（如果设置为其他值），只会移动该指定 id 的一张卡片。
:::

### 请求体

服务器期望接收一个包含以下属性的 JSON 对象：

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `id`        | number      |*必需*。被移动卡片的 ID。|
| `columnId`  | number      | *必需*。卡片被移动到的列的 ID。|
| `rowId`     | number      | *必需*。卡片被移动到的行的 ID。|
| `before`    | number      | *可选*。被移动卡片应放置在其前面的卡片 ID。|
| `batch`     | object      | *多选时必需*。一个包含被移动卡片对象的数组。|

示例：

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

如果移动多个卡片，`batch` 属性应包含所有被移动卡片对象的数组：

~~~json
{
    "batch": [
        {
            "id": 2,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        },
        {
            "id": 7,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        }
    ]
}
~~~

### 响应

服务器返回一个包含卡片 ID 的 JSON 对象（如果只移动一张卡片）或 ID 设置为 0（针对多张卡片操作）。

示例：

~~~json title="单张卡片操作的响应"
{
    "id": 4
}
~~~

~~~json title="多张卡片操作的响应"
{
    "id": 0
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](guides/working_with_server.md)