---
sidebar_label: cardShape
title: cardShape 配置
description: 探索 DHTMLX JavaScript 看板库中的 cardShape 配置。查看开发者指南、API 参考，试用代码示例和在线演示，并免费下载 DHTMLX 看板的30天试用版。
---

# cardShape

### 描述

@short: 可选。用于控制卡片外观的设置对象。

### 用法

~~~jsx {}
cardShape?: {
    label?: boolean | { show?: boolean },
    description?: boolean | { show?: boolean },
    progress?: boolean | { show?: boolean },
    attached?: boolean | { show?: boolean },
    cover?: boolean | { show?: boolean },
    comments?: boolean | { show?: boolean },
    confirmDeletion?: boolean | { show?: boolean },
    start_date?: boolean | {
        show?: boolean,
        format?: string
    },
    end_date?: boolean | {
        show?: boolean,
        format?: string
    },
    color?: boolean | {
        show?: boolean,
        values?: array
    },
    menu?: boolean | {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, card }) => void
            },
            {...}
        ] | ({ card, store }) => array | boolean
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // 其他用户数据
        ],
        maxCount?: number | false
    },
    priority?: boolean | {
        show?: boolean,
        values?: [
            {
                id: string | number,
                label?: string,
                color: string
            },
            {...} // 其他优先级数据
        ]
    },
    votes?: boolean | {
        show?: boolean,
        clickable?: boolean
    },
    css?: (card) => string,
    headerFields?: [
        {
            key: string,
            label?: string,
            css?: string
        },
        {...} // 其他字段数据
    ]
};
~~~

### 参数

:::info
有时参数可以用**简写**或**扩展**形式设置。例如:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // 简写形式
    label: true
    // 或者
    // 扩展形式
    label: { show: true }
~~~
:::

**cardShape** 对象允许你通过配置以下字段来控制卡片的显示:

