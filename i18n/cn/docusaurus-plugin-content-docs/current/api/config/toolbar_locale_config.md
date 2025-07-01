---
sidebar_label: locale
title: locale 配置
description: 了解如何在 DHTMLX JavaScript 看板库中配置（Toolbar）的 locale。浏览开发者指南和 API 参考，体验代码示例和在线演示，并获得 DHTMLX 看板的免费 30 天试用。
---

# locale

### 描述

@short: 可选。一个定义 Toolbar 自定义语言环境的对象。

:::info
**locale** 对象应包含看板和 Toolbar 的所有标签及其翻译。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

默认情况下，Toolbar 使用的是[**英语**](/guides/localization/#默认语言环境)语言环境。您也可以指定自己的自定义语言环境。

:::tip
要动态切换语言环境，可以使用 Toolbar 的[**setLocale()**](../../methods/toolbar_setlocale_method)方法。
:::

### 示例

~~~jsx {8}
// 创建看板
const board = new kanban.Kanban("#root", {
    locale: cn
});
// 创建 Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: cn // 将 "cn" 语言环境应用到 Toolbar 
});
~~~

**相关文档:** [本地化](/guides/localization)

**相关示例:** [看板。 本地化](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
