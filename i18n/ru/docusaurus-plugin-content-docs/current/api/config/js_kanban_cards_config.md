---
sidebar_label: cards
title: Конфигурация cards
description: Вы можете узнать о конфигурации cards в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cards

### Описание

@short: Необязательно. Массив объектов, содержащих данные карточек

### Использование

~~~jsx {}
cards?: [
    {
        id?: string | number,
        label?: string,
        description?: string,
        progress?: number,
        start_date?: Date,
        end_date?: Date,
        attached?: [
            {
                id: string | number,
                url?: string,
                previewURL?: string,
                coverURL?: string,
                name?: string,
                isCover?: boolean
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - для нескольких пользователей, если используется тип редактора "multiselect" для назначения пользователей
            // users?: string | number - для одного пользователя, если используется тип редактора "combo" или "select" для назначения пользователя
        priority?: string | number,
        css?: string,
        votes?: array,
        comments?: [
            {
                id: string | number,
                userId: string | number,
                cardId: string | number,
                text?: string,
                date?: Date,
            }, {...}
        ],
        [custom_key: string]?: any
    }, {...} // данные других карточек
];
~~~

### Параметры

Каждая карточка может включать следующие параметры:

- `id` - (необязательно) **ID** карточки, используемый для управления карточкой через соответствующие методы
- `label` - (необязательно) текстовая метка, отображаемая в поле **Label**
- `description` - (необязательно) текст описания, отображаемый в поле **Description**
- `progress` - (необязательно) значение прогресс-бара от 0 до 100, отображаемое в поле **Progress bar**
- `start_date` - (необязательно) дата начала в виде объекта Date (рекомендуется избегать строковых дат), отображается в поле **Start date**
- `end_date` - (необязательно) дата окончания в виде объекта Date (рекомендуется избегать строковых дат), отображается в поле **End date**
- `attached` - (необязательно) массив с деталями прикрепленных файлов, отображаемых в поле **Attachment**. Каждый объект может содержать:
	- `id` - (обязательно) **ID** прикрепленного файла
    - `url` - (необязательно) путь к файлу
    - `previewURL` - (необязательно) путь к изображению-превью
    - `coverURL` - (необязательно) путь к изображению, установленному как обложка
    - `name` - (необязательно) имя файла
    - `isCover` - (необязательно) если **true**, обложка загружается с "coverURL"
- `color` - (необязательно) HEX-код цвета, определяющий цвет верхней линии карточки
- `users` - (необязательно) может быть **массивом** ID пользователей для нескольких пользователей или **строкой | числом** для одного пользователя. Для назначения пользователей определите массив с данными пользователей в свойстве [cardShape.users](../js_kanban_cardshape_config). Пользователи отображаются в поле **Users**

:::info
`users?: array` - используйте **массив** ID пользователей при использовании типа редактора [**multiselect**](../js_kanban_editorshape_config/#--параметры-для-типов-combo-select-и-multiselect) для назначения нескольких пользователей

`users?: string | number` - укажите один ID пользователя при использовании типов редактора [**combo** или **select**](../js_kanban_editorshape_config/#--параметры-для-типов-combo-select-и-multiselect) для назначения одного пользователя
:::

- `priority` - (необязательно) **ID** приоритета карточки. Определите массив приоритетов в свойстве [cardShape.priority](../js_kanban_cardshape_config). Отображается в поле **Priority**
- `css` - (необязательно) пользовательские CSS-стили для карточки
- `votes` - (необязательно) массив ID пользователей, которые проголосовали
- `comments` - (необязательно) массив объектов комментариев с полями:
    - `id` - (обязательно) **ID** комментария
    - `userId` - (обязательно) **ID** пользователя, оставившего комментарий
    - `cardId` - (обязательно) **ID** карточки, к которой относится комментарий
    - `text` - (необязательно) текст комментария, может содержать HTML-разметку
    - `date` - (необязательно) объект Date, когда комментарий был оставлен (не обновляется при редактировании)
- `custom_key` - (необязательно) любой пользовательский ключ для карточки. Может использоваться для позиционирования карточки внутри колонок или строк, см. свойства [columnKey](../js_kanban_columnkey_config) и [rowKey](../js_kanban_rowkey_config)

:::info
Для динамической загрузки новых данных карточек можно использовать метод [**parse()**](../../methods/js_kanban_parse_method).
:::

### Пример

~~~jsx {1-40,44}
const cards = [
    {
        id: 1,
        label: "Integration with React",
        description: "Some description",
        progress: 25,
        start_date: new Date("02/24/2022"),
        end_date: new Date("02/24/2023"),
        attached: [
            {
                id: 234,
                url: "../assets/img-1.jpg",
                previewURL: "../assets/img-1.jpg",
                coverURL: "../assets/img-1.jpg",
                name: "img-1.jpg",
                isCover: true
            }, {...} // данные других прикрепленных файлов
        ],
        color: "#65D3B3",
        users: [1,2],
        votes: [3,6,8],
        comments: [
            {
                id: 1,
                userId: 1,
                cardId: 1,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. ",
                date: new Date(),
            }, {...} // другие комментарии
        ],
        priority: 1,
        // пользовательское поле для размещения карточки в строке "feature"
        // конфигурация rowKey должна быть установлена в значение "type"
        type: "feature",
        // пользовательское поле для размещения карточки в колонке "backlog"
        // конфигурация columnKey должна быть установлена в значение "stage"
        stage: "backlog",
        css: "red",
    }, {...} // данные других карточек
];

new kanban.Kanban("#root", {
    columns,
    cards,
    // другие параметры
});
~~~

**Журнал изменений:** параметры ***css***, ***comments*** и ***votes*** были добавлены в версии v1.4

**Связанные статьи:**
- [Работа с данными](/guides/working_with_data)
- [updateCard()](/api/methods/js_kanban_updatecard_method.md)

**Связанный пример:** [Kanban. Стилизация карточек](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
