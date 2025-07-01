---
sidebar_label: links
title: links 配置
description: 探索 DHTMLX JavaScript 看板库文档中的 links 配置。查看开发者指南、API 参考，试用代码示例和实时演示，并免费下载 DHTMLX 看板的 30 天试用版。
---

# links

### 描述

@short: 可选。一个包含链接数据对象的数组。

### 用法

~~~jsx {}
links?: [
    {
        id: string | number,
        masterId: string | number,
        slaveId: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // 其他链接数据
];
~~~

### 参数

每个链接包含以下数据字段:

- `id` - （必填）链接的唯一 ID
- `masterId` - （必填）表示链接中主导角色的卡片 ID（例如，"Is required for"）
- `slaveId` - （必填）表示链接中被动角色的卡片 ID（例如，"Depends on"）
- `relation` - （必填）链接类型。可用类型有:
    - ***"relatesTo"*** - 表示当前任务与另一个任务相关联的依赖关系
    - ***"requiredFor"*** - 表示一个任务需要另一个任务先完成的依赖关系
    - ***"duplicate"*** - 标记重复任务间的依赖关系
    - ***"parent"*** - 设定父（master）任务与其子（slave）任务之间的依赖关系

:::info
要动态加载新的链接数据，可以使用 [**parse()**](../../methods/js_kanban_parse_method) 方法！
:::

### 示例

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        masterId: 2,
        slaveId: 5,
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

**更新日志:** 此属性在 v1.4 版本中引入

**相关文档:** [数据操作](/guides/working_with_data)

**相关示例:** [看板. 任务间的链接](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)
