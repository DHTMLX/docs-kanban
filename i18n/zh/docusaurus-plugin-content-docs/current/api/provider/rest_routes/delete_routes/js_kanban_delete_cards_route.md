---
sidebar_label: DELETE /cards
title: DELETE /cards REST 路由 API
description: 阅读 DHTMLX Kanban 的 DELETE /cards REST 路由 API。了解如何删除卡片。
---

# DELETE `/cards`

### 描述

@short: 删除卡片上的数据

该路由处理对 `/cards/{id}` 路径发起的 **HTTP DELETE** 请求。

### 路径参数

以下参数通过请求行发送：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要删除的卡片 ID。|

### 请求体

不需要请求体。

### 响应

不返回数据。HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [与服务器交互](guides/working_with_server.md)