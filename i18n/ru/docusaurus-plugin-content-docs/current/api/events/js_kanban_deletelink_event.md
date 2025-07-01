---
sidebar_label: delete-link
title: Событие delete-link
description: Вы можете узнать о событии delete-link в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Обратный вызов для события **delete-link** получает объект со следующими свойствами:

- `id` - (обязательно) ID ссылки, которая удаляется
- `skipProvider` - (необязательно) определяет, подавлять ли запрос к серверу

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {8-10}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// слушаем событие "delete-link"
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**Журнал изменений:** Это событие было добавлено в версии v1.4
