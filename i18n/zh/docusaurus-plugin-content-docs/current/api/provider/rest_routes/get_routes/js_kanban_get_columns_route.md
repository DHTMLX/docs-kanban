---
sidebar_label: GET /columns
title: GET /columns
description: 本节涵盖 DHTMLX JavaScript 看板库文档中的 GET /columns REST 路由。内容包括开发者指南、API 参考、代码示例、在线演示，并提供 DHTMLX 看板的免费30天试用。
---

# GET `/columns`

### 描述

@short: 获取所有列的信息，并返回包含列数据数组的 JSON 对象。

此路由处理发送到 `/columns` 端点的 **HTTP GET** 请求。

### 请求负载

无需发送请求负载。

### 响应

响应包含一个 JSON 对象，其中有一个列数据对象的数组。

示例:

~~~json
[
    {
        "id": 1,
        "label": "Backlog",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "In Progress",
        "collapsed": false
    },
    {
        "id": 3,
        "label": "Testing",
        "collapsed": false
    },
    {
        "id": 4,
        "label": "Done",
        "collapsed": false
    }
]
~~~

关于返回对象的其他示例，请参见 [**columns**](/api/config/js_kanban_columns_config.md)。

HTTP 状态码指示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文章**:
- [与服务器交互](/guides/working_with_server.md)
- [getColumns()](/api/provider/rest_methods/js_kanban_getcolumns_method.md)
