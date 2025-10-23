---
sidebar_label: editorShape
title: editorShape 配置
description: 您可以在 DHTMLX JavaScript 看板库的文档中了解 editorShape 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天评估版本。
---

# editorShape

### 描述

@short: 可选。一个包含对象的数组，用于管理看板编辑器的外观和功能设置

### 用法

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // 所有类型的通用参数
        type: string, 
        key: string, 
        label?: string, 
        
        // 仅针对 "dateRange" 类型
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

        // 仅针对 "date" 类型
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

        // 仅针对 "color" 类型 
        values?: array, 
        config?: {
            clear?: boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string
        },

        // 仅针对 "combo"、"select" 和 "multiselect" 类型
        values?: [ 
            {
                id: string | number,
                label: string,
                avatar?: string // 仅针对 "multiselect" 类型
            },
            {...} // 其他选项
        ],
        config?: {
            clear?: boolean, // 仅针对 "combo" 和 "color" 类型
            label?: string, // 仅针对 "select" 类型
            checkboxes?: boolean, // 仅针对 "multiselect" 类型 
            // 通用参数
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            textField?: string,
            title?: string
        },

        // 仅针对 "text" 类型
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

        // 仅针对 "textarea" 类型 
        config? {
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string,
            readonly?: boolean
        },

        // 仅针对 "progress" 类型 
        config?: {
            disabled?: boolean,
            label?: string,
            max?: number,
            min?: number,
            step?: number,
            title?: string,
            width?: number
        },
        
        // 仅针对 "files" 类型 
        uploadURL?: string | function,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean,
        },

        // 仅针对 "comments" 类型 
        config?: {
            format?: string,
            placement?: "page" | "editor",
            html?: boolean,
            confirmDeletion?: boolean
        },

        // 仅针对 "links" 类型 
        config?: {
            confirmDeletion?: boolean
        },
    }, { /* 其他控件设置 */ }
];
~~~

### 参数

要配置编辑器的外观和功能，可以指定以下参数（字段）：

#### - 所有类型的通用参数

- `type` - （必填）编辑器字段类型

:::important
在看板编辑器中，您可以使用以下字段类型：**dateRange**、**date**、**combo**、**select**、**multiselect**、**color**、**text**、**textarea**、**progress**、**files**、**comments** 和 **links**
:::

- `key` - （必填）编辑器字段的键。这里需要使用 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性中指定的值。示例如下：

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

- `label` - （可选）编辑器字段标签

#### - "dateRange" 类型的参数

- `key` - （必填）编辑器字段键的对象。可以指定以下参数：
    - `start` - （必填）开始日期键
    - `end` - （必填）结束日期键

:::important
这些键的值用于 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性中！
:::

