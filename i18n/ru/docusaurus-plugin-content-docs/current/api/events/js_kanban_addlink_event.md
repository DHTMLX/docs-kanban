---
sidebar_label: add-link
title: Событие add-link
description: Вы можете узнать о событии add-link в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Колбэк события **add-link** принимает объект со следующими параметрами:

- `id` - (необязательно) идентификатор новой ссылки
- `link` - (обязательно) объект данных новой ссылки. Полный список параметров ссылки доступен [здесь](api/config/js_kanban_links_config.md)
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
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

**Журнал изменений:** Событие добавлено в версии v1.4