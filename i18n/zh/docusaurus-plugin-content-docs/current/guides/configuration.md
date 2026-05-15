---
sidebar_label: 配置
title: 配置
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解配置方法。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 30 天试用版。
---

# 配置

您可以通过以下属性配置 Kanban 的外观和功能：

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — 设置卡片外观和内置字段
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — 定义编辑器字段
- [`editor`](api/config/js_kanban_editor_config.md) — 控制编辑器的可见性、自动保存和位置
- [`renderType`](api/config/js_kanban_rendertype_config.md)、[`scrollType`](api/config/js_kanban_scrolltype_config.md) — 调整卡片渲染和看板滚动
- [`history`](api/config/js_kanban_history_config.md) — 管理卡片操作历史记录
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — 自定义卡片外观（参见[自定义](guides/customization.md)章节）
- [`locale`](api/config/js_kanban_locale_config.md) — 应用本地化（参见[本地化](guides/localization.md)章节）
- [`cards`](api/config/js_kanban_cards_config.md)、[`columns`](api/config/js_kanban_columns_config.md)、[`rows`](api/config/js_kanban_rows_config.md)、[`links`](api/config/js_kanban_links_config.md) — 加载卡片、列、行和链接数据（参见[数据操作](guides/working_with_data.md)章节）

## 卡片 {#cards}

Kanban 看板由分布在列和行中的卡片组成。使用 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性配置卡片外观和内置字段：

