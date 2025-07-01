---
sidebar_label: editorShape
title: Конфигурация editorShape
description: Изучите конфигурацию editorShape в документации библиотеки DHTMLX JavaScript Kanban. Найдите руководства для разработчиков, справочники по API, примеры кода, живые демо и получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# editorShape

### Описание

@short: Необязательно. Массив объектов, определяющих настройки для управления внешним видом и поведением редактора Kanban.

### Использование

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // общие параметры для всех типов
        type: string,
        key: string,
        label?: string,

        // только для типа "dateRange"
        key: {
            start: string,
            end: string
        },
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            done?: boolean,
            error?: boolean,
            format?: string,
            months?: number,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // только для типа "date"
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            error?: boolean,
            format?: string,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // только для типа "color"
        values?: array,
        config?: {
            clear?: boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string
        },

        // только для типов "combo", "select" и "multiselect"
        values?: [
            {
                id: string | number,
                label: string,
                avatar?: string // только для типа "multiselect"
            },
            {...} // другие опции
        ],
        config?: {
            clearButton?: boolean, // только для типа "combo"
            label?: string, // только для типа "select"
            checkboxes?: boolean, // только для типа "multiselect"
            // общие параметры
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            textField?: string,
            title?: string
        },

        // только для типа "text"
        config?: {
            css?: string,
            disabled?: boolean,
            error?: boolean,
            focus?: boolean,
            icon?: string,
            inputStyle?: string,
            placeholder?: string,
            readonly?: boolean,
            select?: boolean,
            title?: string,
            type?: string
        },

        // только для типа "textarea"
        config? {
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string,
            readonly?: boolean
        },

        // только для типа "progress"
        config?: {
            disabled?: boolean,
            label?: string,
            max?: number,
            min?: number,
            step?: number,
            title?: string,
            width?: number
        },

        // только для типа "files"
        uploadURL?: string | function,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean,
        },

        // только для типа "comments"
        config?: {
            format?: string,
            placement?: "page" | "editor",
            html?: boolean,
            confirmDeletion?: boolean
        },

        // только для типа "links"
        config?: {
            confirmDeletion?: boolean
        },
    }, { /* другие настройки контролов */ }
];
~~~

### Параметры

Внешний вид и функциональность редактора можно настроить с помощью следующих параметров (полей):

#### - Общие параметры для всех типов

- `type` - (обязательный) задаёт тип поля редактора.

:::important
Поддерживаемые типы полей в редакторе Kanban: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments** и **links**.
:::

- `key` - (обязательный) ключ для поля редактора. Должен совпадать со значением, указанным в свойстве [`cardShape`](../js_kanban_cardshape_config). Пример:

