---
sidebar_label: 配置
title: 配置
description: 你可以在 DHTMLX JavaScript Kanban 库的文档中了解配置方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费试用版。
---

# 配置

*Kanban* 组件可以通过其 API 在外观和功能上进行高度自定义。你可以调整多种选项，例如:

- 使用 [`cardShape`](/api/config/js_kanban_cardshape_config.md) 属性调整卡片的外观
- 通过 [`editorShape`](/api/config/js_kanban_editorshape_config.md) 属性设置编辑器字段
- 使用 [`editor`](/api/config/js_kanban_editor_config.md) 属性控制编辑器行为
- 通过 [`renderType`](/api/config/js_kanban_rendertype_config.md) 和 [`scrollType`](/api/config/js_kanban_scrolltype_config.md) 管理渲染与滚动方式
- 使用 [`history`](/api/config/js_kanban_history_config.md) 属性跟踪更改历史
- 通过 [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md) 属性个性化卡片外观
    - *（详见 [**自定义**](/guides/customization.md) 部分）*
- 使用 [`locale`](/api/config/js_kanban_locale_config.md) 属性切换语言
    - *（详见 [**本地化**](/guides/localization.md)）*
- 通过相应的 [`cards`](/api/config/js_kanban_cards_config.md)、[`columns`](/api/config/js_kanban_columns_config.md)、[`rows`](/api/config/js_kanban_rows_config.md) 和 [`links`](/api/config/js_kanban_links_config.md) 属性加载卡片、列、行和连接的数据
    - *（详见 [**数据操作**](/guides/working_with_data.md)）*

## 卡片

在 Kanban 中，卡片被组织在列和行中。你可以通过 [`cardShape`](/api/config/js_kanban_cardshape_config.md) 属性控制卡片的显示内容和样式。你可以选择显示或隐藏多个内置字段，包括:

- 使用 `label: boolean` 选项显示卡片标题
- 使用 `description: boolean` 选项显示卡片描述

