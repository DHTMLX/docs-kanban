---
sidebar_label: locale
title: locale 配置 API
description: 阅读 DHTMLX Kanban 的 locale 配置 API。了解如何为看板界面应用自定义语言环境。
---

# locale

### 描述

@short: 可选。一个自定义看板语言环境的对象

:::info
**locale** 对象需要包含看板和工具栏的所有标签及其对应的翻译。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

默认情况下，看板使用[**英语**](guides/localization.md#default-locale)语言环境。您也可以设置为自定义语言环境。

:::tip
要动态更改当前语言环境，可以使用看板的[**setLocale()**](api/methods/js_kanban_setlocale_method.md)方法。
:::

### 示例

~~~jsx {5}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // 初始设置为 "cn" 语言环境
    // 其他参数
});
~~~

**相关文档：** [本地化](guides/localization.md)

**相关示例：** [看板。本地化](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)