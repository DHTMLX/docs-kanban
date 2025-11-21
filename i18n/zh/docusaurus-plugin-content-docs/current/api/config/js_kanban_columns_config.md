---
sidebar_label: columns
title: columns 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 columns 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版本。
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

对于每个列，您可以指定以下参数（数据）：

- `id` - （必需）列的 **ID**。用于通过对应的方法管理该列
- `label` - （可选）列的标签。显示在列区域中
- `collapsed` - （可选）列的当前状态。如果为 ***true***，则该列初始为折叠状态。默认值为 ***false***（展开状态）
- `limit` - （可选）该参数可以接受以下两种类型的值：
    - `number` - 当前列中卡片的数量限制
    - `object` - 一个对象，指定按行（泳道）ID划分的卡片数量限制
- `strictLimit` - （可选）严格限制模式。如果为 ***true***，用户将无法创建超过通过 **limit** 参数指定数量的新卡片。默认值为 ***false*** 
- `css` - （可选）为单独的列定义 CSS 样式
- `overlay` - （可选）为单独的列定义覆盖层。您可以通过以下方式指定覆盖该列的模板：

    ~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">不允许放置</span>
            <span class="disable-drop-description">只有测试人员可以将卡片移动到此
                列</span>
        </div>`)
    ~~~

:::info
如果您想动态加载列的新数据，可以使用 [`setConfig()`](../../methods/js_kanban_setconfig_method) 或 [`parse()`](../../methods/js_kanban_parse_method) 方法！
:::

### 示例

~~~jsx {1-31,34}
const columns = [
    { 
        label: "待办", 
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
            // 限制 "进行中" 列中 "Feature" 和 "Task" 行的卡片数量
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
                <span class="disable-drop-description">只有测试人员可以将卡片移动到此
                    列</span>
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

### 自定义样式

要使用 `css` 参数为列应用自定义样式，请为您的自定义类添加 CSS 规则。

```css
.wx-header .wx-column.red,
.wx-column.red {
    background: #FFA29C;
}
```

如果样式未生效，请确保：

- 您的选择器包含足够的上下文（例如父元素及内部 DHTMLX 类）
- 如果属性被内联样式覆盖，您可以使用 `!important`

**更新日志：** **css** 和 **overlay** 参数在 v1.4 中添加

**相关文档：**
- [处理数据](guides/working_with_data.md)
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**相关示例：**
- [看板。列和泳道的限制](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [看板。通过自定义菜单更改列颜色](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [看板。禁用拖放到特定列](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
