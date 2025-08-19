---
sidebar_label: DELETE /cards
title: DELETE /cards
description: 您可以在DHTMLX JavaScript看板库的文档中了解DELETE /cards REST路由。浏览开发者指南和API参考，试用代码示例和实时演示，并下载DHTMLX看板的免费30天评估版。
---

# DELETE `/cards`

### 描述

@short: 从卡片中删除数据

此路由处理发送到`/cards/{id}`端点的**HTTP DELETE**请求。

### 路径参数

请求URL中包含以下参数:

| 名称       | 类型        | 描述           |
| ---------- | ----------- | -------------- |
| `id`       |  number     | *必需*。要删除的卡片ID。|

### 请求体

无需发送请求体。

### 响应

无内容返回。HTTP状态码指示请求是否成功（response.status == 200）或出现错误（response.status == 500）。

---

**相关文章**: [Working with server](/guides/working_with_server.md)
