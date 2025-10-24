---
sidebar_label: GET /uploads
title: GET /uploads
description: 您可以在DHTMLX JavaScript看板库的文档中了解GET /uploads REST路由。浏览开发者指南和API参考，试用代码示例和在线演示，并下载DHTMLX看板的免费30天试用版。
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

**相关文档**: [Working with server](guides/working_with_server.md)