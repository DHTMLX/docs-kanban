---
sidebar_label: GET /columns
title: GET /columns
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 GET /columns REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# GET `/columns`

### 描述

@short: 获取所有列的数据，并返回包含列数据对象数组的 json 对象

该路由处理对 `/columns` 路径发起的 **HTTP GET** 请求。

### 请求体

不需要请求体。

### 响应

该路由返回一个包含列数据对象数组的 json 对象。

示例：

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

有关返回对象的另一个示例，请参见 [**columns**](api/config/js_kanban_columns_config.md)。

HTTP 状态码指示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：
- [与服务器交互](guides/working_with_server.md)
- [getColumns()](api/provider/rest_methods/js_kanban_getcolumns_method.md)