---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Applies a new locale to Kanban

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets to the default locale (*English*)
- `locale` - (optional) the object of data of the new locale to be applied

:::info
Using this method, you can apply a new locale to Kanban. To reset Kanban to the default locale, call the method without arguments (or with a *null* value)
:::

### Example

~~~jsx {7,9}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// apply the "de" locale to Kanban
board.setLocale(de);
// apply the default locale to Kanban
board.setLocale(); // or board.setLocale(null);
~~~

**Chande log:** The method was updated in v1.2

**Related articles:** [Localization](guides/localization.md)
