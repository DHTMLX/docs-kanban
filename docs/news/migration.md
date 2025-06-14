---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions
description: You can learn about the Migration to Newer Versions in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Migration to newer versions

## 1.5.13 -> 1.6.0

CSS classes related to the menu were changed in the following way:

~~~jsx
    .menu -> .wx-menu
    .item -> .wx-item
    .icon -> .wx-icon
    .value -> .wx-value
~~~

## 1.5.12 -> 1.5.13

CSS classes related to the editor were changed in the following way:

~~~jsx
    .modal -> .wx-modal
    .window -> .wx-window
    .modal .window .buttons -> .wx-modal .wx-window .wx-buttons
    .combo -> .wx-combo
    .combo -> .wx-multicombo
    .item -> .wx-item
    .color-picker -> .wx-colorselect
    .colors -> .wx-colors
    .slider -> .wx-slider
    .datepicker -> .wx-datepicker
    .calendar -> .wx-calendar
    .calendar .days .day.out -> .wx-calendar .wx-days .wx-day.wx-out
    .combo .tag -> .multicombo .wx-tag
    .dropdown -> .wx-dropdown
    .dropdown .item -> .wx-dropdown .wx-item
    .clear -> .wx-clear
~~~

## 1.5.6 -> 1.5.7

### Api

#### Methods

- The [`setLocale`](../../api/methods/toolbar_setlocale_method) method of the Kanban toolbar was updated in the following way:

~~~jsx {6} title="Before v1.5.7"
    // create Kanban
    const board = new kanban.Kanban("#root", {...});
    // create Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // apply the "de" locale to Toolbar
    toolbar.setLocale(de); // or null to reset the locale to the default one (en)
~~~

~~~jsx {6} title="From v1.5.7"
    // create Kanban
    const board = new kanban.Kanban("#root", {...});
    // create Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // apply the "de" locale to the Toolbar
    toolbar.setLocale(de, board.api); 
~~~

## 1.4 -> 1.5

### Api

#### Properties

- The [`columnShape`](../../api/config/js_kanban_columnshape_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.5"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Update", ...
                    }
                ]
                // other parameters
            }
        }
    ~~~

    ~~~jsx {11} title="From v1.5"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Update", ...
                    }
                ]
                // other parameters
            },
            fixedHeaders: true
        } 
    ~~~

## 1.3 -> 1.4

### Api

#### Properties

- The [`editorShape`](../../api/config/js_kanban_editorshape_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // other parameters
    ~~~

    ~~~jsx {5,7-21} title="From v1.4"
        {
            type: "date", // or you can also use the "dateRange" type
            key: "start_date",
            label: "Date Range"
            format: "%d/%m/%y"
        },
        {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                format: "%M %d",
                placement: "page", // or "editor"
                html: true,
            },
        },
        {
            type: "links",
            key: "links",
            label: "Links",
        },
        // other parameters
    ~~~

- The [`cardShape`](../../api/config/js_kanban_cardshape_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        {
            label: true,
            description: true,
            menu: {
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
            }
            // other parameters
        }
    ~~~

    ~~~jsx {7,11-13} title="From v1.4"
        {
            label: true,
            description: true,
            menu: {
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
            },
            votes: true,
            comments: true,
            css: (card) => card.type == "feature" ? "green" : "red",
            // other parameters
        } 
    ~~~

- The [`columnShape`](../../api/config/js_kanban_columnshape_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // other parameters
            }
        }
    ~~~

    ~~~jsx {6,11} title="From v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // other parameters
            },
            css: (column, cards) => column.id == "feature" && cards.length < 5 ? "green" : "red"
        } 
    ~~~

- The [`rowShape`](../../api/config/js_kanban_rowshape_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // other parameters
            }
        }
    ~~~

    ~~~jsx {6,11} title="From v1.4"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // other parameters
            },
            css: (row, cards) => row.id == "task" && cards.length < 5 ? "green" : "red",
        } 
    ~~~

