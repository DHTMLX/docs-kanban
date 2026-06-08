---
sidebar_label: setLocale()
title: Toolbar setLocale 方法 API
description: 阅读 DHTMLX Kanban 的 Toolbar setLocale 方法 API。了解如何为 Toolbar 应用新的语言环境。
---

# setLocale()

### 描述

@short: 将新的语言环境应用到看板的 Toolbar 上

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）将 Toolbar 重置为默认语言环境（*英语*）
- `locale` - （可选）将要应用到 Toolbar 的新语言环境数据对象

:::info
看板的 **Toolbar** 是一个独立的组件。使用 `toolbar.setLocale()` 方法仅将新的语言环境应用到 Toolbar。要将 Toolbar 重置为默认语言环境，请调用不带参数（或传入 *null*）的 `toolbar.setLocale()` 方法。使用 [`kanban.setLocale()`](api/methods/js_kanban_setlocale_method.md) 方法仅将新的语言环境应用到看板。
:::

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {});
// 创建 Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 将 "de" 语言环境应用到看板
board.setLocale(de);
// 将 "de" 语言环境应用到 Toolbar
toolbar.setLocale(de);
~~~

**更新日志：** 参数 **api** 在 v1.6 版本中已弃用

**相关文档：** [本地化](guides/localization.md)