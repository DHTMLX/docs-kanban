---
sidebar_label: columnKey
title: columnKey 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 columnKey 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# columnKey

### 描述

@short: 可选。定义卡片所属的列

:::info
为了将卡片分配到不同的列中，您需要指定一个键（**column** 或自定义键）并将其设置为卡片数据对象中所需列的 **ID**。在组件配置对象中，**columnKey** 属性需要被设置为该键。
:::

### 用法

~~~jsx {}
columnKey?: string;
~~~

### 默认配置

:::note
除非您通过 **columnKey** 属性注册了列键，否则组件默认使用 **"column"** 键！在这种情况下，您需要在卡片数据对象中将 **column** 键设置为所需的列 **ID**。

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
        label: "待办任务",
        column_custom_key: "backlog"
    },
    {
        label: "进行中任务",
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