---
sidebar_label: setLocale()
title: JS Kanban setLocale method
description: You can learn about the setLocale method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# setLocale()

### Description

Sets new locale to the JS Kanban widget

### Usage

```js
setLocale: (locale: object) => void;
```

### Parameters

- `locale: object` - the data object of the new locale

:::info
Using this method, you can set a built-in locale (en, ru, cn) as well as a custom one.
:::

### Example

```jsx {7}
// create JS Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// set ru locale
board.setLocale(ru);
```

### Related article !!! [todo]
