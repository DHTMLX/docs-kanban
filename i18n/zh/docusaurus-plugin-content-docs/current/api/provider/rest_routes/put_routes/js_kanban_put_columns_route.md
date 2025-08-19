---
sidebar_label: PUT /columns
title: PUT /columns
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 PUT /columns REST 路由。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# PUT `/columns`

### 描述

@short: 更新特定列的详细信息并返回一个空的 JSON 对象。

此路由处理发送到 `/columns/{id}` 端点的 **HTTP PUT** 请求。

### 路径参数

请求 URL 中包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。需要更新的列的 ID。|

### 请求负载

服务器期望接收包含列所有属性的 JSON 对象，包括未更改的属性以及新增或修改的属性。

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *必填*。列的更新名称。|
| `collapsed`|  boolean    | *可选*。指示列是否初始为折叠状态（**true**），或展开状态（**false**，默认）。|

示例:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

另一个列对象的示例可以在[**columns**](/api/config/js_kanban_columns_config.md)部分找到。

### 响应

请求成功时，返回一个空的 JSON 对象。

HTTP 状态码表示结果:成功为 200 状态，失败为 500 状态。

---

**相关文档**: [与服务器交互](/guides/working_with_server.md)
