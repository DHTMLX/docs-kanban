---
sidebar_label: cards
title: Конфигурация cards
description: Вы можете узнать о конфигурации cards в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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
                size?: number
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - для нескольких пользователей, если вы используете редактор типа "multiselect" для назначения пользователей
            // users?: string | number - для одного пользователя, если вы используете редактор типа "combo" или "select" для назначения пользователя
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

Для каждой карточки можно указать следующие параметры (данные):

- `id` - (необязательно) **ID** карточки. Используется для управления карточкой через соответствующие методы
- `label` - (необязательно) метка карточки. Отображается в поле **Label**
- `description` - (необязательно) описание карточки. Отображается в поле **Description**
- `progress` - (необязательно) значение индикатора прогресса. Можно указать значение в диапазоне от 0 до 100. Отображается в поле **Progress bar**
- `start_date` - (необязательно) объект Date начала задачи (не указывайте строку с датой). Отображается в поле **Start date**
- `end_date` - (необязательно) объект Date окончания задачи (не указывайте строку с датой). Отображается в поле **End date**
- `attached` - (необязательно) массив объектов с данными вложенных файлов. Отображается в поле **Attachment**. Для каждого объекта можно указать следующие параметры:
	- `id` - (обязательно) **ID** вложенного файла
    - `url` - (необязательно) путь к файлу для вложения
    - `previewURL` - (необязательно) путь к превью изображения
    - `coverURL` - (необязательно) путь к изображению для установки в качестве обложки
    - `name` - (необязательно) имя файла
    - `isCover` - (необязательно) включает изображение обложки. Если **true**, изображение обложки будет загружено по url из "coverURL"
    - `size` - (необязательно) размер вложенного файла (в байтах)
- `color` - (необязательно) корректный HEX-код цвета. Это цвет верхней линии карточки
- `users` - (необязательно) **массив** с **ID** нескольких назначенных пользователей или **string | number** для одного назначенного пользователя. Для указания назначенных пользователей нужно определить массив с данными пользователей в свойстве [cardShape.users](api/config/js_kanban_cardshape_config.md). Пользователи отображаются в поле **Users**

:::info
`users?: array` - указывайте **массив** с ID пользователей, если используете редактор типа [**multiselect**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) для назначения нескольких пользователей

`users?: string | number` - указывайте один ID, если используете редакторы типа [**combo** или **select**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) для назначения одного пользователя
:::

- `priority` - (необязательно) **ID** приоритета карточки. Для указания приоритетов карточек нужно определить массив с данными приоритетов в свойстве [cardShape.priority](api/config/js_kanban_cardshape_config.md). Отображается в поле **Priority**
- `css` - (необязательно) определяет CSS-стили для отдельной карточки
- `votes` - (необязательно) массив с ID пользователей
- `comments` - (необязательно) массив объектов с данными комментариев. Для каждого объекта комментария можно указать следующие параметры:
    - `id` - (обязательно) **ID** комментария
    - `userId` - (обязательно) **ID** пользователя, который оставил комментарий
    - `cardId` - (обязательно) **ID** карточки, к которой относится комментарий
    - `text` - (необязательно) текст комментария. Может содержать HTML-разметку
    - `date` - (необязательно) объект Date (не указывайте строку с датой). Дата добавления комментария. Не обновляется при редактировании
- `custom_key` - (необязательно) пользовательский ключ карточки. Можно указать пользовательские ключи для размещения карточки в колонке и строке. См. свойства [columnKey](../js_kanban_columnkey_config) и [rowKey](api/config/js_kanban_rowkey_config.md)

:::info
Если вы хотите динамически загружать новые данные для карточек, можно использовать метод [**parse()**](api/methods/js_kanban_parse_method.md)!
:::

### Пример

~~~jsx {1-41,45}
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
                isCover: true,
                size: 11979
            }, {...} // данные других вложенных файлов
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

**История изменений:** Параметры ***css***, ***comments*** и ***votes*** были добавлены в версии v1.4

**Связанные статьи:**
- [Работа с данными](guides/working_with_data.md)
- [updateCard()](api/methods/js_kanban_updatecard_method.md)

**Связанный пример:** [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)