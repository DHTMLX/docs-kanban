---
sidebar_label: columnShape
title: columnShape 配置
description: 探索 DHTMLX JavaScript 看板库中的 columnShape 配置。浏览开发者指南和 API 参考，测试代码示例和在线演示，并下载免费的 30 天试用版 DHTMLX 看板。
---

# columnShape

### 描述

@short: 可选。用于自定义列外观的设置对象

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
                onClick?: ({ id, item, column }) => void
            },
            {...}
        ] | ({ column, columnIndex, columns, store }) => array | boolean
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

为了设置列的样式，**columnShape** 对象支持以下选项:

- `menu` - （可选）列上下文菜单的设置。包括:
    - `show` - （可选）切换列上下文菜单的显示与隐藏
    - `items` - （可选）定义菜单项的数组。每个菜单项可以包含:
        - `id` - （可选）菜单项 ID。内置操作可使用以下值:
            - ***"add-card"*** - 添加新卡片
            - ***"set-edit"*** - 编辑列名称
            - ***"move-column:left"*** - 向左移动列
            - ***"move-column:right"*** - 向右移动列
            - ***"delete-column"*** - 删除列
        - `icon` - （可选）菜单项的图标类，例如 *mdi-delete*
        - `text` - （可选）菜单项标签
        - `disabled` - （可选）设置菜单项是否启用或禁用
        - `onClick` - （可选）回调函数，参数包括:
            - ***id*** - 当前菜单项 ID
            - ***item*** - 当前菜单项数据对象
            - ***column*** - 目标列数据对象

:::info
你也可以将 `items` 设置为一个函数，接收以下参数:

- ***column*** - 当前列数据
- ***columnIndex*** - 当前列索引
- ***columns*** - 所有列数据的数组
- ***store*** - *dataStore* 对象

这样可以为每个列创建自定义菜单，或者通过返回 *null* 或 *false* 来隐藏某些列的菜单:

~~~jsx {}
    items: ({ column, columnIndex, columns, store }) => {
        if(column.id === "inprogress")
            return null

        if (column.id === "backlog")
            return [
                { id: "set-edit", icon: "wxi-edit", text: "重命名" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "移除卡片"
                }
            ]
    }
~~~
:::

- `fixedHeaders` - （可选）在垂直滚动时保持列头可见（默认值为 *true*）。注意:Kanban 必须启用滚动（限制高度）。
- `css` - （可选）返回 CSS 类名的函数，用于条件性地设置列样式
- `headerTemplate` - （可选）列展开时的列头 HTML 模板
- `collapsedTemplate` - （可选）列折叠时的列头 HTML 模板
- `confirmDeletion` - （可选）删除列时是否显示确认对话框

### 默认配置

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, store }) => [
    { id: "add-card", icon: "wxi-plus", text: "添加新卡片" },
    { id: "set-edit", icon: "wxi-edit", text: "重命名" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "向左移动",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "向右移动",
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
                items: [
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

**更新日志:**
- ***css*** 选项在 v1.4 中新增
- ***menu.items[0].label*** 重命名为 ***menu.items[0].text*** 于 v1.4
- ***fixedHeaders*** 选项在 v1.5 中新增
- ***headerTemplate*** 和 ***collapsedTemplate*** 选项在 v1.6 中新增

**相关文档:** [配置](/guides/configuration)

**相关示例:**
- [看板。通过自定义菜单更改列颜色](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [看板。固定表头、懒渲染和列滚动](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [看板。列头模板](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
