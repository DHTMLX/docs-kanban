---
sidebar_label: locale
title: locale Config
description: Discover how to configure the (Toolbar) locale in the DHTMLX JavaScript Kanban library. Explore developer guides and API references, experiment with code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object that defines a custom locale for the Toolbar.

:::info
The **locale** object should include all labels for both Kanban and Toolbar along with their translations.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

By default, Toolbar is set to the [**English**](/guides/localization/#default-locale) locale. You can also specify your own custom locale.

:::tip
To switch the locale on the fly, you can use the Toolbar's [**setLocale()**](../../methods/toolbar_setlocale_method) method.
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {
    locale: zh
});
// create Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: zh // apply the "zh" locale to Toolbar 
});
~~~

**Related articles:** [Localization](/guides/localization)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
