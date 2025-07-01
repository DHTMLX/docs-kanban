---
sidebar_label: add-row
title: Событие add-row
description: Вы можете узнать о событии add-row в документации JavaScript библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-row

### Описание

@short: Срабатывает всякий раз, когда добавляется новая строка

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

Обработчик события **add-row** принимает объект со следующими необязательными свойствами:

- `id` - идентификатор новой строки
- `row` - объект данных, представляющий новую строку. Полный список параметров **row** можно найти [**здесь**](/api/config/js_kanban_rows_config.md)
- `before` - ID строки, перед которой будет вставлена новая строка
- `skipProvider` - управляет тем, будет ли отправлен запрос на сервер или нет

:::info
Для управления внутренними событиями рекомендуем использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "add-row"
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**История изменений**: Параметры **id**, **before** и **row** были добавлены в версии v1.1
