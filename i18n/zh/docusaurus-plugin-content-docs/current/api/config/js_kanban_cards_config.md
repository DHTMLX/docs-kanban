---
sidebar_label: cards
title: cards 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 cards 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
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
                size?: number
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - 用于多个用户，当您使用 "multiselect" 编辑器类型分配用户时
            // users?: string | number - 用于单个用户，当您使用 "combo" 或 "select" 编辑器类型分配用户时
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

对于每个卡片，您可以指定以下参数（数据）：

- `id` - （可选）卡片 **ID**。用于通过相应方法管理卡片
- `label` - （可选）卡片标签。显示在 **Label** 字段
- `description` - （可选）卡片描述。显示在 **Description** 字段
- `progress` - （可选）进度条数值。可指定 0 到 100 之间的值。显示在 **Progress bar** 字段
- `start_date` - （可选）开始日期对象（请勿指定字符串日期）。显示在 **Start date** 字段
- `end_date` - （可选）结束日期对象（请勿指定字符串日期）。显示在 **End date** 字段
- `attached` - （可选）包含附件文件数据的对象数组。显示在 **Attachment** 字段。每个对象可指定以下参数：
	- `id` - （必需）附件文件的 **ID**
    - `url` - （可选）附件文件路径
    - `previewURL` - （可选）预览图片路径
    - `coverURL` - （可选）封面图片路径
    - `name` - （可选）文件名
    - `isCover` - （可选）启用封面图片。若为 **true**，封面图片将通过 "coverURL" 下载
    - `size` - （可选）附件文件大小（字节）
- `color` - （可选）有效的 HEX 颜色代码。作为卡片顶部线条颜色
- `users` - （可选）一个包含多个用户 **ID** 的数组，或单个用户的 **string | number**。要指定分配的用户，需要在 [cardShape.users](api/config/js_kanban_cardshape_config.md) 属性中定义用户数据数组。用户显示在 **Users** 字段

:::info
`users?: array` - 如果使用 [**multiselect**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) 编辑器类型分配多个用户，请指定包含用户 **ID** 的 **数组**

`users?: string | number` - 如果使用 [**combo** 或 **select**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) 编辑器类型分配单个用户，请指定单个 **ID**
:::

- `priority` - （可选）卡片优先级 **ID**。要指定卡片优先级，需要在 [cardShape.priority](api/config/js_kanban_cardshape_config.md) 属性中定义优先级数据数组。显示在 **Priority** 字段
- `css` - （可选）为单个卡片定义 CSS 样式
- `votes` - （可选）用户 ID 数组
- `comments` - （可选）包含评论数据的对象数组。每个评论对象可指定以下参数：
    - `id` - （必需）评论的 **ID**
    - `userId` - （必需）发布评论的用户 **ID**
    - `cardId` - （必需）评论所属卡片的 **ID**
    - `text` - （可选）评论文本，也可以包含 HTML 标记
    - `date` - （可选）Date 对象（请勿指定字符串日期）。评论发布时间，编辑后不更新
- `custom_key` - （可选）卡片的自定义键。您可以指定自定义键以将卡片放入列和行。请参阅 [columnKey](../js_kanban_columnkey_config) 和 [rowKey](api/config/js_kanban_rowkey_config.md) 属性

:::info
如果您想动态加载卡片的新数据，可以使用 [**parse()**](api/methods/js_kanban_parse_method.md) 方法！
:::

### 示例

~~~jsx {1-41,45}
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
                isCover: true,
                size: 11979
            }, {...} // 其他附件文件数据
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
        // 自定义字段，将卡片放入 "feature" 行
        // rowKey 配置需设置为 "type" 值
        type: "feature",
        // 自定义字段，将卡片放入 "backlog" 列
        // columnKey 配置需设置为 "stage" 值
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

**更新日志：** ***css***、***comments*** 和 ***votes*** 参数在 v1.4 版本中新增

**相关文档：**
- [数据操作](guides/working_with_data.md)
- [updateCard()](api/methods/js_kanban_updatecard_method.md)

**相关示例：** [看板. 卡片样式](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)