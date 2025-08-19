---
sidebar_label: editorShape
title: editorShape 配置
description: 探索 DHTMLX JavaScript 看板库中 editorShape 的配置。查找开发者指南、API 参考、代码示例、在线演示，并获取 DHTMLX Kanban 免费 30 天试用。
---

# editorShape

### 描述

@short: 可选。一个对象数组，用于定义控制看板编辑器外观和行为的设置。

### 用法

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // 所有类型的通用参数
        type: string,
        key: string,
        label?: string,

        // 仅适用于 "dateRange" 类型
        key: {
            start: string,
            end: string
        },
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            done?: boolean,
            error?: boolean,
            format?: string,
            months?: number,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // 仅适用于 "date" 类型
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            error?: boolean,
            format?: string,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // 仅适用于 "color" 类型
        values?: array,
        config?: {
            clear?: boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string
        },

        // 仅适用于 "combo"、"select" 和 "multiselect" 类型
        values?: [
            {
                id: string | number,
                label: string,
                avatar?: string // 仅适用于 "multiselect" 类型
            },
            {...} // 其他选项
        ],
        config?: {
            clearButton?: boolean, // 仅适用于 "combo" 类型
            label?: string, // 仅适用于 "select" 类型
            checkboxes?: boolean, // 仅适用于 "multiselect" 类型
            // 通用参数
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            textField?: string,
            title?: string
        },

        // 仅适用于 "text" 类型
        config?: {
            css?: string,
            disabled?: boolean,
            error?: boolean,
            focus?: boolean,
            icon?: string,
            inputStyle?: string,
            placeholder?: string,
            readonly?: boolean,
            select?: boolean,
            title?: string,
            type?: string
        },

        // 仅适用于 "textarea" 类型
        config? {
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string,
            readonly?: boolean
        },

        // 仅适用于 "progress" 类型
        config?: {
            disabled?: boolean,
            label?: string,
            max?: number,
            min?: number,
            step?: number,
            title?: string,
            width?: number
        },

        // 仅适用于 "files" 类型
        uploadURL?: string | function,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean,
        },

        // 仅适用于 "comments" 类型
        config?: {
            format?: string,
            placement?: "page" | "editor",
            html?: boolean,
            confirmDeletion?: boolean
        },

        // 仅适用于 "links" 类型
        config?: {
            confirmDeletion?: boolean
        },
    }, { /* 其他控件设置 */ }
];
~~~

### 参数

编辑器的外观和功能可通过设置以下参数（字段）进行自定义:

#### - 所有类型的通用参数

- `type` - （必需）指定编辑器字段的类型。

:::important
看板编辑器支持的字段类型有:**dateRange**、**date**、**combo**、**select**、**multiselect**、**color**、**text**、**textarea**、**progress**、**files**、**comments** 和 **links**。
:::

- `key` - （必需）编辑器字段的键。此键应与 [`cardShape`](../js_kanban_cardshape_config) 属性中设置的值相匹配。示例:

~~~js {8,17}
    // 卡片外观设置
    const cardShape = {
        ...kanban.defaultCardShape,
        headerFields: [
            { // 自定义字段
                label: "Custom field",
                css: "custom_style",
                key: "custom_key"
            }
        ]
    };
    // 编辑器外观设置
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - （可选）编辑器字段的标签。

#### - "dateRange" 类型参数

- `key` - （必需）包含编辑器字段键的对象:
    - `start` - （必需）起始日期键
    - `end` - （必需）结束日期键

:::important
这些键对应于 [`cardShape`](../js_kanban_cardshape_config) 属性中使用的键。
:::

