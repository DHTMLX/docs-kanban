---
sidebar_label: deleteCard()
title: JS Kanban deleteCard method
description: You can learn about the deleteCard method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# deleteCard()

### Description

Removes the specified card from datastore of JS Kanban

### Usage

`deleteCard: ({ id: string }) => void;`

### Parameters

- `id: string` - the **ID** of the card to be deleted

### Example

```jsx
// remove card by its id
kanban.deleteCard({ id: "1" });
```
