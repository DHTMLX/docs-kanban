---
sidebar_label: columnKey
title: columnKey 配置
description: 探索 DHTMLX JavaScript Kanban 库中的 columnKey 配置。查找开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# columnKey

### 描述

@short: 可选。指定卡片所属的列。

:::info
要将卡片分配到特定的列，必须使用一个键（**column** 或自定义键）并将其设置为卡片数据对象中对应列的 **ID**。在组件配置中，**columnKey** 属性应设置为该键。
:::

### 用法

~~~jsx {}
columnKey?: string;
~~~

### 默认配置

:::note
如果未通过 **columnKey** 属性提供自定义列键，组件默认使用 **"column"** 键！在这种情况下，卡片数据对象应将 **column** 键设置为相应的列 **ID**。

~~~jsx {3}
const cards = [
    {
        column: "backlog",
        // 其他数据
    }
];
~~~
:::

### 示例

~~~jsx {4,8,15}
const cards = [
    {
        label: "Backlog task",
        column_custom_key: "backlog"
    },
    {
        label: "In progress task",
        column_custom_key: "inprogress"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    columnKey: "column_custom_key",
    // 其他参数
});
~~~
