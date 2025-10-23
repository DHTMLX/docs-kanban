---
sidebar_label: columnShape
title: columnShape 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 columnShape 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# columnShape

### 描述

@short: 可选。用于管理列外观的设置对象

### 用法

~~~jsx {}
columnShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled?: boolean,
                onClick?: ({ id, item, column }) => void,
                data?: array // 菜单子项数组
            }, 
            {...}
        ] | ({ column, columnIndex, columns, readonly }) => array | null
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(column => {
        return "展开状态下列头的 HTML 模板";
    }),
    collapsedTemplate?: template(column => {
        return "折叠状态下列头的 HTML 模板";
    }),
    confirmDeletion?: boolean
};
~~~

### 参数

要配置列的外观，可以在 **columnShape** 对象中指定以下参数：

- `menu` - （可选）列上下文菜单的参数对象。可以指定以下参数：
    - `show` - （可选）启用或禁用列上下文菜单
    - `items` - （可选）包含列上下文菜单项参数的对象数组。每个菜单项可以指定以下参数：
        - `id` - （可选）菜单项的 ID。要实现内置操作，需要指定以下值：
            - ***"add-card"*** - 添加新卡片的操作
            - ***"set-edit"*** - 编辑列名称的操作
            - ***"move-column:left"*** - 向左移动列的操作
            - ***"move-column:right"*** - 向右移动列的操作
            - ***"delete-column"*** - 删除列的操作

        - `icon` - （可选）菜单项图标的类名。这里可以指定任何与图标字体相关的图标（如 *mdi-delete*）
        - `text` - （可选）菜单项名称
        - `disabled` - （可选）菜单项状态（*激活* 或 *禁用*，取决于布尔值）
        - `onClick` - （可选）自定义回调函数，接受以下参数：
            - ***id*** - 当前菜单项的 ID
            - ***item*** - 当前菜单项的数据对象
            - ***column*** - 目标列的数据对象

        - `data` - （可选）表示菜单子项的对象数组

    :::info
    你也可以将 `menu.items` 参数设置为自定义函数，该函数接受以下参数：
    - ***column*** - 当前列的数据对象
    - ***columnIndex*** - 当前列的索引
    - ***columns*** - 包含所有列数据的对象数组
    - ***readonly*** - 只读的 [状态属性](api/internal/js_kanban_getstate_method.md) 对象

    该函数允许为任意列自定义菜单，或者通过返回 *null* 或 *false* 来隐藏特定列的菜单：

    ~~~jsx {}
    items: ({ column }) => {
        if(column.id === "inprogress"){
            return null;
        } 
        if (column.id === "backlog"){
            return [
                { id: "set-edit", icon: "wxi-edit", text: "重命名" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "移除卡片"
                }
            ];
        }       
    }
    ~~~
    :::

- `fixedHeaders` - （可选）在垂直滚动时固定列头（默认 *true*）。必须在看板本身启用滚动（限制高度）
- `css` - （可选）一个函数，根据条件返回应用于列的 CSS 类名
- `headerTemplate` - （可选）展开状态下列头的 HTML 模板
- `collapsedTemplate` - （可选）折叠状态下列头的 HTML 模板
- `confirmDeletion` - （可选）显示/隐藏 **确认对话框**，允许用户确认或取消列的删除操作

### 默认配置

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, readonly }) => [
    { id: "add-card", icon: "wxi-plus", text: "添加新卡片" },
    { id: "set-edit", icon: "wxi-edit", text: "重命名" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "左移",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "右移",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", text: "删除" }
];
const columnShape = {
    menu: {
        show: true,
        items: getDefaultColumnMenuItems
    },
    fixedHeaders: true,
    confirmDeletion: true
};
~~~

### 示例

~~~jsx {1-58,64}
const columnShape = {
    menu: {
        show: true,
        items: [
            {
                id: "color",
                text: "颜色",
                data: [
                    { 
                        id:"yellow", 
                        text: "黄色",
                        onClick: ({ column }) => changeColumnColor(column, "yellow")
                    },
                    { 
                        id:"red", 
                        text: "红色",
                        onClick: ({ column }) => changeColumnColor(column, "red")
                    },
                    { 
                        id:"green", 
                        text: "绿色",
                        onClick: ({ column }) => changeColumnColor(column, "green")
                    }
                ]
            }
        ]
    },
    fixedHeaders: false,
    css: (column, cards) => column.id == "inprogress" && cards.length < 5 ? "green" : "red",
    headerTemplate: template(column => {
        return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-label" data-action="rename">
                                ${escapeHTML(column.column.label)}
                                (${column.columnState.cardsCount})
                            </div>`
                        : ""
                }
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-menu" data-menu-id=${column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""
                }`;
    }),
    collapsedTemplate: template(column => {
        return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(column.column.label)} (${
                        column.columnState?.cardsCount
                    })</div>
                </div>`;
    }),
    confirmDeletion: true
};

new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    columnShape, 
    // 其他参数
});
~~~

**更新日志：**
- ***css*** 参数在 v1.4 版本新增
- ***menu.items[0].label*** 参数在 v1.4 版本被废弃，替换为 ***menu.items[0].text***
- ***menu.items[0].items*** 参数在 v1.4 版本被废弃，替换为 ***menu.items[0].data***
- ***fixedHeaders*** 参数在 v1.5 版本新增
- ***headerTemplate*** 和 ***collapsedTemplate*** 参数在 v1.6 版本新增
- ***menu.items[0].label*** 和 ***menu.items[0].items*** 参数在 v1.7 版本移除
- ***menu.items*** 函数更新，v1.7 版本中 **store** 参数替换为 **readonly**

**相关文章：** [配置](guides/configuration.md)

**相关示例：**
- [Kanban. 通过自定义菜单更改列颜色](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. 固定表头、懒加载和列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. 列头模板](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)