---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Applies a new locale to Toolbar

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets to the default locale (*English*)
- `locale` - (optional) the object of data of the new locale to be applied

:::info
Using this method, you can apply a new locale to Toolbar. To reset Toolbar to the default locale, call the method without arguments (or with a *null* value)
:::

:::important
After applying a new locale to Toolbar, don't forget to refresh the logic of Toolbar controls via the [`setConfig()`](api/methods/toolbar_setconfig_method.md) method. See the example below.
:::

### Example

~~~jsx {6,8-9}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// apply the "de" locale to Toolbar
toolbar.setLocale(de);
// apply the default locale to Toolbar
toolbar.setLocale(); // or toolbar.setLocale(null);
toolbar.setConfig({ api: board.api }); // refresh logic of Toolbar controls (required after changing locales)
~~~

**Chande log:** The method was updated in v1.2

**Related articles:** [Localization](guides/localization.md)
