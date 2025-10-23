---
sidebar_label: add-column
title: Событие add-column
description: Вы можете узнать о событии add-column в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-column

### Описание

@short: Срабатывает при добавлении новой колонки

### Использование

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### Параметры

Колбэк события **add-column** может принимать объект со следующими параметрами:

- `id` - (необязательно) ID новой колонки
- `column` - (необязательно) объект данных новой колонки. Полный список параметров **column** можно найти [**здесь**](api/config/js_kanban_columns_config.md)
- `before` - (необязательно) ID колонки, перед которой будет размещена новая колонка
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "add-column"
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**История изменений**: параметры **id**, **before** и **column** были добавлены в версии v1.1