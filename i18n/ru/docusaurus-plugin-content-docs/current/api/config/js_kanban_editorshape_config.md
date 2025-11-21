---
sidebar_label: editorShape
title: Конфигурация editorShape
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о конфигурации editorShape. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# editorShape

### Описание

@short: Необязательный параметр. Массив объектов с настройками для управления внешним видом и функциональностью редактора Kanban

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
            clear?: boolean, // для типов "combo" и "color"
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

Для настройки внешнего вида и функциональности редактора можно указать следующие параметры (поля):

#### - Общие параметры для всех типов

- `type` - (обязательно) тип поля редактора

:::important
В редакторе Kanban можно использовать следующие типы полей: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments** и **links**
:::

- `key` - (обязательно) ключ поля редактора. Здесь нужно использовать значение, указанное в свойстве [`cardShape`](api/config/js_kanban_cardshape_config.md). Пример ниже:

~~~js {8,17}
    // настройки внешнего вида карточки
    const cardShape = { 
        ...kanban.defaultCardShape,
        headerFields: [
            { // пользовательское поле
                label: "Custom field",
                css: "custom_style",
                key: "custom_key"
            }
        ]
    };
    // настройки внешнего вида редактора
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (необязательно) метка поля редактора

#### - Параметры для типа "dateRange"

- `key` - (обязательно) объект с ключами поля редактора. Здесь можно указать следующие параметры:
    - `start` - (обязательно) ключ даты начала
    - `end` - (обязательно) ключ даты окончания

:::important
Значения этих ключей используются в свойстве [`cardShape`](api/config/js_kanban_cardshape_config.md)!
:::

- `config` - (необязательно) объект конфигурации поля **"dateRange"**. Здесь можно указать следующие параметры:
    - `align` - (необязательно) задаёт выравнивание всплывающего окна с календарями относительно элемента Date Range
    - `editable` - (необязательно) определяет, можно ли редактировать дату, и опционально задаёт формат для редактирования даты
    - `buttons` - (необязательно) показывает/скрывает кнопки Today и Clear в нижней части всплывающего окна с календарями
    - `css` - (необязательно) изменяет позицию иконки в контроле Date Range
    - `disabled` - (необязательно) определяет, отключён ли контрол Date Range
    - `done` - (необязательно) показывает/скрывает кнопку Done в контроле Date Range
    - `error` - (необязательно) применяет стили для отображения ошибки в контроле Date Range
    - `format` - (необязательно) задаёт формат даты для контрола Date Range. Доступные параметры описаны [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - (необязательно) задаёт количество календарей в контроле Date Range
    - `placeholder` - (необязательно) задаёт плейсхолдер для контрола Date Range
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией о контроле Date Range
    - `width` - (необязательно) задаёт ширину всплывающего окна с календарями

#### - Параметры для типа "date"

- `config` - (необязательно) объект конфигурации поля **"date"**. Здесь можно указать следующие параметры:
    - `align` - (необязательно) задаёт выравнивание всплывающего окна с календарями относительно элемента Date
    - `editable` - (необязательно) определяет, можно ли редактировать дату, и опционально задаёт формат для редактирования даты
    - `buttons` - (необязательно) показывает/скрывает кнопки Today и Clear в нижней части всплывающего окна с календарями
    - `css` - (необязательно) изменяет позицию иконки в контроле Date
    - `disabled` - (необязательно) определяет, отключён ли контрол Date
    - `error` - (необязательно) применяет стили для отображения ошибки в контроле Date
    - `format` - (необязательно) задаёт формат даты для контрола Date. Доступные параметры описаны [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (необязательно) задаёт плейсхолдер для контрола Date
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией о контроле Date
    - `width` - (необязательно) задаёт ширину всплывающего окна с календарями

#### - Параметры для типа "color"

- `values` - (необязательно) массив с допустимыми HEX-кодами
- `config` - (необязательно) объект конфигурации поля **"color"**. Здесь можно указать следующие параметры:
    - `placeholder` - (необязательно) задаёт плейсхолдер для контрола Color
    - `clear` - (необязательно) показывает/скрывает иконку "очистить" для контрола Color
    - `disabled` - (необязательно) определяет, отключён ли контрол Color
    - `error` - (необязательно) применяет стили для отображения ошибки в контроле Color
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией, связанной с контролом Color

#### - Параметры для типов "combo", "select" и "multiselect"

- `values` - (необязательно) массив объектов с данными для выпадающего списка. Здесь можно указать следующие параметры:
    - `id` - (обязательно) ID опции
    - `label` - (обязательно) метка опции
    - `avatar` - (необязательно) путь к изображению для превью опции (только для типа **"multiselect"**)

:::important
Для выбора одного пользователя используйте типы ***"select"*** или ***"combo"***! Для выбора нескольких пользователей — тип ***"multiselect"***.
:::

- `config` - (необязательно) объект конфигурации для полей **"combo"**, **"select"** и **"multiselect"**. Здесь можно указать следующие параметры:
    - `clear` - (необязательно) добавляет кнопку Очистить в поле ввода combo (**только для типов "combo" и "color"**)
    - `label` - (необязательно) связывает опции с полем ввода по указанному ключу (**только для типа "select"**)
    - `checkboxes` - (необязательно) отображает чекбоксы рядом с опциями (**только для типа "multiselect"**)
    - `textField` - (необязательно) связывает опции combo с полем ввода по указанному ключу (**для типов "combo" и "multiselect"**)

    - `disabled` - (необязательно) определяет, отключён ли контрол
    - `error` - (необязательно) применяет стили для отображения ошибки в контроле
    - `placeholder` - (необязательно) задаёт плейсхолдер для контрола
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией о контроле

#### - Параметры для типа "text"

- `config` - (необязательно) объект конфигурации поля **"text"**. Здесь можно указать следующие параметры:
    - `css` - (необязательно) задаёт позицию иконки в контроле Text
    - `disabled` - (необязательно) определяет, отключён ли контрол Text
    - `error` - (необязательно) применяет стили для отображения ошибки в контроле Text
    - `focus` - (необязательно) устанавливает фокус в контроле Text
    - `icon` - (необязательно) добавляет иконку в контрол Text
    - `inputStyle` - (необязательно) применяет пользовательский стиль к контролу Text
    - `placeholder` - (необязательно) задаёт плейсхолдер для контрола Text
    - `readonly` - (необязательно) делает контрол Text только для чтения
    - `select` - (необязательно) выделяет содержимое контрола Text
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией, связанной с контролом Text
    - `type` - (необязательно) задаёт тип контрола Text

#### - Параметры для типа "textarea"

- `config` - (необязательно) объект конфигурации поля **"textarea"**. Здесь можно указать следующие параметры:
    - `disabled` - (необязательно) определяет, отключён ли контрол Textarea
    - `error` - (необязательно) применяет стили для отображения ошибки в контроле Textarea
    - `placeholder` - (необязательно) задаёт плейсхолдер для контрола Textarea
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией, связанной с контролом Textarea
    - `readonly` - (необязательно) делает контрол Textarea только для чтения

#### - Параметры для типа "progress"

- `config` - (необязательно) объект конфигурации поля **"progress"**. Здесь можно указать следующие параметры:
    - `disabled` - (необязательно) определяет, отключён ли контрол Progress
    - `label` - (необязательно) задаёт метку над контролом Progress
    - `max` - (необязательно) задаёт максимальное значение контрола Progress
    - `min` - (необязательно) задаёт минимальное значение контрола Progress
    - `step` - (необязательно) задаёт шаг изменения значения контрола Progress
    - `title` - (необязательно) задаёт заголовок с дополнительной информацией, связанной с контролом Progress
    - `width` - (необязательно) задаёт ширину контрола Progress

#### - Параметры для типа "files"

- `uploadURL` - (необязательно) URL загрузчика редактора. Подробнее ниже

<details>

Свойство `uploadURL` может быть указано как **строка**, так и **функция**. Пример установки URL загрузки через функцию:

~~~jsx {}
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

    return fetch(url + "/uploads", config) // URL здесь
        .then(res => res.json())
        .then(
            data => {
                return { id: rec.id, ...data };
            },
            () => ({ id: rec.id, status: "error" })
        )
        .catch();
}
~~~

где `rec` — единственный параметр функции, расширенный объект `PointerEvent` (нативный тип плюс 4 наших свойства):

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // означает "ещё не отправлено", "успешно отправлено", "произошла ошибка, не отправлено"
    name: string; // имя файла
    file: string | Blob; // файл
}
~~~

