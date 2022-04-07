---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object of the built-in or custom locale

:::info
The **locale** object includes all labels of the Kanban with the corresponding translations
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, the **locale** parameter is set to the built-in **en** locale. You can set it to the **ru**, **cn** or custom locale as well

:::tip
To change the default locale, you can use the [**setLocale()**](../../methods/js_kanban_setlocale_method) method
:::

### Example

~~~jsx {5}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	locale: kanban.ru // apply the "ru" locale by default
	// other parameters
});
~~~

:::info
The Toolbar of Kanban is a separate part of the interface. To apply a new locale to the Toolbar, you need to set the **locale** property to the needed locale object as well
:::

~~~jsx {4}
// create Toolbar
new kanban.Toolbar("#toolbar", {
	api: board.api,
	locale: kanban.ru // apply the "ru" locale to the Toolbar by default
});
~~~

**Related articles:** [Localization](../../../guides/localization)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?mode=wide&text=#kanban)