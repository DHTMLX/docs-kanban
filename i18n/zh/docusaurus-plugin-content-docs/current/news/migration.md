---
sidebar_label: 迁移到新版本
title: 迁移到新版本
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解如何迁移到新版本。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并免费下载 DHTMLX Kanban 的 30 天试用版。
---

# 迁移到新版本

## 1.6.5 -> 1.7.0

### Api

#### 属性

- [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性已更新。`clearButton` 参数被 `clear` 参数替代：

~~~jsx {8} title="v1.7.0 之前"
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo",
            label: "Priority",
            key: "priority",
            config: {
                clearButton: true // 旧用法
            }
        }, { /* ... */ }
    ]
    // 其他参数
});
~~~

~~~jsx {8} title="v1.7.0 起"
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo",
            label: "Priority",
            key: "priority",
            config: {
                clear: true // 新用法
            }
        }, { /* ... */ }
    ]
    // 其他参数
});
~~~

- [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) 函数已更新。**store** 参数被 **readonly** 参数替代：

~~~jsx {3-4} title="v1.7.0 之前"
menu: {
    show: true,
    items: ({ card, store }) => {
        const defaultMenuItems = getDefaultCardMenuItems({ card, store }); // "store" 参数为旧用法
        ...
    }
}
~~~

~~~jsx {3-4} title="v1.7.0 起"
menu: {
    show: true,
    items: ({ card, readonly }) => {
        const defaultMenuItems = getDefaultCardMenuItems({ card, readonly }); // "readonly" 参数为新用法
        ...
    }
}
~~~

- [`columnShape.menu.items`](api/config/js_kanban_columnshape_config.md) 函数已更新。**store** 参数被 **readonly** 参数替代：

~~~jsx {3-4} title="v1.7.0 之前"
menu: {
    show: true,
    items: ({ column, columnIndex, columns, store }) => {
        const defaultMenuItems = getDefaultColumnMenuItems({ column, columnIndex, columns, store }); // "store" 参数为旧用法
        ...
    }
}
~~~

~~~jsx {3-4} title="v1.7.0 起"
menu: {
    show: true,
    items: ({ column, columnIndex, columns, readonly }) => {
        const defaultMenuItems = getDefaultColumnMenuItems({ column, columnIndex, columns, readonly }); // "readonly" 参数为新用法
        ...
    }
}
~~~

- [`rowShape.menu.items`](api/config/js_kanban_rowshape_config.md) 函数已更新。**store** 参数被 **readonly** 参数替代：

~~~jsx {3-4} title="v1.7.0 之前"
menu: {
    show: true,
    items: ({ row, rowIndex, rows, store }) => {
        const defaultMenuItems = getDefaultRowMenuItems({ row, rowIndex, rows, store }); // "store" 参数为旧用法
        ...
    }
}
~~~

~~~jsx {3-4} title="v1.7.0 起"
menu: {
    show: true,
    items: ({ row, rowIndex, rows, readonly }) => {
        const defaultMenuItems = getDefaultRowMenuItems({ row, rowIndex, rows, readonly }); // "readonly" 参数为新用法
        ...
    }
}
~~~

- [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md)、[`columnShape.menu.items`](api/config/js_kanban_columnshape_config.md)、[`rowShape.menu.items`](api/config/js_kanban_rowshape_config.md) 属性中的 ***menu.items[0].label*** 和 ***menu.items[0].items*** 已在 v1.7 移除。

- `editorAutoSave` 属性在 v1.7 被移除。请使用 [`editor.autoSave`](api/config/js_kanban_editor_config.md) 属性：

~~~jsx {2} title="v1.7.0 之前"
new kanban.Kanban("#root", {
    editorAutoSave: true, // 旧用法
    // 其他参数
});
~~~

~~~jsx {3} title="v1.7.0 起"
new kanban.Kanban("#root", {
    editor: {
        autoSave: true // 新用法
    }
    // 其他参数
});
~~~

- [`links`](api/config/js_kanban_links_config.md) 属性有如下更新：
    - **masterId** 参数被 **source** 参数替代
    - **slaveId** 参数被 **target** 参数替代

~~~jsx {5-6,10} title="v1.7.0 之前"
const links = [
    {
        id: 1,
        // 旧用法
        masterId: 2,
        slaveId: 5
    }, {...} // 其他连接数据
];

new kanban.Kanban("#root", {
    links,
    // 其他参数
});
~~~

~~~jsx {5-6,10} title="v1.7.0 起"
const links = [
    {
        id: 1,
        // 新用法
        source: 2,
        target: 5
    }, {...} // 其他连接数据
];

new kanban.Kanban("#root", {
    links,
    // 其他参数
});
~~~

#### 方法

- `undo` 和 `redo` 方法已从 store 方法中移除：

~~~jsx {1} title="v1.7.0 之前"
kanban.api.getStores().data.undo() // 旧用法
~~~

