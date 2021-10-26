---
sidebar_label: selectCard()
title: JS Kanban selectCard method
description: You can learn about the selectCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# selectCard()

### Description

Selects the card by its ID

### Usage

`selectCard: ({ id: string, groupMode: boolean }) => void;`

### Parameters

- `id: string` - the **ID** of the selected card
- `groupMode: boolean` - ???

### Details

...

### Example

```jsx
// select the card by its ID
kanban.selectCard({
	id: 1,
	groupMode: true
});
```
