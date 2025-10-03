---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Applies a new locale to the Toolbar of Kanban

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets Toolbar to the default locale (*English*)
- `locale` - (optional) the object of new locale data to be applied to the Toolbar

:::info
The **Toolbar** of Kanban is a separate component. Use the `toolbar.setLocale()` method to apply a new locale to Toolbar only. To reset Toolbar to the default locale, call the `toolbar.setLocale()` method without arguments (or with a *null* value). Use the [`kanban.setLocale()`](api/methods/js_kanban_setlocale_method.md) method to apply a new locale to Kanban only.
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// apply the "de" locale to Kanban
board.setLocale(de);
// apply the "de" locale to the Toolbar
toolbar.setLocale(de);
~~~

**Change log:** The **api** parameter was deprecated in v1.6

**Related articles:** [Localization](guides/localization.md)
