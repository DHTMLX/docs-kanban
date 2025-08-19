---
sidebar_label: cards
title: cards 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 cards 配置。浏览开发者指南和 API 参考，试用代码示例和实时演示，并下载 DHTMLX 看板的免费30天评估版。
---

# cards

### 描述

@short: 可选。包含卡片数据的对象数组

### 用法

~~~jsx {}
cards?: [
    {
        id?: string | number,
        label?: string,
        description?: string,
        progress?: number,
        start_date?: Date,
        end_date?: Date,
        attached?: [
            {
                id: string | number,
                url?: string,
                previewURL?: string,
                coverURL?: string,
                name?: string,
                isCover?: boolean
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - 多用户时使用，若使用 "multiselect" 编辑器类型分配用户
            // users?: string | number - 单用户时使用，若使用 "combo" 或 "select" 编辑器类型分配用户
        priority?: string | number,
        css?: string,
        votes?: array,
        comments?: [
            {
                id: string | number,
                userId: string | number,
                cardId: string | number,
                text?: string,
                date?: Date,
            }, {...}
        ],
        [custom_key: string]?: any
    }, {...} // 其他卡片数据
];
~~~

### 参数

每个卡片可以包含以下参数:

- `id` - （可选）卡片的**ID**，用于通过相关方法管理卡片
- `label` - （可选）显示在**标签**字段中的文本标签
- `description` - （可选）显示在**描述**字段中的描述文本
- `progress` - （可选）进度条数值，范围0到100，显示在**进度条**字段
- `start_date` - （可选）开始日期，作为 Date 对象（避免字符串日期），显示在**开始日期**字段
- `end_date` - （可选）结束日期，作为 Date 对象（避免字符串日期），显示在**结束日期**字段
- `attached` - （可选）包含附件详情的数组，显示在**附件**字段。每个对象可包含:
	- `id` - （必需）附件的**ID**
    - `url` - （可选）文件路径
    - `previewURL` - （可选）预览图片路径
    - `coverURL` - （可选）设置为封面的图片路径
    - `name` - （可选）文件名
    - `isCover` - （可选）当为 **true** 时，从 "coverURL" 加载封面图片
- `color` - （可选）以 HEX 颜色代码表示卡片顶部线条颜色
- `users` - （可选）多用户时为用户 ID 的**数组**，单用户时为**字符串或数字**。分配用户时，在 [cardShape.users](../js_kanban_cardshape_config) 属性中定义用户数据数组。用户显示在**用户**字段

:::info
`users?: array` - 当使用 [**multiselect**](../js_kanban_editorshape_config/#--comboselect-和-multiselect-类型参数) 编辑器类型分配多个用户时，使用用户 **ID** 的**数组**

`users?: string | number` - 当使用 [**combo** 或 **select**](../js_kanban_editorshape_config/#--comboselect-和-multiselect-类型参数) 编辑器类型分配单个用户时，指定单个用户 **ID**
:::

- `priority` - （可选）卡片的优先级 **ID**。在 [cardShape.priority](../js_kanban_cardshape_config) 属性中定义优先级数组。显示在**优先级**字段
- `css` - （可选）卡片的自定义 CSS 样式
- `votes` - （可选）投票用户 ID 数组
- `comments` - （可选）评论对象数组，包括:
    - `id` - （必需）评论的**ID**
    - `userId` - （必需）评论者的用户 **ID**
    - `cardId` - （必需）评论所属的卡片 **ID**
    - `text` - （可选）评论文本，可包含 HTML 标记
    - `date` - （可选）表示评论发布时间的 Date 对象（编辑后不更新）
- `custom_key` - （可选）卡片的任何自定义键。可用于定位卡片在列或行中的位置，详见 [columnKey](../js_kanban_columnkey_config) 和 [rowKey](../js_kanban_rowkey_config) 属性

:::info
要动态加载新的卡片数据，可以使用 [**parse()**](../../methods/js_kanban_parse_method) 方法。
:::

### 示例

~~~jsx {1-40,44}
const cards = [
    {
        id: 1,
        label: "Integration with React",
        description: "Some description",
        progress: 25,
        start_date: new Date("02/24/2022"),
        end_date: new Date("02/24/2023"),
        attached: [
            {
                id: 234,
                url: "../assets/img-1.jpg",
                previewURL: "../assets/img-1.jpg",
                coverURL: "../assets/img-1.jpg",
                name: "img-1.jpg",
                isCover: true
            }, {...} // 其他附件数据
        ],
        color: "#65D3B3",
        users: [1,2],
        votes: [3,6,8],
        comments: [
            {
                id: 1,
                userId: 1,
                cardId: 1,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. ",
                date: new Date(),
            }, {...} // 其他评论
        ],
        priority: 1,
        // 自定义字段，用于将卡片放置在 "feature" 行
        // 需要将 rowKey 配置设置为 "type" 值
        type: "feature",
        // 自定义字段，用于将卡片放置在 "backlog" 列
        // 需要将 columnKey 配置设置为 "stage" 值
        stage: "backlog",
        css: "red",
    }, {...} // 其他卡片数据
];

new kanban.Kanban("#root", {
    columns,
    cards,
    // 其他参数
});
~~~

**更新日志:** ***css***、***comments*** 和 ***votes*** 参数自 v1.4 版本引入

**相关内容:**
- [处理数据](/guides/working_with_data)
- [updateCard()](/api/methods/js_kanban_updatecard_method.md)

**相关示例:** [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
