---
sidebar_label: rowKey
title: rowKey 配置 API
description: 阅读 DHTMLX Kanban 的 rowKey 配置文档。了解如何将任务卡片分配到泳道行。
---

# rowKey

### 描述

@short: 可选。定义卡片所属的行

:::info
要将卡片分配到不同的行（泳道）中，您需要指定一个**自定义键**，并将其设置为卡片数据对象中目标行的**ID**。在组件配置对象中，**rowKey** 属性需要设置为该*自定义键*。
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
    // other parameters
});
~~~

**相关示例：** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)