- `config` - （可选）**"dateRange"** 字段的配置对象，包含以下选项:
    - `align` - （可选）设置日历弹出相对于日期范围控件的位置对齐
    - `editable` - （可选）控制日期选择器是否可编辑；也可定义日期编辑的自定义格式
    - `buttons` - （可选）切换日历弹出下方的"今天"和"清除"按钮的可见性
    - `css` - （可选）调整日期范围控件中图标的位置
    - `disabled` - （可选）禁用日期范围控件
    - `done` - （可选）切换日期范围控件中"完成"按钮的可见性
    - `error` - （可选）为日期范围控件应用错误样式
    - `format` - （可选）设置日期范围控件的日期格式。可参考[此处](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - （可选）定义日期范围控件中显示的日历数量
    - `placeholder` - （可选）设置日期范围控件的占位符文本
    - `title` - （可选）为日期范围控件添加工具提示或标题
    - `width` - （可选）调整日历弹出宽度

#### - "date" 类型参数

- `config` - （可选）**"date"** 字段的配置对象，包含以下选项:
    - `align` - （可选）控制日历弹出相对于日期控件的位置对齐
    - `editable` - （可选）切换日期选择器是否可编辑；可指定自定义格式
    - `buttons` - （可选）显示或隐藏日历弹出中的"今天"和"清除"按钮
    - `css` - （可选）更改日期控件中图标的位置
    - `disabled` - （可选）禁用日期控件
    - `error` - （可选）为日期控件应用错误样式
    - `format` - （可选）设置日期控件的日期格式。参考[此处](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - （可选）设置日期控件的占位符文本
    - `title` - （可选）为日期控件添加工具提示或标题
    - `width` - （可选）设置日历弹出宽度

#### - "color" 类型参数

- `values` - （可选）有效的 HEX 颜色代码数组
- `config` - （可选）**"color"** 字段的配置对象，包含:
    - `placeholder` - （可选）颜色控件的占位符
    - `clear` - （可选）切换清除图标的显示
    - `disabled` - （可选）禁用颜色控件
    - `error` - （可选）应用错误样式
    - `title` - （可选）为颜色控件添加工具提示或标题

#### - "combo"、"select" 和 "multiselect" 类型参数

- `values` - （可选）表示下拉选项的对象数组，包含:
    - `id` - （必需）选项 ID
    - `label` - （必需）选项标签
    - `avatar` - （可选）图像路径（仅适用于 **"multiselect"**）

:::important
分配单个用户请使用 ***"select"*** 或 ***"combo"*** 类型，选择多个用户请使用 ***"multiselect"***。
:::

- `config` - （可选）这些类型的配置对象，包括:
    - `clearButton` - （可选）在 combo 输入框中添加清除按钮（仅限 **"combo"**）
    - `label` - （可选）通过此键绑定 select 选项（仅限 **"select"**）
    - `checkboxes` - （可选）切换选项旁的复选框（仅限 **"multiselect"**）
    - `textField` - （可选）通过此键绑定 combo 和 multiselect 选项的文本显示

    - `disabled` - （可选）禁用控件
    - `error` - （可选）应用错误样式
    - `placeholder` - （可选）设置占位符文本
    - `title` - （可选）添加工具提示或标题

#### - "text" 类型参数

- `config` - （可选）**"text"** 字段的配置对象，包含:
    - `css` - （可选）设置文本控件内图标的位置
    - `disabled` - （可选）禁用文本控件
    - `error` - （可选）应用错误样式
    - `focus` - （可选）设置文本控件聚焦
    - `icon` - （可选）在文本控件内添加图标
    - `inputStyle` - （可选）应用自定义样式
    - `placeholder` - （可选）设置占位符文本
    - `readonly` - （可选）使文本控件只读
    - `select` - （可选）选中文本控件内容
    - `title` - （可选）添加工具提示或标题
    - `type` - （可选）定义输入类型

#### - "textarea" 类型参数

- `config` - （可选）**"textarea"** 字段的配置对象，包括:
    - `disabled` - （可选）禁用多行文本控件
    - `error` - （可选）应用错误样式
    - `placeholder` - （可选）设置占位符文本
    - `title` - （可选）添加工具提示或标题
    - `readonly` - （可选）使多行文本只读

#### - "progress" 类型参数

- `config` - （可选）**"progress"** 字段的配置对象，包含:
    - `disabled` - （可选）禁用进度控件
    - `label` - （可选）控件上方显示的标签
    - `max` - （可选）最大允许值
    - `min` - （可选）最小允许值
    - `step` - （可选）步进值
    - `title` - （可选）工具提示或标题
    - `width` - （可选）进度控件宽度

#### - "files" 类型参数

- `uploadURL` - （可选）编辑器上传 URL，详见下文

<details>

`uploadURL` 可设置为 **字符串** 或 **函数**。以下是使用函数的示例:

~~~jsx {}
uploadURL: rec => {
    const formData = new FormData();
    formData.append("upload", rec.file);

    const config = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + token  // 这里可以传入 token 或其他请求头
        }
    };

    return fetch(url + "/uploads", config) // 这里填入 URL
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
~~~

`rec` 参数是扩展的 `PointerEvent` 对象，包含额外属性:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // 分别表示“尚未发送”、“发送成功”或“错误”
    name: string; // 文件名
    file: string | Blob; // 文件本体
}
~~~

