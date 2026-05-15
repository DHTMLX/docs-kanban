---
sidebar_label: Конфигурация
title: Конфигурация
description: Ознакомьтесь с возможностями настройки в документации по JavaScript-библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Конфигурация

Вы можете настраивать внешний вид и функциональность Kanban с помощью следующих свойств:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — настройка внешнего вида карточек и встроенных полей
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — определение полей редактора
- [`editor`](api/config/js_kanban_editor_config.md) — управление видимостью редактора, автосохранением и расположением
- [`renderType`](api/config/js_kanban_rendertype_config.md), [`scrollType`](api/config/js_kanban_scrolltype_config.md) — настройка рендеринга карточек и прокрутки доски
- [`history`](api/config/js_kanban_history_config.md) — управление историей операций с карточками
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — кастомизация внешнего вида карточек (см. раздел [Кастомизация](guides/customization.md))
- [`locale`](api/config/js_kanban_locale_config.md) — применение локализации (см. раздел [Локализация](guides/localization.md))
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — загрузка данных для карточек, колонок, строк и связей (см. раздел [Работа с данными](guides/working_with_data.md))

## Карточки {#cards}

Доска Kanban состоит из карточек, распределённых по колонкам и строкам. Используйте свойство [`cardShape`](api/config/js_kanban_cardshape_config.md) для настройки внешнего вида карточек и встроенных полей:

