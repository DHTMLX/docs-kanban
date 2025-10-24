---
sidebar_label: POST /uploads
title: POST /uploads
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 POST /uploads REST 路由。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天试用版。
---

# POST `/uploads`

### 描述

@short: 上传二进制文件到服务器，并返回包含文件 id、名称和 URL 的 json 对象

该路由处理发送到 `/uploads` 路径的 **HTTP POST** 多部分请求。

### 请求负载

服务器需要通过 **multipart/form-data** 请求接收二进制文件。与所有多部分 MIME 类型一样，请求体应包含：

- **Content-Disposition** 头，需设置为 **form-data**
  - **name** 属性值为 **upload**
  - **filename** - 上传文件的原始文件名
- **Content-Type** 头 - 文件数据内容的类型

每次请求只能发送一个文件。

示例：

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### 响应

该路由返回包含文件 id、名称和 URL 的 json 对象。

**isCover** 属性指示图片是否为封面图片（true 表示是，false 表示不是）。

示例：

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

HTTP 状态码表示请求是否成功（response.status == 200）或失败（response.status == 500）。

---

**相关文档**: [Working with server](guides/working_with_server.md)