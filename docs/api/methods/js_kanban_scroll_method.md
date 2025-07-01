---
sidebar_label: scroll()
title: scroll Method
description: Explore the scroll method in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# scroll()

### Description

@short: Moves the Kanban view to a specific element

### Usage

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### Parameters

- `id` - (required) the ID of the element to scroll to
- `to` - (required) specifies the element type to scroll to; can be "column", "row", or "card"
- `options` - (optional) an object containing scrolling options. A full list of the available parameters is available [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

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

**Change log:** This method was introduced in version 1.2
