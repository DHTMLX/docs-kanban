---
sidebar_label: DELETE /columns
title: DELETE /columns
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 DELETE /columns REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# DELETE `/columns`

### 描述

@short: 删除一列的数据

此路由处理发送到 `/columns/{id}` 端点的 **HTTP DELETE** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称       | 类型        | 描述             |
| ---------- | ----------- | ---------------- |
| `id`       |  number     | *必填*。指定要删除的列的 ID。|

### 请求体

不需要请求体。

### 响应

无返回内容。状态码表示结果:成功时 response.status == 200，失败时 response.status == 500。

---

**相关文档**:[与服务器交互](/guides/working_with_server.md)
