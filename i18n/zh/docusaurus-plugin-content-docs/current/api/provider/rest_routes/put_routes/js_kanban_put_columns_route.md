---
sidebar_label: PUT /columns
title: PUT /columns REST 路由 API
description: 阅读 DHTMLX Kanban 的 PUT /columns REST 路由 API。了解如何更新列数据。
---

# PUT `/columns`

### 描述

@short: 更新指定列的数据并返回一个空的 json 对象

该路由处理发送到 `/columns/{id}` 路径的 **HTTP PUT** 请求。

### 路径参数

以下参数在请求行中传递：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *必填*。要更新的列的 ID。|

### 请求负载

服务器需要接收一个包含所有列属性（包括未更改和新/修改的）的 json 对象。

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *必填*。要更新的列的名称。|
| `collapsed`|  boolean    | *可选*。列的状态：如果列初始折叠则为 **true**，展开状态为 **false**（默认值）。|

示例：

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

您可以在 [**columns**](api/config/js_kanban_columns_config.md) 部分找到另一个列对象的示例。

### 响应

如果请求成功，将返回一个空的 json 对象。

HTTP 状态码显示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
