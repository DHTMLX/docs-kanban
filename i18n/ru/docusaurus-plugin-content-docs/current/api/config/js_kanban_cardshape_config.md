---
sidebar_label: cardShape
title: Конфигурация cardShape
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о конфигурации cardShape. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cardShape

### Описание

@short: Необязательно. Объект настроек для управления внешним видом карточек

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
                onClick?: ({ id, item, card }) => void,
                data?: array // массив подэлементов меню
            }, 
            {...}
        ] | ({ card, readonly }) => array | null
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // данные других пользователей
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
            {...} // данные других приоритетов
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
        {...} // данные других полей
    ]
};
~~~

### Параметры

:::info
В некоторых случаях параметр можно задать в **коротком** или **расширенном** виде. См. пример ниже:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // короткое значение
    label: true
    // или
    // полное значение
    label: { show: true }
~~~
:::

Для настройки внешнего вида карточек в объекте **cardShape** можно указать следующие параметры (поля):

- `label` - (необязательно) показать/скрыть поле **label**
- `description` - (необязательно) показать/скрыть поле **description**
- `progress` - (необязательно) показать/скрыть поле **progress**
- `attached` - (необязательно) показать/скрыть поле с **вложениями**
- `cover` - (необязательно) показать/скрыть **картинку карточки**
- `comments` - (необязательно) показать/скрыть **комментарии** к карточкам
- `confirmDeletion` - (необязательно) показать/скрыть **диалог подтверждения**, позволяющий пользователям подтвердить или отменить удаление карточки
- `start_date` - (необязательно) объект параметров для поля **дата начала**
    - `show` - (необязательно) показать/скрыть дату начала карточки
    - `format` - (необязательно) формат даты начала карточки. Доступные параметры описаны [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (необязательно) объект параметров для поля **дата окончания**
    - `show` - (необязательно) показать/скрыть дату окончания карточки
    - `format` - (необязательно) формат даты окончания карточки. Доступные параметры описаны [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (необязательно) объект параметров для **верхней цветной линии** карточки
    - `show` - (необязательно) показать/скрыть верхнюю цветную линию
    - `values` - (необязательно) массив допустимых HEX-кодов
- `menu` - (необязательно) объект параметров для **контекстного меню карточки**. Здесь можно указать следующие параметры:
    - `show` - (необязательно) включить/отключить контекстное меню карточки
    - `items` - (необязательно) массив объектов с параметрами пунктов меню карточки. Для каждого пункта можно указать следующие параметры:
        - `id` - (необязательно) ID пункта меню. Для реализации встроенных действий нужно указать следующие значения:
            - ***"set-edit"*** - действие редактирования названия карточки
            - ***"delete-card"*** - действие удаления карточки
        - `icon` - (необязательно) класс иконки пункта меню. Здесь можно указать любую иконку из икон-шрифтов (*mdi-delete*)
        - `text` - (необязательно) название пункта меню
        - `disabled` - (необязательно) состояние пункта меню (*активен* или *отключен* в зависимости от значения *boolean*)
        - `onClick` - (необязательно) пользовательская функция обратного вызова, принимающая аргументы:
            - ***id*** - ID текущего пункта меню
            - ***item*** - объект данных текущего пункта меню
            - ***card*** - объект данных целевой карточки
        - `data` - (необязательно) массив объектов, представляющих подменю

    :::info
    Также параметр `menu.items` можно задать в виде пользовательской функции, принимающей аргументы:
    - ***card*** - объект данных текущей карточки
    - ***readonly*** - объект с readonly [свойствами состояния](api/internal/js_kanban_getstate_method.md)

    Эта функция позволяет настроить меню для любой карточки или скрыть его для конкретной (возвращая *null* или *false*):

    ~~~jsx {}
    items: ({ card, readonly }) => {
        if (card.id === 1){
            return false;
        }  

        const menu = [];

        if (!readonly.delete){
            menu.push({ 
                id: "delete-card", icon: "wxi-delete", label: "Delete"
            });
        }
            
        if (!readonly.edit){
            menu.push({ 
                id: "set-edit", icon: "wxi-edit", label: "Edit"
            });
        }
        return menu.length ? menu : null;
    }
    ~~~
    :::

- `users` - (необязательно) объект параметров для поля **пользователи**
    - `show` - (необязательно) показать/скрыть назначенных пользователей
    - `values` - (обязательно) массив объектов с данными пользователей. Для каждого пользователя можно указать следующие параметры:
        - `id` - (обязательно) **ID** пользователя
        - `label` - (необязательно) имя пользователя
        - `avatar` - (необязательно) путь к аватару пользователя
    - `maxCount` - (необязательно) максимальное количество пользователей, отображаемых на карточке (или ***false***)

    Свойство `maxCount` можно установить в число пользователей, которые должны отображаться на карточке. Если `maxCount` равно `false`, на карточке будут видны все назначенные пользователи.

    :::info
    Поле ***users*** по умолчанию отключено. Чтобы включить его, нужно установить параметр `show` в `true` и предоставить соответствующие данные пользователей через параметр `values`. Для назначения новых пользователей через редактор необходимо настроить соответствующий контрол через свойство [`editorShape`](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types). Используйте тип ***select*** для назначения одного пользователя или ***multiselect*** для назначения нескольких.

    ~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // на карточке отображаются только 4 пользователя
        }
    }
    ~~~
    :::

