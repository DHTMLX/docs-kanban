---
sidebar_label: editorShape
title: editorShape Config
description: Explore the editorShape configuration in the DHTMLX JavaScript Kanban library documentation. Find developer guides, API references, code examples, live demos, and get a free 30-day trial of DHTMLX Kanban.
---

# editorShape

### Description

@short: Optional. An array of objects that define the settings for controlling the look and behavior of the Kanban editor.

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
            clearButton?: boolean, // for a "combo" type only
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

The editor appearance and features can be customized by setting the following parameters (fields):

#### - Common parameters for all types

- `type` - (required) specifies the editor field type.

:::important
Supported field types in the Kanban editor are: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments**, and **links**.
:::

- `key` - (required) the key for the editor field. This should match the value set in the [`cardShape`](/api/config/js_kanban_cardshape_config) property. Example:

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

- `label` - (optional) label for the editor field.

#### - Parameters for a "dateRange" type

- `key` - (required) an object containing the keys for the editor field:
    - `start` - (required) key for the start date
    - `end` - (required) key for the end date

:::important
These keys correspond to those used in the [`cardShape`](/api/config/js_kanban_cardshape_config) property.
:::

- `config` - (optional) configuration object for the **"dateRange"** field with the following options:
    - `align` - (optional) sets alignment of the calendar popup relative to the Date Range control
    - `editable` - (optional) controls if the date picker is editable; can also define a custom format for date editing
    - `buttons` - (optional) toggles visibility of Today and Clear buttons below the calendar popup
    - `css` - (optional) adjusts the icon's position in the Date Range control
    - `disabled` - (optional) disables the Date Range control
    - `done` - (optional) toggles visibility of the Done button in the Date Range control
    - `error` - (optional) applies error styling to the Date Range control
    - `format` - (optional) sets the date format for the Date Range control. See available options [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - (optional) defines how many calendars appear in the Date Range control
    - `placeholder` - (optional) sets placeholder text for the Date Range control
    - `title` - (optional) adds a tooltip or title for the Date Range control
    - `width` - (optional) adjusts the calendar popup width

#### - Parameters for a "date" type

- `config` - (optional) configuration object for the **"date"** field with these options:
    - `align` - (optional) controls calendar popup alignment relative to the Date control
    - `editable` - (optional) toggles date picker editability; can specify custom format
    - `buttons` - (optional) shows or hides Today and Clear buttons in the calendar popup
    - `css` - (optional) changes icon positioning in the Date control
    - `disabled` - (optional) disables the Date control
    - `error` - (optional) applies error styling to the Date control
    - `format` - (optional) sets the date format for the Date control. Reference [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (optional) sets placeholder text for the Date control
    - `title` - (optional) adds a tooltip or title for the Date control
    - `width` - (optional) sets the width of the calendar popup

#### - Parameters for a "color" type

- `values` - (optional) array of valid HEX color codes
- `config` - (optional) configuration object for the **"color"** field with:
    - `placeholder` - (optional) placeholder for the Color control
    - `clear` - (optional) toggles visibility of a clear icon
    - `disabled` - (optional) disables the Color control
    - `error` - (optional) applies error styling
    - `title` - (optional) adds tooltip or title related to the Color control

#### - Parameters for "combo", "select" and "multiselect" types

- `values` - (optional) array of objects representing dropdown options, with:
    - `id` - (required) option ID
    - `label` - (required) option label
    - `avatar` - (optional) path to an image (for **"multiselect"** only)

:::important
Use ***"select"*** or ***"combo"*** types for assigning a single user, and ***"multiselect"*** for selecting multiple users.
:::

- `config` - (optional) configuration object for these types, including:
    - `clearButton` - (optional) adds Clear button in combo input (**"combo"** only)
    - `label` - (optional) binds options to input by this key (**"select"** only)
    - `checkboxes` - (optional) toggles checkboxes next to options (**"multiselect"** only)
    - `textField` - (optional) binds combo options to input by this key (**"combo"** and **"multiselect"** only)

    - `disabled` - (optional) disables the control
    - `error` - (optional) applies error styling
    - `placeholder` - (optional) sets placeholder text
    - `title` - (optional) adds tooltip or title

#### - Parameters for a "text" type

- `config` - (optional) configuration object for the **"text"** field with:
    - `css` - (optional) sets icon position inside the Text control
    - `disabled` - (optional) disables the Text control
    - `error` - (optional) applies error styling
    - `focus` - (optional) sets focus inside the Text control
    - `icon` - (optional) adds an icon inside the Text control
    - `inputStyle` - (optional) applies custom styling
    - `placeholder` - (optional) sets placeholder text
    - `readonly` - (optional) makes the Text control read-only
    - `select` - (optional) selects the Text control content
    - `title` - (optional) adds tooltip or title
    - `type` - (optional) defines the input type

#### - Parameters for a "textarea" type

- `config` - (optional) configuration object for the **"textarea"** field including:
    - `disabled` - (optional) disables the Textarea control
    - `error` - (optional) applies error styling
    - `placeholder` - (optional) sets placeholder text
    - `title` - (optional) adds tooltip or title
    - `readonly` - (optional) makes Textarea read-only

#### - Parameters for a "progress" type

- `config` - (optional) configuration object for the **"progress"** field with:
    - `disabled` - (optional) disables the Progress control
    - `label` - (optional) label displayed above the control
    - `max` - (optional) maximum allowed value
    - `min` - (optional) minimum allowed value
    - `step` - (optional) step increments
    - `title` - (optional) tooltip or title
    - `width` - (optional) width of the Progress control

#### - Parameters for a "files" type

- `uploadURL` - (optional) editor uploader URL, detailed below

<details>

The `uploadURL` can be set as a **string** or **function**. Here's an example using a function:

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

The `rec` parameter is an extended `PointerEvent` object, with extra properties:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // means "not sent yet", "sent successfully", or "error"
    name: string; // file name
    file: string | Blob; // the file itself
}
~~~

</details>

- `config` - (optional) configuration object for the **"files"** field with:
    - `accept` - (optional) accepted file types (e.g., ***"image/*", "video/*", "audio/*"***)
    - `disabled` - (optional) enables or disables file uploading
    - `multiple` - (optional) enables or disables multiple file uploads
    - `folder` - (optional) enables or disables folder uploads

#### - Parameters for a "comments" type

- `config` - (optional) configuration object for the **"comments"** field including:
    - `format` - (optional) date format for comments. See options [here](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (optional) where comments appear:
        - `"editor"` - inside the editor
        - `"page"` - in a separate panel
    - `html` - (optional) enables or disables HTML markup in comments
    - `confirmDeletion` - (optional) shows or hides a confirmation dialog when deleting comments

#### - Parameters for a "links" type

- `config` - (optional) configuration object for the **"links"** field with:
    - `confirmDeletion` - (optional) shows or hides a confirmation dialog when deleting links

:::info
If the `editorShape` property is not set, the widget uses the **defaultEditorShape** parameters by default.
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
            clearButton: true
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

- Added the ***dateRange*** type in v1.3
- Added the ***comments*** and ***links*** editor types, along with ***format*** parameters in v1.4

**Related articles:** [Configuration](/guides/configuration/#editor)
