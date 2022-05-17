---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Applies new locale to Kanban

### Usage

~~~jsx {}
setLocale(locale: object): void;
~~~

### Parameters

- `locale` - (required) a data object of the new locale 

:::info
Using this method, you can set a built-in locale (**en**, **ru**, **cn**) as well as a custom one.
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	locale: kanban.cn // the "cn" locale will be set initially
});
// apply "ru" locale to Kanban
board.setLocale(kanban.ru);
~~~

:::info
The Toolbar of Kanban is a separate part of the interface. To change its locale, you need to call the **setLocale()** method for the Toolbar as well.
:::

~~~jsx {7}
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", {
	api: board.api,
	locale: kanban.cn // the "cn" is set by default
});
// apply the "ru" locale to the Toolbar
toolbar.setLocale(kanban.ru);
~~~

**Related articles:** [Localization](guides/localization.md)
