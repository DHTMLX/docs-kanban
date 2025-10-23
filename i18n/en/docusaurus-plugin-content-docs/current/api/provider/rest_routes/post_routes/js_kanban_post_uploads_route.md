---
sidebar_label: POST /uploads
title: POST /uploads
description: You can learn about the POST /uploads REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# POST `/uploads`

### Description

@short: Uploads a binary file to the server and returns a json object with the file id, name, and url

This route processes an **HTTP POST** multipart request sent to the `/uploads` endpoint.

### Payload

The server expects to receive a binary file through a **multipart/form-data** request. As with all multipart MIME types, the request body should include:

- the **Content-Disposition** header set to **form-data**
  - the **name** attribute set to **upload**
  - **filename** - the original name of the uploaded file
- the **Content-Type** header specifying the file data type

Only one file is allowed per request.

Example:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### Response

The route responds with a JSON object containing the file id, name, and url.

The **isCover** property indicates if the image is a cover image (true) or not (false).

Example:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

The HTTP status code indicates whether the request was successful (response.status == 200) or encountered an error (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)