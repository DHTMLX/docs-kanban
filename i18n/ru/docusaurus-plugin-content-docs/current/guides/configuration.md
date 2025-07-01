---
sidebar_label: Конфигурация
title: Конфигурация
description: Ознакомьтесь с документацией по настройке библиотеки DHTMLX JavaScript Kanban. Читайте руководства для разработчиков и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Конфигурация

Виджет *Kanban* можно настраивать как по внешнему виду, так и по функционалу с помощью его API. Доступно множество параметров, которые можно изменить, например:

- Настройте внешний вид карточек с помощью свойства [`cardShape`](/api/config/js_kanban_cardshape_config.md)
- Определите поля редактора через свойство [`editorShape`](/api/config/js_kanban_editorshape_config.md)
- Управляйте поведением редактора с помощью свойства [`editor`](/api/config/js_kanban_editor_config.md)
- Контролируйте рендеринг и прокрутку через [`renderType`](/api/config/js_kanban_rendertype_config.md) и [`scrollType`](/api/config/js_kanban_scrolltype_config.md)
- Ведите учет изменений с помощью свойства [`history`](/api/config/js_kanban_history_config.md)
- Персонализируйте карточки с помощью свойства [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md)
    - *(Раздел [**Кастомизация**](/guides/customization.md) подробно раскрывает этот вопрос)*
- Измените язык с помощью свойства [`locale`](/api/config/js_kanban_locale_config.md)
    - *(См. раздел [**Локализация**](/guides/localization.md) для подробностей)*
- Загружайте данные карточек, колонок, строк и связей через соответствующие свойства [`cards`](/api/config/js_kanban_cards_config.md), [`columns`](/api/config/js_kanban_columns_config.md), [`rows`](/api/config/js_kanban_rows_config.md) и [`links`](/api/config/js_kanban_links_config.md)
    - *(Подробнее см. в разделе [**Работа с данными**](/guides/working_with_data.md))*

## Карточки

В Kanban карточки структурированы по колонкам и строкам. Вы можете управлять их отображением и содержимым с помощью свойства [`cardShape`](/api/config/js_kanban_cardshape_config.md). Доступно несколько встроенных полей, которые можно включать или скрывать:

- Название карточки с помощью опции `label: boolean`
- Описание карточки с помощью опции `description: boolean`