</details>

- `config` - (необязательно) объект конфигурации поля **"files"**. Здесь можно указать следующие параметры:
    - `accept` - (необязательно) типы файлов для загрузки (***"image/*", "video/*", "audio/*"*** и другие)
    - `disabled` - (необязательно) включение/отключение загрузки *файлов*
    - `multiple` - (необязательно) включение/отключение загрузки *нескольких файлов*
    - `folder` - (необязательно) включение/отключение загрузки *папок*

#### - Параметры для типа "comments"

- `config` - (необязательно) объект конфигурации поля **"comments"**. Здесь можно указать следующие параметры:
    - `format` - (необязательно) формат даты комментариев. Доступные форматы описаны [здесь](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (необязательно) место отображения комментариев. Можно задать следующие значения:
        - `"editor"` - комментарии отображаются в редакторе
        - `"page"` - комментарии отображаются в отдельной панели
    - `html` - (необязательно) включение/отключение использования HTML-разметки в комментариях
    - `confirmDeletion` - (необязательно) показывает/скрывает **диалог подтверждения**, позволяющий пользователям подтвердить или отменить удаление комментария

#### - Параметры для типа "links"

- `config` - (необязательно) объект конфигурации поля **"links"**. Здесь можно указать следующие параметры:
    - `confirmDeletion` - (необязательно) показывает/скрывает **диалог подтверждения**, позволяющий пользователям подтвердить или отменить удаление ссылки

:::info
Если вы не указываете настройки редактора через свойство `editorShape`, виджет применит набор параметров **defaultEditorShape** по умолчанию!
:::

### Конфигурация по умолчанию

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "Label"
    },
    {
        key: "description",
        type: "textarea",
        label: "Description"
    },
    {
        type: "combo",
        label: "Priority",
        key: "priority",
        config: {
            clear: true
        }
    },
    {
        type: "color",
        label: "Color",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "Progress"
    },
    {
        type: "date",
        key: "start_date",
        label: "Start date"
    },
    {
        type: "date",
        key: "end_date",
        label: "End date"
    },
    {
        type: "multiselect",
        key: "users",
        label: "Users"
    }
];
~~~

### Пример

~~~jsx {6-33,38}
const users = [ // данные пользователей
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const editorShape = [ // настройки редактора
    ...kanban.defaultEditorShape, // включаем настройки по умолчанию
    { // добавляем пользовательские поля
        type: "multiselect",
        key: "users",
        label: "Users",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "Comments",
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
        label: "Links",
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

- Тип ***dateRange*** добавлен в версии v1.3
- Типы редактора ***comments*** и ***links***, а также параметр ***format*** добавлены в версии v1.4
- Параметр ***clearButton*** заменён на ***clear***

**Связанные статьи:** [Конфигурация](guides/configuration.md/#editor)
