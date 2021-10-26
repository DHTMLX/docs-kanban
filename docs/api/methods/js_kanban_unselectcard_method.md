---
sidebar_label: unselectCard()
title: JS Kanban unselectCard method
description: You can learn about the unselectCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# unselectCard()

### Description

Unselects card(s) by its ID

### Usage

`unselectCard: ({ id: string }) => void;`

### Parameters

- `id: string` - the **ID** of the card to be unselected

### Details

To unselect all cards, call the **unselectCard()** method without parameters.

### Example

```jsx
// unselect the card whth the "1" ID
kanban.unselectCard({ id: "1" });
```
