---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Sets a new locale for the Kanban component

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets the locale back to the default (*English*)
- `locale` - (optional) an object defining the new locale data to apply

:::info
The `setLocale()` method is designed to update the locale specifically for Kanban. To revert Kanban to its default locale, just call `setLocale()` without any arguments (or pass *null*). If you need to change the locale for the Toolbar alone, use the [`toolbar.setLocale()`](/api/methods/toolbar_setlocale_method) method.
:::

### Example

~~~jsx {7,9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// set the "de" locale for Kanban
board.setLocale(de);
// reset Kanban to the default locale
board.setLocale(); // or board.setLocale(null);
~~~

**Change log:** This method was updated in version 1.2

**Related articles:** [Localization](/guides/localization)
