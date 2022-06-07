---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Applies new locale to Toolbar

### Usage

~~~jsx {}
setLocale(locale: object): void;
~~~

### Parameters

- `locale` - (required) the data object of the new locale 

:::info
Using this method, you can set the built-in **English** locale as well as a custom one.
:::

### Example

~~~jsx {6}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// apply the "cn" locale to Toolbar
toolbar.setLocale(cn);
~~~

**Related articles:** [Localization](guides/localization.md)
