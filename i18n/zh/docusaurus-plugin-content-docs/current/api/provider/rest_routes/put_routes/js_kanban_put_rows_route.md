---
sidebar_label: PUT /rows
title: PUT /rows
description: 您可以在DHTMLX JavaScript看板库的文档中了解PUT /rows REST路由。浏览开发者指南和API参考，尝试代码示例和在线演示，并下载DHTMLX看板的免费30天评估版。
---

# PUT `/rows`

### 描述

@short: 更新特定行（泳道）的数据，并返回一个空的JSON对象。

此路由处理发送到`/rows/{id}`端点的**HTTP PUT**请求。

### 路径参数

请求URL中包含以下参数:

| 名称       | 类型        | 描述 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *必填*。需要更新的行（泳道）的ID。|

### 请求负载

服务器期望接收一个包含该行所有属性的JSON对象，包括未更改和已更新的字段。

| 名称        | 类型        | 描述 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *必填*。要更新的行名称。|
| `collapsed` |  boolean    | *可选*。指示该行初始是否折叠，值为**true**表示折叠，**false**表示展开（默认值）。|

示例:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

有关行对象的其他示例，请参见[**rows**](/api/config/js_kanban_rows_config.md)部分。

### 响应

更新成功时，服务器返回一个空的JSON对象。

HTTP状态码反映请求的结果:状态码200表示请求成功，500表示失败。

---

**相关文档**:[与服务器交互](/guides/working_with_server.md)
