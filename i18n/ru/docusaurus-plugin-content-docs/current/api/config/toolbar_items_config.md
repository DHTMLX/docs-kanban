---
sidebar_label: items
title: Конфигурация items
description: Изучите конфигурацию (Toolbar) items в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами разработчика, справочниками API, примерами кода, живыми демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# items

### Описание

@short: Необязательно. Массив, содержащий элементы управления, расположенные на панели инструментов Kanban.

### Использование

~~~jsx {}
items?: [
    "search" | {
        // параметры поиска
        type: "search",
        options?: [
            {
                id: string,
                label: string,
                searchRule?: (card, value, by) => {
                    return boolean
                }
            }, {...}
        ],
        resultTemplate?: template(searchResult => {
            return "HTML-шаблон результата поиска";
        }) 
    },
    "sort" | {
        // параметры сортировки
        type: "sort",
        options?: [
            {    
                text: string,
                by?: string, // by?: ((card: object) => any),
                dir?: "asc" | "desc"
            }, {...}
        ]  
    },
    "spacer",
    "undo",
    "redo",
    "addColumn",
    "addRow",
    custom_control // строка или функция
];
~~~

### Параметры

В массив **items** можно включать следующие параметры:

:::info
#### Чтобы добавить *стандартную строку поиска*, просто используйте строку `"search"`.
#### Для настройки *кастомной строки поиска* предоставьте объект со следующими параметрами:

- `type` - (обязательно) указывает тип элемента управления (*"search"*)
- `options` - (необязательно) массив, определяющий параметры поиска. Каждый объект (*опция поиска*) может содержать:
    - `id` - (обязательно) ключ поля карточки, по которому производится поиск
    - `label` - (обязательно) название опции, отображаемое в выпадающем списке поиска
    - `searchRule` (необязательно) - пользовательская функция, задающая критерии поиска. Принимает:
        - ***card*** - объект данных карточки
        - ***value*** - значение ввода поиска
        - ***by*** - ключ поля карточки, используемый для поиска
- `resultTemplate` - (необязательно) шаблон для настройки отображения результатов поиска

~~~jsx
items: [
    "search", // стандартная строка поиска
    // другие элементы управления
]

// или 

items: [
    { // кастомная строка поиска
        type: "search",
        options: [
            {
                id: "label",
                label: "По названию"
            },
            {
                id: "start_date",
                label: "По дате",
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
    // другие элементы управления
]
~~~
:::

:::info
#### Чтобы добавить *стандартный элемент сортировки*, просто используйте строку `"sort"`.
#### Для настройки *кастомного элемента сортировки* предоставьте объект со следующими параметрами:

- `type` - (обязательно) указывает тип элемента управления (*"sort"*)
- `options` - (необязательно) массив, определяющий параметры сортировки. Каждый объект (*опция сортировки*) может содержать:
    - `text` - (обязательно) название опции, отображаемое в выпадающем списке сортировки
    - `by` - (необязательно) ключ поля карточки или функция, используемая для сортировки
    - `dir` - (необязательно) направление сортировки, *"asc"* или *"desc"*

~~~jsx
items: [
    "sort", // стандартный элемент сортировки
    // другие элементы управления
]
// или 
items: [
    { // кастомный элемент сортировки
        type: "sort",
        options: [
            {
                text: "Сортировать по названию",
                by: "label",
                dir: "asc"
            },
            {
                text: "Сортировать по описанию",
                by: "description",
                dir: "desc"
            }
        ]
    }, {...} // другие элементы управления
]
~~~
:::

- `"spacer"` - вставляет пустое пространство между элементами управления
- `"undo"` - элемент управления для отмены действий (один клик - шаг назад)
- `"redo"` - элемент управления для повторения действий (один клик - шаг вперед)
- `"addColumn"` - элемент управления для добавления новых колонок
- `"addRow"` - элемент управления для добавления новых строк
- `custom_control` - (необязательно) кастомный элемент управления, который может быть **строкой** или **функцией**. Подробнее см. в разделе [Customization](/guides/customization#кастомный-toolbar).

### Пример

~~~jsx {8-24}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        {
            type: "search",
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer",
        "sort",
        "undo",
        "redo", 
        "addColumn",
        "addRow"
    ]
});
~~~

**История изменений:**

- Элементы *"Undo"* и *"Redo"* были добавлены в версии v1.3
- Параметр ***items.options[0].label*** в элементе **sort** был переименован в ***items.options[0].text*** в версии v1.4
- Параметр ***items.searchResult*** для элемента **"search"** был добавлен в версии v1.6

**Связанные статьи:** [Конфигурация](/guides/configuration#панель-инструментов) и [Кастомизация](/guides/customization#кастомный-toolbar)

**Связанные примеры:**
- [Kanban. Кастомная панель инструментов](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Кастомизация подсказок в результатах поиска](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)
