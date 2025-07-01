---
sidebar_label: move-row
title: Событие move-row
description: Изучите событие move-row в документации по библиотеке DHTMLX JavaScript Kanban. Найдите руководства для разработчиков, справочники API, примеры кода, живые демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# move-row

### Описание

@short: Срабатывает при перемещении строки

### Использование

~~~jsx {}
"move-row": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обратный вызов для события **move-row** получает объект со следующими свойствами:

- `id` - (обязательно) идентификатор перемещаемой строки
- `before` - (обязательно) идентификатор строки, перед которой будет размещена перемещаемая строка
- `skipProvider` - (необязательно) управляет, будет ли пропущен запрос к серверу

:::info
Для управления внутренними событиями вы можете использовать [**Event Bus methods**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {8-10}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// подписываемся на событие "move-row"
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Это событие было добавлено в версии v1.1