- `label: boolean | { show }` — метка карточки, редактируется с помощью типа [`text`](#типы-text-и-textarea)
- `description: boolean | { show }` — описание карточки, редактируется с помощью типа [`textarea`](#типы-text-и-textarea)
- `progress: boolean | { show }` — прогресс карточки, редактируется с помощью типа [`progress`](#тип-progress)
- `start_date: boolean | { show, format }` — дата начала карточки, редактируется с помощью типа [`date`](#типы-date-и-daterange)
- `end_date: boolean | { show, format }` — дата окончания карточки, редактируется с помощью типа [`date`](#типы-date-и-daterange)
- `menu: boolean | { show, items }` — контекстное меню карточки
- `attached: boolean | { show }` — вложения карточки, редактируются с помощью типа [`files`](#тип-files)
- `color: boolean | { show, values }` — верхняя цветная полоска карточки, редактируется с помощью типа [`color`](#тип-color)
- `cover: boolean | { show }` — превью-изображение карточки
- `comments: boolean | { show }` — комментарии к карточке
- `confirmDeletion: boolean | { show }` — диалог подтверждения удаления карточки
- `votes: boolean | { show, clickable }` — голосование по карточке
- `users: boolean | { show, values, maxCount }` — пользователи, назначенные на карточку, редактируются с помощью типов [`combo`, `select` или `multiselect`](#типы-combo-select-и-multiselect)
- `priority: boolean | { show, values }` — приоритет карточки, редактируется с помощью типа [`combo` или `select`](#типы-combo-select-и-multiselect)
- `css: (card) => string` — функция, возвращающая CSS-класс, применяемый к карточке по условию
- `headerFields: [{ key, label, css }]` — кастомные поля карточки

:::tip
При активации поля в `cardShape` редактор автоматически отображает соответствующий контрол. Настройте каждый контрол через свойство [`editorShape`](api/config/js_kanban_editorshape_config.md) — доступные типы описаны в разделе [Редактор](#editor).
:::

Следующий пример настраивает карточки с кастомными пользователями, приоритетами и кастомным полем заголовка:

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
Если вы не укажете настройки карточек через свойство [`cardShape`](api/config/js_kanban_cardshape_config.md), виджет применит набор параметров [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config).
:::

## Редактор {#editor}

Редактор Kanban содержит поля для управления данными карточек. Используйте свойство [`editorShape`](api/config/js_kanban_editorshape_config.md) для настройки полей редактора. Доступны следующие типы полей:

- [`combo`, `select`, `multiselect`](#типы-combo-select-и-multiselect) — выпадающие списки
- [`color`](#тип-color) — выбор цвета
- [`text`, `textarea`](#типы-text-и-textarea) — текстовые поля
- [`progress`](#тип-progress) — слайдер прогресса
- [`files`](#тип-files) — загрузчик файлов
- [`date`, `dateRange`](#типы-date-и-daterange) — одиночная дата или диапазон дат
- [`comments`](#тип-comments) — комментарии к карточке
- [`links`](#тип-links) — связи карточки

:::info
Отображайте редактор как боковую панель или модальное окно с помощью свойства [`editor.placement`](api/config/js_kanban_editor_config.md).
:::

### Типы Combo, Select и Multiselect

Следующий пример настраивает выпадающий список для выбора приоритета карточки:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // или "select" и "multiselect"
            key: "priority", // используйте ключ "priority" в свойстве "cardShape"
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
Для полей типа `multiselect` и `combo` укажите путь к превью-изображению через свойство `avatar`:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // или "combo"
        key: "users", // используйте ключ "users" в свойстве "cardShape"
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

Следующий пример настраивает поле редактора для выбора цвета карточки:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // используйте ключ "color" в свойстве "cardShape"
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

Следующий пример настраивает поле редактора для ввода метки карточки:

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

Следующий пример настраивает поле редактора для установки прогресса карточки:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // используйте ключ "progress" в свойстве "cardShape"
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

Укажите строку в параметре `uploadURL` для базовой загрузки или функцию для кастомного запроса.

#### Настройка uploadURL как строки

Следующий пример использует строковый URL для загрузчика файлов:

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // используйте ключ "attached" в свойстве "cardShape"
            label: "Attachment",
            uploadURL: url + "/uploads", // указать URL как строку
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

Передайте функцию в `uploadURL` для добавления кастомных заголовков, токенов или обработки ответа. Следующий пример отправляет каждый файл с токеном авторизации:

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
                            return { id: rec.id, ...data };
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

Следующий пример настраивает поле редактора для одиночной даты:

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

Следующий пример настраивает поле редактора для диапазона дат начала и окончания:

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

Следующий пример настраивает поле комментариев редактора:

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

Следующий пример настраивает поле связей редактора:

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

Каждое поле редактора связывается с полем карточки через общий `key`. Укажите одинаковое значение `key` в записи [`editorShape`](api/config/js_kanban_editorshape_config.md) и в свойстве [`cardShape`](api/config/js_kanban_cardshape_config.md). Для встроенных полей карточки установите ключ в `true`. Для кастомных полей перечислите ключ в массиве `headerFields`. Этот же ключ предоставляет начальные данные карточки.

Следующий пример привязывает поля редактора `label` и `note` к соответствующим полям карточки:

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

:::note
Если вы не укажете настройки редактора через свойство [`editorShape`](api/config/js_kanban_editorshape_config.md), виджет применит набор параметров [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config). Стандартные контролы и поля появятся в редакторе только после активации соответствующих полей карточек через свойство [`cardShape`](api/config/js_kanban_cardshape_config.md).
:::

### Настройка редактора {#configure-editor-behavior}

Свойство [`editor`](api/config/js_kanban_editor_config.md) управляет видимостью редактора, автосохранением и расположением:

- [`editor.show`](api/config/js_kanban_editor_config.md) — включить или отключить редактор
- [`editor.placement`](api/config/js_kanban_editor_config.md) — отображать редактор как `"sidebar"` или `"modal"` окно
- [`editor.autoSave`](api/config/js_kanban_editor_config.md) — включить или отключить режим автосохранения
- [`editor.debounce`](api/config/js_kanban_editor_config.md) — задержка перед автосохранением (применяется только с `autoSave: true`)

Следующий пример включает автосохранение с задержкой 2 секунды:

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

## Рендеринг и прокрутка

По умолчанию виджет Kanban рендерит все карточки и прокручивает всю доску целиком. Для досок с большим количеством карточек переключитесь на ленивый рендеринг или прокрутку по колонкам:

- [`renderType`](api/config/js_kanban_rendertype_config.md) — установите значение `"lazy"` для рендеринга только видимых на доске карточек
- [`scrollType`](api/config/js_kanban_scrolltype_config.md) — установите значение `"column"` для независимой прокрутки каждой колонки

Следующий пример включает ленивый рендеринг и прокрутку по колонкам:

~~~jsx {5-7}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    scrollType: "column",
    cardHeight: 150
});
~~~

:::important
При совместном использовании `renderType: "lazy"` с любым `scrollType` задайте статическую высоту карточек через свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md). Без `cardHeight` ленивый рендеринг не отображает карточки корректно.
:::

## История изменений

Kanban отслеживает операции с карточками и предоставляет контролы отмены и повтора действий на Toolbar. Используйте свойство [`history`](api/config/js_kanban_history_config.md) для отключения этого поведения.

Следующий пример отключает отслеживание истории:

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false
});
~~~

:::tip
Чтобы исключить отдельные операции из истории, передайте параметр [`$meta`](api/common/js_kanban_meta_parameter.md) в методы или события.
:::

## Toolbar

Toolbar Kanban предоставляет строку поиска, контролы сортировки и контролы для добавления колонок и строк. Инициализируйте Toolbar в отдельном контейнере с помощью конструктора `kanban.Toolbar()`.

Следующий пример создаёт Toolbar, привязанный к экземпляру Kanban:

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

Используйте свойство [`items`](api/config/toolbar_items_config.md) для отображения, скрытия или кастомизации контролов Toolbar. Следующий пример задаёт кастомную строку поиска, контролы отмены и повтора, кастомную сортировку и контролы колонок и строк:

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
        "undo", // отмена операций с карточками из истории
        "redo", // повтор операций с карточками из истории
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
Удалите контрол из массива `items`, чтобы скрыть его.
:::

## Пример

Следующий сниппет настраивает карточки, редактор и Toolbar Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
