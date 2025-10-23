---
sidebar_label: items
title: Конфигурация items
description: Вы можете узнать о конфигурации элементов (Toolbar) в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# items

### Описание

@short: Необязательно. Массив с элементами управления, расположенными на Toolbar Kanban.

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

В массиве **items** вы можете указать следующие параметры:

:::info
#### Для установки *стандартной панели поиска* можно указать строку `"search"`.
#### Для установки *пользовательской панели поиска* можно указать объект со следующими параметрами:

- `type` - (обязательно) тип элемента управления (*"search"*)
- `options` - (необязательно) массив объектов, определяющих параметры поиска. Для каждого объекта (*опции поиска*) можно указать следующие параметры:
    - `id` - (обязательно) ключ поля карточки, по которому будет осуществляться поиск
    - `label` - (обязательно) название опции, используемое в выпадающем списке выбора в панели поиска
    - `searchRule` (необязательно) - пользовательская функция, позволяющая определить правила поиска. Принимает следующие аргументы:
        - ***card*** - объект с данными карточки
        - ***value*** - искомое значение, введённое в строку поиска
        - ***by*** - ключ поля карточки, по которому осуществляется поиск
- `resultTemplate` - (необязательно) шаблон для отображения пользовательского результата поиска

~~~jsx
items: [
    "search", // стандартная панель поиска
    // другие элементы управления
]

// или 

items: [
    { // пользовательская панель поиска
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
#### Для установки *стандартного элемента сортировки* можно указать строку `"sort"`.
#### Для установки *пользовательского элемента сортировки* можно указать объект со следующими параметрами:

- `type` - (обязательно) тип элемента управления (*"sort"*)
- `options` - (необязательно) массив объектов, определяющих параметры сортировки. Для каждого объекта (*опции сортировки*) можно указать следующие параметры:
    - `text` - (обязательно) название опции, используемое в выпадающем списке выбора сортировки
    - `by` - (необязательно) ключ поля карточки, по которому будет производиться сортировка. Этот параметр может быть строкой или функцией. Функция должна возвращать поле карточки для сортировки
    - `dir` - (необязательно) порядок сортировки. Возможные значения: *"asc"* и *"desc"*

~~~jsx
items: [
    "sort", // стандартный элемент сортировки
    // другие элементы управления
]
// или 
items: [
    { // пользовательский элемент сортировки
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

- `"spacer"` - пустое пространство между элементами управления
- `"undo"` - элемент управления для работы с историей (один клик — шаг назад)
- `"redo"` - элемент управления для работы с историей (один клик — шаг вперёд)
- `"addColumn"` - элемент управления для добавления новых колонок
- `"addRow"` - элемент управления для добавления новых строк
- `custom_control` - (необязательно) пользовательский элемент управления. Здесь можно указать пользовательские элементы как **строку**, так и **функцию**. Подробнее смотрите раздел [Customization](guides/customization.md#custom-toolbar)

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
- Параметр ***items.options[0].label*** элемента **sort** был заменён на ***items.options[0].text*** в версии v1.4
- Параметр ***items.searchResult*** элемента **"search"** был добавлен в версии v1.6

**Связанные статьи:** [Конфигурация](guides/configuration.md#toolbar) и [Настройка](guides/customization.md#custom-toolbar)

**Связанные примеры:**
- [Kanban. Пользовательский Toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Настройка подсказок в результатах поиска](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)