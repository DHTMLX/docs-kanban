---
sidebar_label: rowShape
title: Конфигурация rowShape
description: Конфигурация rowShape в JavaScript-библиотеке DHTMLX Kanban позволяет настроить внешний вид строк. Изучите руководства для разработчиков и справочник API, протестируйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# rowShape

### Описание

@short: Необязательно. Объект с настройками для кастомизации внешнего вида строк

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
                onClick?: ({ id, item, row }) => void
            }, {...} // другие данные элемента меню
        ] | ({ row, rowIndex, rows, store }) => array | boolean
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### Параметры

Для управления внешним видом строк объект **rowShape** поддерживает следующие опции:

- `menu` - (необязательно) настройки контекстного меню строки. Включает:
    - `show` - (необязательно) включает или отключает контекстное меню строки
    - `items` - (необязательно) массив объектов, определяющих пункты меню для строк. Каждый пункт может иметь:
        - `id` - (необязательно) ID пункта меню. Используйте эти значения для встроенных действий:
            - ***"set-edit"*** - разрешает редактирование имени строки
            - ***"move-row:up"*** - перемещает строку вверх
            - ***"move-row:down"*** - перемещает строку вниз
            - ***"delete-row"*** - удаляет строку

        - `icon` - (необязательно) имя класса иконки для пункта меню (например, *mdi-delete*)
        - `text` - (необязательно) подпись пункта меню
        - `disabled` - (необязательно) активен ли пункт меню или отключен (логическое значение)
        - `onClick` - (необязательно) пользовательская функция обратного вызова, получающая:
            - ***id*** - текущий ID пункта меню
            - ***item*** - данные текущего пункта меню
            - ***row*** - данные целевой строки

:::info
Параметр `items` также может быть пользовательской функцией с такими аргументами:

- ***row*** - данные текущей строки
- ***rowIndex*** - индекс текущей строки
- ***rows*** - массив всех строк
- ***store*** - объект *dataStore*

Эта функция предоставляет гибкость для настройки меню под конкретные строки или полного его отключения (возвращая *null* или *false*):

~~~jsx {}
    items: ({ row, rowIndex, rows, store }) => {
        if(rowIndex == 0)
            return null
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
        ]
    }
~~~
:::

- `css` - функция, возвращающая CSS-класс, который будет применён к строкам по условию
- `confirmDeletion` - (необязательно) включает или отключает диалог подтверждения при удалении строк

### Конфигурация по умолчанию

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, store }) => [
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
        items: ({ row, rowIndex, rows, store }) => {
            if (rowIndex == 0)
                return false
            return [
                {
                    id: "color",
                    text: "Цвет",
                    items: [
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
            ]
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

**Изменения:**
- Параметр ***css*** был добавлен в версии v1.4
- Параметр ***menu.items[0].label*** был переименован в ***menu.items[0].text*** в версии v1.4

**Связанные статьи:** [Конфигурация](/guides/configuration)

**Связанный пример:** [Kanban. Изменение цвета строк через кастомное меню](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)
