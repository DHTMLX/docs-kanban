---
sidebar_label: setHeaders()
title: setHeaders REST Method
description: You can learn about the setHeaders REST method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setHeaders()

### Description

@short: Sets custom HTTP headers that RestDataProvider attaches to every request sent to the server

:::info
The `setHeaders()` method is a part of the **RestDataProvider** service intended for working with server.
:::

### Usage

~~~jsx {}
setHeaders(headers: object): void;
~~~

### Parameters

- `headers` - (required) an object whose keys are header names and values are header values. The headers are appended to the default `Content-Type: application/json` header on every request sent via [`send()`](api/provider/rest_methods/js_kanban_send_method.md).

### Example

The most common use case is attaching an authorization token to every request:

~~~jsx {4-6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

restProvider.setHeaders({
    "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
});
~~~

To set headers only for a particular request rather than for every request, pass them as the fourth argument to [`send()`](api/provider/rest_methods/js_kanban_send_method.md) instead.

**Related articles:** [Working with server: Multiuser backend](guides/working_with_server.md/#multiuser-backend)
