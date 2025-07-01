---
sidebar_label: columns
title: columns Config
description: Изучите конфигурацию колонок в документации библиотеки DHTMLX JavaScript Kanban. Найдите руководства для разработчиков, справочник API, примеры кода, демонстрации и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# columns

### Описание

@short: Необязательно. Массив объектов, содержащих данные колонок

### Использование

~~~jsx {}
columns?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        limit?: number | object,
        strictLimit?: boolean,
        css?: string,
        overlay?: any
    },
    {...} // другие данные колонок
];
~~~

### Параметры

Каждая колонка может быть настроена с помощью следующих свойств (данных):

- `id` - (обязательно) уникальный **ID** колонки. Используется для управления колонкой через связанные методы.
- `label` - (необязательно) название, отображаемое в заголовке колонки.
- `collapsed` - (необязательно) указывает начальное состояние колонки. Если ***true***, колонка открывается свернутой. По умолчанию ***false*** (развернута).
- `limit` - (необязательно) может быть двух типов:
    - `number` - задаёт максимальное количество карточек, разрешённых в колонке.
    - `object` - определяет лимиты карточек для каждой строки (swimlane) по их ID.
- `strictLimit` - (необязательно) включает строгий контроль лимита. Если ***true***, пользователи не смогут добавить больше карточек, чем указано в параметре **limit**. По умолчанию ***false***.
- `css` - (необязательно) применяет кастомные CSS-стили к отдельной колонке.
- `overlay` - (необязательно) добавляет слой оверлея к колонке. Полезно для определения шаблона, покрывающего колонку, например:

~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop is not allowed</span>
            <span class="disable-drop-description">Only testers can move cards to this
                column</span>
        </div>`)
~~~

:::info
Для динамического обновления данных колонок можно использовать метод [`parse()`](../../methods/js_kanban_parse_method).
:::

### Пример

~~~jsx {1-31,34}
const columns = [
    {
        label: "Backlog",
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true,
        css: "red"
    },
    {
        label: "In progress",
        id: "inprogress",
        collapsed: false,
        limit: {
            // ограничивает количество карточек для строк "Feature" и "Task" в колонке "In progress"
            feature: 3,
            task: 2
        },
        strictLimit: false
    },
    {
        label: "Done",
        id: "done",
        overlay: template(`
            <div class="blockOverlay disable-drop">
                <span class="disable-drop-header">Drop is not allowed</span>
                <span class="disable-drop-description">Only testers can move cards to this
                    column</span>
            </div>`)
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    // другие параметры
});
~~~

**Изменения:** Свойства **css** и **overlay** были добавлены в версии 1.4.

**Связанные статьи:**
- [Работа с данными](/guides/working_with_data)
- [updateColumn()](/api/methods/js_kanban_updatecolumn_method.md)

**Связанные примеры:**
- [Kanban. Лимиты для колонок и swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Изменение цвета колонки через кастомное меню](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Отключение drag and drop для конкретных колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
