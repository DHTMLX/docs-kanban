---
sidebar_label: 迁移到新版本
title: 迁移到新版本
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何迁移到新版本。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的 30 天免费评估版本。
---

# 迁移到新版本

## 1.5.13 -> 1.6.0

菜单的 CSS 类名做了如下变更:

~~~jsx
    .menu -> .wx-menu
    .item -> .wx-item
    .icon -> .wx-icon
    .value -> .wx-value
~~~

## 1.5.12 -> 1.5.13

编辑器使用的 CSS 类名进行了更新:

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

#### 方法

- Kanban 工具栏的 [`setLocale`](/api/methods/toolbar_setlocale_method) 方法应用 locale 的方式有了变化:

~~~jsx {6} title="v1.5.7 之前"
    // 创建 Kanban
    const board = new kanban.Kanban("#root", {...});
    // 创建 Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // 应用 "de" 语言到 Toolbar
    toolbar.setLocale(de); // 或传 null 重置为默认语言(en)
~~~

~~~jsx {6} title="自 v1.5.7 起"
    // 创建 Kanban
    const board = new kanban.Kanban("#root", {...});
    // 创建 Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // 应用 "de" 语言到 Toolbar
    toolbar.setLocale(de, board.api);
~~~

## 1.4 -> 1.5

### Api

#### 属性

- Kanban 的 [`columnShape`](/api/config/js_kanban_columnshape_config) 属性有如下调整:

~~~jsx {} title="v1.5 之前"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Update", ...
                    }
                ]
                // 其他参数
            }
        }
~~~

~~~jsx {11} title="自 v1.5 起"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Update", ...
                    }
                ]
                // 其他参数
            },
            fixedHeaders: true
        }
~~~

## 1.3 -> 1.4

### Api

#### 属性

- Kanban 的 [`editorShape`](/api/config/js_kanban_editorshape_config) 属性现在如下工作:

~~~jsx {} title="v1.4 之前"
        {
            type: "date",
            key: "start_date",
            label: "Start date"
        },
        // 其他参数
~~~

~~~jsx {5,7-21} title="自 v1.4 起"
        {
            type: "date", // 也可以用 "dateRange" 类型
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
                placement: "page", // 或 "editor"
                html: true,
            },
        },
        {
            type: "links",
            key: "links",
            label: "Links",
        },
        // 其他参数
~~~

- [`cardShape`](/api/config/js_kanban_cardshape_config) 属性变更:

~~~jsx {} title="v1.4 之前"
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
            // 其他参数
        }
~~~

~~~jsx {7,11-13} title="自 v1.4 起"
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
            // 其他参数
        }
~~~

- [`columnShape`](/api/config/js_kanban_columnshape_config) 属性变更:

~~~jsx {} title="v1.4 之前"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // 其他参数
            }
        }
~~~

~~~jsx {6,11} title="自 v1.4 起"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // 其他参数
            },
            css: (column, cards) => column.id == "feature" && cards.length < 5 ? "green" : "red"
        }
~~~

- [`rowShape`](/api/config/js_kanban_rowshape_config) 属性变更:

~~~jsx {} title="v1.4 之前"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // 其他参数
            }
        }
~~~

~~~jsx {6,11} title="自 v1.4 起"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // 其他参数
            },
            css: (row, cards) => row.id == "task" && cards.length < 5 ? "green" : "red",
        }
~~~

- [`cards`](/api/config/js_kanban_cards_config) 属性现在如下:

~~~jsx {} title="v1.4 之前"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                // 其他参数
            }, ...
        ]
~~~

~~~jsx {6-18} title="自 v1.4 起"
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
                // 其他参数
            }, ...
        ]
~~~

- [`columns`](/api/config/js_kanban_columns_config) 属性新增了一些选项:

~~~jsx {} title="v1.4 之前"
        [
            {
                id: "inprogress",
                label: "In progress",
                // 其他参数
            }, ...
        ]
~~~

~~~jsx {5-11} title="自 v1.4 起"
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
                // 其他参数
            }, ...
        ]
~~~

- [`rows`](/api/config/js_kanban_rows_config) 属性现在可设置 css:

