---
sidebar_label: rowKey
title: rowKey 配置
description: 探索 DHTMLX JavaScript 看板库中的 rowKey 配置。查找开发者指南和 API 参考，试验代码示例和实时演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# rowKey

### 描述

@short: 可选。指定卡片如何分配到某一行。

:::info
要将卡片组织到行（泳道）中，您需要定义一个 **自定义键**，该键对应每张卡片数据中行的 **ID**。然后，在组件配置中将 **rowKey** 属性设置为该 *自定义键*。
:::

### 用法

~~~jsx {}
rowKey?: string;
~~~  

### 示例

~~~jsx {4,8,16}
const cards = [
    {
        label: "Backlog task",
        row_custom_key: "feature"
    },
    {
        label: "In progress task",
        row_custom_key: "done"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    rowKey: "row_custom_key",
    // 其他参数
});
~~~

**相关示例:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
