---
sidebar_label: scroll()
title: scroll Method
description: You can learn about the scroll method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# scroll()

### Description

@short: Moves the Kanban view to bring the specified element into focus.

### Usage

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### Parameters

- `id` - (required) the identifier of the element to scroll to
- `to` - (required) specifies the type of element to scroll to. Options include "column", "row", or "card"
- `options` - (optional) an object with scrolling settings. You can find the full list of parameters for scrolling [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

### Example

~~~jsx {7-15}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// scroll Kanban to the card with the 246 ID
board.scroll({
    id: 246,
    to: "card",
    options: {
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    }
});
~~~

**Change log:** The method was introduced in v1.2