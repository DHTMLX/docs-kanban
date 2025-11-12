---
sidebar_label: editorShape
title: editorShape Config
description: Find out how to configure editorShape in the DHTMLX JavaScript Kanban library. Explore developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# editorShape

### Description

@short: Optional. This is an array of objects that lets you control how the Kanban editor looks and works.

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

These are the parameters you can use to set up the editor's look and behavior:

#### - Common parameters for all types

- `type` - (required) specifies the editor field type.

:::important
The editor supports these field types: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments**, and **links**.
:::

- `key` - (required) the editor field key. This should match the value used in the [`cardShape`](api/config/js_kanban_cardshape_config.md) property. Here's an example:

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

- `label` - (optional) the label for the editor field.

#### - Parameters for a "dateRange" type

- `key` - (required) an object defining keys for the editor field:
    - `start` - (required) the key for the start date
    - `end` - (required) the key for the end date

:::important
These keys should match those used in the [`cardShape`](api/config/js_kanban_cardshape_config.md) property.
:::

- `config` - (optional) configuration options for the **"dateRange"** field:
    - `align` - (optional) controls how the calendar popup aligns relative to the Date Range control
    - `editable` - (optional) controls if the date picker can be edited and optionally sets a custom date format
    - `buttons` - (optional) toggles visibility of Today and Clear buttons in the calendar popup
    - `css` - (optional) adjusts the icon position in the Date Range control
    - `disabled` - (optional) disables the Date Range control when true
    - `done` - (optional) shows or hides the Done button
    - `error` - (optional) applies error styling if true
    - `format` - (optional) sets the date format; see [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/) for available formats
    - `months` - (optional) sets how many calendars appear in the Date Range control
    - `placeholder` - (optional) placeholder text for the control
    - `title` - (optional) a title with extra info for the control
    - `width` - (optional) width of the calendar popup

#### - Parameters for a "date" type

- `config` - (optional) configuration options for the **"date"** field:
    - `align` - (optional) controls popup alignment relative to the Date control
    - `editable` - (optional) controls editability and custom date format
    - `buttons` - (optional) toggles Today and Clear buttons in the popup
    - `css` - (optional) changes icon position
    - `disabled` - (optional) disables the control
    - `error` - (optional) applies error styling
    - `format` - (optional) sets date format, with options listed [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (optional) placeholder text
    - `title` - (optional) additional info title
    - `width` - (optional) popup width

#### - Parameters for a "color" type

- `values` - (optional) an array of valid HEX color codes
- `config` - (optional) configuration options for the **"color"** field:
    - `placeholder` - (optional) placeholder text
    - `clear` - (optional) shows or hides a clear icon
    - `disabled` - (optional) disables the control
    - `error` - (optional) applies error styling
    - `title` - (optional) extra info title

#### - Parameters for "combo", "select" and "multiselect" types

- `values` - (optional) an array of option objects, each with:
    - `id` - (required) option ID
    - `label` - (required) option label
    - `avatar` - (optional) path to an image (only for **"multiselect"**)

:::important
To assign a single user, use ***"select"*** or ***"combo"*** types. To assign multiple users, use ***"multiselect"***.
:::

- `config` - (optional) configuration options for these types:
    - `clear` - (optional) adds a Clear button (**only for "combo" and "color"**)
    - `label` - (optional) binds options to the input field by this key (**only for "select"**)
    - `checkboxes` - (optional) shows checkboxes next to options (**only for "multiselect"**)
    - `textField` - (optional) binds combo options to input by this key (**for "combo" and "multiselect"**)
    - `disabled` - (optional) disables the control
    - `error` - (optional) applies error styling
    - `placeholder` - (optional) placeholder text
    - `title` - (optional) extra info title

#### - Parameters for a "text" type

- `config` - (optional) configuration options for the **"text"** field:
    - `css` - (optional) icon position in the control
    - `disabled` - (optional) disables the control
    - `error` - (optional) applies error styling
    - `focus` - (optional) sets focus on the control
    - `icon` - (optional) adds an icon inside the control
    - `inputStyle` - (optional) custom style for the control
    - `placeholder` - (optional) placeholder text
    - `readonly` - (optional) makes the control read-only
    - `select` - (optional) selects the control's content
    - `title` - (optional) extra info title
    - `type` - (optional) sets the input type

#### - Parameters for a "textarea" type

- `config` - (optional) configuration options for the **"textarea"** field:
    - `disabled` - (optional) disables the control
    - `error` - (optional) applies error styling
    - `placeholder` - (optional) placeholder text
    - `title` - (optional) extra info title
    - `readonly` - (optional) makes the control read-only

#### - Parameters for a "progress" type

- `config` - (optional) configuration options for the **"progress"** field:
    - `disabled` - (optional) disables the control
    - `label` - (optional) label displayed above the control
    - `max` - (optional) maximum value
    - `min` - (optional) minimum value
    - `step` - (optional) value increments
    - `title` - (optional) extra info title
    - `width` - (optional) control width

#### - Parameters for a "files" type

- `uploadURL` - (optional) URL or function for file uploading; details below

<details>

The `uploadURL` can be a **string** or a **function**. Here’s an example using a function:

~~~jsx {}
uploadURL: rec => {
    const formData = new FormData();
    formData.append("upload", rec.file);

    const config = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + token  // include token or other headers here
        }
    };

    return fetch(url + "/uploads", config) // specify URL here
        .then(res => res.json())
        .then(
            data => {
                return { id: rec.id, ...data };
            },
            () => ({ id: rec.id, status: "error" })
        )
        .catch();
}
~~~

The `rec` parameter is an extended `PointerEvent` object with these extra properties:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // indicates upload status: "not sent yet", "sent successfully", or "error"
    name: string; // file name
    file: string | Blob; // the file itself
}
~~~

</details>

- `config` - (optional) configuration options for the **"files"** field:
    - `accept` - (optional) file types allowed (e.g., ***"image/\*", "video/\*", "audio/\*"*** and others)
    - `disabled` - (optional) disables uploading
    - `multiple` - (optional) enables uploading multiple files at once
    - `folder` - (optional) enables uploading folders

#### - Parameters for a "comments" type

- `config` - (optional) configuration options for the **"comments"** field:
    - `format` - (optional) date format for comments; see available options [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (optional) where comments appear:
        - `"editor"` — inside the editor
        - `"page"` — in a separate panel
    - `html` - (optional) allows HTML markup in comments
    - `confirmDeletion` - (optional) shows a confirmation dialog before deleting comments

#### - Parameters for a "links" type

- `config` - (optional) configuration options for the **"links"** field:
    - `confirmDeletion` - (optional) shows a confirmation dialog before deleting links

:::info
If you don’t set editor options via the `editorShape` property, the widget will use the **defaultEditorShape** settings.
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

- The ***dateRange*** type was introduced in v1.3
- The ***comments*** and ***links*** editor types, along with the ***format*** parameter, were added in v1.4
- The ***clearButton*** parameter was renamed to ***clear***

**Related articles:** [Configuration](guides/configuration.md/#editor)