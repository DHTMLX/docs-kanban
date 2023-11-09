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
setLocale(locale?: object, api?: object): void;
~~~

### Parameters

- `locale` - (optional) an object of the locale to be applied to the Toolbar of Kanban
- `api` - (optional) an object with the internal API of Kanban

:::info
The **Toolbar** of Kanban is a separate component. Before changing its locale, be sure that you have already applied the [`setLocale()`](api/methods/toolbar_setlocale_method.md) method to the **Kanban** component
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
toolbar.setLocale(de, board.api);
~~~

**Chande log:** The **api** parameter was added in v1.5.7

**Related articles:** [Localization](guides/localization.md)
