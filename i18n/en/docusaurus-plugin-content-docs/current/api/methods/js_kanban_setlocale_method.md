---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Changes the locale settings for Kanban

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets Kanban to the default locale (*English*)
- `locale` - (optional) an object containing the new locale data to be applied

:::info
The `setLocale()` method is used to update the locale for Kanban only. To revert Kanban back to the default locale, call `setLocale()` without any arguments or pass *null*. For changing the locale of the Toolbar, use the [`toolbar.setLocale()`](api/methods/toolbar_setlocale_method.md) method instead.
:::

### Example

~~~jsx {7,9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// set Kanban locale to "de"
board.setLocale(kanban.locales["de"]);
// reset Kanban locale to default
board.setLocale(); // or board.setLocale(null);
~~~

**Change log:** The method was updated in v1.2

**Related articles:** [Localization](guides/localization.md)