~~~jsx {5-6,10} title="v1.7.0 起"
kanban.undo();
// 或者
kanban.api.exec("undo");
~~~

- [`api.getState()`](api/internal/js_kanban_getstate_method.md) 和 [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) 方法有如下更新：
    - 以下参数在 v1.7.0 被移除：

    ```js
    fromAreaMeta,
    dropAreaItemsCoords,
    dropAreasCoords,
    overAreaMeta,
    before,
    dragItemId,
    dragItemsCoords,
    overAreaId
    ```

    - 以下参数在 v1.7.0 变为私有：

    ```js
    edit -> _edit: object,
    layout -> _layout: string,
    cardsMap -> _cardsMap: object,
    cardsMeta -> _cardsMeta: object,
    areasMeta -> _areasMeta: object,
    scroll -> _scroll: object
    ```

#### 事件

- [`start-drag-card`](api/events/js_kanban_startdragcard_event.md) 事件中的 `dragItemsCoords` 和 `dropAreasCoords` 参数已被移除

## 1.5.13 -> 1.6.0

与菜单相关的 CSS 类有如下变更：

~~~jsx
    .menu -> .wx-menu
    .item -> .wx-item
    .icon -> .wx-icon
    .value -> .wx-value
~~~

## 1.5.12 -> 1.5.13

与编辑器相关的 CSS 类有如下变更：

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

- Kanban 工具栏的 [`setLocale`](api/methods/toolbar_setlocale_method.md) 方法有如下更新：

~~~jsx {6} title="v1.5.7 之前"
    // 创建 Kanban
    const board = new kanban.Kanban("#root", {...});
    // 创建 Toolbar
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // 应用 "de" 语言到 Toolbar
    toolbar.setLocale(de); // 或传 null 重置为默认语言 (en)
~~~

~~~jsx {6} title="v1.5.7 起"
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

- Kanban 的 [`columnShape`](api/config/js_kanban_columnshape_config.md) 属性有如下变更：

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

    ~~~jsx {11} title="v1.5 起"
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

- Kanban 的 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性有如下变更：

    ~~~jsx {} title="v1.4 之前"
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // 其他参数
    ~~~

    ~~~jsx {5,7-21} title="v1.4 起"
        {
            type: "date", // 或可使用 "dateRange" 类型
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

- Kanban 的 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性有如下变更：

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

    ~~~jsx {7,11-13} title="v1.4 起"
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

- Kanban 的 [`columnShape`](api/config/js_kanban_columnshape_config.md) 属性有如下变更：

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

    ~~~jsx {6,11} title="v1.4 起"
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

- Kanban 的 [`rowShape`](api/config/js_kanban_rowshape_config.md) 属性有如下变更：

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

    ~~~jsx {6,11} title="v1.4 起"
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

- Kanban 的 [`cards`](api/config/js_kanban_cards_config.md) 属性有如下变更：

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

    ~~~jsx {6-18} title="v1.4 起"
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

- Kanban 的 [`columns`](api/config/js_kanban_columns_config.md) 属性有如下变更：

    ~~~jsx {} title="v1.4 之前"
        [
            {
                id: "inprogress",
                label: "In progress",
                // 其他参数
            }, ...
        ]
    ~~~

    ~~~jsx {5-11} title="v1.4 起"
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

- Kanban 的 [`rows`](api/config/js_kanban_rows_config.md) 属性有如下变更：

    ~~~jsx {} title="v1.4 之前"
        [
            {
                id: "features",
                label: "Features",
                // 其他参数
            }, ...
        ]
    ~~~

    ~~~jsx {5} title="v1.4 起"
        [
            {
                id: "features",
                label: "Features",
                css: "green"
                // 其他参数
            }, ...
        ]
    ~~~

- Kanban 的 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 属性有如下变更：

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

    ~~~jsx {6-8} title="v1.4 起"
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

- Kanban 工具栏 [`items`](api/config/toolbar_items_config.md) 属性中的 **sort** 控件有如下变更：

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

    ~~~jsx {6,11} title="v1.4 起"
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

- Kanban 的 [`api.getState()`](api/internal/js_kanban_getstate_method.md) 方法有如下变更：

~~~jsx {25-27} title="v1.4 之前"
api.getState();
// 方法返回包含以下属性的对象
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

~~~jsx {} title="v1.4 起"
api.getState();
// 方法返回包含以下属性的对象
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

- Kanban 的 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性有如下变更：

    - ***dateRange*** 参数

    ~~~jsx {} title="v1.3 之前"
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // 其他参数
    ~~~

    ~~~jsx {} title="v1.3 起"
        {
            type: "dateRange", // 或可使用 "date" 类型
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range"
        },
        // 其他参数
    ~~~

- 工具栏的 [`items`](api/config/toolbar_items_config.md) 属性有如下变更：

~~~jsx {} title="v1.3 之前"
items: [
    "search",
    "spacer",
    "sort",
    "addColumn",
    "addRow"
]
~~~

~~~jsx {4-5} title="v1.3 起"
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

- Kanban 的 [`updateCard()`](api/methods/js_kanban_updatecard_method.md) 方法有如下变更：

~~~jsx {} title="v1.3 之前"
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

~~~jsx {9} title="v1.3 起"
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

- Kanban 的 [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) 方法有如下变更：

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

~~~jsx {9} title="v1.3 起"
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

- Kanban 的 [`updateRow()`](api/methods/js_kanban_updaterow_method.md) 方法有如下变更：

~~~jsx {} title="v1.3 之前"
updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
});
~~~

