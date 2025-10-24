---
sidebar_label: 配置
title: 配置
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解配置方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# 配置

您可以通过相应的 API 配置 *Kanban* 的外观和功能。可用的参数允许您：

- 通过 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性配置卡片外观
- 通过 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性配置编辑器字段
- 通过 [`editor`](api/config/js_kanban_editor_config.md) 属性配置编辑器行为
- 通过 [`renderType`](api/config/js_kanban_rendertype_config.md) 和 [`scrollType`](api/config/js_kanban_scrolltype_config.md) 属性配置渲染和滚动
- 通过 [`history`](api/config/js_kanban_history_config.md) 属性配置 Kanban 历史记录
- 通过 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 属性自定义卡片外观
    - *详细信息请参见[**自定义**](guides/customization.md)章节！*
- 通过 [`locale`](api/config/js_kanban_locale_config.md) 属性应用所需的本地化
    - *详细信息请参见[**本地化**](guides/localization.md)章节！*
- 通过相应的 [`cards`](api/config/js_kanban_cards_config.md)、[`columns`](api/config/js_kanban_columns_config.md)、[`rows`](api/config/js_kanban_rows_config.md) 和 [`links`](api/config/js_kanban_links_config.md) 属性加载卡片、列、行和链接数据
    - *详细信息请参见[**数据操作**](guides/working_with_data.md)章节！*

## 卡片

Kanban 看板由分布在*列*和*行*中的*卡片*组成。您可以使用 [`cardShape`](api/config/js_kanban_cardshape_config.md) 配置属性设置卡片外观。可以包含（或排除）到卡片模板中的预定义字段有：

