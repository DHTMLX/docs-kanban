---
sidebar_label: getQueue()
title: getQueue REST Method
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解 getQueue REST 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# getQueue()

### 描述

@short: 返回 RestDataProvider 处理的内部操作队列

:::info
`getQueue()` 方法是 **RestDataProvider** 服务的一部分，用于与服务器进行交互。
:::

### 用法

~~~jsx {}
getQueue(): object;
~~~

### 返回值

该方法返回 `RestDataProvider` 用于处理发送到服务器的数据操作的内部 `ActionQueue` 实例。该队列负责：

- 在待处理请求完成之前缓冲操作
- 为新创建的实体分配临时客户端 ID，并在服务器响应后将其替换为后端 ID

该队列由 `RestDataProvider` 的其他方法在内部使用。最常见的间接使用方式是通过 [`getIDResolver()`](api/provider/rest_methods/js_kanban_getidresolver_method.md)，该方法基于队列的 ID 解析逻辑构建。

通常情况下，您无需直接调用 `getQueue()`。仅当需要对队列进行精细控制时（例如，在实现客户端与服务器之间的高级自定义同步时），才使用此方法。

**相关文章：** [与服务器配合使用](guides/working_with_server.md)
