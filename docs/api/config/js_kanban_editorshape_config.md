---
sidebar_label: editorShape
title: editorShape Config
description: You can learn about the editorShape config in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# editorShape

### Description

@short: Optional. An array of objects containing settings for managing the appearance and functionality of the Kanban editor

### Usage

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // common parameters for all types
        type: string, 
        key: string, 
        label?: string, 
        
        // for the "dateRange" type only
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

        // for the "date" type only
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

        // for the "color" type only 
        values?: array, 
        config?: {
            clear?: boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string
        },

        // for "combo", "select", and "multiselect" types only
        values?: [ 
            {
                id: string | number,
                label: string,
                avatar?: string // for a "multiselect" type only
            },
            {...} // other options
        ],
        config?: {
            clear?: boolean, // for "combo" and "color" types
            label?: string, // for a "select" type only
            checkboxes?: boolean, // for a "multiselect" type only 
            // common parameters
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            textField?: string,
            title?: string
        },

        // for a "text" type only
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

        // for a "textarea" type only 
        config? {
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string,
            readonly?: boolean
        },

        // for a "progress" type only 
        config?: {
            disabled?: boolean,
            label?: string,
            max?: number,
            min?: number,
            step?: number,
            title?: string,
            width?: number
        },
        
        // for a "files" type only 
        uploadURL?: string | function,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean,
        },

        // for a "comments" type only 
        config?: {
            format?: string,
            placement?: "page" | "editor",
            html?: boolean,
            confirmDeletion?: boolean
        },

        // for a "links" type only 
        config?: {
            confirmDeletion?: boolean
        },
    }, { /* other control settings */ }
];
~~~

### Parameters

To configure the editor appearance and functionality, you can specify the following parameters (fields):

#### - Common parameters for all types

- `type` - (required) an editor field type

:::important
In the Kanban editor you can use the following types of fields: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments** and **links**
:::

- `key` - (required) an editor field key. Here you need to use the value specified in the [`cardShape`](../js_kanban_cardshape_config) property. See the example below:

~~~js {8,17}
    // card appearance settings
    const cardShape = { 
        ...kanban.defaultCardShape,
        headerFields: [
            { // custom field
                label: "Custom field",
                css: "custom_style",
                key: "custom_key"
            }
        ]
    };
    // editor appearance settings
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (optional) an editor field label

#### - Parameters for a "dateRange" type

- `key` - (required) an object of keys of the editor field. Here you can specify the following parameters:
    - `start` - (required) a start date key
    - `end` - (required) an end date key

:::important
The values of these keys used in the [`cardShape`](../js_kanban_cardshape_config) property!
:::

