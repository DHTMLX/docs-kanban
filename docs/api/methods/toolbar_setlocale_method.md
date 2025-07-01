---
sidebar_label: setLocale()
title: setLocale Method
description: You can learn about the setLocale method of Toolbar in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# setLocale()

### Description

@short: Updates the Toolbar of Kanban with a new locale

### Usage

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameters

- `null` - (optional) resets the Toolbar back to its default locale (*English*)
- `locale` - (optional) an object containing the new locale data to apply to the Toolbar

:::info
The **Toolbar** in Kanban is an independent component. Use the `toolbar.setLocale()` method when you want to change the locale for the Toolbar only. Calling `toolbar.setLocale()` without any arguments (or with *null*) will reset it to the default locale. To update the locale for Kanban itself, use the [`kanban.setLocale()`](/api/methods/js_kanban_setlocale_method.md) method.
:::

### Example

~~~jsx {8}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// set the "de" locale for Kanban
board.setLocale(de);
// set the "de" locale for the Toolbar
toolbar.setLocale(de);
~~~

**Change log:** The **api** parameter was deprecated in v1.6

**Related articles:** [Localization](/guides/localization.md)
