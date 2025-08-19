---
sidebar_label: setLocale()
title: setLocale 方法
description: 您可以在 DHTMLX JavaScript 看板库文档中了解 setLocale 方法。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# setLocale()

### 描述

@short: 为看板组件设置新的本地化配置

### 用法

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 参数

- `null` - （可选）将本地化设置重置回默认值（*英语*）
- `locale` - （可选）定义要应用的新本地化数据的对象

:::info
`setLocale()` 方法专门用于更新看板的本地化配置。要将看板恢复到默认本地化，只需调用 `setLocale()` 不带任何参数（或传入 *null*）。如果您仅需更改工具栏的本地化，请使用 [`toolbar.setLocale()`](/api/methods/toolbar_setlocale_method.md) 方法。
:::

### 示例

~~~jsx {7,9}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// 为看板设置 "de" 本地化
board.setLocale(de);
// 重置看板为默认本地化
board.setLocale(); // 或 board.setLocale(null);
~~~

**更新日志:** 该方法在版本 1.2 中进行了更新

**相关文档:** [本地化](/guides/localization.md)
