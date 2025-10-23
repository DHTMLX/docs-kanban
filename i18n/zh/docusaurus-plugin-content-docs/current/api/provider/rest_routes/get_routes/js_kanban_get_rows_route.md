---
sidebar_label: GET /rows
title: GET /rows
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 GET /rows REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
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