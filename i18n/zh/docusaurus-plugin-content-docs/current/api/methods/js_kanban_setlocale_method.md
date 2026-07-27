---
sidebar_label: setLocale()
title: setLocale 方法 API
description: 阅读 DHTMLX Kanban 的 setLocale 方法 API。了解如何切换界面语言并配置本地化。
---

# setLocale()

### 描述

@short: 为 Kanban 应用新的语言环境

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）重置为默认语言环境（*英语*）
- `locale` - （可选）要应用的新语言环境数据对象

:::info
使用 `setLocale()` 方法仅为 Kanban 应用新的语言环境。要将 Kanban 重置为默认语言环境，请调用不带参数（或传入 *null* 值）的 `setLocale()` 方法。若需仅为 Toolbar 应用新的语言环境，请使用 [`toolbar.setLocale()`](api/methods/toolbar_setlocale_method.md) 方法。
:::

### 示例

~~~jsx {7,9}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// 为 Kanban 应用 "de" 语言环境
board.setLocale(kanban.locales["de"]);
// 为 Kanban 应用默认语言环境
board.setLocale(); // 或 board.setLocale(null);
~~~

**更新日志：** 该方法在 v1.2 中更新

**相关文章：** [本地化](guides/localization.md)