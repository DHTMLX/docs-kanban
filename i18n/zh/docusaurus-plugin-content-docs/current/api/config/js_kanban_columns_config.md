---
sidebar_label: columns
title: columns 配置
description: 探索 DHTMLX JavaScript 看板库中 columns 的配置。查找开发者指南、API 参考、代码示例、在线演示，并免费下载 DHTMLX 看板的30天试用版。
---

# columns

### 描述

@short: 可选。包含列数据的对象数组

### 用法

~~~jsx {}
columns?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        limit?: number | object,
        strictLimit?: boolean,
        css?: string,
        overlay?: any
    },
    {...} // 其他列数据
];
~~~

### 参数

每个列可以使用以下属性（数据）进行配置:

- `id` - （必需）列的唯一**ID**。用于通过相关方法管理该列。
- `label` - （可选）显示在列头的标签。
- `collapsed` - （可选）指示列的初始状态。若为***true***，列初始为折叠状态。默认值为***false***（展开）。
- `limit` - （可选）可以是以下两种类型之一:
    - `number` - 设置列中允许的最大卡片数。
    - `object` - 按行（泳道）的ID定义卡片限制。
- `strictLimit` - （可选）启用严格限制。如果为***true***，用户不能添加超过**limit**参数指定数量的卡片。默认值为***false***。
- `css` - （可选）为单个列应用自定义 CSS 样式。
- `overlay` - （可选）为列添加覆盖层。这对于定义覆盖整个列的模板非常有用，例如:

~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">不允许放置</span>
            <span class="disable-drop-description">只有测试人员可以将卡片移动到此列</span>
        </div>`)
~~~

:::info
要动态更新列数据，可以使用 [`parse()`](../../methods/js_kanban_parse_method) 方法。
:::

### 示例

~~~jsx {1-31,34}
const columns = [
    {
        label: "待办事项",
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true,
        css: "red"
    },
    {
        label: "进行中",
        id: "inprogress",
        collapsed: false,
        limit: {
            // 限制 “进行中” 列中 “Feature” 和 “Task” 行的卡片数量
            feature: 3,
            task: 2
        },
        strictLimit: false
    },
    {
        label: "已完成",
        id: "done",
        overlay: template(`
            <div class="blockOverlay disable-drop">
                <span class="disable-drop-header">不允许放置</span>
                <span class="disable-drop-description">只有测试人员可以将卡片移动到此列</span>
            </div>`)
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    // 其他参数
});
~~~

**更新日志:** **css** 和 **overlay** 属性在版本 1.4 中引入。

**相关文章:**
- [处理数据](/guides/working_with_data)
- [updateColumn()](/api/methods/js_kanban_updatecolumn_method.md)

**相关示例:**
- [看板。列和泳道的限制](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [看板。通过自定义菜单更改列颜色](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [看板。禁止拖放到特定列](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
