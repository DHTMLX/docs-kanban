---
sidebar_label: columns
title: columns Config
description: Вы можете узнать о конфигурации columns в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Для каждой колонки можно указать следующие параметры (данные):

- `id` - (обязательно) **ID** колонки. Используется для управления колонкой через соответствующие методы
- `label` - (необязательно) метка колонки. Отображается в секции колонки
- `collapsed` - (необязательно) текущее состояние колонки. Если ***true***, колонка изначально свернута. Значение по умолчанию — ***false*** (развернутое состояние)
- `limit` - (необязательно) этот параметр может принимать одно из двух значений:
    - `number` - ограничение по количеству карточек в текущей колонке
    - `object` - объект с ограничениями по количеству карточек для каждой строки (swimlane) по её ID
- `strictLimit` - (необязательно) режим строгого ограничения. Если ***true***, пользователь не сможет создавать новые карточки сверх указанного значения в параметре **limit**. Значение по умолчанию — ***false***
- `css` - (необязательно) задаёт CSS-стили для отдельной колонки
- `overlay` - (необязательно) задаёт слой оверлея для отдельной колонки. Здесь можно указать шаблон, который накрывает отдельную колонку следующим образом:

    ~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop is not allowed</span>
            <span class="disable-drop-description">Only testers can move cards to this
                column</span>
        </div>`)
    ~~~

:::info
Если вы хотите динамически загружать новые данные для колонок, вы можете использовать метод [`setConfig()`](../../methods/js_kanban_setconfig_method) или [`parse()`](../../methods/js_kanban_parse_method)!
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
            // ограничение количества карточек для строк "Feature" и "Task" в колонке "In progress"
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

### Пользовательское оформление

Чтобы применить пользовательские стили к колонкам с помощью параметра `css`, добавьте CSS-правила для вашего кастомного класса.

```css
.wx-header .wx-column.red,
.wx-column.red {
    background: #FFA29C;
}
```

Если стили не применяются, убедитесь, что:

- Ваш селектор содержит достаточный контекст (например, родительские и внутренние классы DHTMLX)
- Если свойство переопределяется встроенным стилем, можно использовать `!important`

**История изменений:** Параметры **css** и **overlay** были добавлены в версии v1.4

**Связанные статьи:**
- [Работа с данными](guides/working_with_data.md)
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**Связанные примеры:**
- [Kanban. Ограничения для колонок и swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Изменение цвета колонки через кастомное меню](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Отключение drag and drop для конкретных колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
