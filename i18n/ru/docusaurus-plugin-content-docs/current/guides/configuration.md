---
sidebar_label: Конфигурация
title: Конфигурация
description: Ознакомьтесь с возможностями настройки в документации по JavaScript-библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Конфигурация

Вы можете настраивать внешний вид и функциональность *Kanban* с помощью соответствующего API. Доступные параметры позволят вам:

- настроить внешний вид карточек через свойство [`cardShape`](api/config/js_kanban_cardshape_config.md)
- настроить поля редактора через свойство [`editorShape`](api/config/js_kanban_editorshape_config.md)
- настроить поведение редактора через свойство [`editor`](api/config/js_kanban_editor_config.md)
- настроить рендеринг и прокрутку через свойства [`renderType`](api/config/js_kanban_rendertype_config.md) и [`scrollType`](api/config/js_kanban_scrolltype_config.md)
- настроить историю Kanban через свойство [`history`](api/config/js_kanban_history_config.md)
- кастомизировать внешний вид карточек через свойство [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)
    - *Смотрите раздел [**Кастомизация**](guides/customization.md) для подробностей!*
- применить нужную локализацию через свойство [`locale`](api/config/js_kanban_locale_config.md)
    - *Смотрите раздел [**Локализация**](guides/localization.md) для подробностей!*
- загрузить данные для карточек, колонок, строк и связей через соответствующие свойства [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md) и [`links`](api/config/js_kanban_links_config.md)
    - *Смотрите раздел [**Работа с данными**](guides/working_with_data.md) для подробностей!*

## Карточки

Доска Kanban состоит из *карточек*, распределённых по *колонкам* и *строкам*. Вы можете настроить внешний вид карточек с помощью свойства конфигурации [`cardShape`](api/config/js_kanban_cardshape_config.md). Доступно несколько предустановленных полей, которые можно включить или исключить из шаблона карточки, а именно:

