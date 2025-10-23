---
sidebar_label: links
title: links 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 links 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版本。
---

# links

### 描述

@short: 可选。包含链接数据的对象数组

### 用法

~~~jsx {}
links?: [
    {
        id: string | number,
        source: string | number,
        target: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // 其他链接数据
];
~~~

### 参数

对于每个链接，您可以指定以下参数（数据）：

- `id` - （必填）链接的 ID
- `source` – （必填）链接起点的卡片 ID（例如，“任务 A 是任务 B 的前置任务”）
- `target` – （必填）链接终点的卡片 ID（例如，“任务 B 依赖于任务 A”）
- `relation` - （必填）链接类型。可指定以下类型：
    - ***"relatesTo"*** - 定义任务之间的关联，当前任务与另一个任务相关联
    - ***"requiredFor"*** - 定义任务之间的依赖关系，其中一个任务需要另一个任务完成
    - ***"duplicate"*** - 定义重复任务之间的依赖关系
    - ***"parent"*** - 定义父（主）任务与子（从）任务之间的依赖关系

:::info
如果您想动态加载新的链接数据，可以使用 [**parse()**](api/methods/js_kanban_parse_method.md) 方法！
:::

### 示例

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        source: 2,
        target: 5,
        relation: "relatesTo",
    }, {...} // 其他链接数据
];

new kanban.Kanban("#root", {
   columns,
   cards,
   links
   // 其他参数
});
~~~

**更新日志：** 该属性在 v1.7 中进行了更新：
    - **masterId** 参数被替换为 **source** 参数
    - **slaveId** 参数被替换为 **target** 参数

**相关文档：** [数据操作](guides/working_with_data.md)

**相关示例：** [看板任务之间的链接](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)