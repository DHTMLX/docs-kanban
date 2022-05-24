---
sidebar_label: scroll()
title: scroll Method
description: You can learn about the scroll method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# scroll()

### Description

@short: Scrolls Kanban to the specified element

### Usage

~~~jsx {}
scroll({
	id: string | number,
	to: "column" | "row" | "card",
	options?: object
}): void;
~~~

### Parameters

- `id` - (required) the ID of the target element
- `to` - (required) the type of the target element. The available values are "column", "row" and "card"
- `options` - (optional) the object of scrolling options. The full list of the scrolling parameters can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

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

**Change log:** The method was added in v1.2