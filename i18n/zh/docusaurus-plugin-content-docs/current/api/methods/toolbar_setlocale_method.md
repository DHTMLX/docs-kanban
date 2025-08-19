---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 Toolbar 的 setLocale 方法。浏览开发者指南和 API 参考，尝试代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# setLocale()

### 描述

@short: 使用新的本地化设置更新看板的 Toolbar

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）将 Toolbar 重置为默认本地化（*英文*）
- `locale` - （可选）包含要应用到 Toolbar 的新本地化数据的对象

:::info
看板中的 **Toolbar** 是一个独立的组件。当您只想更改 Toolbar 的本地化时，请使用 `toolbar.setLocale()` 方法。不带参数（或传入 *null*）调用 `toolbar.setLocale()` 会将其重置为默认本地化。若要更新看板本身的本地化，请使用 [`kanban.setLocale()`](/api/methods/js_kanban_setlocale_method.md) 方法。
:::

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 创建 Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 为看板设置 "de" 本地化
board.setLocale(de);
// 为 Toolbar 设置 "de" 本地化
toolbar.setLocale(de);
~~~

**更新日志:** `api` 参数在 v1.6 版本中已弃用

**相关文档:** [本地化](/guides/localization.md)
