---
sidebar_label: delete-link
title: API события delete-link
description: Ознакомьтесь с API события delete-link для DHTMLX Kanban. Узнайте, как обрабатывать событие, срабатывающее при удалении ссылки.
---

# delete-link

### Описание

@short: Срабатывает при удалении ссылки

### Использование

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обратный вызов события **delete-link** принимает объект со следующими параметрами:

- `id` - (обязательно) ID удаляемой ссылки
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {8-10}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// подписываемся на событие "delete-link"
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**История изменений:** Событие добавлено в версии v1.4