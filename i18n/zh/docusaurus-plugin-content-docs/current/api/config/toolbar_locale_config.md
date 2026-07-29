---
sidebar_label: locale
title: Toolbar locale 配置 API
description: 阅读 DHTMLX Kanban 的 Toolbar locale 配置 API。了解如何为 Toolbar 应用自定义语言环境。
---

# locale

### 描述

@short: 可选。Toolbar 的自定义 locale 对象

:::info
**locale** 对象需要包含 Kanban 和 Toolbar 的所有标签及其对应的翻译。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

默认情况下，Toolbar 使用[**英语**](guides/localization.md#default-locale) locale。您也可以设置为自定义的 locale。

:::tip
要动态更改当前 locale，可以使用 Toolbar 的[**setLocale()**](api/methods/toolbar_setlocale_method.md)方法。
:::

### 示例

~~~jsx {8}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    locale: cn
});
// 创建 Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: cn // 将 "cn" locale 应用到 Toolbar
});
~~~

**相关文章：** [本地化](guides/localization.md)

**相关示例：** [Kanban. 本地化](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)