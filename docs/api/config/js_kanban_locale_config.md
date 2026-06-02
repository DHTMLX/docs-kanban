---
sidebar_label: locale
title: locale Config API
description: Read the locale configuration API for DHTMLX Kanban. Learn how to apply a custom locale to the board interface.
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

By default, Kanban uses the [**English**](guides/localization.md#default-locale) locale. You can set it to the custom locale as well

:::tip
To change the current locale dynamically, you can use the [**setLocale()**](api/methods/js_kanban_setlocale_method.md) method of Kanban
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

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