~~~jsx {} title="v1.4 之前"
        [
            {
                id: "features",
                label: "Features",
                // 其他参数
            }, ...
        ]
~~~

~~~jsx {5} title="自 v1.4 起"
        [
            {
                id: "features",
                label: "Features",
                css: "green"
                // 其他参数
            }, ...
        ]
~~~

- [`cardTemplate`](/api/config/js_kanban_cardtemplate_config) 属性更新:

~~~jsx {} title="v1.4 之前"
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

~~~jsx {6-8} title="自 v1.4 起"
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
            // 其他参数
        });
~~~

- Kanban 工具栏 [`items`](/api/config/toolbar_items_config) 中的 **sort** 控件样式有更新:

~~~jsx {} title="v1.4 之前"
        [
            { // 自定义排序控件
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

~~~jsx {6,11} title="自 v1.4 起"
        [
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
        ]
~~~

#### 方法

- Kanban 的 [`api.getState()`](/api/internal/js_kanban_getstate_method) 方法返回的属性减少了:

~~~jsx {25-27} title="v1.4 之前"
api.getState();
// 方法返回如下属性对象
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

~~~jsx {} title="自 v1.4 起"
api.getState();
// 方法返回如下属性对象
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

#### 属性

- Kanban 的 [`editorShape`](/api/config/js_kanban_editorshape_config) 属性现在支持 ***dateRange*** 参数:

~~~jsx {} title="v1.3 之前"
        {
            type: "date",
            key: "start_date",
            label: "Start date"
        },
        // 其他参数
~~~

~~~jsx {} title="自 v1.3 起"
        {
            type: "dateRange", // 也可用 "date" 类型
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range"
        },
        // 其他参数
~~~

- 工具栏的 [`items`](/api/config/toolbar_items_config) 属性现在包含 "undo" 和 "redo":

~~~jsx {} title="v1.3 之前"
items: [
    "search",
    "spacer",
    "sort",
    "addColumn",
    "addRow"
]
~~~

~~~jsx {4-5} title="自 v1.3 起"
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

#### 方法

- [`updateCard()`](/api/methods/js_kanban_updatecard_method) 方法现在支持额外选项:

~~~jsx {} title="v1.3 之前"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*其他参数*/
    }
});
~~~

~~~jsx {9} title="自 v1.3 起"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*其他参数*/
    },
    replace: true
});
~~~

- [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method) 方法也新增了新参数:

~~~jsx {} title="v1.3 之前"
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

~~~jsx {9} title="自 v1.3 起"
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

- [`updateRow()`](/api/methods/js_kanban_updaterow_method) 方法也增加了 replace 选项:

~~~jsx {} title="v1.3 之前"
updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
});
~~~

~~~jsx {7} title="自 v1.3 起"
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

#### 属性

- [`cardShape`](/api/config/js_kanban_cardshape_config) 属性得到改进:

    - ***menu*** 参数的变化

~~~jsx {} title="v1.2 之前"
    menu: true,
    //或
    menu: { show: true }
    // 其他参数
~~~

~~~jsx {5-14} title="自 v1.2 起"
    menu: true,
    // 或
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
    // 其他参数
~~~

    - ***users*** 参数的变化

~~~jsx {7} title="v1.2 之前"
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
    // 其他参数
~~~

~~~jsx {7} title="自 v1.2 起"
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
    // 其他参数
~~~

    - ***start_date*** 和 ***end_date*** 参数的变化

~~~jsx {} title="v1.2 之前"
    start_date: true,
    end_date: true,
    // 其他参数
~~~

~~~jsx {3,7} title="自 v1.2 起"
    start_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    end_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    // 其他参数
~~~

- [`editorShape`](/api/config/js_kanban_editorshape_config) 属性现在使用 "avatar" 替代 "path":

~~~jsx {8} title="v1.2 之前"
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
// 其他字段设置
~~~

~~~jsx {8} title="自 v1.2 起"
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
// 其他字段设置
~~~

- 工具栏的 [`items`](/api/config/toolbar_items_config) 属性增加了新特性:

