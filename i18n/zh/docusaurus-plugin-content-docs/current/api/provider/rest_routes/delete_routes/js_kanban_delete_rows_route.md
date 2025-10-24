---
sidebar_label: DELETE /rows
title: DELETE /rows
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 DELETE /rows REST 路由。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# DELETE `/rows`

### 描述

@short: 删除某行（泳道）上的数据

此路由处理对 `/rows/{id}` 路径发起的 **HTTP DELETE** 请求。

### 路径参数

以下参数通过请求行传递：

| 名称       | 类型        | 描述           |
| ---------- | ----------- | -------------- |
| `id`       | number      | *必填*。要删除的行的 ID。|

### 请求体

不需要请求体。

### 响应

不返回任何数据。HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](guides/working_with_server.md)