---
sidebar_label: rows
title: rows 配置
description: 探索 DHTMLX JavaScript 看板库文档中的 rows 配置。查看开发者指南、API 参考，尝试代码示例和在线演示，并获取 DHTMLX 看板的免费 30 天试用。
---

# rows

### 描述

@short: 可选。一个包含行（泳道）数据的对象数组

### 用法

~~~jsx {}
rows?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        css?: string,
    }, {...} // 其他行数据
];
~~~

:::info
要设置泳道，请在 **rows** 数组中提供相关数据。你可以通过 UI 或使用[相关 API](/howtos/#行泳道操作指南)来折叠/展开、重命名、删除和移动泳道。
:::

### 参数

每个行（泳道）可以包含以下参数:

- `id` - （必需）行（泳道）的 **ID**，用于通过其方法操作该行
- `label` - （可选）该行（泳道）的标签，显示在行区域
- `collapsed` - （可选）指示行（泳道）是否初始折叠。若为 ***true***，则初始状态为折叠。默认值为 ***false***（展开）
- `css` - （可选）为单个行应用 CSS 样式

:::info
要动态加载新的行（泳道）数据，可以使用 [**parse()**](../../methods/js_kanban_parse_method) 方法。
:::

### 示例

~~~jsx {1-4,9}
const rows = [
    { label: "Feature", id: "feature", collapsed: false, css: "red" },
    { label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows, // 泳道数据
    // 其他参数
});
~~~

**更新日志:** ***css*** 参数在 v1.4 版本中引入

**相关文章:**
- [使用数据](/guides/working_with_data)
- [updateRow()](/api/methods/js_kanban_updaterow_method.md)

**相关示例:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
