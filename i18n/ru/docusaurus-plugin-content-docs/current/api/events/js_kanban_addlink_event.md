---
sidebar_label: add-link
title: Событие add-link
description: Вы можете узнать о событии add-link в документации по JavaScript библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-link

### Описание

@short: Срабатывает при добавлении новой ссылки

### Использование

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Колбэк для события **add-link** получает объект со следующими свойствами:

- `id` - (необязательно) идентификатор, присвоенный новой ссылке
- `link` - (обязательно) объект с данными, представляющий новую ссылку. Полный список параметров ссылки доступен [здесь](/api/config/js_kanban_links_config.md)
- `skipProvider` - (необязательно) управляет тем, будет ли отправлен запрос на сервер или нет

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {8-10}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// подписываемся на событие "add-link"
board.api.on("add-link", (obj) => {
    console.log(obj.link.masterId);
});
~~~

**Журнал изменений:** Это событие было добавлено в версии v1.4
