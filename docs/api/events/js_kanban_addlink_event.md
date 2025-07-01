---
sidebar_label: add-link
title: add-link Event
description: You can learn about the add-link event in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# add-link

### Description

@short: Triggered when a new link is added

### Usage

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### Parameters

The callback for the **add-link** event receives an object with these properties:

- `id` - (optional) the ID assigned to the new link
- `link` - (required) the data object representing the new link. You can find the full list of link parameters [here](/api/config/js_kanban_links_config.md)
- `skipProvider` - (optional) controls whether the request to the server is prevented or not

:::info
To manage internal events, you can make use of the [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {8-10}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// subscribe on the "add-link" event
board.api.on("add-link", (obj) => {
    console.log(obj.link.masterId);
});
~~~

**Change log:** This event was introduced in v1.4
