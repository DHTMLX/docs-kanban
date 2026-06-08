---
sidebar_label: GET /rows
title: GET /rows REST 路由 API
description: 阅读 DHTMLX Kanban 的 GET /rows REST 路由 API。了解如何以 JSON 数组的形式获取所有行（泳道）的数据。
---

# GET `/rows`

### 描述

@short: 获取所有行的数据，并返回一个包含行（泳道）数据对象数组的 JSON 对象

该路由处理对 `/rows` 路径发出的 **HTTP GET** 请求。

### 请求体

不需要请求体。

### 响应

该路由返回一个包含行数据对象数组的 JSON 对象。

示例：

~~~json
[
    {
        "id": 1,
        "label": "Feature",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "Task",
        "collapsed": false
    }
]
~~~

关于返回对象的另一个示例，请参见 [**rows**](api/config/js_kanban_rows_config.md)。

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：
- [与服务器交互](guides/working_with_server.md)
- [getRows()](api/provider/rest_methods/js_kanban_getrows_method.md)