:::tip
**label** 和 **description** 字段都可以通过 Kanban 编辑器进行编辑。启用后，相应的输入框会自动显示。这些输入通过 [**text** 和 **textarea**](#text-和-textarea-类型) 类型配置。
:::

- 使用 `progress: boolean` 显示进度条

:::tip
**progress** 字段也可以通过 Kanban 编辑器进行管理。启用后，其控件会自动显示。使用 [**progress**](#progress-类型) 类型配置。
:::

- 使用 `start_date: boolean` 显示开始日期
- 使用 `end_date: boolean` 显示结束日期

:::tip
**start date** 和 **end date** 都可以通过 Kanban 编辑器中的控件进行管理。启用后，控件会自动显示。通过 [**date**](#date-和-daterange-类型) 类型设置。
:::

- 使用 `menu: boolean` 显示卡片右键菜单
- 使用 `attached: boolean` 支持附件

:::tip
卡片可以通过 Kanban 编辑器添加附件文件。这通过 [**files**](#files-类型) 类型实现。
:::

- 使用 `color: boolean` 设置卡片颜色

:::tip
卡片顶部的颜色线条可通过 Kanban 编辑器中的控件进行管理。启用 **color** 后，会自动显示颜色选择器。使用 [**color**](#color-类型) 类型。
:::

- 使用 `cover: boolean` 显示卡片封面图片（预览）
- 使用 `comments: boolean` 支持卡片评论
- 使用 `confirmDeletion: boolean` 删除卡片时弹出确认对话框
- 使用 `votes: boolean | { show: boolean, clicable: true }` 支持卡片投票
- 使用 `users: boolean | { show: boolean, values: object, maxCount: number | false }` 分配用户

:::tip
卡片分配用户可通过 Kanban 编辑器控件实现。只允许单人分配时，使用 [**combo** 或 **select**](#comboselect-和-multiselect-类型) 类型。允许多人分配时，使用 [**multiselect**](#comboselect-和-multiselect-类型) 类型。
:::

- 使用 `priority: boolean | { show: boolean, values: object }` 字段设置优先级

:::tip
卡片 **priority** 可通过 Kanban 编辑器控件设置。启用后控件会自动显示，仅可使用 [**combo** 或 **select**](#comboselect-和-multiselect-类型) 类型。
:::

- *自定义字段* 可通过 `headerFields: [ { key: string, label: string, css: string } ]` 添加

~~~jsx {12-35,42}
const users = [ // 用户数据
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // 卡片优先级数据
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // 卡片设置
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    priority: {
        show: true,
        values: cardPriority
    },
    users: {
        show: true,
        values: users
    },
    headerFields: [
        {
            key: "sprint",
            label: "Custom field",
            css: "custom_css_class"
        }
    ]
};

new kanban.Kanban("#root", {
    // 卡片数据
    columns,
    cards,
    // 卡片设置
    cardShape
});
~~~

:::note
如果你没有通过 [`cardShape`](/api/config/js_kanban_cardshape_config.md) 定义自定义卡片设置，Kanban 会自动采用 [**defaultCardShape**](/api/config/js_kanban_cardshape_config.md#默认配置) 默认配置！
:::

## 编辑器

:::info
你可以通过设置 [`editor.placement`](/api/config/js_kanban_editor_config.md) 属性，让编辑器以 **侧边栏** 或 **弹窗** 的形式显示！
:::

Kanban *编辑器* 用于管理卡片详细信息。你可以通过 [`editorShape`](/api/config/js_kanban_editorshape_config.md) 属性自定义编辑器中的字段。支持的字段类型有:

- [**combo**、**select** 和 **multiselect**](#comboselect-和-multiselect-类型)
- [**color**](#color-类型)
- [**text** 和 **textarea**](#text-和-textarea-类型)
- [**progress**](#progress-类型)
- [**files**](#files-类型)
- [**date** 和 **dataRange**](#date-和-daterange-类型)
- [**comments**](#comments-类型)
- [**links**](#links-类型)

### Combo、Select 和 Multiselect 类型

这些类型的编辑器字段配置如下:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // 或 "select"、"multiselect"
            key: "priority", // 优先级字段，需与 cardShape 属性中的 key 对应
            label: "Priority",
            values: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ]
        },
        // 其他字段设置
    ]
});
~~~

:::info
对于 **"multiselect"** 和 **"combo"** 类型的编辑字段，可以通过设置 **avatar** 属性显示预览图片:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // 或 "combo"
        key: "users", // 用户字段，需与 cardShape 属性中的 key 对应
        label: "Users",
        values: [
            {
                id: 1, label: "Alan",
                avatar: "preview_image_path_1.png"
            },
            {
                id: 2, label: "John",
                avatar: "preview_image_path_2.png"
            }
        ]
    },
    // 其他字段设置
]
~~~

[**Kanban. 限制只能分配一名用户**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Color 类型

要在编辑器中添加颜色选择器，配置如下:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color",
            key: "color", // 需与 cardShape 属性中的 key 对应
            label: "Card color",
            values: ["#65D3B3", "#FFC975", "#58C3FE"],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        // 其他字段设置
    ]
});
~~~

### Text 和 Textarea 类型

添加文本或多行输入字段配置如下:

~~~jsx {3-14}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "text", // 或 "textarea"
            key: "label",
            label: "Label",
            config: {
                placeholder: "Type your tips here",
                readonly: false,
                focus: true,
                disabled: false,
                inputStyle: "height: 50px;"
            }
        },
        // 其他字段设置
    ]
});
~~~

### Progress 类型

在编辑器中添加进度条配置如下:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress",
            key: "progress", // 需与 cardShape 属性中的 key 对应
            label: "Progress",
            config: {
                min: 10,
                max: 90,
                step: 5
            }
        },
        // 其他字段设置
    ]
});
~~~

### Files 类型

你可以通过两种方式在编辑器中配置文件上传:

#### 上传 URL 配置为字符串

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files",
            key: "attached", // 需与 cardShape 属性中的 key 对应
            label: "Attachment",
            uploadURL: url + "/uploads", // 指定字符串类型的上传 url
            config: {
                accept: "image/*", // "video/*", "audio/*"
                disabled: false,
                multiple: true,
                folder: false
            }
        },
        // 其他字段设置
    ]
});
~~~

#### 上传 URL 配置为函数

~~~jsx {9-31}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        ...defaultEditorShape,
        {
            key: "attached",
            type: "files",
            label: "Files",
            uploadURL: rec => {
                const formData = new FormData();
                formData.append("upload", rec.file);

                const config = {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + token  // 可在此添加 token 或其他 header
                    }
                };

                return fetch(url + "/uploads", config) // 此处为上传 URL
                    .then(res => res.json())
                    .then(
                        data => {
                            return { id: rec.id, ...data };
                        },
                        () => ({ id: rec.id, status: "error" })
                    )
                    .catch();
            }
        }
    ]
});
~~~

### Date 和 DateRange 类型

添加日期选择或日期范围选择字段配置如下:

~~~jsx {3-8}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date",
            key: "start_date",
            label: "Start date",
            format: "%d/%m/%y"
        },
        // 其他字段设置
    ]
});
~~~

日期范围选择配置:

