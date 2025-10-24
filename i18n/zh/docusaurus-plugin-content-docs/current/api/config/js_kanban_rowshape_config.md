---
sidebar_label: rowShape
title: rowShape 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 rowShape 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# rowShape

### 描述

@short: 可选。用于管理行外观的设置对象

### 用法

~~~jsx {}
rowShape?: {
    menu?: {
        show?: boolean, 
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void,
                data?: array // 菜单子项数组
            }, {...} // 其他项数据
        ] | ({ row, rowIndex, rows, readonly }) => array | null
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### 参数

要配置行的外观，可以在 **rowShape** 对象中指定以下参数：

- `menu` - （可选）行上下文菜单的参数对象。您可以指定以下参数：
    - `show` - （可选）启用或禁用行上下文菜单
    - `items` - （可选）一个包含行上下文菜单项参数的对象数组。每个菜单项可指定以下参数：
        - `id` - （可选）菜单项的 ID。要实现内置操作，需指定以下值：
            - ***"set-edit"*** - 定义编辑行名称的操作
            - ***"move-row:up"*** - 定义将行上移的操作
            - ***"move-row:down"*** - 定义将行下移的操作
            - ***"delete-row"*** - 定义删除行的操作

        - `icon` - （可选）菜单项图标的类名。您可以指定任何与图标字体相关的图标（如 *mdi-delete*）
        - `text` - （可选）菜单项名称
        - `disabled` - （可选）菜单项状态（*active* 或 *disabled*，取决于布尔值）
        - `onClick` - （可选）自定义回调函数，接收以下参数：
            - ***id*** - 当前菜单项的 ID
            - ***item*** - 当前菜单项的数据对象
            - ***row*** - 目标行的数据对象

        - `data` - （可选）表示菜单子项的对象数组

    :::info
    您也可以将 `menu.items` 参数设置为自定义函数，接收以下参数：
    - ***row*** - 当前行的数据对象
    - ***rowIndex*** - 当前行的索引
    - ***rows*** - 包含所有行数据的对象数组
    - ***readonly*** - 只读的 [状态属性](api/internal/js_kanban_getstate_method.md)对象

    该函数允许为任意行自定义菜单，或通过返回 *null* 或 *false* 隐藏特定行的菜单：

    ~~~jsx {}
    items: ({ rowIndex }) => {
        if(rowIndex == 0){
            return null;
        } else {
            return [
                { id: "set-edit", icon: "wxi-edit", text: "重命名" },
                {
                    id: "custom-delete-row",
                    icon: "wxi-delete",
                    text: "删除行"
                },
                {
                    id: "custom-move-row:up",
                    icon: "wxi-arrow-up",
                    text: "上移"
                }
            ];
        }
    }
    ~~~
    :::

- `css` - 一个函数，返回应用于行的 CSS 类名（条件应用）
- `confirmDeletion` - （可选）显示或隐藏 **确认对话框**，允许用户确认或取消行删除操作

### 默认配置

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, readonly }) => [
    { id: "set-edit", icon: "wxi-edit", text: "重命名" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "上移",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "下移",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "删除" }
];
const rowShape = {
    menu: {
        show: true,
        items: getDefaultRowMenuItems
    },
    confirmDeletion: true
};
~~~

### 示例

~~~jsx {10-43,48}
const changeRowColor = (row, cssClass) => board.updateRow({ 
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
    menu: {
        show: true,
        items: ({ row, rowIndex, rows, readonly }) => {
            if (rowIndex == 0){
                return false;
            } else {
                return [
                    {
                        id: "color",
                        text: "颜色",
                        data: [
                            { 
                                id:"gray", 
                                text: "灰色",
                                onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                            },
                            { 
                                id:"yellow", 
                                text: "黄色",
                                onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                            },
                            { 
                                id:"red", 
                                text: "红色",
                                onClick: ({ id, item, row }) => changeRowColor(row, "red")
                            }
                        ]
                    }
                ];
            }     
        }
    },
    css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red",
    confirmDeletion: false
};

new kanban.Kanban("#root", {
    cards,
    rows,
    rows,
    rowShape, 
    // 其他参数
});
~~~

**更新日志：**
- ***css*** 参数在 v1.4 中新增
- ***menu.items[0].label*** 参数在 v1.4 中弃用，改用 ***menu.items[0].text***
- ***menu.items[0].items*** 参数在 v1.4 中弃用，改用 ***menu.items[0].data***
- ***menu.items[0].label*** 和 ***menu.items[0].items*** 参数在 v1.7 中移除
- ***menu.items*** 函数更新，v1.7 中用 **readonly** 参数替换了 **store**

**相关文档：** [配置](guides/configuration.md)

**相关示例：** [Kanban. 通过自定义菜单更改行颜色](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)