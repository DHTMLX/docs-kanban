---
sidebar_label: 최신 버전으로의 마이그레이션
title: 최신 버전으로의 마이그레이션
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 최신 버전으로의 마이그레이션에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드해보세요.
---

# 최신 버전으로의 마이그레이션

## 1.6.5 -> 1.7.0

### Api

#### Properties

- [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성이 업데이트되었습니다. `clearButton` 파라미터가 `clear`로 교체되었습니다:

~~~jsx {8} title="v1.7.0 이전"
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo",
            label: "Priority",
            key: "priority",
            config: {
                clearButton: true // legacy
            }
        }, { /* ... */ }
    ]
    // 기타 파라미터
});
~~~

~~~jsx {8} title="v1.7.0부터"
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo",
            label: "Priority",
            key: "priority",
            config: {
                clear: true // new
            }
        }, { /* ... */ }
    ]
    // 기타 파라미터
});
~~~

- [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) 함수가 업데이트되었습니다. **store** 파라미터가 **readonly**로 교체되었습니다:

~~~jsx {3-4} title="v1.7.0 이전"
menu: {
    show: true,
    items: ({ card, store }) => {
        const defaultMenuItems = getDefaultCardMenuItems({ card, store }); // "store" 파라미터는 legacy
        ...
    }
}
~~~

~~~jsx {3-4} title="v1.7.0부터"
menu: {
    show: true,
    items: ({ card, readonly }) => {
        const defaultMenuItems = getDefaultCardMenuItems({ card, readonly }); // "readonly" 파라미터는 신규
        ...
    }
}
~~~

- [`columnShape.menu.items`](api/config/js_kanban_columnshape_config.md) 함수가 업데이트되었습니다. **store** 파라미터가 **readonly**로 교체되었습니다:

~~~jsx {3-4} title="v1.7.0 이전"
menu: {
    show: true,
    items: ({ column, columnIndex, columns, store }) => {
        const defaultMenuItems = getDefaultColumnMenuItems({ column, columnIndex, columns, store }); // "store" 파라미터는 legacy
        ...
    }
}
~~~

~~~jsx {3-4} title="v1.7.0부터"
menu: {
    show: true,
    items: ({ column, columnIndex, columns, readonly }) => {
        const defaultMenuItems = getDefaultColumnMenuItems({ column, columnIndex, columns, readonly }); // "readonly" 파라미터는 신규
        ...
    }
}
~~~

- [`rowShape.menu.items`](api/config/js_kanban_rowshape_config.md) 함수가 업데이트되었습니다. **store** 파라미터가 **readonly**로 교체되었습니다:

~~~jsx {3-4} title="v1.7.0 이전"
menu: {
    show: true,
    items: ({ row, rowIndex, rows, store }) => {
        const defaultMenuItems = getDefaultRowMenuItems({ row, rowIndex, rows, store }); // "store" 파라미터는 legacy
        ...
    }
}
~~~

~~~jsx {3-4} title="v1.7.0부터"
menu: {
    show: true,
    items: ({ row, rowIndex, rows, readonly }) => {
        const defaultMenuItems = getDefaultRowMenuItems({ row, rowIndex, rows, readonly }); // "readonly" 파라미터는 신규
        ...
    }
}
~~~

