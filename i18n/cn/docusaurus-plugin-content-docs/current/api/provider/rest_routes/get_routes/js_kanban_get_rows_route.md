---
sidebar_label: GET /rows
title: GET /rows
description: 浏览 DHTMLX JavaScript 看板库文档中的 GET /rows REST 路由。查看开发者指南、API 参考，尝试在线演示和代码示例，并免费下载 DHTMLX 看板的 30 天试用版。
---

# GET `/rows`

### 描述

@short: 获取所有行的数据，并返回包含行（泳道）数据对象数组的 JSON 对象。

此路由响应发送到 `/rows` 端点的 **HTTP GET** 请求。

### 请求体

请求无需携带请求体。

### 响应

响应是一个 JSON 对象，包含一个行数据对象数组。

示例:

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

关于返回对象的另一个示例，请参见 [**rows**](/api/config/js_kanban_rows_config.md)。

HTTP 状态码指示请求是否成功（response.status == 200）或发生错误（response.status == 500）。

---

**相关文档**:
- [与服务器交互](/guides/working_with_server.md)
- [getRows()](/api/provider/rest_methods/js_kanban_getrows_method.md)
