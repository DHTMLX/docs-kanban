---
sidebar_label: add-row
title: Событие add-row
description: Вы можете узнать о событии add-row в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-row

### Описание

@short: Срабатывает при добавлении новой строки

### Использование

~~~jsx {}
"add-row": ({
    id?: string | number,
    row?: object,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обработчик события **add-row** может принимать объект со следующими параметрами:

- `id` - (необязательно) ID новой строки
- `row` - (необязательно) объект данных новой строки. Полный список параметров **row** можно найти [**здесь**](api/config/js_kanban_rows_config.md)
- `before` - (необязательно) ID строки, перед которой будет размещена новая строка
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "add-row"
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**История изменений**: параметры **id**, **before** и **row** были добавлены в версии v1.1