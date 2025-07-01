---
sidebar_label: rowShape
title: rowShape 配置
description: DHTMLX JavaScript 看板库中的 rowShape 配置允许您调整行的外观。查看开发者指南和 API 参考，测试代码示例和在线演示，并免费下载 30 天试用版的 DHTMLX 看板。
---

# rowShape

### 描述

@short: 可选。一个用于自定义行外观的设置对象

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
                onClick?: ({ id, item, row }) => void
            }, {...} // 其他菜单项数据
        ] | ({ row, rowIndex, rows, store }) => array | boolean
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### 参数

为了控制行的显示效果，**rowShape** 对象支持以下选项:

- `menu` - （可选）行上下文菜单的设置。包括:
    - `show` - （可选）切换行上下文菜单的显示与隐藏
    - `items` - （可选）定义行菜单项的对象数组。每个菜单项可以包含:
        - `id` - （可选）菜单项 ID。内置操作可使用以下值:
            - ***"set-edit"*** - 允许编辑行名称
            - ***"move-row:up"*** - 将行上移
            - ***"move-row:down"*** - 将行下移
            - ***"delete-row"*** - 删除该行

        - `icon` - （可选）菜单项的图标类名（例如 *mdi-delete*）
        - `text` - （可选）菜单项的标签文本
        - `disabled` - （可选）菜单项是否禁用（布尔值）
        - `onClick` - （可选）自定义回调函数，接收以下参数:
            - ***id*** - 当前菜单项 ID
            - ***item*** - 当前菜单项数据
            - ***row*** - 目标行数据

:::info
`items` 参数也可以是一个自定义函数，带有以下参数:

- ***row*** - 当前行数据
- ***rowIndex*** - 当前行的索引
- ***rows*** - 所有行的数组
- ***store*** - *dataStore* 对象

通过此函数，您可以灵活地为特定行自定义菜单，或完全禁用菜单（返回 *null* 或 *false*）:

~~~jsx {}
    items: ({ row, rowIndex, rows, store }) => {
        if(rowIndex == 0)
            return null
        return [
            { id: "set-edit", icon: "wxi-edit", text: "重命名" },
            {
                id: "custom-delete-row",
                icon: "wxi-delete",
                text: "移除行"
            },
            {
                id: "custom-move-row:up",
                icon: "wxi-arrow-up",
                text: "上移"
            }
        ]
    }
~~~
:::

- `css` - 一个函数，返回一个条件应用于行的 CSS 类名
- `confirmDeletion` - （可选）删除行时是否启用确认对话框

### 默认配置

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, store }) => [
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
        items: ({ row, rowIndex, rows, store }) => {
            if (rowIndex == 0)
                return false
            return [
                {
                    id: "color",
                    text: "颜色",
                    items: [
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
            ]
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

**更新日志:**
- ***css*** 参数自 v1.4 起引入
- ***menu.items[0].label*** 参数在 v1.4 中重命名为 ***menu.items[0].text***

**相关文档:** [配置](/guides/configuration)

**相关示例:** [Kanban. 通过自定义菜单更改行颜色](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)
