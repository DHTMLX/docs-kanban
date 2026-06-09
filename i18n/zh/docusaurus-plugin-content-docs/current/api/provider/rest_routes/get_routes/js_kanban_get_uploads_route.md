---
sidebar_label: GET /uploads
title: GET /uploads REST 路由 API
description: 阅读 DHTMLX Kanban 的 GET /uploads REST 路由 API。了解如何从服务器获取请求的二进制文件。
---

# GET `/uploads`

### 描述

@short: 从服务器获取请求的二进制文件

该路由处理对路径`/uploads/{id}/{name}`发起的**HTTP GET**请求。

### 路径参数

以下参数在请求行中传递：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。所需文件的ID。|
| `name`     |  string     | *必填*。请求文件的名称。|

### 请求体

不需要请求体。

### 响应

该路由返回请求的二进制文件。

HTTP状态码指示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
