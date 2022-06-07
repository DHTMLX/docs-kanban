---
sidebar_label: locale
title: locale Config
description: You can learn about the (Toolbar) locale config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object with a custom locale of Toolbar of Kanban

:::info
The **locale** object includes all labels of Toolbar (Kanban) with the corresponding translations
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, the **locale** parameter is set to the built-in **english** locale. You can set it to the custom locale as well

:::tip
To change the default locale, you can use the [**setLocale()**](../../methods/toolbar_setlocale_method) method of Toolbar
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {
	locale: cn
});
// create Toolbar
new kanban.Toolbar("#toolbar", {
	api: board.api,
	locale: cn // apply the "cn" locale to the Toolbar 
});
~~~

**Related articles:** [Localization](../../../guides/localization)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?mode=wide&text=#kanban)