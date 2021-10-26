---
sidebar_label: setSearch()
title: JS Kanban setSearch method
description: You can learn about the setSearch method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# setSearch()

### Description

Looks for the needed cards by the required parameters

### Usage

`setSearch: ({ value: string, by: string }) => void;`

### Parameters

- `value: string` - the value to search
- `by: string` - the card field for searching

### Details

Using this method, you can search for the needed cards by the required parameter.

### Example

```jsx
// highlight the cards that match the parameters
kanban.setSearch({ value: "Integration", by: "label" });
```