- `label: boolean | { show }` — 卡片标题，通过 [`text`](#text-和-textarea-类型) 类型编辑
- `description: boolean | { show }` — 卡片描述，通过 [`textarea`](#text-和-textarea-类型) 类型编辑
- `progress: boolean | { show }` — 卡片进度，通过 [`progress`](#progress-类型) 类型编辑
- `start_date: boolean | { show, format }` — 卡片开始日期，通过 [`date`](#date-和-daterange-类型) 类型编辑
- `end_date: boolean | { show, format }` — 卡片结束日期，通过 [`date`](#date-和-daterange-类型) 类型编辑
- `menu: boolean | { show, items }` — 卡片右键菜单
- `attached: boolean | { show }` — 卡片附件，通过 [`files`](#files-类型) 类型编辑
- `color: boolean | { show, values }` — 卡片顶部颜色线，通过 [`color`](#color-类型) 类型编辑
- `cover: boolean | { show }` — 卡片预览图片
- `comments: boolean | { show }` — 卡片评论
- `confirmDeletion: boolean | { show }` — 删除卡片的确认对话框
- `votes: boolean | { show, clickable }` — 卡片投票
- `users: boolean | { show, values, maxCount }` — 分配给卡片的用户，通过 [`combo`、`select` 或 `multiselect`](#comboselect-和-multiselect-类型) 类型编辑
- `priority: boolean | { show, values }` — 卡片优先级，通过 [`combo` 或 `select`](#comboselect-和-multiselect-类型) 类型编辑
- `css: (card) => string` — 返回有条件应用于卡片的 CSS 类的函数
- `headerFields: [{ key, label, css }]` — 自定义卡片字段

:::tip
在 `cardShape` 中激活某个字段后，编辑器会自动显示对应的控件。通过 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性配置各个控件——可用类型详见[编辑器](#editor)章节。
:::

以下代码片段配置了带有自定义用户、优先级和自定义标题字段的卡片：

~~~jsx {12-35,42}
const users = [ // users data
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // cards settings
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
    // cards data
    columns,
    cards,
    // cards settings
    cardShape
});
~~~

:::note
如果未通过 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性指定卡片设置，控件将回退至 [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config)。
:::

## 编辑器 {#editor}

Kanban 编辑器包含用于管理卡片数据的字段。使用 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性配置编辑器字段。可用的字段类型如下：

- [`combo`、`select`、`multiselect`](#comboselect-和-multiselect-类型) — 下拉选项
- [`color`](#color-类型) — 颜色选择器
- [`text`、`textarea`](#text-和-textarea-类型) — 文本输入框
- [`progress`](#progress-类型) — 进度滑块
- [`files`](#files-类型) — 文件上传
- [`date`、`dateRange`](#date-和-daterange-类型) — 单个日期或日期范围
- [`comments`](#comments-type) — 卡片评论
- [`links`](#links-type) — 卡片链接

:::info
通过 [`editor.placement`](api/config/js_kanban_editor_config.md) 属性将编辑器显示为侧边栏或模态窗口。
:::

### Combo、Select 和 Multiselect 类型

以下代码片段配置了用于选择卡片优先级的下拉框：

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // 或 "select" 和 "multiselect"
            key: "priority", // 在 "cardShape" 属性中使用 "priority" 键
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
对于 `multiselect` 和 `combo` 字段，可通过 `avatar` 属性设置预览图片路径：

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // 或 "combo"
        key: "users", // 在 "cardShape" 属性中使用 "users" 键
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

以下代码片段配置了用于选择卡片颜色的编辑器字段：

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // 在 "cardShape" 属性中使用 "color" 键
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

以下代码片段配置了用于输入卡片标题的编辑器字段：

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

以下代码片段配置了用于设置卡片进度的编辑器字段：

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // 在 "cardShape" 属性中使用 "progress" 键
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

将 `uploadURL` 参数设为字符串可进行基本上传，设为函数则可自定义请求。

#### 以字符串配置上传地址

以下代码片段为文件上传器使用字符串 URL：

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // 在 "cardShape" 属性中使用 "attached" 键
            label: "Attachment",
            uploadURL: url + "/uploads", // 以字符串设置 URL
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

向 `uploadURL` 传入函数可添加自定义 header、token 或响应处理逻辑。以下代码片段通过 bearer token 发送每个文件：

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

以下代码片段配置了单个日期的编辑器字段：

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

以下代码片段配置了开始/结束日期范围的编辑器字段：

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

### Comments 类型 {#comments-type}

以下代码片段配置了编辑器的评论字段：

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

### Links 类型 {#links-type}

以下代码片段配置了编辑器的链接字段：

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

每个编辑器字段通过共享的 `key` 与卡片字段关联。在 [`editorShape`](api/config/js_kanban_editorshape_config.md) 条目和 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性中设置相同的 `key` 值。对于内置卡片字段，将 key 设为 `true`；对于自定义字段，在 `headerFields` 数组中列出该 key。同一 key 也用于提供卡片的初始数据。

以下代码片段将编辑器的 `label` 和 `note` 字段绑定到对应的卡片字段：

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

:::note
如果未通过 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性指定编辑器设置，控件将回退至 [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config)。仅在通过 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性激活卡片的对应字段后，默认控件和输入框才会在编辑器中显示。
:::

### 编辑器的配置 {#configure-editor-behavior}

[`editor`](api/config/js_kanban_editor_config.md) 属性控制编辑器的可见性、自动保存和位置：

- [`editor.show`](api/config/js_kanban_editor_config.md) — 启用或禁用编辑器
- [`editor.placement`](api/config/js_kanban_editor_config.md) — 将编辑器显示为 `"sidebar"` 或 `"modal"` 窗口
- [`editor.autoSave`](api/config/js_kanban_editor_config.md) — 启用或禁用自动保存模式
- [`editor.debounce`](api/config/js_kanban_editor_config.md) — 自动保存前的延迟时间（仅在 `autoSave: true` 时生效）

以下代码片段启用自动保存并设置 2 秒延迟：

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

## 渲染与滚动

Kanban 控件默认渲染所有卡片并整体滚动看板。对于卡片数量较多的看板，可切换为懒加载渲染或按列独立滚动：

- [`renderType`](api/config/js_kanban_rendertype_config.md) — 设为 `"lazy"` 仅渲染看板上可见的卡片
- [`scrollType`](api/config/js_kanban_scrolltype_config.md) — 设为 `"column"` 使每列独立滚动

以下代码片段启用懒加载渲染和按列独立滚动：

~~~jsx {5-7}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    scrollType: "column",
    cardHeight: 150
});
~~~

:::important
当 `renderType: "lazy"` 与任意 `scrollType` 组合使用时，需通过 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 属性为卡片设置固定高度。不设置 `cardHeight` 时，懒加载渲染将无法正确显示卡片。
:::

## 变更历史

Kanban 记录卡片操作，并在工具栏上提供撤销和重做控件。使用 [`history`](api/config/js_kanban_history_config.md) 属性可禁用此功能。

以下代码片段禁用历史记录跟踪：

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false
});
~~~

:::tip
若要跳过历史记录中的个别操作，请向方法或事件传递 [`$meta`](api/common/js_kanban_meta_parameter.md) 参数。
:::

## 工具栏 {#toolbar}

Kanban 的**工具栏**提供搜索框、排序控件以及添加列和行的控件。使用 `kanban.Toolbar()` 构造函数在独立容器中初始化工具栏。

以下代码片段创建绑定到 Kanban 实例的工具栏：

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

使用 [`items`](api/config/toolbar_items_config.md) 属性显示、隐藏或自定义工具栏控件。以下代码片段设置了自定义搜索栏、撤销和重做控件、自定义排序控件以及列和行控件：

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
        "undo", // 撤销历史记录中的卡片操作
        "redo", // 重做历史记录中的卡片操作
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
从 `items` 数组中移除某控件即可将其隐藏。
:::

## 示例

以下代码片段配置了 Kanban 的卡片、编辑器和工具栏：

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
