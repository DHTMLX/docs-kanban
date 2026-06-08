---
sidebar_label: PUT /rows
title: PUT /rows REST 路由 API
description: 阅读 DHTMLX Kanban 的 PUT /rows REST 路由 API。了解如何更新行（泳道）数据。
---

# PUT `/rows`

### 描述

@short: 更新指定行（泳道）上的数据并返回一个空的 json 对象

该路由处理对 `/rows/{id}` 路径发起的 **HTTP PUT** 请求。

### 路径参数

以下参数在请求行中传递：

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *必需*。要更新的行（泳道）的 ID。|

### 请求负载

服务器需要接收一个包含所有行属性（包括未改变的和新的/修改过的）的 json 对象。

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *必需*。要更新的行名称。|
| `collapsed` |  boolean    | *可选*。行的状态：如果行初始折叠则为 **true**，如果展开则为 **false**（默认）。|

示例：

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

您可以在 [**rows**](api/config/js_kanban_rows_config.md) 部分找到另一个行对象示例。

### 响应

成功时，返回一个空的 json 对象。

HTTP 状态码显示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：[与服务器协作](guides/working_with_server.md)
