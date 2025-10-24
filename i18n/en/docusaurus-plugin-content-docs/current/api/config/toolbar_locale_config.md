---
sidebar_label: locale
title: locale Config
description: Explore the (Toolbar) locale configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object defining a custom locale for the Toolbar

:::info
The **locale** object should contain all the Kanban and Toolbar labels along with their translations.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, the Toolbar uses the [**English**](guides/localization.md#default-locale) locale. You can also configure it to use a custom locale.

:::tip
To switch the locale on the fly, use the [**setLocale()**](api/methods/toolbar_setlocale_method.md) method of the Toolbar.
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
    locale: cn // apply the "cn" locale to Toolbar 
});
~~~

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)