~~~jsx {3-11}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "dateRange",
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range",
            format: "%d/%m/%y"
        },
        // 其他字段设置
    ]
});
~~~

### Comments 类型

在编辑器中添加评论字段配置如下:

~~~jsx {3-13}
new kanban.Kanban("#root", {
    editorShape: [
       {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                dateFormat: "%M %d",
                placement: "page", // 或 "editor"
                html: true,
                confirmDeletion: true
            }
        },
        // 其他字段设置
    ]
});
~~~

### Links 类型

在编辑器中添加链接字段配置如下:

~~~jsx {3-10}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "links",
            key: "links",
            label: "Links",
            config: {
                confirmDeletion: true
            }
        },
        // 其他字段设置
    ]
});
~~~

### 绑定编辑器字段与卡片字段

:::info
要将编辑器字段与卡片字段绑定，需要在 [`editorShape`](/api/config/js_kanban_editorshape_config.md) 对象中设置 **key**（`key: "editor_field_key"`）。对于内置卡片字段，需确保该 key 在 [`cardShape`](/api/config/js_kanban_cardshape_config.md) 中设置为 *true*。对于自定义字段，则需要在 **headerFields** 数组中添加。你也可以通过该 key 设置任何字段的初始值。

~~~jsx {5,13,22,25,33-34,38-39,45-47}
// 编辑器设置
const editorShape = [
    {
        type: "text",
        key: "label",
        label: "Label",
        config: {
            placeholder: "Enter new label here"
        }
    },
    {
        type: "textarea",
        key: "note",
        label: "Note",
        config: {
            placeholder: "Enter usefull note here"
        }
    }
];
// 卡片设置
const cardShape = {
    label: true, // 内置字段 key
    headerFields: [
        {
            key: "note", // 自定义字段 key
            label: "Note"
        }
    ]
};
// 卡片数据
const cards = [
    {
        label: "Volvo",
        note: "It is the swedish car",
        column: "backlog"
    },
    {
        label: "Audi",
        note: "It is the german car",
        column: "backlog"
    }
];
// 创建 Kanban
new kanban.Kanban("#root", {
    editorShape,
    cardShape,
    cards,
    columns
    // 其他配置参数
});
~~~
:::

:::note
如果没有通过 [`editorShape`](/api/config/js_kanban_editorshape_config.md) 定义编辑器设置，组件会自动采用 [**defaultEditorShape**](/api/config/js_kanban_editorshape_config.md#默认配置) 默认配置。此时，只有当你在 [`cardShape`](/api/config/js_kanban_cardshape_config.md) 启用了对应的卡片字段，相关输入控件才会显示。
:::

### 编辑器行为配置

你可以通过 [`editor`](/api/config/js_kanban_editor_config.md) 属性调整编辑器行为:

- 使用 *`editor.autoSave`* 启用或关闭自动保存功能
- 通过 *`editor.debounce`* 设置自动保存的延迟时间（仅在 ***autoSave: true*** 时有效）

~~~jsx {6-9}
// 创建 Kanban
new kanban.Kanban("#root", {
    columns,
    cards,
    editorShape,
    editor: {
        autoSave: true,
        debounce: 2000
    }
    // 其他参数
});
~~~

## 工具栏

Kanban **工具栏** 提供卡片搜索、排序、添加新列和新行的控件。要使用工具栏，需要在单独的容器中通过 **kanban.Toolbar()** 初始化。

~~~jsx {13}
// 创建 Kanban
const board = new kanban.Kanban("#root", {
    // 数据
    columns,
    cards,
    rows,
    // 卡片设置
    cardShape,
    // 编辑器设置
    editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

工具栏控件可通过 **items** 属性显示、隐藏或自定义:

~~~jsx {6-51}
// 创建 Kanban
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        { // 自定义搜索栏
            type: "search",
            options: [
                {
                    id: "label",
                    label: "By label"
                },
                {
                    id: "start_date",
                    label: "By date",
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
        "spacer", // 空白占位
        "undo", // 撤销卡片操作的控件
        "redo", // 重做卡片操作的控件
        { // 自定义排序控件
            type: "sort",
            options: [
                {
                    text: "Sort by label",
                    by: "label",
                    dir: "asc"
                },
                {
                    text: "Sort by description",
                    by: "description",
                    dir: "desc"
                }
            ]
        },
        "addColumn", // 添加新列控件
        "addRow", // 添加新行控件
        // 其他自定义元素
    ]
});
~~~

:::tip
如需隐藏部分工具栏控件，只需将其字符串从 **items** 数组中移除即可。
:::

## 示例

以下是一个展示如何为 Kanban 配置 **卡片**、**编辑器** 和 **工具栏** 的代码片段:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
