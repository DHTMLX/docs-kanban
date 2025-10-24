---
sidebar_label: locale
title: locale 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解（工具栏）locale 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
---

# locale

### 描述

@short: 可选。工具栏的自定义 locale 对象

:::info
**locale** 对象需要包含看板和工具栏的所有标签及其对应的翻译。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

默认情况下，工具栏使用[**英语**](guides/localization.md#default-locale) locale。您也可以设置为自定义的 locale。

:::tip
要动态更改当前 locale，可以使用工具栏的[**setLocale()**](api/methods/toolbar_setlocale_method.md)方法。
:::

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {
    locale: cn
});
// 创建工具栏
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: cn // 将 "cn" locale 应用到工具栏
});
~~~

**相关文档：** [本地化](guides/localization.md)

**相关示例：** [看板. 本地化](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)