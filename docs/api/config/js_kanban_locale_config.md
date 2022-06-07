---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object with the built-in or custom locale of Kanban

:::info
The **locale** object includes all labels of Kanban with the corresponding translations
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, the **locale** parameter is set to the built-in **English** locale. You can set it to the custom locale as well

:::tip
To change the default locale, you can use the [**setLocale()**](../../methods/js_kanban_setlocale_method) method
:::

### Example

~~~jsx {5}
// create Kanban
const board = new kanban.Kanban("#root", {
	columns,
	cards,
	locale: cn // the "cn" locale will be set initially
	// other parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?mode=wide&text=#kanban)