- The [`cards`](../../api/config/js_kanban_cards_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                // other parameters
            }, ...
        ]
    ~~~

    ~~~jsx {6-18} title="From v1.4"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                css: "red",
                votes: [4,6,9],
                comments: [
                    {
                        id: 1,
                        userId: 9,
                        cardId: 6,
                        text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays.",
                        date: new Date(),
                    },{...}
                ]
                // other parameters
            }, ...
        ]
    ~~~

- The [`columns`](../../api/config/js_kanban_columns_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        [
            {
                id: "inprogress",
                label: "In progress",
                // other parameters
            }, ...
        ]
    ~~~

    ~~~jsx {5-11} title="From v1.4"
        [
            {
                id: "inprogress",
                label: "In progress",
                css: "red",
                overlay: template(`
                    <div class="blockOverlay disable-drop">
                        <span class="disable-drop-header">Drop is not allowed</span>
                        <span class="disable-drop-description">Only testers can move cards to this
                            column</span>
                    </div>`)
                // other parameters
            }, ...
        ]
    ~~~

- The [`rows`](../../api/config/js_kanban_rows_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        [
            {
                id: "features",
                label: "Features",
                // other parameters
            }, ...
        ]
    ~~~

    ~~~jsx {5} title="From v1.4"
        [
            {
                id: "features",
                label: "Features",
                css: "green"
                // other parameters
            }, ...
        ]
    ~~~

- The [`cardTemplate`](../../api/config/js_kanban_cardtemplate_config) property of Kanban was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
            if (selected) {
                return `
                    <div class="custom-card" style="padding:20px">
                        <div class="status-color" style="background:${cardFields.color}"></div>
                        Selected:${cardFields.label}
                    </div>
                `;
            }
        }

        new kanban.Kanban("#root", {
            cards,
            columns,
            cardTemplate
        });
    ~~~

    ~~~jsx {6-8} title="From v1.4"
        const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
            if (selected) {
                return `
                    <div class="custom-card" style="padding:20px">
                        <div class="status-color" style="background:${cardFields.color}"></div>
                        <div data-menu-id=${cardFields.id} >
                            <i class="wxi-dots-v"></i>
                        </div>
                        Selected:${cardFields.label}
                    </div>
                `;
            }
        }

        new kanban.Kanban("#root", {
            cards,
            columns,
            cardTemplate: kanban.template(card => cardTemplate(card)),
            // other parameters
        });
    ~~~

- The **sort** control in the [`items`](../../api/config/toolbar_items_config) property of Kanban Toolbar was updated in the following way:

    ~~~jsx {} title="Before v1.4"
        [
            { // custom sort control
                type: "sort",
                options: [
                    {
                        label: "Sort by label",
                        by: "label",
                        dir: "asc"
                    },
                    {
                        label: "Sort by description",
                        by: "description",
                        dir: "desc"
                    }
                ]
            },
        ]
    ~~~

    ~~~jsx {6,11} title="From v1.4"
        [
            { // custom sort control
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
        ]
    ~~~

#### Methods

- The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method of Kanban was updated:

~~~jsx {25-27} title="Before v1.4"
api.getState();
// the method returns an object with the following properties
/*{
    areasMeta: object, 
    before: string | number, 
    cardShape: object,
    cards: array,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    edit: object,
    editorShape: array,
    fromAreaMeta: object,
    overAreaId: string | number, 
    readonly: object,
    rowKey: string,
    rows: array,
    scroll: object,
    search: object,
    selected: array, 
    sort: object,
    dropAreaItemsCoords: array,
    dropAreasCoords: array, 
    overAreaMeta: object, 
}*/
~~~

~~~jsx {} title="From v1.4"
api.getState();
// the method returns an object with the following properties
/*{
    areasMeta: object, 
    before: string | number, 
    cardShape: object,
    cards: array,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    edit: object,
    editorShape: array,
    fromAreaMeta: object,
    overAreaId: string | number, 
    readonly: object,
    rowKey: string,
    rows: array,
    scroll: object,
    search: object,
    selected: array, 
    sort: object,
}*/
~~~

## 1.2 -> 1.3

### Api

#### Properties

- The [`editorShape`](../../api/config/js_kanban_editorshape_config) property of Kanban was updated in the following way:

    - the ***dateRange*** parameter

    ~~~jsx {} title="Before v1.3"
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // other parameters
    ~~~

    ~~~jsx {} title="From v1.3"
        {
            type: "dateRange", // or you can also use the "date" type
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range"
        },
        // other parameters
    ~~~

- The [`items`](../../api/config/toolbar_items_config) property of Toolbar was updated in the following way:

~~~jsx {} title="Before v1.3"
items: [
    "search",
    "spacer",
    "sort",
    "addColumn",
    "addRow"
]
~~~

~~~jsx {4-5} title="From v1.3"
items: [
    "search",
    "spacer",
    "undo",
    "redo",
    "sort",
    "addColumn",
    "addRow"
]
~~~

#### Methods

- The [`updateCard()`](../../api/methods/js_kanban_updatecard_method) method of Kanban was updated:

~~~jsx {} title="Before v1.3"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*other parameters*/
    }
});
~~~

