---
sidebar_label: locale
title: locale 配置
description: 探索 DHTMLX JavaScript 看板库中的 locale 配置。查看开发者指南、API 参考、代码示例、实时演示，并免费下载 DHTMLX 看板的30天试用版。
---

# locale

### 描述

@short: 可选。一个定义自定义看板语言环境的对象

:::info
**locale** 对象应包含所有看板和工具栏的标签及其翻译版本。
:::

### 用法

~~~jsx {}
locale?: object;
~~~

### 默认配置

看板默认使用 [**英语**](/guides/localization/#默认语言环境) 语言环境。您也可以根据需要指定自定义语言环境。

:::tip
要动态切换语言环境，可以使用看板中的 [**setLocale()**](../../methods/js_kanban_setlocale_method) 方法。
:::

### 示例

~~~jsx {5}
// 创建看板
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: cn // 初始应用 "cn" 语言环境
    // 其他参数
});
~~~

**相关文档:** [本地化](/guides/localization)

**相关示例:** [看板. 本地化](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