- `config` - （可选）**"dateRange"** 字段的配置对象。可以指定以下参数：
    - `align` - （可选）弹出日历相对于日期范围控件的对齐方式
    - `editable` - （可选）定义日期选择器是否可编辑，并可选设置自定义日期编辑格式
    - `buttons` - （可选）显示/隐藏弹出日历底部的“今天”和“清除”按钮
    - `css` - （可选）更改日期范围控件中图标的位置
    - `disabled` - （可选）定义日期范围控件是否禁用
    - `done` - （可选）显示/隐藏日期范围控件中的“完成”按钮
    - `error` - （可选）定义是否对日期范围控件应用错误样式
    - `format` - （可选）设置日期范围控件的日期格式。可用参数请参见[这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - （可选）设置日期范围控件中显示的日历数量
    - `placeholder` - （可选）设置日期范围控件的占位符
    - `title` - （可选）设置日期范围控件的附加信息标题
    - `width` - （可选）设置弹出日历的宽度

#### - "date" 类型的参数

- `config` - （可选）**"date"** 字段的配置对象。可以指定以下参数：
    - `align` - （可选）弹出日历相对于日期控件的对齐方式
    - `editable` - （可选）定义日期选择器是否可编辑，并可选设置自定义日期编辑格式
    - `buttons` - （可选）显示/隐藏弹出日历底部的“今天”和“清除”按钮
    - `css` - （可选）更改日期控件中图标的位置
    - `disabled` - （可选）定义日期控件是否禁用
    - `error` - （可选）定义是否对日期控件应用错误样式
    - `format` - （可选）设置日期控件的日期格式。可用参数请参见[这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - （可选）设置日期控件的占位符
    - `title` - （可选）设置日期控件的附加信息标题
    - `width` - （可选）设置弹出日历的宽度

#### - "color" 类型的参数

- `values` - （可选）有效 HEX 颜色代码数组
- `config` - （可选）**"color"** 字段的配置对象。可以指定以下参数：
    - `placeholder` - （可选）设置颜色控件的占位符
    - `clear` - （可选）显示/隐藏颜色控件的“清除”图标
    - `disabled` - （可选）定义颜色控件是否禁用
    - `error` - （可选）定义是否对颜色控件应用错误样式
    - `title` - （可选）设置颜色控件的附加信息标题

#### - "combo"、"select" 和 "multiselect" 类型的参数

- `values` - （可选）包含下拉选项数据的对象数组。可以指定以下参数：
    - `id` - （必填）选项 ID
    - `label` - （必填）选项标签
    - `avatar` - （可选）选项预览图片路径（仅限 "multiselect" 类型）

:::important
要设置用于分配单个用户的控件，需使用 ***"select"*** 或 ***"combo"*** 类型！若分配多个用户，使用 ***"multiselect"*** 类型。
:::

- `config` - （可选）**"combo"**、**"select"** 和 **"multiselect"** 字段的配置对象。可以指定以下参数：
    - `clear` - （可选）在组合输入框中添加清除按钮（仅限 "combo" 和 "color" 类型）
    - `label` - （可选）通过指定键绑定选项到输入字段（仅限 "select" 类型）
    - `checkboxes` - （可选）定义选项旁是否显示复选框（仅限 "multiselect" 类型）
    - `textField` - （可选）通过指定键绑定组合选项到输入字段（仅限 "combo" 和 "multiselect" 类型）

    - `disabled` - （可选）定义控件是否禁用
    - `error` - （可选）定义是否对控件应用错误样式
    - `placeholder` - （可选）设置控件的占位符
    - `title` - （可选）设置控件的附加信息标题

#### - "text" 类型的参数

- `config` - （可选）**"text"** 字段的配置对象。可以指定以下参数：
    - `css` - （可选）设置文本控件中图标的位置
    - `disabled` - （可选）定义文本控件是否禁用
    - `error` - （可选）定义是否对文本控件应用错误样式
    - `focus` - （可选）设置文本控件是否自动获得焦点
    - `icon` - （可选）向文本控件添加图标
    - `inputStyle` - （可选）为文本控件应用自定义样式
    - `placeholder` - （可选）设置文本控件的占位符
    - `readonly` - （可选）定义文本控件是否为只读
    - `select` - （可选）选择文本控件中的内容
    - `title` - （可选）设置文本控件的附加信息标题
    - `type` - （可选）设置文本控件的类型

#### - "textarea" 类型的参数

- `config` - （可选）**"textarea"** 字段的配置对象。可以指定以下参数：
    - `disabled` - （可选）定义文本区域控件是否禁用
    - `error` - （可选）定义是否对文本区域控件应用错误样式
    - `placeholder` - （可选）设置文本区域控件的占位符
    - `title` - （可选）设置文本区域控件的附加信息标题
    - `readonly` - （可选）定义文本区域控件是否为只读

#### - "progress" 类型的参数

- `config` - （可选）**"progress"** 字段的配置对象。可以指定以下参数：
    - `disabled` - （可选）定义进度控件是否禁用
    - `label` - （可选）设置进度控件上方的标签
    - `max` - （可选）设置进度控件的最大值
    - `min` - （可选）设置进度控件的最小值
    - `step` - （可选）设置进度控件的步进值
    - `title` - （可选）设置进度控件的附加信息标题
    - `width` - （可选）设置进度控件的宽度

#### - "files" 类型的参数

- `uploadURL` - （可选）编辑器上传接口的 URL。详情如下：

<details>

`uploadURL` 属性可以是 **字符串** 或 **函数**。以下示例展示了如何通过函数设置上传 URL：

~~~jsx {}
uploadURL: rec => {
    const formData = new FormData();
    formData.append("upload", rec.file);

    const config = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + token  // 这里可以添加 token 或其他请求头
        }
    };

    return fetch(url + "/uploads", config) // 这里填写 URL
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

其中 `rec` 是函数的唯一参数，是一个扩展的 `PointerEvent` 对象（原生类型加上以下 4 个属性）：

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // 分别表示“尚未发送”、“发送成功”、“发送失败”
    name: string; // 文件名
    file: string | Blob; // 文件对象
}
~~~

</details>

- `config` - （可选）**"files"** 字段的配置对象。可以指定以下参数：
    - `accept` - （可选）允许上传的文件类型（如 ***"image/*"***、***"video/*"***、***"audio/*"*** 等）
    - `disabled` - （可选）启用/禁用文件上传
    - `multiple` - （可选）启用/禁用多文件上传
    - `folder` - （可选）启用/禁用文件夹上传

#### - "comments" 类型的参数

- `config` - （可选）**"comments"** 字段的配置对象。可以指定以下参数：
    - `format` - （可选）评论的日期格式。可用格式参见[这里](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - （可选）评论显示的位置。可设置为：
        - `"editor"` - 评论显示在编辑器中
        - `"page"` - 评论显示在独立面板中
    - `html` - （可选）启用/禁用评论中的 HTML 标记
    - `confirmDeletion` - （可选）显示/隐藏删除评论的确认对话框，允许用户确认或取消删除操作

#### - "links" 类型的参数

- `config` - （可选）**"links"** 字段的配置对象。可以指定以下参数：
    - `confirmDeletion` - （可选）显示/隐藏删除链接的确认对话框，允许用户确认或取消删除操作

:::info
如果未通过 `editorShape` 属性指定编辑器设置，控件将使用一组 **defaultEditorShape** 默认参数！
:::

### 默认配置

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "Label"
    },
    {
        key: "description",
        type: "textarea",
        label: "Description"
    },
    {
        type: "combo",
        label: "Priority",
        key: "priority",
        config: {
            clear: true
        }
    },
    {
        type: "color",
        label: "Color",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "Progress"
    },
    {
        type: "date",
        key: "start_date",
        label: "Start date"
    },
    {
        type: "date",
        key: "end_date",
        label: "End date"
    },
    {
        type: "multiselect",
        key: "users",
        label: "Users"
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
        label: "Users",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "Comments",
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
        label: "Links",
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

**更新日志：**

- v1.3 版本新增了 ***dateRange*** 类型
- v1.4 版本新增了 ***comments*** 和 ***links*** 编辑器类型，以及 ***format*** 参数
- ***clearButton*** 参数被替换为 ***clear*** 参数

**相关文档：** [配置](guides/configuration.md/#editor)