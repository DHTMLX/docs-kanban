---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 setLocale 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# setLocale()

### 描述

@short: 为看板应用新的语言环境

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）重置为默认语言环境（*英语*）
- `locale` - （可选）要应用的新语言环境数据对象

:::info
使用 `setLocale()` 方法仅为看板应用新的语言环境。要将看板重置为默认语言环境，请调用不带参数（或传入 *null* 值）的 `setLocale()` 方法。若需仅为工具栏应用新的语言环境，请使用 [`toolbar.setLocale()`](api/methods/toolbar_setlocale_method.md) 方法。
:::

### 示例

~~~jsx {7,9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// 为看板应用 "de" 语言环境
board.setLocale(kanban.locales["de"]);
// 为看板应用默认语言环境
board.setLocale(); // 或 board.setLocale(null);
~~~

**更新日志：** 该方法在 v1.2 版本中进行了更新

**相关文章：** [本地化](guides/localization.md)