~~~js {8,17}
    // настройки внешнего вида карточки
    const cardShape = {
        ...kanban.defaultCardShape,
        headerFields: [
            { // пользовательское поле
                label: "Пользовательское поле",
                css: "custom_style",
                key: "custom_key"
            }
        ]
    };
    // настройки внешнего вида редактора
    const editorShape = [
        {
            label: "Пользовательское поле",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (необязательно) название поля редактора.

#### - Параметры для типа "dateRange"

- `key` - (обязательный) объект с ключами для поля редактора:
    - `start` - (обязательный) ключ начала периода
    - `end` - (обязательный) ключ конца периода

:::important
Эти ключи соответствуют тем, что используются в свойстве [`cardShape`](../js_kanban_cardshape_config).
:::

- `config` - (необязательно) объект конфигурации для поля **"dateRange"** с опциями:
    - `align` - (необязательно) выравнивание всплывающего календаря относительно контрола выбора периода
    - `editable` - (необязательно) управление возможностью редактирования даты; также можно задать свой формат
    - `buttons` - (необязательно) отображение кнопок "Сегодня" и "Очистить" под календарём
    - `css` - (необязательно) позиционирование иконки в контроле выбора периода
    - `disabled` - (необязательно) отключение контрола выбора периода
    - `done` - (необязательно) отображение кнопки "Готово" в контроле
    - `error` - (необязательно) применение стиля ошибки
    - `format` - (необязательно) формат даты. Доступные варианты смотрите [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - (необязательно) количество отображаемых календарей
    - `placeholder` - (необязательно) текст-заполнитель
    - `title` - (необязательно) тултип или заголовок
    - `width` - (необязательно) ширина всплывающего календаря

#### - Параметры для типа "date"

- `config` - (необязательно) объект конфигурации для поля **"date"** с опциями:
    - `align` - (необязательно) выравнивание всплывающего календаря относительно контрола даты
    - `editable` - (необязательно) возможность редактирования даты; можно указать формат
    - `buttons` - (необязательно) показывать или скрывать кнопки "Сегодня" и "Очистить"
    - `css` - (необязательно) позиционирование иконки
    - `disabled` - (необязательно) отключение контрола
    - `error` - (необязательно) применение стиля ошибки
    - `format` - (необязательно) формат даты. Подробнее [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (необязательно) текст-заполнитель
    - `title` - (необязательно) тултип или заголовок
    - `width` - (необязательно) ширина календаря

#### - Параметры для типа "color"

- `values` - (необязательно) массив допустимых HEX-кодов цветов
- `config` - (необязательно) объект конфигурации для поля **"color"** с опциями:
    - `placeholder` - (необязательно) текст-заполнитель
    - `clear` - (необязательно) отображение иконки очистки
    - `disabled` - (необязательно) отключение контрола
    - `error` - (необязательно) применение стиля ошибки
    - `title` - (необязательно) тултип или заголовок

#### - Параметры для типов "combo", "select" и "multiselect"

- `values` - (необязательно) массив объектов с опциями выпадающего списка:
    - `id` - (обязательно) идентификатор опции
    - `label` - (обязательно) метка опции
    - `avatar` - (необязательно) путь к изображению (только для **"multiselect"**)

:::important
Для назначения одного пользователя используйте типы ***"select"*** или ***"combo"***, а для выбора нескольких - ***"multiselect"***.
:::

- `config` - (необязательно) объект конфигурации для этих типов, включающий:
    - `clearButton` - (необязательно) кнопка очистки в поле ввода (**"combo"**)
    - `label` - (необязательно) ключ для связывания опций с вводом (**"select"**)
    - `checkboxes` - (необязательно) отображение чекбоксов рядом с опциями (**"multiselect"**)
    - `textField` - (необязательно) ключ для связывания опций с вводом (**"combo"** и **"multiselect"**)

    - `disabled` - (необязательно) отключение контрола
    - `error` - (необязательно) применение стиля ошибки
    - `placeholder` - (необязательно) текст-заполнитель
    - `title` - (необязательно) тултип или заголовок

#### - Параметры для типа "text"

- `config` - (необязательно) объект конфигурации для поля **"text"** с опциями:
    - `css` - (необязательно) позиция иконки внутри контрола
    - `disabled` - (необязательно) отключение контрола
    - `error` - (необязательно) применение стиля ошибки
    - `focus` - (необязательно) установка фокуса
    - `icon` - (необязательно) добавление иконки внутрь контрола
    - `inputStyle` - (необязательно) пользовательские стили
    - `placeholder` - (необязательно) текст-заполнитель
    - `readonly` - (необязательно) режим только для чтения
    - `select` - (необязательно) выделение содержимого
    - `title` - (необязательно) тултип или заголовок
    - `type` - (необязательно) тип input

#### - Параметры для типа "textarea"

- `config` - (необязательно) объект конфигурации для поля **"textarea"** с опциями:
    - `disabled` - (необязательно) отключение контрола
    - `error` - (необязательно) стиль ошибки
    - `placeholder` - (необязательно) текст-заполнитель
    - `title` - (необязательно) тултип или заголовок
    - `readonly` - (необязательно) режим только для чтения

#### - Параметры для типа "progress"

- `config` - (необязательно) объект конфигурации для поля **"progress"** с опциями:
    - `disabled` - (необязательно) отключение контрола
    - `label` - (необязательно) метка над контролом
    - `max` - (необязательно) максимальное значение
    - `min` - (необязательно) минимальное значение
    - `step` - (необязательно) шаг изменения
    - `title` - (необязательно) тултип или заголовок
    - `width` - (необязательно) ширина контрола

#### - Параметры для типа "files"

- `uploadURL` - (необязательно) URL загрузчика файлов редактора, подробности ниже

<details>

`uploadURL` может быть задан как **строка**, так и **функция**. Пример с функцией:

~~~jsx {}
uploadURL: rec => {
    const formData = new FormData();
    formData.append("upload", rec.file);

    const config = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + token  // здесь токен или другие заголовки
        }
    };

    return fetch(url + "/uploads", config) // URL здесь
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
~~~

Параметр `rec` - расширенный объект `PointerEvent` с дополнительными свойствами:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // означает "ещё не отправлен", "отправлен успешно" или "ошибка"
    name: string; // имя файла
    file: string | Blob; // сам файл
}
~~~

</details>

- `config` - (необязательно) объект конфигурации для поля **"files"** с опциями:
    - `accept` - (необязательно) допустимые типы файлов (например, ***"image/*", "video/*", "audio/*"***)
    - `disabled` - (необязательно) включение или отключение загрузки файлов
    - `multiple` - (необязательно) разрешение на множественную загрузку
    - `folder` - (необязательно) разрешение на загрузку папок

#### - Параметры для типа "comments"

- `config` - (необязательно) объект конфигурации для поля **"comments"** с опциями:
    - `format` - (необязательно) формат даты комментариев. Варианты смотрите [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (необязательно) место отображения комментариев:
        - `"editor"` - внутри редактора
        - `"page"` - в отдельной панели
    - `html` - (необязательно) разрешение или запрет HTML-разметки в комментариях
    - `confirmDeletion` - (необязательно) отображение окна подтверждения при удалении комментариев

#### - Параметры для типа "links"

- `config` - (необязательно) объект конфигурации для поля **"links"** с опциями:
    - `confirmDeletion` - (необязательно) отображение окна подтверждения при удалении ссылок

:::info
Если свойство `editorShape` не задано, виджет использует параметры из **defaultEditorShape** по умолчанию.
:::

### Конфигурация по умолчанию

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "Высокий" },
    { id: 2, color: "#F1B941", label: "Средний" },
    { id: 3, color: "#77D257", label: "Низкий" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "Название"
    },
    {
        key: "description",
        type: "textarea",
        label: "Описание"
    },
    {
        type: "combo",
        label: "Приоритет",
        key: "priority",
        config: {
            clearButton: true
        }
    },
    {
        type: "color",
        label: "Цвет",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "Прогресс"
    },
    {
        type: "date",
        key: "start_date",
        label: "Дата начала"
    },
    {
        type: "date",
        key: "end_date",
        label: "Дата окончания"
    },
    {
        type: "multiselect",
        key: "users",
        label: "Пользователи"
    }
];
~~~

### Пример

~~~jsx {6-33,38}
const users = [ // данные пользователей
    { id: 1, label: "Джон Смит", avatar: "../assets/user.jpg" },
    { id: 2, label: "Аарон Шорт" }
];

const editorShape = [ // настройки редактора
    ...kanban.defaultEditorShape, // включить настройки по умолчанию
    { // добавить кастомные поля
        type: "multiselect",
        key: "users",
        label: "Пользователи",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "Комментарии",
        config: {
            format: "%M %d",
            placement: "page",
            html: true,
            confirmDeletion: true
        }
    },
    {
        type: "links",
        key:"links",
        label: "Ссылки",
        config: {
            confirmDeletion: true
        }
    }
];

new kanban.Kanban("#root", {
    cards,
    columns,
    editorShape,
    // другие параметры
});
~~~

**История изменений:**

- Добавлен тип ***dateRange*** в версии 1.3
- Добавлены типы редактора ***comments*** и ***links***, а также параметры ***format*** в версии 1.4

**Связанные статьи:** [Конфигурация](/guides/configuration#редактор)