- `label` - （可选）切换 **标签** 字段的显示
- `description` - （可选）切换 **描述** 字段的显示
- `progress` - （可选）切换 **进度** 字段的显示
- `attached` - （可选）切换 **附件** 字段的显示
- `cover` - （可选）切换 **卡片图片** 的显示
- `comments` - （可选）切换卡片上的 **评论** 显示
- `confirmDeletion` - （可选）切换删除卡片时的 **确认对话框**
- `start_date` - （可选）配置 **开始日期** 字段
    - `show` - （可选）切换开始日期的显示
    - `format` - （可选）设置日期格式。可用选项参见 [这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - （可选）配置 **结束日期** 字段
    - `show` - （可选）切换结束日期的显示
    - `format` - （可选）设置日期格式。可用选项参见 [这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - （可选）配置卡片顶部的 **颜色线**
    - `show` - （可选）切换颜色线的显示
    - `values` - （可选）HEX 颜色码数组
- `menu` - （可选）配置 **卡片上下文菜单**
    - `show` - （可选）启用或禁用上下文菜单
    - `items` - （可选）菜单项对象数组，属性包括:
        - `id` - （可选）菜单项 ID。内置操作包括:
            - ***"set-edit"*** - 编辑卡片名称
            - ***"delete-card"*** - 删除卡片
        - `icon` - （可选）图标类名（例如 *mdi-delete*）
        - `text` - （可选）菜单项标签
        - `disabled` - （可选）启用或禁用菜单项
        - `onClick` - （可选）回调函数，接收:
            - ***id*** - 菜单项 ID
            - ***item*** - 菜单项数据
            - ***card*** - 目标卡片数据

:::info
你还可以为 `items` 提供一个自定义函数，该函数接收:
- ***card*** - 当前卡片数据
- ***store*** - *dataStore* 对象

这样你可以通过返回 *null* 或 *false* 来针对特定卡片自定义或隐藏菜单:

~~~jsx {}
    items: ({ card, store }) => {
        if(card.id === 1)
            return false
        return [
            { id: "set-edit", icon: "wxi-edit", label: "Edit" },
            { id: "delete-card", icon: "wxi-delete", label: "Delete" }
        ]
    }
~~~
:::

- `users` - （可选）配置 **用户** 字段
    - `show` - （可选）切换已分配用户的显示
    - `values` - （必需）用户对象数组:
        - `id` - （必需）用户 ID
        - `label` - （可选）用户名
        - `avatar` - （可选）用户头像路径
    - `maxCount` - （可选）卡片上显示的最大用户数，或设置为 ***false*** 表示无限制

    设置 `maxCount` 可控制卡片上显示多少分配的用户。设置为 `false` 则显示所有分配用户。

:::info
***users*** 字段默认关闭。启用时，请将 `show` 设为 `true` 并在 `values` 中提供用户数据。通过编辑器分配用户时，请在 [`editorShape`](/api/config/js_kanban_editorshape_config.md#--comboselect-和-multiselect-类型参数) 中配置相应控件。单选请使用 ***select***，多选请使用 ***multiselect***。

~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // 限制每张卡最多显示4个用户
        }
    }
~~~
:::

- `priority` - （可选）配置 **优先级** 字段
    - `show` - （可选）切换优先级显示
    - `values` - （可选）优先级对象数组:
        - `id` - （必需）优先级 ID
        - `label` - （可选）优先级名称
        - `color` - （必需）HEX 颜色码
- `votes` - （可选）配置 **投票** 功能
    - `show` - （可选）切换卡片和编辑器中的投票图标
    - `clickable` - （可选）若为 `true`，用户可通过点击卡片上的图标投票；否则只能通过编辑器投票
- `css` - 返回 CSS 类名的函数，用于条件式自定义卡片样式
- `headerFields` - （可选）定义 **自定义字段** 的对象数组
    - `key` - （必需）自定义字段键，用于通过 [editorShape](../js_kanban_editorshape_config) 配置编辑器
    - `label` - （可选）自定义字段标签
    - `css` - （可选）自定义字段的 CSS 类名

:::info
如果未通过 **cardShape** 设置卡片选项，则采用默认参数 **defaultCardShape**。
:::

### 默认配置

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ store }: { store: DataStore }) => {
    const { readonly } = store.getState();
    const baseItems = [
        { id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" },
        { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }
    ];

    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit-outline", text: "Edit" },
            ...baseItems,
        ];
    }
    return baseItems;
};

const defaultCardShape = {
    label: { show: true },
    description: { show: false },
    progress: { show: false },
    start_date: { show: false },
    end_date: { show: false },
    users: { show: false },
    confirmDeletion: { show: true },
    priority: {
        show: false,
        values: defaultPriorities
    },
    color: {
        show: false,
        values: defaultColors
    },
    cover: { show: false },
    attached: { show: false },
    menu: { show: true }
};
~~~

### 示例

~~~jsx {14-49,54}
const users = [ // 示例用户数据
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // 示例优先级数据
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // 卡片显示设置
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    cover: false,
    comments: false,
    confirmDeletion: false,
    color: {
        show: true,
        values: cardColors
    },
    users: {
        show: true,
        values: users,
        maxCount: false
    },
    priority: {
        show: true,
        values: cardPriority
    },
    votes: {
        show: true,
        clickable: true
    },
    css: (card) => card.type == "feature" ? "green" : "red",
    headerFields: [
        {   // 自定义字段示例
            key: "sprint",
            css: "custom_style",
            label: "Sprint"
        }
    ]
};

new kanban.Kanban("#root", {
    cards,
    columns,
    cardShape,
    // 其他参数
});
~~~

**更新日志:**
- ***comments***、***css*** 和 ***votes*** 选项在 v1.4 版本新增
- ***menu.items[0].label*** 选项在 v1.4 版本重命名为 ***menu.items[0].text***
- ***users.maxCount*** 和 ***votes.clickable*** 选项在 v1.6 版本新增

**相关文档:** [配置](/guides/configuration#卡片)

**相关示例:**
- [看板。泳道、评论、投票](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [看板。高亮显示过期和活动任务](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [看板。卡片样式设置](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [看板。每个任务无限制用户分配](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)
