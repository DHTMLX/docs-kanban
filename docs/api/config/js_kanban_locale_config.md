---
sidebar_label: locale
title: locale Config
description: You can learn about the locale config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object of a custom locale of Kanban

:::info
The **locale** object needs to include all labels of Kanban and Toolbar with the corresponding translations.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, Kanban uses the [**English**](../../../guides/localization/#default-locale) locale. You can set it to the custom locale as well

:::tip
To change the current locale dynamically, you can use the [**setLocale()**](../../methods/js_kanban_setlocale_method) method of Kanban
:::

### Example

~~~jsx {5}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // the "cn" locale will be set initially
    // other parameters
});
~~~

**Related articles:** [Localization](../../../guides/localization)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
