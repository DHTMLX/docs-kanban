---
sidebar_label: serialize()
title: JS Kanban serialize method
description: You can learn about the serialize method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# serialize()

### Description

Serializes JS Kanban data to JSON

### Usage

`serialize: () => object;`

### Returns

The method returns the object of JS Kanban data  

```jsx
{
	cards: [{...}, {...}, ...],
	rows: [{...}, {...}, ...],
	columns: [{...}, {...}, ...]
}
```

### Example

```jsx
// get the object of the JS Kanban data
kanban.serialize();
```