~~~jsx {9} title="From v1.3"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*other parameters*/
    },
    replace: true
});
~~~

- The [`updateColumn()`](../../api/methods/js_kanban_updatecolumn_method) method of Kanban was updated:

~~~jsx {} title="Before v1.3"
updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    }
});
~~~

~~~jsx {9} title="From v1.3"
updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

- The [`updateRow()`](../../api/methods/js_kanban_updaterow_method) method of Kanban was updated:

~~~jsx {} title="Before v1.3"
updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
});
~~~

~~~jsx {7} title="From v1.3"
updateColumn({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
    replace: true
});
~~~

## 1.1 -> 1.2

### Api

#### Properties

- The [`cardShape`](../../api/config/js_kanban_cardshape_config) property of Kanban was updated in the following way:

    - the ***menu*** parameter

    ~~~jsx {} title="Before v1.2"
    menu: true,
    //or
    menu: { show: true }
    // other parameters
    ~~~

    ~~~jsx {5-14} title="From v1.2"
    menu: true,
    // or
    menu: { 
        show: true,
        items: ({ card, store }) => {
            if(card.id === 1){
                return false;
            } else {
                return [
                    { id: "set-edit", icon: "wxi-edit", label: "Edit" },
                    { id: "delete-card", icon: "wxi-delete", label: "Delete" }
                ];
            } 
        }
    },
    // other parameters
    ~~~

    - the ***users*** parameter

    ~~~jsx {7} title="Before v1.2"
    users: {
        show: true,
        values: [
            { 
                id: 1, 
                label: "John Smith", 
                path: "../assets/user.jpg" 
            },
        ]
    },
    // other parameters
    ~~~

    ~~~jsx {7} title="From v1.2"
    users: {
        show: true,
        values: [
            { 
                id: 1, 
                label: "John Smith", 
                avatar: "../assets/user.jpg" 
            },
        ]
    },
    // other parameters
    ~~~

    - the ***start_date*** and ***end_date*** parameters 

    ~~~jsx {} title="Before v1.2"
    start_date: true,
    end_date: true,
    // other parameters
    ~~~

    ~~~jsx {3,7} title="From v1.2"
    start_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    end_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    // other parameters
    ~~~

- The [`editorShape`](../../api/config/js_kanban_editorshape_config) property of Kanban was updated in the following way:

~~~jsx {8} title="Before v1.2"
{
    type: "multiselect", 
    key: "users", 
    label: "Users",
    values: [
        { 
            id: 1, label: "Alan", 
            path: "preview_image_path_1.png" 
        },
    ]
},
// settings of other fields
~~~

~~~jsx {8} title="From v1.2"
{
    type: "multiselect", 
    key: "users", 
    label: "Users",
    values: [
        { 
            id: 1, label: "Alan", 
            avatar: "preview_image_path_1.png" 
        },
    ]
},
// settings of other fields
~~~

- The [`items`](../../api/config/toolbar_items_config) property of Toolbar was updated in the following way:

