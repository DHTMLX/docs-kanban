---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /cards/{id}/move REST 路由。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX 看板的 30 天试用版。
---

# PUT `/cards/{id}/move`

### 描述

@short: 移动卡片到指定位置

此路由处理发送到 `cards/{id}/move` 端点的 **HTTP PUT** 请求。

### 路径参数

请求 URL 中应包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number   | *必填*。要移动的卡片的 ID。若移动多个卡片，id 需设置为 0。|

:::info
如果要移动多个卡片，`id` 必须设置为 0；否则，如果使用其他值，则仅移动具有该特定 id 的卡片。
:::

### 请求负载

服务器期望接收一个包含以下属性的 JSON 对象:

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `id`        | number      |*必填*。正在移动的卡片的 ID。 |
| `columnId`  |  number     | *必填*。卡片所在列的 ID。|
| `rowId`     |  number     | *必填*。卡片所在行的 ID。|
| `before`    |  number     | *可选*。移动的卡片应放置在其之前的卡片 ID。|
| `batch`     |  object     | *多选时必填*。一个包含被移动卡片对象的数组。|

示例:

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

当移动多个卡片时，`batch` 属性应包含所有被移动卡片对象的数组:

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

服务器返回一个 JSON 对象，包含卡片 ID（单个卡片移动时），或在移动多个卡片时 ID 设置为 0。

示例:

~~~json title="单个卡片操作请求的响应"
{
    "id": 4
}
~~~

~~~json title="多个卡片操作请求的响应"
{
    "id": 0
}
~~~

HTTP 状态码指示请求是否成功（response.status == 200）或发生错误（response.status == 500）。

---

**相关文章**: [与服务器交互](/guides/working_with_server.md)