- `config` - (optional) a configuration object of the **"dateRange"** field. Here you can specify the following parameters:
    - `align` - (optional) specifies the alignment of a popup with calendars relative to the Date Range control
    - `editable` - (optional) defines whether a date picker is editable and, optionally, sets a custom format for editing a date
    - `buttons` - (optional) shows/hides the Today and Clear buttons in the lower part of the popup with calendars
    - `css` - (optional) changes the position of the icon in the Date Range control
    - `disabled` - (optional) defines whether the Date Range control is disabled
    - `done` - (optional) shows/hides the Done button in the Date Range control
    - `error` - (optional) defines whether error styling is applied to the Date Range control
    - `format` - (optional) sets the date format of the Date Range control. The available parameters can be found [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - (optional) sets the number of calendars in the Date Range control
    - `placeholder` - (optional) sets a placeholder for the Data Range control
    - `title` - (optional) sets a title with additional info about the Data Range control
    - `width` - (optional) sets the width of a popup with calendars

#### - Parameters for a "date" type

- `config` - (optional) a configuration object of the **"date"** field. Here you can specify the following parameters:
    - `align` - (optional) specifies the alignment of a popup with calendars relative to the Date control
    - `editable` - (optional) defines whether a date picker is editable and, optionally, sets a custom format for editing a date
    - `buttons` - (optional) shows/hides the Today and Clear buttons in the lower part of the popup with calendars
    - `css` - (optional) changes the position of the icon in the Date control
    - `disabled` - (optional) defines whether the Date control is disabled
    - `error` - (optional) defines whether error styling is applied to the Date control
    - `format` - (optional) sets the date format of the Date control. The available parameters can be found [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (optional) sets a placeholder for the Data control
    - `title` - (optional) sets a title with additional info about the Data control
    - `width` - (optional) sets the width of a popup with calendars

#### - Parameters for a "color" type

- `values` - (optional) an array with valid HEX codes
- `config` - (optional) a configuration object of the **"color"** field. Here you can specify the following parameters:
    - `placeholder` - (optional) sets a placeholder for the Color control
    - `clear` - (optional) shows/hides a "clear" icon for the Color control
    - `disabled` - (optional) defines whether the Color control is disabled
    - `error` - (optional) defines whether error styling is applied to the Color control
    - `title` - (optional) sets a title with additional info related the Color control

#### - Parameters for "combo", "select" and "multiselect" types

- `values` - (optional) an array of objects containing the dropdown options data. Here you can specify the following parameters:
    - `id` - (required) an option **ID**
    - `label` - (required) an option label
    - `avatar` - (optional) a path to the option preview image (for a **"multiselect"** type only)

:::important
To set the control for assigning a single user, you need to use the ***"select"*** or ***"combo"*** types! For assigning several users, use the ***"multiselect"*** type.
:::

- `config` - (optional) a configuration object for **"combo"**, **"select"**, and **"multiselect"** fields. Here you can specify the following parameters:
    - `clear` - (optional) adds the Clear button into a combo input (**for "combo" and "color" types only**)
    - `label` - (optional) binds options to the input field by the specified key (**for a "select" type only**)
    - `checkboxes` - (optional) defines whether options have checkboxes next to them (**for a "multiselect" type only**)
    - `textField` - (optional) binds combo options to the input field by the specified key (**for "combo" and "multiselect" types only**)

    - `disabled` - (optional) defines whether the control is disabled
    - `error` - (optional) defines whether error styling is applied to the control
    - `placeholder` - (optional) sets a placeholder for the control
    - `title` - (optional) sets a title with additional info about the control

#### - Parameters for a "text" type

- `config` - (optional) a configuration object of the **"text"** field. Here you can specify the following parameters:
    - `css` - (optional) sets the position of the icon in the Text control
    - `disabled` - (optional) defines whether the Text control is disabled
    - `error` - (optional) defines whether error styling is applied to the Text control
    - `focus` - (optional) sets focus in the Text control
    - `icon` - (optional) adds an icon into the Text control
    - `inputStyle` - (optional) applies a custom style to the Text control
    - `placeholder` - (optional) sets a placeholder for the Text control
    - `readonly` - (optional) defines whether the Text control is read-only
    - `select` - (optional) selects the content of the Text control
    - `title` - (optional) sets a title with additional info related the Text control
    - `type` - (optional) sets the type of the Text control

#### - Parameters for a "textarea" type

- `config` - (optional) a configuration object of the **"textarea"** field. Here you can specify the following parameters:
    - `disabled` - (optional) defines whether the Textarea control is disabled
    - `error` - (optional) defines whether error styling is applied to the Textarea control
    - `placeholder` - (optional) sets a placeholder for the Textarea control
    - `title` - (optional) sets a title with additional info related the Text control
    - `readonly` - (optional) defines whether the Text control is read-only

#### - Parameters for a "progress" type

- `config` - (optional) a configuration object of the **"progress"** field. Here you can specify the following parameters:
    - `disabled` - (optional) defines whether the Progress control is disabled
    - `label` - (optional) sets a label above the Progress control
    - `max` - (optional) sets the maximal value of the Progress control
    - `min` - (optional) sets the minimal value of the Progress control
    - `step` - (optional) sets the jump between values of the Progress control
    - `title` - (optional) sets a title with additional info related the Progress control
    - `width` - (optional) sets the width of the Progress control

#### - Parameters for a "files" type

- `uploadURL` - (optional) an URL of the editor uploader. See the details below

<details>

The `uploadURL` property can be specified as **string** or **function**. The following example shows how to set upload URL via function:

~~~jsx {}
uploadURL: rec => {
    const formData = new FormData();
    formData.append("upload", rec.file);

    const config = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + token  // token or other headers here
        }
    };

    return fetch(url + "/uploads", config) // URL here
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

where `rec` is the only parameter of the function and is an extended `PointerEvent` object (native type plus 4 our properties):

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // which means in plain English "not sent yet", "sent successfully", "something went wrong, so not sent"
    name: string; // the name of the file
    file: string | Blob; // the file
}
~~~

</details>

- `config` - (optional) a configuration object of the **"files"** field. Here you can specify the following parameters:
    - `accept` - (optional) a file type to be uploaded (***"image/\*", "video/\*", "audio/\*"*** *and other*)
    - `disabled` - (optional) enables/disables uploading *files*
    - `multiple` - (optional) enables/disables uploading *multiple files*
    - `folder` - (optional) enables/disables uploading *folders*

#### - Parameters for a "comments" type

- `config` - (optional) a configuration object of the **"comments"** field. Here you can specify the following parameters:
    - `format` - (optional) - a date format of comments. The available formats can be found [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (optional) - a place where comments will be displayed. You can set this property to the following values:
        - `"editor"` - comments will be displayed in the editor
        - `"page"` - comments will be displayed in a separate panel
    - `html` - (optional) - enables/disables using of the HTML markup in comments
    - `confirmDeletion` - (optional) shows/hides the **confirmation dialog** that allows users to confirm or decline the comment deletion

#### - Parameters for a "links" type

- `config` - (optional) a configuration object of the **"links"** field. Here you can specify the following parameters:
    - `confirmDeletion` - (optional) shows/hides the **confirmation dialog** that allows users to confirm or decline the link deletion

:::info
Unless you specify the editor settings via the `editorShape` property, the widget will apply a **defaultEditorShape** set of parameters!
:::

### Default config

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

### Example

~~~jsx {6-33,38}
const users = [ // user data
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const editorShape = [ // editor settings
    ...kanban.defaultEditorShape, // include the default settings
    { // add custom fields
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
    // other parameters
});
~~~

**Change log:**

- The ***dateRange*** type was added in v1.3
- The ***comments*** and ***links*** types of editor, and ***format*** parameters were added in v1.4
- The ***clearButton*** parameter was replaced with the ***clear*** parameter

**Related articles:** [Configuration](guides/configuration.md/#editor)
