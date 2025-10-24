---
sidebar_label: DELETE /links
title: DELETE /links
description: 本节介绍 DHTMLX JavaScript 看板库中的 DELETE /links REST 路由。内容包括开发者指南、API 参考、示例、实时演示以及 DHTMLX 看板的免费 30 天试用。
---

# DELETE `/links`

### 描述

@short: 删除一个链接条目

此端点处理发送到 `/links/{id}` 的 **HTTP DELETE** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称 | 类型   | 描述                        |
| ---- | ------ | --------------------------- |
| `id` | number | *必填*。要删除的链接的标识符。 |

### 请求体

此请求不需要请求体。

### 响应

无内容返回。HTTP 状态码表示成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**:
- [与服务器交互](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