- метка карточки через конфиг `label: boolean`
- описание карточки через конфиг `description: boolean`

    :::tip
    Вы можете управлять полями **label** и **description** любой карточки через соответствующие поля редактора Kanban. Если эти поля активированы, соответствующие инпуты автоматически появятся в редакторе. Для их настройки используйте типы [**text** и **textarea**](#text-and-textarea-types).
    :::

- прогресс карточки через конфиг `progress: boolean`

    :::tip
    Вы можете управлять полем **progress** любой карточки через соответствующий контрол редактора Kanban. Если поле активировано, контрол появится в редакторе автоматически. Для настройки используйте тип [**progress**](#progress-type).
    :::

- дата начала через конфиг `start_date: boolean`
- дата окончания через конфиг `end_date: boolean`

    :::tip
    Вы можете управлять полями **start date** и **end date** любой карточки через соответствующие контролы редактора Kanban. Если поля активированы, контролы появятся в редакторе автоматически. Для их настройки используйте тип [**date**](#date-and-daterange-types).
    :::

- контекстное меню карточки через конфиг `menu: boolean`
- вложения карточки через конфиг `attached: boolean`

    :::tip
    Вы можете **прикреплять файлы** к любой карточке через соответствующее поле редактора Kanban. Для настройки этого поля используйте тип [**files**](#files-type).
    :::

- цвет карточки через конфиг `color: boolean`

    :::tip
    Вы можете управлять **верхней цветной полоской** любой карточки через соответствующий контрол редактора Kanban. При активации **color** контрол (**colorpicker**) появится в редакторе автоматически. Для настройки используйте тип [**color**](#color-type).
    :::

- обложка карточки (*превью-изображение*) через конфиг `cover: boolean`
- комментарии к карточке через конфиг `comments: boolean`
- диалог подтверждения удаления карточки через конфиг `confirmDeletion: boolean`
- голосование по карточке через конфиг `votes: boolean | { show: boolean, clicable: true }`
- назначение пользователей на карточку через конфиг `users: boolean | { show: boolean, values: object, maxCount: number | false }`

    :::tip
    Вы можете назначать одного или нескольких пользователей на любую карточку через соответствующий контрол редактора Kanban. Для назначения одного пользователя используйте типы редактора [**combo** или **select**](#combo-select-and-multiselect-types), для нескольких — [**multiselect**](#combo-select-and-multiselect-types).
    :::

- приоритет карточки через конфиг `priority: boolean | { show: boolean, values: object }`

    :::tip
    Вы можете управлять **приоритетом** любой карточки через соответствующий контрол редактора Kanban. Если **priority** активирован, контрол появится в редакторе автоматически. Для настройки используйте только типы [**combo** или **select**](#combo-select-and-multiselect-types).
    :::

- *кастомное поле* через конфиг `headerFields: [ { key: string, label: string, css: string } ]`

~~~jsx {12-35,42}
const users = [ // данные пользователей
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // данные приоритета карточек
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // настройки карточек
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
    // данные карточек
    columns,
    cards,
    // настройки карточек
    cardShape
});
~~~

:::note
Если вы не укажете настройки карточек через свойство [`cardShape`](api/config/js_kanban_cardshape_config.md), виджет применит набор параметров [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config)!
:::

## Редактор

:::info
Вы можете отображать редактор как **боковую панель** или **модальное окно** с помощью свойства [`editor.placement`](api/config/js_kanban_editor_config.md)!
:::

*Редактор* Kanban состоит из полей для управления данными карточек. Для настройки полей (контролов) редактора используйте свойство [`editorShape`](api/config/js_kanban_editorshape_config.md). Доступны следующие типы полей редактора:

- [**combo**, **select** и **multiselect**](#combo-select-and-multiselect-types)
- [**color**](#color-type)
- [**text** и **textarea**](#text-and-textarea-types)
- [**progress**](#progress-type)
- [**files**](#files-type)
- [**date** и **dataRange**](#date-and-daterange-types)
- [**comments**](#comments-type)
- [**links**](#links-type)

### Типы Combo, Select и Multiselect

Поля редактора типов **combo**, **select** и **multiselect** можно задать следующим образом:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // или "select" и "multiselect"
            key: "priority", // ключ "priority" используется при настройке свойства "cardShape"
            label: "Priority",
            values: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ]
        },
        // настройки других полей
    ]
});
~~~

:::info
Для поля редактора типа **"multiselect"** и **"combo"** вы также можете указать путь к превью-изображению через свойство **avatar**:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // или "combo"
        key: "users", // ключ "users" используется при настройке свойства "cardShape"
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
    // настройки других полей
]
~~~

[**Kanban. Ограничение назначения только одним пользователем**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Тип Color

Поле редактора типа **color** можно задать следующим образом:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // ключ "color" используется при настройке свойства "cardShape"
            label: "Card color",
            values: ["#65D3B3", "#FFC975", "#58C3FE"],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        // настройки других полей
    ]
});
~~~

### Типы Text и Textarea

Поля редактора типов **text** и **textarea** можно задать следующим образом:

~~~jsx {3-14}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "text", // или "textarea"
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
        // настройки других полей
    ]
});
~~~

### Тип Progress

Поле редактора типа **progress** можно задать следующим образом:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // ключ "progress" используется при настройке свойства "cardShape"
            label: "Progress",
            config: {
                min: 10,
                max: 90,
                step: 5
            }
        },
        // настройки других полей
    ]
});
~~~

### Тип Files

Поле редактора типа **files** можно задать следующим образом:

#### Настройка uploadURL как строки

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // ключ "attached" используется при настройке свойства "cardShape"
            label: "Attachment",
            uploadURL: url + "/uploads", // указать url как строку
            config: {
                accept: "image/*", // "video/*", "audio/*"
                disabled: false,
                multiple: true,
                folder: false
            }
        },
        // настройки других полей
    ]
});
~~~

#### Настройка uploadURL как функции

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
                        'Authorization': 'Bearer ' + token  // token или другие заголовки
                    }
                };

                return fetch(url + "/uploads", config) // URL
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
        }
    ]
});
~~~

### Типы Date и DateRange

