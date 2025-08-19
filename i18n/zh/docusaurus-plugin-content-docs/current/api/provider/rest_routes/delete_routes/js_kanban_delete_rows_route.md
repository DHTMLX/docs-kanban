---
sidebar_label: DELETE /rows
title: DELETE /rows
description: 您可以在DHTMLX JavaScript看板库的文档中了解DELETE /rows REST路由。浏览开发者指南和API参考，尝试代码示例和在线演示，并下载免费的30天评估版DHTMLX看板。
---

# DELETE `/rows`

### 描述

@short: 从数据中移除一行（泳道）。

此路由处理发送到 `/rows/{id}` 端点的 **HTTP DELETE** 请求。

### 路径参数

请求URL中包含以下参数:

| 名称       | 类型        | 描述                         |
| ---------- | ----------- | ---------------------------- |
| `id`       |  number     | *必填*。要删除的行的唯一标识符。|

### 请求负载

请求不需要发送负载。

### 响应

无内容返回。HTTP状态码表示结果:状态码200表示删除成功，500表示发生错误。

---

**相关文档**: [与服务器交互](/guides/working_with_server.md)