- `priority` - (необязательно) объект параметров для поля **приоритет**
    - `show` - (необязательно) показать/скрыть приоритет карточки
    - `values` - (необязательно) массив объектов с данными приоритетов. Для каждого приоритета можно указать следующие параметры:
        - `id` - (обязательно) **ID** приоритета
        - `label` - (необязательно) имя приоритета
        - `color` - (обязательно) допустимый HEX-код
- `votes` - (необязательно) задаёт функционал **голосования**
    - `show` - (необязательно) показать/скрыть иконку голосования на карточке и в редакторе
    - `clickable` - (необязательно) делает иконку голосования на карточке кликабельной. Если `true`, пользователи могут голосовать за карточку, используя иконку голосования на карточке. Иначе голосовать можно только через иконку в редакторе
- `css` - функция, возвращающая CSS класс, который условно применяется к карточкам
- `headerFields` - (необязательно) массив объектов с данными **пользовательских полей**. Здесь можно указать следующие параметры:
    - `key` - (обязательно) ключ пользовательского поля. Используется при настройке редактора через свойство [editorShape](api/config/js_kanban_editorshape_config.md)
    - `label` - (необязательно) название пользовательского поля
    - `css` - (необязательно) CSS класс пользовательского поля

:::info
Если вы не зададите настройки карточек через свойство **cardShape**, виджет применит набор параметров **defaultCardShape** по умолчанию!
:::

### Конфигурация по умолчанию

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ readonly }: { readonly: DataStore }) => {
    const { readonly } = readonly.getState();
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
const users = [ // данные пользователей
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // данные приоритетов карточек
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // настройки карточек
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
        {   // пользовательское поле
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
- Параметры ***comments***, ***css*** и ***votes*** добавлены в версии 1.4
- Параметр ***menu.items[0].label*** устарел и заменён на ***menu.items[0].text*** в версии 1.4
- Параметр ***menu.items[0].items*** устарел и заменён на ***menu.items[0].data*** в версии 1.4
- Параметры ***users.maxCount*** и ***votes.clickable*** добавлены в версии 1.6
- Параметры ***menu.items[0].label*** и ***menu.items[0].items*** удалены в версии 1.7
- Функция ***menu.items*** обновлена. Параметр **store** заменён на **readonly** в версии 1.7

**Связанные статьи:** [Конфигурация](guides/configuration.md#cards)

**Связанные примеры:**
- [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Highlighting outdated and active tasks](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unlimited user assignments per task](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)