~~~jsx {} title="v1.2 之前"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="自 v1.2 起"
items: [
    { // 或 "search",
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
    { // 或 "sort",
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

#### 方法

- Kanban 的 [`setLocale()`](/api/methods/js_kanban_setlocale_method) 方法和 Toolbar 的 [`setLocale()`](/api/methods/toolbar_setlocale_method) 方法略有不同:

~~~jsx {} title="v1.2 之前"
setLocale(kanban.en); // 重置为默认语言
~~~

~~~jsx {} title="自 v1.2 起"
setLocale(null); // 重置为默认语言
~~~

- Kanban 的 [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) 方法现在返回更多状态属性:

~~~jsx {} title="v1.2 之前"
api.getReactiveState();
// 方法返回如下属性对象
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

~~~jsx {} title="自 v1.2 起"
api.getReactiveState();
// 方法返回如下属性对象
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

- Kanban 的 [`api.getState()`](/api/internal/js_kanban_getstate_method) 方法现在返回更详尽的状态对象:

~~~jsx {} title="v1.2 之前"
api.getState();
// 方法返回如下属性对象
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

~~~jsx {} title="自 v1.2 起"
api.getState();
// 方法返回如下属性对象
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

- Kanban 的 [`api.getStores()`](/api/internal/js_kanban_getstores_method) 方法现在仅返回 state store:

~~~jsx {} title="v1.2 之前"
api.getStores();
// 方法返回如下 store 对象
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="自 v1.2 起"
api.getStores();
// 方法返回如下属性对象
/*{
    state: StateStore, // ( object )
}*/
~~~

### 本地化

<details>
<summary>v1.2 之前</summary>

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
<summary>自 v1.2 起</summary>

~~~jsx {}
const en = {
    kanban: { // Kanban 标签的翻译
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
    calendar: { // 日历的翻译和设置
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
    core: { // 核心元素的翻译
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~
</details>

## 1.0 -> 1.1

### Api

#### 属性

- [`columns`](/api/config/js_kanban_columns_config) 属性自 v1.1 起增加了 ***collapsed, limit*** 和 ***strictLimit*** 参数。

~~~jsx title="v1.1 之前"
const columns = [
    {
        label: "Backlog",
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="自 v1.1 起"
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
    // 其他参数
});
~~~

- [`cardShape`](/api/config/js_kanban_cardshape_config) 中的 ***color*** 参数有调整。

~~~jsx {4-7} title="v1.1 之前"
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

~~~jsx {4,9} title="自 v1.1 起"
const cardShape = {
    color: {
        show: true,
        values: ["#65D3B3", "#FFC975", "#58C3FE"]
    }
};

new kanban.Kanban("#root", {
    cardShape
    // 其他参数
});
~~~

#### 方法

- [`addColumn`](/api/methods/js_kanban_addcolumn_method) 方法（以及 [`add-column`](/api/events/js_kanban_addcolumn_event) 事件）初始化方式有更新:

~~~jsx {} title="v1.1 之前"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="自 v1.1 起"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- [`addRow`](/api/methods/js_kanban_addrow_method) 方法（以及 [`add-row`](/api/events/js_kanban_addrow_event) 事件）也有更新:

~~~jsx {} title="v1.1 之前"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="自 v1.1 起"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) 方法（以及 [`update-column`](/api/events/js_kanban_updatecolumn_event) 事件）有如下变化:

~~~jsx {} title="v1.1 之前"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="自 v1.1 起"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- [`updateRow`](/api/methods/js_kanban_updaterow_method) 方法（以及 [`update-row`](/api/events/js_kanban_updaterow_event) 事件）格式有更新:

~~~jsx {} title="v1.1 之前"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="自 v1.1 起"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- [`updateCard`](/api/methods/js_kanban_updatecard_method) 方法（以及 [`update-card`](/api/events/js_kanban_updatecard_event) 事件）设置方式如下:

~~~jsx {} title="v1.1 之前"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="自 v1.1 起"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- [`parse`](/api/methods/js_kanban_parse_method) 方法现在无需先重置初始数据即可重新解析:

~~~jsx {3-5,8-12} title="v1.1 之前"
// 解析新数据前需重置初始数据
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

~~~jsx {} title="自 v1.1 起"
// 解析新数据前无需重置初始数据
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~
