---
sidebar_label: GET /uploads
title: GET /uploads
description: 查看 DHTMLX JavaScript 看板库文档中的 GET /uploads REST 路由。探索开发者指南和 API 参考，尝试示例代码和在线演示，并免费下载 DHTMLX 看板 30 天试用版。
---

# GET `/uploads`

### 描述

@short: 从服务器检索指定的二进制文件

此路由处理发送到 `/uploads/{id}/{name}` 端点的 **HTTP GET** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要获取的文件 ID。|
| `name`     |  string     | *必填*。要检索的文件名。|

### 请求体

不需要请求体。

### 响应

路由将响应所请求的二进制文件。

HTTP 状态码表示成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](/guides/working_with_server.md)
