---
sidebar_label: items
title: items 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 (Toolbar) items 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版。
---

# items

### 描述

@short: 可选。一个数组，包含排列在看板工具栏上的控件

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

在 **items** 数组中，您可以指定以下参数：

:::info
#### 若要设置*默认搜索栏*，可以指定字符串 `"search"`。
#### 若要设置*自定义搜索栏*，可以指定包含以下参数的对象：

- `type` - （必需）控件类型 (*"search"*)
- `options` - （可选）一个对象数组，定义搜索参数。每个对象（*搜索选项*）可以指定以下参数：
    - `id` - （必需）卡片字段的键，用于搜索卡片
    - `label` - （必需）选项名称，用于搜索栏选择器的下拉列表中
    - `searchRule` （可选）- 自定义函数，用于定义搜索规则。该函数接收以下参数：
        - ***card*** - 卡片数据对象
        - ***value*** - 搜索栏中指定的搜索值
        - ***by*** - 用于搜索卡片的字段键
- `searchResult` - （可选）用于显示自定义搜索结果的模板

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
#### 若要设置*默认排序控件*，可以指定字符串 `"sort"`。
#### 若要设置*自定义排序控件*，可以指定包含以下参数的对象：

- `type` - （必需）控件类型 (*"sort"*)
- `options` - （可选）一个对象数组，定义排序参数。每个对象（*排序选项*）可以指定以下参数：
    - `text` - （必需）选项名称，用于排序选择器的下拉列表中
    - `by` - （可选）用于排序卡片的字段键。此参数可以是*字符串*或*函数*。函数需返回用于排序的卡片字段
    - `dir` - （可选）排序顺序。可选值为 *"asc"* 和 *"desc"*

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

- `"spacer"` - 控件间的空白间隔
- `"undo"` - 历史管理控件（单击执行一步撤销）
- `"redo"` - 历史管理控件（单击执行一步重做）
- `"addColumn"` - 添加新列的控件
- `"addRow"` - 添加新行的控件
- `custom_control` - （可选）自定义控件。此处可指定自定义控件，支持 **字符串** 或 **函数**。详见 [Customization](guides/customization.md#custom-toolbar) 章节

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

**更新日志：**

- 在 v1.3 版本中新增了 *"Undo"* 和 *"Redo"* 控件
- 在 v1.4 版本中，**sort** 控件的 ***items.options[0].label*** 参数被替换为 ***items.options[0].text***
- 在 v1.6 版本中，**"search"** 控件新增了 ***items.searchResult*** 参数

**相关文档：** [配置](guides/configuration.md#toolbar) 和 [自定义](guides/customization.md#custom-toolbar)

**相关示例：**
- [看板. 自定义工具栏](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [看板. 搜索结果中建议项的自定义](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)