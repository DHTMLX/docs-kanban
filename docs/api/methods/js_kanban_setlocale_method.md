---
sidebar_label: setLocale()
title: JS Kanban setLocale method
description: You can learn about the setLocale method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# setLocale()

### Description

Sets new locale to the JS Kanban widget

### Usage

`setLocale: (data: object) => void;`

### Parameters

- `data: object` - the data object of the new locale (built in or custom)

### Details

Using this method, you can set a built-in locale as well as a custom one.

### Example

```jsx
const { Kanban, en, ru, cn } = app;
const kanban = new Kanban("#root", {
	columns,
    cards
});

// set ru locale
kanban.setLocale(ru);
```

### Related article !!! [todo]