- v1.7에서 [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu.items`](api/config/js_kanban_columnshape_config.md), [`rowShape.menu.items`](api/config/js_kanban_rowshape_config.md) 속성의 ***menu.items[0].label*** 및 ***menu.items[0].items*** 파라미터가 제거되었습니다.

- v1.7에서 `editorAutoSave` 속성이 제거되었습니다. 대신 [`editor.autoSave`](api/config/js_kanban_editor_config.md) 속성을 사용하세요:

~~~jsx {2} title="v1.7.0 이전"
new kanban.Kanban("#root", {
    editorAutoSave: true, // legacy
    // 기타 파라미터
});
~~~

~~~jsx {3} title="v1.7.0부터"
new kanban.Kanban("#root", {
    editor: {
        autoSave: true // new
    }
    // 기타 파라미터
});
~~~

- [`links`](api/config/js_kanban_links_config.md) 속성이 다음과 같이 변경되었습니다:
    - **masterId** 파라미터가 **source**로 교체됨
    - **slaveId** 파라미터가 **target**으로 교체됨

~~~jsx {5-6,10} title="v1.7.0 이전"
const links = [
    {
        id: 1,
        // legacy
        masterId: 2,
        slaveId: 5
    }, {...} // 기타 링크 데이터
];

new kanban.Kanban("#root", {
    links,
    // 기타 파라미터
});
~~~

~~~jsx {5-6,10} title="v1.7.0부터"
const links = [
    {
        id: 1,
        // new
        source: 2,
        target: 5
    }, {...} // 기타 링크 데이터
];

new kanban.Kanban("#root", {
    links,
    // 기타 파라미터
});
~~~

#### Methods

- store 메서드에서 `undo` 및 `redo` 메서드가 제거되었습니다:

~~~jsx {1} title="v1.7.0 이전"
kanban.api.getStores().data.undo() // legacy
~~~

~~~jsx {5-6,10} title="v1.7.0부터"
kanban.undo();
// 또는
kanban.api.exec("undo");
~~~

- [`api.getState()`](api/internal/js_kanban_getstate_method.md) 및 [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) 메서드가 다음과 같이 변경되었습니다:
    - v1.7.0에서 다음 파라미터가 제거되었습니다:

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

    - v1.7.0에서 다음 파라미터가 private로 변경되었습니다:

    ```js
    edit -> _edit: object,
    layout -> _layout: string,
    cardsMap -> _cardsMap: object,
    cardsMeta -> _cardsMeta: object,
    areasMeta -> _areasMeta: object,
    scroll -> _scroll: object
    ```

#### Events

- [`start-drag-card`](api/events/js_kanban_startdragcard_event.md) 이벤트에서 `dragItemsCoords` 및 `dropAreasCoords` 파라미터가 제거되었습니다.

## 1.5.13 -> 1.6.0

메뉴와 관련된 CSS 클래스가 다음과 같이 변경되었습니다:

~~~jsx
    .menu -> .wx-menu
    .item -> .wx-item
    .icon -> .wx-icon
    .value -> .wx-value
~~~

## 1.5.12 -> 1.5.13

에디터와 관련된 CSS 클래스가 다음과 같이 변경되었습니다:

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

- Kanban 툴바의 [`setLocale`](api/methods/toolbar_setlocale_method.md) 메서드가 다음과 같이 변경되었습니다:

~~~jsx {6} title="v1.5.7 이전"
    // Kanban 생성
    const board = new kanban.Kanban("#root", {...});
    // Toolbar 생성
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // Toolbar에 "de" 로케일 적용
    toolbar.setLocale(de); // 또는 null로 초기 로케일(en)로 리셋
~~~

~~~jsx {6} title="v1.5.7부터"
    // Kanban 생성
    const board = new kanban.Kanban("#root", {...});
    // Toolbar 생성
    const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
    // Toolbar에 "de" 로케일 적용
    toolbar.setLocale(de, board.api); 
~~~

## 1.4 -> 1.5

### Api

#### Properties

- Kanban의 [`columnShape`](api/config/js_kanban_columnshape_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.5 이전"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Update", ...
                    }
                ]
                // 기타 파라미터
            }
        }
    ~~~

    ~~~jsx {11} title="v1.5부터"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Update", ...
                    }
                ]
                // 기타 파라미터
            },
            fixedHeaders: true
        } 
    ~~~

## 1.3 -> 1.4

### Api

#### Properties

- Kanban의 [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // 기타 파라미터
    ~~~

    ~~~jsx {5,7-21} title="v1.4부터"
        {
            type: "date", // 또는 "dateRange" 타입도 사용 가능
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
                placement: "page", // 또는 "editor"
                html: true,
            },
        },
        {
            type: "links",
            key: "links",
            label: "Links",
        },
        // 기타 파라미터
    ~~~

- Kanban의 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
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
            // 기타 파라미터
        }
    ~~~

    ~~~jsx {7,11-13} title="v1.4부터"
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
            // 기타 파라미터
        } 
    ~~~

- Kanban의 [`columnShape`](api/config/js_kanban_columnshape_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // 기타 파라미터
            }
        }
    ~~~

    ~~~jsx {6,11} title="v1.4부터"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // 기타 파라미터
            },
            css: (column, cards) => column.id == "feature" && cards.length < 5 ? "green" : "red"
        } 
    ~~~

- Kanban의 [`rowShape`](api/config/js_kanban_rowshape_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        {
            menu: {
                show: true,
                items: [
                    {
                        label: "Delete", ...
                    }
                ]
                // 기타 파라미터
            }
        }
    ~~~

    ~~~jsx {6,11} title="v1.4부터"
        {
            menu: {
                show: true,
                items: [
                    {
                        text: "Delete", ...
                    }
                ]
                // 기타 파라미터
            },
            css: (row, cards) => row.id == "task" && cards.length < 5 ? "green" : "red",
        } 
    ~~~

- Kanban의 [`cards`](api/config/js_kanban_cards_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        [
            {
                id: 1,
                label: "Integration with React",
                description: "Some description",
                // 기타 파라미터
            }, ...
        ]
    ~~~

    ~~~jsx {6-18} title="v1.4부터"
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
                // 기타 파라미터
            }, ...
        ]
    ~~~

- Kanban의 [`columns`](api/config/js_kanban_columns_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        [
            {
                id: "inprogress",
                label: "In progress",
                // 기타 파라미터
            }, ...
        ]
    ~~~

    ~~~jsx {5-11} title="v1.4부터"
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
                // 기타 파라미터
            }, ...
        ]
    ~~~

- Kanban의 [`rows`](api/config/js_kanban_rows_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        [
            {
                id: "features",
                label: "Features",
                // 기타 파라미터
            }, ...
        ]
    ~~~

    ~~~jsx {5} title="v1.4부터"
        [
            {
                id: "features",
                label: "Features",
                css: "green"
                // 기타 파라미터
            }, ...
        ]
    ~~~

- Kanban의 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 속성이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
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

    ~~~jsx {6-8} title="v1.4부터"
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
            // 기타 파라미터
        });
    ~~~

- [`items`](api/config/toolbar_items_config.md) 속성의 **sort** 컨트롤이 다음과 같이 변경되었습니다:

    ~~~jsx {} title="v1.4 이전"
        [
            { // 커스텀 sort 컨트롤
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

    ~~~jsx {6,11} title="v1.4부터"
        [
            { // 커스텀 sort 컨트롤
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

- Kanban의 [`api.getState()`](api/internal/js_kanban_getstate_method.md) 메서드가 변경되었습니다:

~~~jsx {25-27} title="v1.4 이전"
api.getState();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
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

~~~jsx {} title="v1.4부터"
api.getState();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
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

- Kanban의 [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성이 다음과 같이 변경되었습니다:

    - ***dateRange*** 파라미터

    ~~~jsx {} title="v1.3 이전"
        {
            type: "date", 
            key: "start_date",
            label: "Start date"
        },
        // 기타 파라미터
    ~~~

    ~~~jsx {} title="v1.3부터"
        {
            type: "dateRange", // 또는 "date" 타입도 사용 가능
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range"
        },
        // 기타 파라미터
    ~~~

- Toolbar의 [`items`](api/config/toolbar_items_config.md) 속성이 다음과 같이 변경되었습니다:

~~~jsx {} title="v1.3 이전"
items: [
    "search",
    "spacer",
    "sort",
    "addColumn",
    "addRow"
]
~~~

~~~jsx {4-5} title="v1.3부터"
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

- Kanban의 [`updateCard()`](api/methods/js_kanban_updatecard_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.3 이전"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*기타 파라미터*/
    }
});
~~~

~~~jsx {9} title="v1.3부터"
updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*기타 파라미터*/
    },
    replace: true
});
~~~

- Kanban의 [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.3 이전"
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

~~~jsx {9} title="v1.3부터"
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

- Kanban의 [`updateRow()`](api/methods/js_kanban_updaterow_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.3 이전"
updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
});
~~~

~~~jsx {7} title="v1.3부터"
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

- Kanban의 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성이 다음과 같이 변경되었습니다:

    - ***menu*** 파라미터

    ~~~jsx {} title="v1.2 이전"
    menu: true,
    //또는
    menu: { show: true }
    // 기타 파라미터
    ~~~

    ~~~jsx {5-14} title="v1.2부터"
    menu: true,
    // 또는
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
    // 기타 파라미터
    ~~~

    - ***users*** 파라미터

    ~~~jsx {7} title="v1.2 이전"
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
    // 기타 파라미터
    ~~~

    ~~~jsx {7} title="v1.2부터"
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
    // 기타 파라미터
    ~~~

    - ***start_date*** 및 ***end_date*** 파라미터

    ~~~jsx {} title="v1.2 이전"
    start_date: true,
    end_date: true,
    // 기타 파라미터
    ~~~

    ~~~jsx {3,7} title="v1.2부터"
    start_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    end_date: {
        show: true,
        format: "%d.%m.%Y"
    },
    // 기타 파라미터
    ~~~

- Kanban의 [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성이 다음과 같이 변경되었습니다:

~~~jsx {8} title="v1.2 이전"
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
// 기타 필드 설정
~~~

~~~jsx {8} title="v1.2부터"
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
// 기타 필드 설정
~~~

- Toolbar의 [`items`](api/config/toolbar_items_config.md) 속성이 다음과 같이 변경되었습니다:

~~~jsx {} title="v1.2 이전"
items: [
    "search",
    "controls"
]
~~~

~~~jsx {} title="v1.2부터"
items: [
    { // 또는 "search",
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
    { // 또는 "sort",
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

- Kanban의 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 및 Toolbar의 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.2 이전"
setLocale(kanban.en); // 기본 로케일로 리셋
~~~

~~~jsx {} title="v1.2부터"
setLocale(null); // 기본 로케일로 리셋
~~~

- Kanban의 [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.2 이전"
api.getReactiveState();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
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

~~~jsx {} title="v1.2부터"
api.getReactiveState();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
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

- Kanban의 [`api.getState()`](api/internal/js_kanban_getstate_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.2 이전"
api.getState();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
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

~~~jsx {} title="v1.2부터"
api.getState();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
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

- Kanban의 [`api.getStores()`](api/internal/js_kanban_getstores_method.md) 메서드가 변경되었습니다:

~~~jsx {} title="v1.2 이전"
api.getStores();
// 메서드는 다음 스토어 객체를 반환합니다
/*{
    state: StateStore, // ( object )
    data: DataStore // ( object )
}*/
~~~

~~~jsx {} title="v1.2부터"
api.getStores();
// 메서드는 다음 속성들을 포함한 객체를 반환합니다
/*{
    state: StateStore, // ( object )
}*/
~~~

### Localization

<details>
<summary>v1.2 이전</summary>

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
<summary>v1.2부터</summary>

~~~jsx {}
const en = {
    kanban: { // Kanban 라벨 번역
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
    calendar: { // 캘린더 번역 및 설정
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
    core: { // 코어 요소 번역
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~
</details>

## 1.0 -> 1.1

### Api

#### Properties

- [`columns`](api/config/js_kanban_columns_config.md) 속성이 신규 파라미터로 확장되었습니다. v1.1부터 ***collapsed, limit***, ***strictLimit*** 설정을 사용할 수 있습니다.

~~~jsx title="v1.1 이전"
const columns = [
    { 
        label: "Backlog", 
        id: "backlog"
    }, ...
];
~~~

~~~jsx {5-7,12} title="v1.1부터"
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
    // 기타 파라미터
});
~~~

- [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성의 ***color*** 파라미터가 변경되었습니다.

~~~jsx {4-7} title="v1.1 이전"
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

~~~jsx {4,9} title="v1.1부터"
const cardShape = {
    color: { 
        show: true,
        values: ["#65D3B3", "#FFC975", "#58C3FE"] 
    } 
};

new kanban.Kanban("#root", {
    cardShape
    // 기타 파라미터
});
~~~

#### Methods

- [`addColumn`](api/methods/js_kanban_addcolumn_method.md) 메서드(및 [`add-column`](api/events/js_kanban_addcolumn_event.md) 이벤트)가 변경되었습니다:

~~~jsx {} title="v1.1 이전"
addColumn(column_data_object);
~~~

~~~jsx {2-7} title="v1.1부터"
addColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: false,
        ...
    }
});
~~~

- [`addRow`](api/methods/js_kanban_addrow_method.md) 메서드(및 [`add-row`](api/events/js_kanban_addrow_event.md) 이벤트)가 변경되었습니다:

~~~jsx {} title="v1.1 이전"
addRow(row_data_object);
~~~

~~~jsx {2-7} title="v1.1부터"
addRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: false,
        ...
    }
});
~~~

- [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) 메서드(및 [`update-column`](api/events/js_kanban_updatecolumn_event.md) 이벤트)가 변경되었습니다:

~~~jsx {} title="v1.1 이전"
updateColumn(column_data_object);
~~~

~~~jsx {2-7} title="v1.1부터"
updateColumn({
    id: "backlog",
    column: {
        label: "Backlog",
        collapsed: true,
        ...
    }
});
~~~

- [`updateRow`](api/methods/js_kanban_updaterow_method.md) 메서드(및 [`update-row`](api/events/js_kanban_updaterow_event.md) 이벤트)가 변경되었습니다:

~~~jsx {} title="v1.1 이전"
updateRow(row_data_object);
~~~

~~~jsx {2-7} title="v1.1부터"
updateRow({
    id: "feature",
    row: {
        label: "Feature",
        collapsed: true,
        ...
    }
});
~~~

- [`updateCard`](api/methods/js_kanban_updatecard_method.md) 메서드(및 [`update-card`](api/events/js_kanban_updatecard_event.md) 이벤트)가 변경되었습니다:

~~~jsx {} title="v1.1 이전"
updateCard(card_data_object);
~~~

~~~jsx {2-7} title="v1.1부터"
updateCard({
    id: 1,
    card: {
        label: "Volvo XC 70",
        progress: 26
        ...
    }
});
~~~

- [`parse`](api/methods/js_kanban_parse_method.md) 메서드가 변경되었습니다:

~~~jsx {3-5,8-12} title="v1.1 이전"
// 새로운 데이터를 파싱하기 전에 초기 데이터를 리셋해야 합니다
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

~~~jsx {} title="v1.1부터"
// 새로운 데이터를 파싱하기 전에 초기 데이터를 리셋할 필요가 없습니다
const board = new kanban.Kanban("#root", {});

board.parse({
    columns,
    cards,
    rows
});
~~~