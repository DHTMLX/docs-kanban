---
sidebar_label: locale
title: locale Config
description: Explore the locale configuration in the DHTMLX JavaScript Kanban library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# locale

### Description

@short: Optional. An object defining a custom locale for Kanban

:::info
The **locale** object should contain all Kanban and Toolbar labels along with their translations.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

Kanban uses the [**English**](guides/localization.md#default-locale) locale by default. You can also specify a custom locale if needed.

:::tip
To switch the locale on the fly, use the [**setLocale()**](api/methods/js_kanban_setlocale_method.md) method provided by Kanban.
:::

### Example

~~~jsx {5}
// create Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // sets the initial locale to "cn"
    // other parameters
});
~~~

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)