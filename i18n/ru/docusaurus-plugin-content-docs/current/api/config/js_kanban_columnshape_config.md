---
sidebar_label: columnShape
title: Конфигурация columnShape
description: Изучите конфигурацию columnShape в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочниками по API, протестируйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# columnShape

### Описание

@short: Необязательный объект настроек для кастомизации внешнего вида колонок

### Использование

~~~jsx {}
columnShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled?: boolean,
                onClick?: ({ id, item, column }) => void
            },
            {...}
        ] | ({ column, columnIndex, columns, store }) => array | boolean
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(column => {
        return "HTML-шаблон заголовка колонки в развернутом состоянии";
    }),
    collapsedTemplate?: template(column => {
        return "HTML-шаблон заголовка колонки в свернутом состоянии";
    }),
    confirmDeletion?: boolean
};
~~~

### Параметры

Для стилизации колонок объект **columnShape** поддерживает следующие опции:

- `menu` - (необязательно) настройки контекстного меню колонки. Включает:
    - `show` - (необязательно) включает или отключает контекстное меню колонки
    - `items` - (необязательно) массив элементов меню. Каждый элемент может содержать:
        - `id` - (необязательно) ID пункта меню. Используйте следующие значения для встроенных действий:
            - ***"add-card"*** - добавляет новую карточку
            - ***"set-edit"*** - редактирует название колонки
            - ***"move-column:left"*** - перемещает колонку влево
            - ***"move-column:right"*** - перемещает колонку вправо
            - ***"delete-column"*** - удаляет колонку
        - `icon` - (необязательно) класс иконки для пункта меню, например *mdi-delete*
        - `text` - (необязательно) подпись пункта меню
        - `disabled` - (необязательно) задаёт активность или неактивность пункта меню
        - `onClick` - (необязательно) коллбек с аргументами:
            - ***id*** - ID текущего пункта меню
            - ***item*** - объект данных текущего пункта меню
            - ***column*** - объект данных целевой колонки

:::info
Также можно задать `items` как функцию, принимающую:

- ***column*** - данные текущей колонки
- ***columnIndex*** - индекс текущей колонки
- ***columns*** - массив всех колонок
- ***store*** - объект *dataStore*

Это позволяет создавать кастомные меню для каждой колонки или скрывать меню для определённых колонок, возвращая *null* или *false*:

~~~jsx {}
    items: ({ column, columnIndex, columns, store }) => {
        if(column.id === "inprogress")
            return null

        if (column.id === "backlog")
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Переименовать" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "Удалить карточку"
                }
            ]
    }
~~~
:::

- `fixedHeaders` - (необязательно) фиксирует заголовки колонок при вертикальной прокрутке (*true* по умолчанию). Важно: прокрутка должна быть включена в Kanban (ограничена по высоте).
- `css` - (необязательно) функция, возвращающая CSS класс для условной стилизации колонки
- `headerTemplate` - (необязательно) HTML-шаблон заголовков колонок в развернутом состоянии
- `collapsedTemplate` - (необязательно) HTML-шаблон заголовков колонок в свернутом состоянии
- `confirmDeletion` - (необязательно) включает диалог подтверждения при удалении колонки

### Конфигурация по умолчанию

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, store }) => [
    { id: "add-card", icon: "wxi-plus", text: "Добавить новую карточку" },
    { id: "set-edit", icon: "wxi-edit", text: "Переименовать" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "Переместить влево",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "Переместить вправо",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", text: "Удалить" }
];
const columnShape = {
    menu: {
        show: true,
        items: getDefaultColumnMenuItems
    },
    fixedHeaders: true,
    confirmDeletion: true
};
~~~

### Пример

~~~jsx {1-58,64}
const columnShape = {
    menu: {
        show: true,
        items: [
            {
                id: "color",
                text: "Цвет",
                items: [
                    {
                        id:"yellow",
                        text: "Жёлтый",
                        onClick: ({ column }) => changeColumnColor(column, "yellow")
                    },
                    {
                        id:"red",
                        text: "Красный",
                        onClick: ({ column }) => changeColumnColor(column, "red")
                    },
                    {
                        id:"green",
                        text: "Зелёный",
                        onClick: ({ column }) => changeColumnColor(column, "green")
                    }
                ]
            }
        ]
    },
    fixedHeaders: false,
    css: (column, cards) => column.id == "inprogress" && cards.length < 5 ? "green" : "red",
    headerTemplate: template(column => {
        return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-label" data-action="rename">
                                ${escapeHTML(column.column.label)}
                                (${column.columnState.cardsCount})
                            </div>`
                        : ""
                }
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-menu" data-menu-id=${column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""
                }`;
    }),
    collapsedTemplate: template(column => {
        return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(column.column.label)} (${
                        column.columnState?.cardsCount
                    })</div>
                </div>`;
    }),
    confirmDeletion: true
};

new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    columnShape,
    // другие параметры
});
~~~

**История изменений:**
- Опция ***css*** добавлена в версии v1.4
- ***menu.items[0].label*** переименован в ***menu.items[0].text*** в версии v1.4
- Опция ***fixedHeaders*** добавлена в версии v1.5
- Опции ***headerTemplate*** и ***collapsedTemplate*** добавлены в версии v1.6

**Связанные статьи:** [Конфигурация](/guides/configuration)

**Связанные примеры:**
- [Kanban. Изменение цвета колонки через кастомное меню](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Фиксированные заголовки, ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Шаблон для заголовков колонок](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