:::tip
Оба поля - **label** и **description** - можно редактировать через редактор Kanban. Если они включены, соответствующие поля ввода появятся автоматически. Эти поля задаются через типы [**text** и **textarea**](#типы-text-и-textarea).
:::

- Индикатор прогресса через `progress: boolean`

:::tip
Поле **progress** также доступно для редактирования через редактор Kanban. Если оно включено, элемент управления появляется автоматически. Это настраивается через тип [**progress**](#тип-progress).
:::

- Дата начала через `start_date: boolean`
- Дата окончания через `end_date: boolean`

:::tip
Поля **start date** и **end date** управляются контролами редактора Kanban. Если поля активны - контролы появятся автоматически. Для их настройки используйте тип [**date**](#типы-date-и-daterange).
:::

- Контекстное меню карточки через `menu: boolean`
- Вложения с помощью `attached: boolean`

:::tip
К карточкам можно прикреплять файлы через редактор Kanban. Это реализовано с помощью типа [**files**](#тип-files).
:::

- Цвет карточки через `color: boolean`

:::tip
**Верхняя цветная линия** карточки управляется контролом редактора Kanban. Если включено **color**, автоматически появится цветовой селектор. Используется тип [**color**](#тип-color).
:::

- Обложка карточки (превью) через `cover: boolean`
- Комментарии к карточкам через `comments: boolean`
- Диалог подтверждения удаления карточек с помощью `confirmDeletion: boolean`
- Голосование по карточкам через `votes: boolean | { show: boolean, clicable: true }`
- Назначение пользователей через `users: boolean | { show: boolean, values: object, maxCount: number | false }`

:::tip
Назначение пользователей на карточки осуществляется через контрол редактора Kanban. Для выбора только одного пользователя используйте типы [**combo** или **select**](#типы-combo-select-и-multiselect). Для выбора нескольких - [**multiselect**](#типы-combo-select-и-multiselect).
:::

- Поле приоритета через `priority: boolean | { show: boolean, values: object }`

:::tip
Приоритет карточки настраивается через контрол редактора Kanban. При включении **priority** контрол появляется автоматически. Здесь используются только типы [**combo** или **select**](#типы-combo-select-и-multiselect).
:::

- *Пользовательские поля* можно добавить в `headerFields: [ { key: string, label: string, css: string } ]`

~~~jsx {12-35,42}
const users = [ // данные пользователей
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // данные приоритетов
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
Если вы не определите собственные настройки карточек через [`cardShape`](/api/config/js_kanban_cardshape_config.md), Kanban использует настройки [**defaultCardShape**](/api/config/js_kanban_cardshape_config.md#конфигурация-по-умолчанию)!
:::

## Редактор

:::info
Редактор можно отобразить как **боковую панель** или **модальное окно** с помощью свойства [`editor.placement`](/api/config/js_kanban_editor_config.md)!
:::

*Редактор* Kanban - место, где управляются детали карточки. Настроить, какие поля будут отображаться в редакторе, можно с помощью свойства [`editorShape`](/api/config/js_kanban_editorshape_config.md). Доступные типы полей:

- [**combo**, **select** и **multiselect**](#типы-combo-select-и-multiselect)
- [**color**](#тип-color)
- [**text** и **textarea**](#типы-text-и-textarea)
- [**progress**](#тип-progress)
- [**files**](#тип-files)
- [**date** и **dataRange**](#типы-date-и-daterange)
- [**comments**](#тип-comments)
- [**links**](#тип-links)

### Типы Combo, Select и Multiselect

Поля редактора этих типов настраиваются так:

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
Для полей редактора типа **"multiselect"** и **"combo"** можно добавить превью-изображение, указав свойство **avatar**:

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

Чтобы добавить селектор цвета в редактор, используйте:

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

Для добавления текстовых полей или многострочных вводов:

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

Индикаторы прогресса настраиваются так:

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

Загрузку файлов в редактор можно настроить двумя способами:

#### Передача Upload Url строкой

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files",
            key: "attached", // ключ "attached" используется при настройке свойства "cardShape"
            label: "Attachment",
            uploadURL: url + "/uploads", // строка URL
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

#### Передача Upload Url функцией

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
                        'Authorization': 'Bearer ' + token  // токен или другие заголовки
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

Добавление выбора даты или диапазона дат:

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

Для диапазона дат:

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

Добавление поля комментариев в редактор:

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

Для возможности добавлять ссылки в редактор используйте:

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
Чтобы связать поле редактора с полем карточки, используйте **key** в объекте [`editorShape`](/api/config/js_kanban_editorshape_config.md) (`key: "editor_field_key"`). Для встроенных полей карточки убедитесь, что этот ключ включён (значение *true*) в [`cardShape`](/api/config/js_kanban_cardshape_config.md). Для пользовательских полей добавьте его в массив **headerFields**. Также можно задать начальное значение для любого поля с этим ключом.

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
            key: "note", // ключ пользовательского поля
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
// создание Kanban
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
Если настройки редактора не определены через [`editorShape`](/api/config/js_kanban_editorshape_config.md), виджет использует [**defaultEditorShape**](/api/config/js_kanban_editorshape_config.md#конфигурация-по-умолчанию). Тогда поля и элементы управления появятся только для включённых полей карточки в [`cardShape`](/api/config/js_kanban_cardshape_config.md).
:::

### Настройка редактора

Настроить поведение редактора можно через свойство [`editor`](/api/config/js_kanban_editor_config.md):

- Включить или выключить автосохранение с помощью *`editor.autoSave`*
- Указать задержку автосохранения через *`editor.debounce`* (работает только при ***autoSave: true***)

~~~jsx {6-9}
// создание Kanban
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

## Панель инструментов

**Панель инструментов** Kanban включает строку поиска (для поиска карточек), элементы сортировки и кнопки для добавления новых колонок или строк. Для использования Toolbar инициализируйте её в отдельном контейнере через **kanban.Toolbar()**.

~~~jsx {13}
// создание Kanban
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

Элементы Toolbar можно показать, скрыть или изменить с помощью свойства **items**:

~~~jsx {6-51}
// создание Kanban
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
        { // кастомная сортировка
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
        "addColumn", // добавление новых колонок
        "addRow", // добавление новых строк
        // дополнительные элементы
    ]
});
~~~

:::tip
Чтобы скрыть некоторые элементы Toolbar, просто уберите соответствующие строки из массива **items**.
:::

## Пример

Ниже пример настройки **Карточек**, **Редактора** и **Панели инструментов** для Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