- 通过 `label: boolean` 配置卡片标题
- 通过 `description: boolean` 配置卡片描述

    :::tip
    您可以通过 Kanban 编辑器的相应输入框管理任意卡片的**标题**和**描述**字段。如果启用这些字段，相应的输入框会自动在编辑器中显示。要配置这些输入框，可以使用[**text** 和 **textarea**](#text-和-textarea-类型) 类型。
    :::

- 通过 `progress: boolean` 配置卡片进度

    :::tip
    您可以通过 Kanban 编辑器的相应控件管理任意卡片的**进度**字段。如果启用此字段，相应的控件会自动在编辑器中显示。要配置该控件，可以使用[**progress**](#progress-类型) 类型。
    :::

- 通过 `start_date: boolean` 配置开始日期
- 通过 `end_date: boolean` 配置结束日期

    :::tip
    您可以通过 Kanban 编辑器的相应控件管理任意卡片的**开始日期**和**结束日期**字段。如果启用这些字段，相应的控件会自动在编辑器中显示。要配置这些控件，可以使用[**date**](#date-和-daterange-类型) 类型。
    :::

- 通过 `menu: boolean` 配置卡片右键菜单
- 通过 `attached: boolean` 配置卡片附件

    :::tip
    您可以通过 Kanban 编辑器的相应字段**添加文件**到任意卡片。要配置该字段，可以使用[**files**](#files-类型) 类型。
    :::

- 通过 `color: boolean` 配置卡片颜色

    :::tip
    您可以通过 Kanban 编辑器的相应控件管理卡片的**顶部颜色线**。如果启用**color**，相应的控件（*colorpicker*）会自动在编辑器中显示。要配置该控件，可以使用[**color**](#color-类型) 类型。
    :::

- 通过 `cover: boolean` 配置卡片封面（预览图片）
- 通过 `comments: boolean` 配置卡片评论
- 通过 `confirmDeletion: boolean` 配置删除卡片时的确认对话框
- 通过 `votes: boolean | { show: boolean, clicable: true }` 配置卡片投票
- 通过 `users: boolean | { show: boolean, values: object, maxCount: number | false }` 配置卡片指派用户

    :::tip
    您可以通过 Kanban 编辑器的相应控件为任意卡片指派一个或多个用户。要配置指派单个用户的控件，使用[**combo** 或 **select**](#comboselect-和-multiselect-类型) 类型；要指派多个用户，使用[**multiselect**](#comboselect-和-multiselect-类型) 类型。
    :::

- 通过 `priority: boolean | { show: boolean, values: object }` 配置卡片优先级

    :::tip
    您可以通过 Kanban 编辑器的相应控件管理卡片的**优先级**。如果启用**priority**，相应控件会自动在编辑器中显示。要配置该控件，仅可使用[**combo** 或 **select**](#comboselect-和-multiselect-类型) 类型。
    :::

- *自定义字段* 通过 `headerFields: [ { key: string, label: string, css: string } ]` 配置

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
如果未通过 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性指定卡片设置，控件将应用 [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) 默认参数集！
:::

## 编辑器

:::info
您可以通过 [`editor.placement`](api/config/js_kanban_editor_config.md) 属性将编辑器显示为**侧边栏**或**模态窗口**！
:::

Kanban 的*编辑器*由用于管理卡片数据的字段组成。要配置编辑器字段（控件），可使用 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性。可用的编辑器字段类型包括：

- [**combo**、**select** 和 **multiselect**](#comboselect-和-multiselect-类型)
- [**color**](#color-类型)
- [**text** 和 **textarea**](#text-和-textarea-类型)
- [**progress**](#progress-类型)
- [**files**](#files-类型)
- [**date** 和 **dataRange**](#date-和-daterange-类型)
- [**comments**](#comments-类型)
- [**links**](#links-类型)

### Combo、Select 和 Multiselect 类型

**combo**、**select** 和 **multiselect** 类型的编辑器字段可以如下设置：

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // 或 "select" 和 "multiselect"
            key: "priority", // 配置 "cardShape" 属性时使用的 "priority" 键
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
对于 **"multiselect"** 和 **"combo"** 类型的编辑器字段，还可以通过 **avatar** 属性指定预览图片路径：

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // 或 "combo"
        key: "users", // 配置 "cardShape" 属性时使用的 "users" 键
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

[**Kanban. 限制仅分配一个用户**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Color 类型

**color** 类型的编辑器字段可按以下方式设置：

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // 配置 "cardShape" 属性时使用的 "color" 键
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

**text** 和 **textarea** 类型的编辑器字段可如下设置：

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

**progress** 类型的编辑器字段可如下设置：

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // 配置 "cardShape" 属性时使用的 "progress" 键
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

**files** 类型的编辑器字段可如下设置：

#### 以字符串配置上传地址

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // 配置 "cardShape" 属性时使用的 "attached" 键
            label: "Attachment",
            uploadURL: url + "/uploads", // 以字符串指定 url
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

#### 以函数配置上传地址

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
                        'Authorization': 'Bearer ' + token  // token 或其他 header
                    }
                };

                return fetch(url + "/uploads", config) // URL
                    .then(res => res.json())
                    .then(
                        data => {
                            rec.id = data.id;
                            return data;
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

**date** 类型的编辑器字段可如下设置：

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

**dateRange** 类型的编辑器字段可如下设置：

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

**comments** 类型的编辑器字段可如下设置：

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

**links** 类型的编辑器字段可如下设置：

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
要将编辑器字段与对应的卡片字段关联，需要在 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性对象中提供特殊的 **key**（`key: "editor_field_key"`）。该 key 的值需在 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性中设置为 *true*（内置卡片字段）或在 **headerFields** 数组中指定（自定义卡片字段）。您也可以通过该 key 提供任何字段的初始数据。

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
    label: true, // 内置字段的 key
    headerFields: [
        {
            key: "note", // 自定义字段的 key
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
如果未通过 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性指定编辑器设置，控件将应用 [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) 默认参数集。在这种情况下，仅在通过 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性激活卡片的对应字段后，默认控件和输入框才会在编辑器中显示。
:::

### 编辑器的配置

通过 [`editor`](api/config/js_kanban_editor_config.md) 属性，您可以如下配置编辑器：

- 通过 *`editor.autoSave`* 属性启用/禁用编辑器的自动保存模式
- 通过 *`editor.debounce`* 属性指定自动保存数据的延迟时间（仅在***autoSave: true*** 参数下有效）

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

Kanban 的**工具栏**包含用于*搜索卡片*的搜索框、*排序卡片*的控件以及*新增列和行*的控件。要显示工具栏，需要使用 **kanban.Toolbar()** 构造函数在独立容器中初始化。

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

您可以通过 **items** 属性管理（隐藏/显示/自定义）工具栏控件：

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
        "spacer", // 空白
        "undo", // 历史记录撤销卡片操作
        "redo", // 历史记录重做卡片操作
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
        "addColumn", // 添加新列
        "addRow", // 添加新行
        // 自定义元素
    ]
});
~~~

:::tip
如需隐藏部分工具栏控件，只需从 **items** 数组中移除相应字符串即可。
:::

## 示例

在下面的代码片段中，您可以看到如何配置 Kanban 的**卡片**、**编辑器**和**工具栏**：

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>