~~~jsx {7} title="v1.3 起"
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

- Kanban 的 [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性有如下变更：

    - ***menu*** 参数

    ~~~jsx {} title="v1.2 之前"
    menu: true,
    //或
    menu: { show: true }
    // 其他参数
    ~~~

    ~~~jsx {5-14} title="v1.2 起"
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

    - ***users*** 参数

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

    ~~~jsx {7} title="v1.2 起"
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

    - ***start_date*** 和 ***end_date*** 参数

    ~~~jsx {} title="v1.2 之前"
    start_date: true,
    end_date: true,
    // 其他参数
    ~~~

    ~~~jsx {3,7} title="v1.2 起"
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

- Kanban 的 [`editorShape`](api/config/js_kanban_editorshape_config.md) 属性有如下变更：

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

~~~jsx {8} title="v1.2 起"
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

- 工具栏的 [`items`](api/config/toolbar_items_config.md) 属性有如下变更：

~~~jsx {} title="v1.2 之前"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="v1.2 起"
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

- Kanban 的 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 方法和 Toolbar 的 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 方法有如下变更：

~~~jsx {} title="v1.2 之前"
setLocale(kanban.en); // 重置为默认语言
~~~

~~~jsx {} title="v1.2 起"
setLocale(null); // 重置为默认语言
~~~

- Kanban 的 [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) 方法有如下变更：

~~~jsx {} title="v1.2 之前"
api.getReactiveState();
// 方法返回包含以下属性的对象
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

~~~jsx {} title="v1.2 起"
api.getReactiveState();
// 方法返回包含以下属性的对象
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

- Kanban 的 [`api.getState()`](api/internal/js_kanban_getstate_method.md) 方法有如下变更：

~~~jsx {} title="v1.2 之前"
api.getState();
// 方法返回包含以下属性的对象
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

~~~jsx {} title="v1.2 起"
api.getState();
// 方法返回包含以下属性的对象
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

- Kanban 的 [`api.getStores()`](api/internal/js_kanban_getstores_method.md) 方法有如下变更：

~~~jsx {} title="v1.2 之前"
api.getStores();
// 方法返回如下 store 对象
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="v1.2 起"
api.getStores();
// 方法返回如下属性
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
<summary>v1.2 起</summary>

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
    calendar: { // 日历的翻译及设置
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

- [`columns`](api/config/js_kanban_columns_config.md) 属性增加了新参数。从 v1.1 起，你可以使用 ***collapsed, limit*** 和 ***strictLimit*** 配置。

~~~jsx title="v1.1 之前"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="v1.1 起"
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

- [`cardShape`](api/config/js_kanban_cardshape_config.md) 属性的 ***color*** 参数有如下变更。

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

~~~jsx {4,9} title="v1.1 起"
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

- [`addColumn`](api/methods/js_kanban_addcolumn_method.md) 方法（以及 [`add-column`](api/events/js_kanban_addcolumn_event.md) 事件）有如下变更：

~~~jsx {} title="v1.1 之前"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="v1.1 起"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- [`addRow`](api/methods/js_kanban_addrow_method.md) 方法（以及 [`add-row`](api/events/js_kanban_addrow_event.md) 事件）有如下变更：

~~~jsx {} title="v1.1 之前"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="v1.1 起"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) 方法（以及 [`update-column`](api/events/js_kanban_updatecolumn_event.md) 事件）有如下变更：

~~~jsx {} title="v1.1 之前"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="v1.1 起"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- [`updateRow`](api/methods/js_kanban_updaterow_method.md) 方法（以及 [`update-row`](api/events/js_kanban_updaterow_event.md) 事件）有如下变更：

~~~jsx {} title="v1.1 之前"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="v1.1 起"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- [`updateCard`](api/methods/js_kanban_updatecard_method.md) 方法（以及 [`update-card`](api/events/js_kanban_updatecard_event.md) 事件）有如下变更：

~~~jsx {} title="v1.1 之前"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="v1.1 起"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- [`parse`](api/methods/js_kanban_parse_method.md) 方法有如下变更：

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

~~~jsx {} title="v1.1 起"
// 解析新数据前无需重置初始数据
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~