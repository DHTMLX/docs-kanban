---
sidebar_label: readonly
title: Kanban readonly property
description: You can learn about the readonly property in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# readonly

### Description

Enables/disables ***editing***, ***adding***, ***selecting***, ***dragging***  of the cards

### Usage

```js
readonly?: boolean // enables/disables readonly mode of Kanban (false by default)
//or
readonly?: {
	edit?: boolean, // enables/disables editing of the cards (true by default)
	add?: boolean, // enables/disables adding of the new cards (true by default)
	select?: boolean, // enables/disables selecting of the cards (true by default)
	dnd?: boolean // enables/disables dragging of the cards (true by default)
}
```
### Example

```jsx {3-8}
new kanban.Kanban("#root", {
	...,
	readonly: {
		edit: false, // disable editing
		add: true, // enable addind
		select: false, // disable selecting
		dnd: true // enable dragging
	}
});
```
**Related sample:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln)