~~~jsx {} title="Before v1.2"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="From v1.2"
items: [
    { // or "search",
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
        ]
    },
    "spacer",
    { // or "sort",
        type: "sort",
        options: [
            {
                label: "Sort by label",
                by: "label",
                dir: "asc"
            },
            {
                label: "Sort by description",
                by: "description",
                dir: "desc"
            }
        ]
    }, 
    "addColumn",
    "addRow"
]
~~~

#### Methods

- The [`setLocale()`](../../api/methods/js_kanban_setlocale_method) method of Kanban and [`setLocale()`](../../api/methods/toolbar_setlocale_method) method of Toolbar were updated:

~~~jsx {} title="Before v1.2"
setLocale(kanban.en); // reset to default locale
~~~

~~~jsx {} title="From v1.2"
setLocale(null); // reset to default locale
~~~

- The [`api.getReactiveState()`](../../api/internal/js_kanban_getreactivestate_method) method of Kanban was updated:

~~~jsx {} title="Before v1.2"
api.getReactiveState();
// the method returns an object with the following properties
/*{
    dragItemId: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...},
    overAreaId: {...},
    overAreaMeta: {...},
    dropAreaItemsCoords: {...},
    dropAreasCoords: {...},
    dragItemsCoords: {...},
    selected: {...}
}*/
~~~

~~~jsx {} title="From v1.2"
api.getReactiveState();
// the method returns an object with the following properties
/*{
    areasMeta: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...}, 
    cardShape: {...},
    cards: {...},
    cardsMap: {...},
    cardsMeta: {...},
    columnKey: {...},
    columns: {...},
    dragItemId: {...}, 
    dragItemsCoords: {...}, 
    dropAreaItemsCoords: {...}, 
    dropAreasCoords: {...}, 
    edit: {...},
    editorShape: {...},
    fromAreaMeta: {...},
    overAreaId: {...}, 
    overAreaMeta: {...},
    readonly: {...},
    rowKey: {...},
    rows: {...},
    scroll: {...},
    search: {...},
    selected: {...}, 
    sort: {...}
}*/
~~~

- The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method of Kanban was updated:

~~~jsx {} title="Before v1.2"
api.getState();
// the method returns an object with the following properties
/*{
    dragItemId: string | number,
    before: string | number,
    overAreaId: string | number,
    overAreaMeta: object,
    dropAreaItemsCoords: array,
    dropAreasCoords: array,
    dragItemsCoords: array,
    selected: array
}*/
~~~

~~~jsx {} title="From v1.2"
api.getState();
// the method returns an object with the following properties
/*{
    areasMeta: object, 
    before: string | number, 
    cardShape: object,
    cards: array,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    dropAreaItemsCoords: array, 
    dropAreasCoords: array, 
    edit: object,
    editorShape: array,
    fromAreaMeta: object,
    overAreaId: string | number, 
    overAreaMeta: object,
    readonly: object,
    rowKey: string,
    rows: array,
    scroll: object,
    search: object,
    selected: array, 
    sort: object
}*/
~~~

- The [`api.getStores()`](../../api/internal/js_kanban_getstores_method) method of Kanban was updated:

~~~jsx {} title="Before v1.2"
api.getStores();
// the method returns an object with the following stores
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="From v1.2"
api.getStores();
// the method returns an object with the following properties
/*{
    state: StateStore, // ( object )
}*/
~~~

### Localization

<details>
<summary>Before v1.2</summary>

~~~jsx {}
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const wx = {
    Today: "Today",
    Clear: "Clear",
    Close: "Close"
};
const en = {
    lang: "en",
    __dates: {
        months,
        monthsShort,
        days
    },
    wx,
    kanban: {
        Save: "Save",
        Close: "Close",
        Delete: "Delete",
        Name: "Name",
        Description: "Description",
        Type: "Type",
        "Start date": "Start date",
        "End date": "End date",
        Result: "Result",
        "No results": "No results",
        Search: "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card": "Add new card",
        "Edit card": "Edit card",
        Edit: "Edit",
        Everywhere: "Everywhere",
        Label: "Label",
        Status: "Status",
        Color: "Color",
        Date: "Date",
        Untitled: "Untitled",
        Rename: "Rename"
    }
};
~~~
</details>

