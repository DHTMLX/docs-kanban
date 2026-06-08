---
sidebar_label: DELETE /rows
title: DELETE /rows REST 路由 API
description: 阅读 DHTMLX Kanban 的 DELETE /rows REST 路由 API。了解如何删除行（泳道）。
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