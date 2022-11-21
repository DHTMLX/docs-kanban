---
sidebar_label: Post /uploads
title: Post /uploads
description: You can learn about the Post /uploads REST route in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Post /uploads

### Description

@short: Uploads a binary file to the server and returns a json object with the file id, name, and url

The route handles the **HTTP POST** multipart request made to the **'/uploads'** path.

### Payload

The server needs to receive a binary file via the **multipart/form-data** request. As with all multipart MIME types, the request body should contain:

- the **Content-Disposition** header that should be set to **form-data**
  - the **name** attribute with the **upload** value 
  - **filename** - the original file name of the uploaded file
- the **Content-Type** header - the type of the file data content

Only one file can be sent per request.

Example:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--


~~~

### Response

The route returns a json object with the file id, name, and url.

The **isCover** property indicates whether an image is a cover image (true) or not (false). 

Example:


~~~ json

{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~


The HTTP status code shows whether the request succeeds (response.status == 200) or fails (response.status == 500).

---

**Related articles**: [Working with server](guides/working_with_server.md)