Поле редактора типа **date** можно задать следующим образом:

~~~jsx {3-8}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date", 
            key: "start_date",
            label: "Start date",
            format: "%d/%m/%y"
        },
        // настройки других полей
    ]
});
~~~

Поле редактора типа **dateRange** можно задать следующим образом:

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
        // настройки других полей
    ]
});
~~~

### Тип Comments

Поле редактора типа **comments** можно задать следующим образом:

~~~jsx {3-13}
new kanban.Kanban("#root", {
    editorShape: [
       {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                dateFormat: "%M %d",
                placement: "page", // или "editor"
                html: true,
                confirmDeletion: true
            }
        },
        // настройки других полей
    ]
});
~~~

### Тип Links

Поле редактора типа **links** можно задать следующим образом:

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
        // настройки других полей
    ]
});
~~~

### Привязка полей редактора к полям карточки

:::info
Чтобы связать поле редактора с соответствующим полем карточки, укажите специальный **key** в объекте свойства [`editorShape`](api/config/js_kanban_editorshape_config.md) (`key: "editor_field_key"`). Значение этого ключа должно быть установлено в *true* в свойстве [`cardShape`](api/config/js_kanban_cardshape_config.md) (для встроенных полей карточки) или указано в массиве **headerFields** (для кастомных полей карточки). Начальные данные любого поля также можно задать через этот ключ.

~~~jsx {5,13,22,25,33-34,38-39,45-47}
// настройки редактора
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
// настройки карточек
const cardShape = {
    label: true, // ключ встроенного поля
    headerFields: [
        {
            key: "note", // ключ кастомного поля 
            label: "Note"
        }
    ]
};
// данные карточек
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
// создать Kanban
new kanban.Kanban("#root", {
    editorShape,
    cardShape,
    cards,
    columns
    // другие параметры конфигурации
});
~~~
:::

:::note
Если вы не укажете настройки редактора через свойство [`editorShape`](api/config/js_kanban_editorshape_config.md), виджет применит набор параметров [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config). В этом случае стандартные контролы и поля появятся в редакторе только после активации соответствующих полей карточек через свойство [`cardShape`](api/config/js_kanban_cardshape_config.md).
:::

### Настройка редактора

С помощью свойства [`editor`](api/config/js_kanban_editor_config.md) вы можете настроить редактор следующим образом:

- включить/отключить режим автосохранения редактора через свойство *`editor.autoSave`*
- указать задержку автосохранения данных через свойство *`editor.debounce`* (работает только с параметром ***autoSave: true***)

~~~jsx {6-9}
// создать Kanban
new kanban.Kanban("#root", {
    columns,
    cards,
    editorShape,
    editor: {
        autoSave: true,
        debounce: 2000
    }
    // другие параметры
});
~~~

## Toolbar

**Toolbar** Kanban состоит из строки поиска для *поиска карточек* и контролов для *сортировки карточек* и *добавления новых колонок и строк*. Для отображения Toolbar необходимо инициализировать его в отдельном контейнере с помощью конструктора **kanban.Toolbar()**.

~~~jsx {13}
// создать Kanban
const board = new kanban.Kanban("#root", {
    // данные
    columns,
    cards,
    rows,
    // настройки карточек
    cardShape,
    // настройки редактора
    editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

Вы можете управлять (*скрывать/отображать/кастомизировать*) контролами Toolbar с помощью свойства **items**:

~~~jsx {6-51}
// создать Kanban
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        { // кастомная строка поиска
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
        "spacer", // пустое пространство
        "undo", // контрол для отмены операций с карточками из истории
        "redo", // контрол для повтора операций с карточками из истории
        { // кастомный контрол сортировки
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
        "addColumn", // контрол для добавления новых колонок
        "addRow", // контрол для добавления новых строк
        // кастомные элементы
    ]
});
~~~

:::tip
Чтобы скрыть некоторые контролы Toolbar, удалите соответствующие строки из массива **items**.
:::

## Пример

В этом сниппете показано, как настроить **Карточки**, **Редактор** и **Toolbar** Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
