---
sidebar_label: DELETE /links
title: DELETE /links
description: 您可以在DHTMLX JavaScript看板库的文档中了解DELETE /links REST路由。浏览开发者指南和API参考，尝试代码示例和在线演示，并下载DHTMLX看板的免费30天试用版本。
---

# DELETE `/links`

### 描述

@short: 删除链接上的数据

该路由处理发往 `/links/{id}` 路径的 **HTTP DELETE** 请求。

### 路径参数

以下参数在请求行中传递：

| 名称 | 类型    | 描述             |
| ---- | ------- | ---------------- |
| `id` | number  | *必填*。要删除的链接的ID。 |

### 请求体

不需要请求体。

### 响应

不返回数据。HTTP状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**：
- [与服务器交互](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)