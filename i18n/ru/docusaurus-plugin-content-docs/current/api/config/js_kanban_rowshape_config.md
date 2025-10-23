---
sidebar_label: rowShape
title: Конфигурация rowShape
description: Вы можете узнать о конфигурации rowShape в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# rowShape

### Описание

@short: Необязательно. Объект настроек для управления внешним видом строк

### Использование

~~~jsx {}
rowShape?: {
    menu?: {
        show?: boolean, 
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void,
                data?: array // массив подменю элементов меню
            }, {...} // данные других элементов
        ] | ({ row, rowIndex, rows, readonly }) => array | null
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### Параметры

Для настройки внешнего вида строк в объекте **rowShape** можно указать следующие параметры:

- `menu` - (необязательно) объект параметров контекстного меню строк. Здесь можно указать следующие параметры:
    - `show` - (необязательно) включает/отключает контекстное меню строки
    - `items` - (необязательно) массив объектов с параметрами элементов контекстного меню строк. Для каждого элемента можно указать следующие параметры:
        - `id` - (необязательно) ID элемента меню. Для реализации встроенных действий необходимо указать следующие значения:
            - ***"set-edit"*** - определяет действие редактирования имени строки
            - ***"move-row:up"*** - определяет действие перемещения строки вверх
            - ***"move-row:down"*** - определяет действие перемещения строки вниз
            - ***"delete-row"*** - определяет действие удаления строки

        - `icon` - (необязательно) класс иконки элемента меню. Здесь можно указать любую иконку из икон шрифтов (*mdi-delete*)
        - `text` - (необязательно) название элемента меню
        - `disabled` - (необязательно) состояние элемента меню (*активен* или *отключен* в зависимости от *boolean* значения)
        - `onClick` - (необязательно) пользовательская функция обратного вызова, принимающая следующие аргументы:
            - ***id*** - ID текущего элемента меню
            - ***item*** - объект данных текущего элемента меню
            - ***row*** - объект данных целевой строки

        - `data` - (необязательно) массив объектов, представляющих подэлементы меню

    :::info
    Также параметр `menu.items` можно задать в виде пользовательской функции, которая принимает следующие аргументы:
    - ***row*** - объект данных текущей строки
    - ***rowIndex*** - индекс текущей строки
    - ***rows*** - массив объектов со всеми данными строк
    - ***readonly*** - объект с [readonly свойствами состояния](api/internal/js_kanban_getstate_method.md)

    Эта функция позволяет настраивать меню для любой строки или скрывать его для конкретной (возвращая *null* или *false*):

    ~~~jsx {}
    items: ({ rowIndex }) => {
        if(rowIndex == 0){
            return null;
        } else {
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Переименовать" },
                {
                    id: "custom-delete-row",
                    icon: "wxi-delete",
                    text: "Удалить строку"
                },
                {
                    id: "custom-move-row:up",
                    icon: "wxi-arrow-up",
                    text: "Переместить вверх"
                }
            ];
        }
    }
    ~~~
    :::

- `css` - функция, возвращающая css-класс, который применяется к строкам условно
- `confirmDeletion` - (необязательно) показывает/скрывает **диалог подтверждения**, который позволяет пользователям подтвердить или отменить удаление строки

### Конфигурация по умолчанию

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, readonly }) => [
    { id: "set-edit", icon: "wxi-edit", text: "Переименовать" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "Переместить вверх",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "Переместить вниз",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "Удалить" }
];
const rowShape = {
    menu: {
        show: true,
        items: getDefaultRowMenuItems
    },
    confirmDeletion: true
};
~~~

### Пример

~~~jsx {10-43,48}
const changeRowColor = (row, cssClass) => board.updateRow({ 
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
    menu: {
        show: true,
        items: ({ row, rowIndex, rows, readonly }) => {
            if (rowIndex == 0){
                return false;
            } else {
                return [
                    {
                        id: "color",
                        text: "Цвет",
                        data: [
                            { 
                                id:"gray", 
                                text: "Серый",
                                onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                            },
                            { 
                                id:"yellow", 
                                text: "Жёлтый",
                                onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                            },
                            { 
                                id:"red", 
                                text: "Красный",
                                onClick: ({ id, item, row }) => changeRowColor(row, "red")
                            }
                        ]
                    }
                ];
            }     
        }
    },
    css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red",
    confirmDeletion: false
};

new kanban.Kanban("#root", {
    cards,
    rows,
    rows,
    rowShape, 
    // другие параметры
});
~~~

**История изменений:**
- Параметр ***css*** был добавлен в версии v1.4
- Параметр ***menu.items[0].label*** устарел и был заменён на ***menu.items[0].text*** в версии v1.4
- Параметр ***menu.items[0].items*** устарел и был заменён на ***menu.items[0].data*** в версии v1.4
- Параметры ***menu.items[0].label*** и ***menu.items[0].items*** были удалены в версии v1.7
- Функция ***menu.items*** была обновлена. Параметр **store** был заменён на **readonly** в версии v1.7

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [Kanban. Изменение цвета строк через пользовательское меню](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)