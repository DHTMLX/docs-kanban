---
sidebar_label: items
title: items 配置
description: 探索 DHTMLX JavaScript 看板库中（Toolbar）items 配置。查看开发者指南、API 参考、代码示例、在线演示，并免费下载 30 天试用版的 DHTMLX 看板。
---

# items

### 描述

@short: 可选。一个数组，包含排列在看板工具栏上的控件。

### 用法

~~~jsx {}
items?: [
    "search" | {
        // 搜索参数
        type: "search",
        options?: [
            {
                id: string,
                label: string,
                searchRule?: (card, value, by) => {
                    return boolean
                }
            }, {...}
        ],
        resultTemplate?: template(searchResult => {
            return "搜索结果的 HTML 模板";
        }) 
    },
    "sort" | {
        // 排序参数
        type: "sort",
        options?: [
            {    
                text: string,
                by?: string, // by?: ((card: object) => any),
                dir?: "asc" | "desc"
            }, {...}
        ]  
    },
    "spacer",
    "undo",
    "redo",
    "addColumn",
    "addRow",
    custom_control // 字符串或函数
];
~~~

### 参数

在 **items** 数组中，可以包含以下参数:

:::info
#### 添加 *默认搜索栏*，只需使用字符串 `"search"`。
#### 配置 *自定义搜索栏*，需提供包含以下参数的对象:

- `type` - （必需）指定控件类型（*"search"*）
- `options` - （可选）定义搜索参数的数组。每个对象（*搜索选项*）可以包含:
    - `id` - （必需）用于搜索的卡片字段键
    - `label` - （必需）搜索栏下拉中显示的选项名称
    - `searchRule`（可选）- 自定义函数，用于定义搜索规则。接收参数:
        - ***card*** - 卡片数据对象
        - ***value*** - 搜索输入值
        - ***by*** - 用于搜索的卡片字段键
- `searchResult` - （可选）自定义搜索结果显示的模板

~~~jsx
items: [
    "search", // 默认搜索栏
    // 其他控件
]

// 或者

items: [
    { // 自定义搜索栏
        type: "search",
        options: [
            {
                id: "label",
                label: "按标签"
            },
            {
                id: "start_date",
                label: "按日期",
                searchRule: (card, value, by) => {
                    const date = card[by];
                    return date?.toString().includes(value);
                }
            }
        ],
        resultTemplate: kanban.template(searchResult => {
            return `<div class="list-item">
                <div class="list-item-text">${searchResult.result.label}</div>
                ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
            </div>`
        })
    },
    // 其他控件
]
~~~
:::

:::info
#### 添加 *默认排序控件*，只需使用字符串 `"sort"`。
#### 配置 *自定义排序控件*，需提供包含以下参数的对象:

- `type` - （必需）指定控件类型（*"sort"*）
- `options` - （可选）定义排序参数的数组。每个对象（*排序选项*）可以包含:
    - `text` - （必需）排序下拉中显示的选项名称
    - `by` - （可选）用于排序的卡片字段键或函数
    - `dir` - （可选）排序方向，可为 *"asc"* 或 *"desc"*

~~~jsx
items: [
    "sort", // 默认排序控件
    // 其他控件
]
// 或者 
items: [
    { // 自定义排序控件
        type: "sort",
        options: [
            {
                text: "按标签排序",
                by: "label",
                dir: "asc"
            },
            {
                text: "按描述排序",
                by: "description",
                dir: "desc"
            }
        ]
    }, {...} // 其他控件
]
~~~
:::

- `"spacer"` - 在控件间插入空白间隔
- `"undo"` - 撤销操作控件（单击回退一步）
- `"redo"` - 重做操作控件（单击前进一步）
- `"addColumn"` - 添加新列控件
- `"addRow"` - 添加新行控件
- `custom_control` - （可选）自定义控件，可以是**字符串**或**函数**。详情参见[自定义](/guides/customization#自定义工具栏)章节。

### 示例

~~~jsx {8-24}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        {
            type: "search",
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer",
        "sort",
        "undo",
        "redo", 
        "addColumn",
        "addRow"
    ]
});
~~~

**更新日志:**

- *"Undo"* 和 *"Redo"* 控件在 v1.3 版本引入
- **sort** 控件中 ***items.options[0].label*** 参数在 v1.4 版本重命名为 ***items.options[0].text***
- **"search"** 控件新增了 ***items.searchResult*** 参数，始于 v1.6 版本

**相关文档:** [配置](/guides/configuration#工具栏) 和 [自定义](/guides/customization#自定义工具栏)

**相关示例:**
- [看板。自定义工具栏](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [看板。搜索结果建议的自定义](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)
