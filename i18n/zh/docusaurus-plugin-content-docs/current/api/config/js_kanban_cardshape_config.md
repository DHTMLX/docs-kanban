---
sidebar_label: cardShape
title: cardShape 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 cardShape 配置。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# cardShape

### 描述

@short: 可选。用于管理卡片外观的设置对象

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
                onClick?: ({ id, item, card }) => void,
                data?: array // 菜单子项数组
            }, 
            {...}
        ] | ({ card, readonly }) => array | null
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

### 参数说明

:::info
在某些情况下，您可以将参数设置为**简写**或**扩展**形式。请参见以下代码：

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // 简写形式
    label: true
    // 或者
    // 完整形式
    label: { show: true }
~~~
:::

要配置卡片外观，您可以在 **cardShape** 对象中指定以下参数（字段）：

- `label` - （可选）显示/隐藏 **标签** 字段
- `description` - （可选）显示/隐藏 **描述** 字段
- `progress` - （可选）显示/隐藏 **进度** 字段
- `attached` - （可选）显示/隐藏 **附件** 字段
- `cover` - （可选）显示/隐藏 **卡片封面图片**
- `comments` - （可选）显示/隐藏卡片上的 **评论**
- `confirmDeletion` - （可选）显示/隐藏 **删除确认对话框**，允许用户确认或取消删除卡片
- `start_date` - （可选）**开始日期**字段的参数对象
    - `show` - （可选）显示/隐藏卡片开始日期
    - `format` - （可选）定义卡片开始日期的格式。可用参数详见 [这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - （可选）**结束日期**字段的参数对象
    - `show` - （可选）显示/隐藏卡片结束日期
    - `format` - （可选）定义卡片结束日期的格式。可用参数详见 [这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - （可选）卡片顶部颜色线的参数对象
    - `show` - （可选）显示/隐藏顶部颜色线
    - `values` - （可选）有效的 HEX 颜色码数组
- `menu` - （可选）卡片上下文菜单的参数对象。可指定以下参数：
    - `show` - （可选）启用/禁用卡片上下文菜单
    - `items` - （可选）包含卡片上下文菜单项参数的对象数组。每个菜单项可指定以下参数：
        - `id` - （可选）菜单项 ID。实现内置动作时，可指定以下值：
            - ***"set-edit"*** - 编辑卡片名称的动作
            - ***"delete-card"*** - 删除卡片的动作
        - `icon` - （可选）菜单项图标的类名，可使用任意图标字体类名（如 *mdi-delete*）
        - `text` - （可选）菜单项名称
        - `disabled` - （可选）菜单项状态（*active* 或 *disabled*，取决于布尔值）
        - `onClick` - （可选）自定义回调函数，接收以下参数：
            - ***id*** - 当前菜单项的 ID
            - ***item*** - 当前菜单项的数据对象
            - ***card*** - 目标卡片的数据对象
        - `data` - （可选）表示菜单子项的对象数组

    :::info
    您也可以将 `menu.items` 参数设置为一个自定义函数，该函数接收以下参数：
    - ***card*** - 当前卡片的数据对象
    - ***readonly*** - 只读状态的 [state 属性](api/internal/js_kanban_getstate_method.md)

    该函数允许为任意卡片自定义菜单，或通过返回 *null* 或 *false* 来隐藏菜单：

    ~~~jsx {}
    items: ({ card, readonly }) => {
        if (card.id === 1){
            return false;
        }  

        const menu = [];

        if (!readonly.delete){
            menu.push({ 
                id: "delete-card", icon: "wxi-delete", label: "Delete"
            });
        }
            
        if (!readonly.edit){
            menu.push({ 
                id: "set-edit", icon: "wxi-edit", label: "Edit"
            });
        }
        return menu.length ? menu : null;
    }
    ~~~
    :::

- `users` - （可选）**用户**字段的参数对象
    - `show` - （可选）显示/隐藏已分配用户
    - `values` - （必需）包含用户数据的对象数组。每个用户可指定以下参数：
        - `id` - （必需）用户 **ID**
        - `label` - （可选）用户名
        - `avatar` - （可选）用户头像路径
    - `maxCount` - （可选）卡片上显示的最大用户数量（或 ***false***）

    您可以将 `maxCount` 属性设置为要显示的用户数量。
    如果将 `maxCount` 设置为 `false`，则卡片上将显示所有已分配用户。

    :::info
    ***users*** 字段默认禁用。要启用它，需将 `show` 参数设置为 `true`，并通过 `values` 参数提供相应的用户数据。若要通过编辑器分配新用户，需通过 [`editorShape`](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) 属性配置相应控件。使用 ***select*** 类型分配单个用户，使用 ***multiselect*** 类型分配多个用户。

    ~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // 卡片上最多显示 4 个用户
        }
    }
    ~~~
    :::

- `priority` - （可选）**优先级**字段的参数对象
    - `show` - （可选）显示/隐藏卡片优先级
    - `values` - （可选）包含优先级数据的对象数组。每个优先级可指定以下参数：
        - `id` - （必需）优先级 **ID**
        - `label` - （可选）优先级名称
        - `color` - （必需）有效的 HEX 颜色码
- `votes` - （可选）指定 **投票** 功能
    - `show` - （可选）显示/隐藏卡片及编辑器中的投票图标
    - `clickable` - （可选）使卡片上的投票图标可点击。如果为 `true`，用户可以直接点击卡片上的投票图标进行投票；否则，用户只能在编辑器中投票
- `css` - 返回应用于卡片的 CSS 类的函数（条件应用）
- `headerFields` - （可选）包含 **自定义字段** 数据的对象数组。可指定以下参数：
    - `key` - （必需）自定义字段的键，用于通过 [editorShape](api/config/js_kanban_editorshape_config.md) 属性配置编辑器
    - `label` - （可选）自定义字段的标签
    - `css` - （可选）自定义字段的 CSS 类

:::info
除非通过 **cardShape** 属性指定卡片设置，否则组件将应用 **defaultCardShape** 的默认参数集！
:::

### 默认配置

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ readonly }: { readonly: DataStore }) => {
    const { readonly } = readonly.getState();
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
const users = [ // 用户数据
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // 卡片优先级数据
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // 卡片设置
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
        {   // 自定义字段
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

**更新日志：**
- v1.4 版本新增了 ***comments***、***css*** 和 ***votes*** 参数
- v1.4 版本废弃了 ***menu.items[0].label*** 参数，改用 ***menu.items[0].text*** 参数
- v1.4 版本废弃了 ***menu.items[0].items*** 参数，改用 ***menu.items[0].data*** 参数
- v1.6 版本新增了 ***users.maxCount*** 和 ***votes.clickable*** 参数
- v1.7 版本移除了 ***menu.items[0].label*** 和 ***menu.items[0].items*** 参数
- v1.7 版本更新了 ***menu.items*** 函数，**store** 参数被替换为 **readonly**

**相关文档：** [配置](guides/configuration.md#cards)

**相关示例：**
- [看板. 泳道、评论、投票](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [看板. 突出显示过期和激活任务](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [看板. 卡片样式](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [看板. 每个任务无限制用户分配](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)