<details>
<summary>From v1.2</summary>

~~~jsx {}
const en = {
    kanban: { // translations of the Kanban labels
        "Save": "Save",
        "Close": "Close",
        "Delete": "Delete",
        "Name": "Name",
        "Description": "Description",
        "Type": "Type",
        "Start date": "Start date",
        "End date": "End date",
        "Result": "Result",
        "No results": "No results",
        "Search": "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card": "Add new card",
        "Edit card": "Edit card",
        "Edit": "Edit",
        "Everywhere": "Everywhere",
        "Label": "Label",
        "Status": "Status",
        "Color": "Color",
        "Date": "Date",
        "Untitled": "Untitled",
        "Rename": "Rename",
        "Move up": "Move up",
        "Move down": "Move down",
        "Move left": "Move left",
        "Move right": "Move right",
        "Sort": "Sort",
        "Label (a-z)": "Label (a-z)",
        "Label (z-a)": "Label (z-a)",
        "Description (a-z)": "Description (a-z)",
        "Description (z-a)": "Description (z-a)"
    },
    calendar: { // translations and settings of the calendar
        monthFull: [
            "January", "February", "March", "April",
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        hours: "Hours",
        minutes: "Minutes",
        done: "Done",
        clear: "Clear",
        today: "Today",
        am: ["am", "AM"],
        pm: ["pm", "PM"],
        weekStart: 7,
        timeFormat: 24
    },
    core: { // translations of the core elements
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~
</details>

## 1.0 -> 1.1

### Api

#### Properties

- The [`columns`](../../api/config/js_kanban_columns_config) property was extended by the new parameters. Starting from v1.1, you can use the ***collapsed, limit*** and ***strictLimit*** configurations.

~~~jsx title="Before v1.1"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="From v1.1"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true 
    }, ...
];

new kanban.Kanban("#root", {
    columns,
    // other parameters
});
~~~

- The ***color*** parameter of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property was updated.

~~~jsx {4-7} title="Before v1.1"
const cardShape = {
    color: {
        show: true,
        values: [
            { id: 1, color: "#65D3B3", label: "red" },
            { id: 2, color: "#FFC975", label: "green" }
        ]
    }
};
~~~

~~~jsx {4,9} title="From v1.1"
const cardShape = {
    color: { 
        show: true,
        values: ["#65D3B3", "#FFC975", "#58C3FE"] 
    } 
};

new kanban.Kanban("#root", {
    cardShape
    // other parameters
});
~~~

#### Methods

- The [`addColumn`](../../api/methods/js_kanban_addcolumn_method) method (and [`add-column`](../../api/events/js_kanban_addcolumn_event) event) was updated:

~~~jsx {} title="Before v1.1"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- The [`addRow`](../../api/methods/js_kanban_addrow_method) method (and [`add-row`](../../api/events/js_kanban_addrow_event) event) was updated:

~~~jsx {} title="Before v1.1"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- The [`updateColumn`](../../api/methods/js_kanban_updatecolumn_method) method (and [`update-column`](../../api/events/js_kanban_updatecolumn_event) event) was updated:

~~~jsx {} title="Before v1.1"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- The [`updateRow`](../../api/methods/js_kanban_updaterow_method) method (and [`update-row`](../../api/events/js_kanban_updaterow_event) event)  was updated:

~~~jsx {} title="Before v1.1"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- The [`updateCard`](../../api/methods/js_kanban_updatecard_method) method (and [`update-card`](../../api/events/js_kanban_updatecard_event) event) was updated:

~~~jsx {} title="Before v1.1"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="From v1.1"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- The [`parse`](../../api/methods/js_kanban_parse_method) method  was updated:

~~~jsx {3-5,8-12} title="Before v1.1"
// you need to reset initial data befor parsing new one
const board = new kanban.Kanban("#root", {
    columns: [],
    cards: [],
    rows: []
});

board.parse({
    columns,
    cards,
    rows
});
~~~

~~~jsx {} title="From v1.1"
// you don't need to reset initial data befor parsing new one
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~