</details>

- `config` - （可选）**"files"** 字段的配置对象，包含:
    - `accept` - （可选）允许的文件类型（例如 ***"image/*", "video/*", "audio/*"***）
    - `disabled` - （可选）启用或禁用文件上传
    - `multiple` - （可选）启用或禁用多文件上传
    - `folder` - （可选）启用或禁用文件夹上传

#### - "comments" 类型参数

- `config` - （可选）**"comments"** 字段的配置对象，包括:
    - `format` - （可选）评论的日期格式。选项见[此处](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - （可选）评论显示位置:
        - `"editor"` - 在编辑器内
        - `"page"` - 在单独面板中
    - `html` - （可选）启用或禁用评论中的 HTML 标记
    - `confirmDeletion` - （可选）删除评论时是否显示确认对话框

#### - "links" 类型参数

- `config` - （可选）**"links"** 字段的配置对象，包含:
    - `confirmDeletion` - （可选）删除链接时是否显示确认对话框

:::info
如果未设置 `editorShape` 属性，控件默认使用 **defaultEditorShape** 参数。
:::

### 默认配置

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "高" },
    { id: 2, color: "#F1B941", label: "中" },
    { id: 3, color: "#77D257", label: "低" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "标签"
    },
    {
        key: "description",
        type: "textarea",
        label: "描述"
    },
    {
        type: "combo",
        label: "优先级",
        key: "priority",
        config: {
            clearButton: true
        }
    },
    {
        type: "color",
        label: "颜色",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "进度"
    },
    {
        type: "date",
        key: "start_date",
        label: "开始日期"
    },
    {
        type: "date",
        key: "end_date",
        label: "结束日期"
    },
    {
        type: "multiselect",
        key: "users",
        label: "用户"
    }
];
~~~

### 示例

~~~jsx {6-33,38}
const users = [ // 用户数据
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const editorShape = [ // 编辑器设置
    ...kanban.defaultEditorShape, // 包含默认设置
    { // 添加自定义字段
        type: "multiselect",
        key: "users",
        label: "用户",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "评论",
        config: {
            format: "%M %d",
            placement: "page",
            html: true,
            confirmDeletion: true
        }
    },
    {
        type: "links",
        key:"links",
        label: "链接",
        config: {
            confirmDeletion: true
        }
    }
];

new kanban.Kanban("#root", {
    cards,
    columns,
    editorShape,
    // 其他参数
});
~~~

**更新日志:**

- 在 v1.3 中新增了 ***dateRange*** 类型
- 在 v1.4 中新增了 ***comments*** 和 ***links*** 编辑器类型，以及 ***format*** 参数

**相关文章:** [配置](/guides/configuration#编辑器)
