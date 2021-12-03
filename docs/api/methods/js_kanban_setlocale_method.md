---
sidebar_label: setLocale()
title: Kanban setLocale method
description: You can learn about the setLocale method in the documentation of the JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos.
---

# setLocale()

### Description

Sets new locale to the Kanban widget

### Usage

~~~jsx {}
setLocale: (locale: object) => void;
~~~

### Parameters

- `locale: object` - the data object of the new locale (*mandatory*)

:::info
Using this method, you can set a built-in locale (en, ru, cn) as well as a custom one.
:::

### Example

~~~jsx {7}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards
});
// set ru locale to Kanban
board.setLocale(ru);
~~~

:::info
Toolbar of Kanban is a separate part of the interface. To change its locale, you need to call the **setLocale()** method for the Toolbar as well.
:::

~~~jsx {7}
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", {
	api: board.api
});
// apply the ru locale to the Toolbar
toolbar.setLocale(ru);
~~~

**Related articles:** [Localization](guides/localization.md)
