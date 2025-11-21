---
sidebar_label: rows
title: rows 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 rows 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# rows

### 描述

@short: 可选。包含行（泳道）数据的对象数组

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
要创建泳道，您需要在 **rows** 属性的数组中指定相应的数据。您可以通过 UI 或使用[相关 API](howtos.md#how-to-work-with-rows-swimlanes)来折叠/展开、重命名、删除和移动泳道。
:::

### 参数

对于每个行（泳道），您可以指定以下参数（数据）：

- `id` - （必需）行（泳道）的 **ID**。用于通过相应方法管理该行
- `label` - （可选）行（泳道）标签。显示在行区域
- `collapsed` - （可选）行（泳道）的当前状态。如果为 ***true***，则该行初始为折叠状态。默认值为 ***false***（展开状态）
- `css` - （可选）为单独的行定义 CSS 样式

:::info
如果您想动态加载新的行（泳道）数据，可以使用 [**setConfig()**](api/methods/js_kanban_setconfig_method.md) 或 [**parse()**](api/methods/js_kanban_parse_method.md) 方法！
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

**更新日志：** ***css*** 参数在 v1.4 中添加

**相关文档：**
- [数据操作](guides/working_with_data.md)
- [updateRow()](api/methods/js_kanban_updaterow_method.md)

**相关示例：** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
