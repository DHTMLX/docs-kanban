---
sidebar_label: cardShape
title: Конфигурация cardShape
description: Изучите конфигурацию cardShape в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cardShape

### Описание

@short: Опционально. Объект настроек, который управляет внешним видом карточек.

### Использование

~~~jsx {}
cardShape?: {
    label?: boolean | { show?: boolean },
    description?: boolean | { show?: boolean },
    progress?: boolean | { show?: boolean },
    attached?: boolean | { show?: boolean },
    cover?: boolean | { show?: boolean },
    comments?: boolean | { show?: boolean },
    confirmDeletion?: boolean | { show?: boolean },
    start_date?: boolean | {
        show?: boolean,
        format?: string
    },
    end_date?: boolean | {
        show?: boolean,
        format?: string
    },
    color?: boolean | {
        show?: boolean,
        values?: array
    },
    menu?: boolean | {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, card }) => void
            },
            {...}
        ] | ({ card, store }) => array | boolean
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // другие данные пользователей
        ],
        maxCount?: number | false
    },
    priority?: boolean | {
        show?: boolean,
        values?: [
            {
                id: string | number,
                label?: string,
                color: string
            },
            {...} // другие данные приоритетов
        ]
    },
    votes?: boolean | {
        show?: boolean,
        clickable?: boolean
    },
    css?: (card) => string,
    headerFields?: [
        {
            key: string,
            label?: string,
            css?: string
        },
        {...} // другие данные полей
    ]
};
~~~

### Параметры

:::info
Иногда параметры можно задавать в **короткой** или **расширенной** форме. Например:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // короткая форма
    label: true
    // или
    // расширенная форма
    label: { show: true }
~~~
:::

Объект **cardShape** позволяет управлять отображением карточек, настраивая следующие поля:

- `label` - (опционально) включает или отключает видимость поля **label**
- `description` - (опционально) включает или отключает видимость поля **description**
- `progress` - (опционально) включает или отключает видимость поля **progress**
- `attached` - (опционально) включает или отключает видимость поля **вложений**
- `cover` - (опционально) включает или отключивает отображение **изображения карточки**
- `comments` - (опционально) включает или отключает отображение **комментариев** на карточках
- `confirmDeletion` - (опционально) включает или отключает **подтверждение удаления** карточки
- `start_date` - (опционально) настраивает поле **дата начала**
    - `show` - (опционально) включает или отключает отображение даты начала
    - `format` - (опционально) задаёт формат даты. Доступные варианты смотрите [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (опционально) настраивает поле **дата окончания**
    - `show` - (опционально) включает или отключает отображение даты окончания
    - `format` - (опционально) задаёт формат даты. Доступные варианты смотрите [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (опционально) настраивает **верхнюю цветную линию** карточки
    - `show` - (опционально) включает или отключает отображение цветной линии
    - `values` - (опционально) массив HEX-кодов цветов
- `menu` - (опционально) настраивает **контекстное меню карточки**
    - `show` - (опционально) включает или отключает контекстное меню
    - `items` - (опционально) массив объектов пунктов меню со следующими свойствами:
        - `id` - (опционально) идентификатор пункта меню. Используйте эти значения для встроенных действий:
            - ***"set-edit"*** - редактировать название карточки
            - ***"delete-card"*** - удалить карточку
        - `icon` - (опционально) класс иконки (например, *mdi-delete*)
        - `text` - (опционально) подпись пункта меню
        - `disabled` - (опционально) включает или отключает пункт меню
        - `onClick` - (опционально) функция обратного вызова, получающая:
            - ***id*** - ID пункта меню
            - ***item*** - данные пункта меню
            - ***card*** - данные целевой карточки

:::info
Также можно передать кастомную функцию для `items`, которая принимает:

- ***card*** - текущие данные карточки
- ***store*** - объект *dataStore*

Это позволяет кастомизировать или скрывать меню для конкретных карточек, возвращая *null* или *false*:

~~~jsx {}
    items: ({ card, store }) => {
        if(card.id === 1)
            return false
        return [
            { id: "set-edit", icon: "wxi-edit", label: "Edit" },
            { id: "delete-card", icon: "wxi-delete", label: "Delete" }
        ]
    }
~~~
:::

- `users` - (опционально) настраивает поле **пользователи**
    - `show` - (опционально) включает или отключает отображение назначенных пользователей
    - `values` - (обязательно) массив объектов пользователей:
        - `id` - (обязательно) ID пользователя
        - `label` - (опционально) имя пользователя
        - `avatar` - (опционально) путь к аватару пользователя
    - `maxCount` - (опционально) максимальное количество пользователей, отображаемых на карточке, или ***false*** для отображения всех

    Настройка `maxCount` управляет количеством отображаемых назначенных пользователей на карточке. Установка в `false` показывает всех назначенных пользователей.

:::info
Поле ***users*** по умолчанию выключено. Чтобы включить, установите `show` в `true` и предоставьте данные пользователей в `values`. Для назначения пользователей через редактор настройте соответствующий контрол в [`editorShape`](/api/config/js_kanban_editorshape_config.md#--параметры-для-типов-combo-select-и-multiselect). Используйте ***select*** для одного пользователя или ***multiselect*** для нескольких.

~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // ограничивает отображение 4 пользователями на карточке
        }
    }
~~~
:::

- `priority` - (опционально) настраивает поле **приоритет**
    - `show` - (опционально) включает или отключает отображение приоритета
    - `values` - (опционально) массив объектов приоритетов:
        - `id` - (обязательно) ID приоритета
        - `label` - (опционально) название приоритета
        - `color` - (обязательно) HEX-код цвета
- `votes` - (опционально) настраивает функцию **голосования**
    - `show` - (опционально) включает или отключает иконку голосования на карточках и в редакторе
    - `clickable` - (опционально) если `true`, пользователи могут голосовать, кликая по иконке на карточке; иначе голосование возможно только через редактор
- `css` - функция, возвращающая CSS-класс для условного стилизования карточек
- `headerFields` - (опционально) массив объектов, определяющих **кастомные поля**
    - `key` - (обязательно) ключ кастомного поля, используемый при настройке редактора через [editorShape](../js_kanban_editorshape_config)
    - `label` - (опционально) подпись кастомного поля
    - `css` - (опционально) CSS-класс для кастомного поля

:::info
Если вы не зададите опции карточек через **cardShape**, будут применены параметры по умолчанию из **defaultCardShape**.
:::

### Конфигурация по умолчанию

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ store }: { store: DataStore }) => {
    const { readonly } = store.getState();
    const baseItems = [
        { id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" },
        { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }
    ];

    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit-outline", text: "Edit" },
            ...baseItems,
        ];
    }
    return baseItems;
};

const defaultCardShape = {
    label: { show: true },
    description: { show: false },
    progress: { show: false },
    start_date: { show: false },
    end_date: { show: false },
    users: { show: false },
    confirmDeletion: { show: true },
    priority: {
        show: false,
        values: defaultPriorities
    },
    color: {
        show: false,
        values: defaultColors
    },
    cover: { show: false },
    attached: { show: false },
    menu: { show: true }
};
~~~

### Пример

~~~jsx {14-49,54}
const users = [ // пример данных пользователей
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // пример данных приоритетов
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // настройки отображения карточек
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    cover: false,
    comments: false,
    confirmDeletion: false,
    color: {
        show: true,
        values: cardColors
    },
    users: {
        show: true,
        values: users,
        maxCount: false
    },
    priority: {
        show: true,
        values: cardPriority
    },
    votes: {
        show: true,
        clickable: true
    },
    css: (card) => card.type == "feature" ? "green" : "red",
    headerFields: [
        {   // пример кастомного поля
            key: "sprint",
            css: "custom_style",
            label: "Sprint"
        }
    ]
};

new kanban.Kanban("#root", {
    cards,
    columns,
    cardShape,
    // другие параметры
});
~~~

**История изменений:**
- Опции ***comments***, ***css*** и ***votes*** добавлены в версии v1.4
- Опция ***menu.items[0].label*** была переименована в ***menu.items[0].text*** в версии v1.4
- Опции ***users.maxCount*** и ***votes.clickable*** добавлены в версии v1.6

**Связанные статьи:** [Конфигурация](/guides/configuration#карточки)

**Связанные примеры:**
- [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Highlighting outdated and active tasks](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unlimited user assignments per task](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)
