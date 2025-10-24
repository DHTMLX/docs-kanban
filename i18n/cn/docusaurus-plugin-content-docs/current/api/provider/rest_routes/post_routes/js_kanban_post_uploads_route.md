---
sidebar_label: POST /uploads
title: POST /uploads
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 POST /uploads REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# POST `/uploads`

### 描述

@short: 上传二进制文件到服务器，并返回包含文件 ID、名称和 URL 的 JSON 对象

该路由接受发送到 `/uploads` 端点的 **HTTP POST** 多部分请求。

### 请求体

服务器期望通过 **multipart/form-data** 请求发送二进制文件。与所有多部分 MIME 请求一样，消息体应包含:

- 一个 **Content-Disposition** 头，设置为 **form-data**
  - 一个值为 **upload** 的 **name** 属性
  - 一个包含上传文件原始名称的 **filename** 字段
- 一个指定文件数据类型的 **Content-Type** 头

每次请求只允许上传一个文件。

示例:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### 响应

服务器返回一个 JSON 对象，包含文件的 id、名称和 url。

**isCover** 属性表示该图片是否为封面图片（`true` 表示是，`false` 表示不是）。

示例:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

HTTP 状态码表示请求是否成功（`response.status == 200`）或发生错误（`response.status == 500`）。

---

**相关文档**:[Working with server](/guides/working_with_server.md)
