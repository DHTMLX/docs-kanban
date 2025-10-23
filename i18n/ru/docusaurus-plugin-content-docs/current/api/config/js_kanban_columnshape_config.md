---
sidebar_label: columnShape
title: Конфигурация columnShape
description: Вы можете узнать о конфигурации columnShape в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# columnShape

### Описание

@short: Необязательно. Объект настроек для управления внешним видом колонок

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
                onClick?: ({ id, item, column }) => void,
                data?: array // массив подэлементов меню
            }, 
            {...}
        ] | ({ column, columnIndex, columns, readonly }) => array | null
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

Для настройки внешнего вида колонок в объекте **columnShape** можно указать следующие параметры:

- `menu` - (необязательно) объект параметров контекстного меню колонок. Здесь можно указать следующие параметры:
    - `show` - (необязательно) включает/отключает контекстное меню колонки
    - `items` - (необязательно) массив объектов с параметрами элементов контекстного меню колонок. Для каждого элемента можно указать следующие параметры:
        - `id` - (необязательно) ID элемента меню. Для реализации встроенных действий необходимо указать следующие значения:
            - ***"add-card"*** - действие добавления новой карточки
            - ***"set-edit"*** - действие редактирования названия колонки
            - ***"move-column:left"*** - действие перемещения колонки влево
            - ***"move-column:right"*** - действие перемещения колонки вправо
            - ***"delete-column"*** - действие удаления колонки

        - `icon` - (необязательно) класс иконки элемента меню. Здесь можно указать любую иконку из икон-шрифтов (*mdi-delete*)
        - `text` - (необязательно) название элемента меню
        - `disabled` - (необязательно) состояние элемента меню (*активен* или *отключен* в зависимости от *boolean* значения)
        - `onClick` - (необязательно) пользовательская функция обратного вызова, принимающая следующие аргументы:
            - ***id*** - ID текущего элемента меню
            - ***item*** - объект данных текущего элемента меню
            - ***column*** - объект данных целевой колонки

        - `data` - (необязательно) массив объектов, представляющих подэлементы меню

    :::info
    Также параметр `menu.items` может быть задан в виде пользовательской функции, принимающей следующие аргументы:
    - ***column*** - объект данных текущей колонки
    - ***columnIndex*** - индекс текущей колонки
    - ***columns*** - массив объектов со всеми данными колонок
    - ***readonly*** - объект только для чтения с [свойствами состояния](api/internal/js_kanban_getstate_method.md)

    Эта функция позволяет настраивать меню для любой колонки или скрывать его для конкретной (возвращая *null* или *false*):

    ~~~jsx {}
    items: ({ column }) => {
        if(column.id === "inprogress"){
            return null;
        } 
        if (column.id === "backlog"){
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Переименовать" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "Удалить карточку"
                }
            ];
        }       
    }
    ~~~
    :::

- `fixedHeaders` - (необязательно) фиксирует заголовки колонок при вертикальной прокрутке (*true* по умолчанию). Прокрутка должна быть включена в самом Kanban (высота должна быть ограничена)
- `css` - (необязательно) функция, возвращающая CSS-класс, который применяется к колонкам условно
- `headerTemplate` - (необязательно) HTML-шаблон заголовка колонки в развернутом состоянии
- `collapsedTemplate` - (необязательно) HTML-шаблон заголовка колонки в свернутом состоянии
- `confirmDeletion` - (необязательно) отображает/скрывает **диалог подтверждения**, который позволяет пользователям подтвердить или отклонить удаление колонки

### Конфигурация по умолчанию

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, readonly }) => [
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
                data: [
                    { 
                        id:"yellow", 
                        text: "Желтый",
                        onClick: ({ column }) => changeColumnColor(column, "yellow")
                    },
                    { 
                        id:"red", 
                        text: "Красный",
                        onClick: ({ column }) => changeColumnColor(column, "red")
                    },
                    { 
                        id:"green", 
                        text: "Зеленый",
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
- Параметр ***css*** добавлен в версии 1.4
- Параметр ***menu.items[0].label*** устарел и заменён на ***menu.items[0].text*** в версии 1.4
- Параметр ***menu.items[0].items*** устарел и заменён на ***menu.items[0].data*** в версии 1.4
- Параметр ***fixedHeaders*** добавлен в версии 1.5
- Параметры ***headerTemplate*** и ***collapsedTemplate*** добавлены в версии 1.6
- Параметры ***menu.items[0].label*** и ***menu.items[0].items*** удалены в версии 1.7
- Функция ***menu.items*** обновлена: параметр **store** заменён на **readonly** в версии 1.7

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанные примеры:**
- [Kanban. Изменение цвета колонки через кастомное меню](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Фиксированные заголовки, ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Шаблон для заголовков колонок](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)