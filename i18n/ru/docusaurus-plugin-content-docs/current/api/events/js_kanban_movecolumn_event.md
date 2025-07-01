---
sidebar_label: move-column
title: Событие move-column
description: Изучите событие move-column в документации по библиотеке DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочниками API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# move-column

### Описание

@short: Срабатывает при перемещении колонки

### Использование

~~~jsx {}
"move-column": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Коллбэк для события **move-column** получает объект со следующими свойствами:

- `id` - (обязательно) ID перемещаемой колонки
- `before` - (обязательно) ID колонки, перед которой будет размещена перемещаемая колонка
- `skipProvider` - (необязательно) контролирует, будет ли пропущен запрос к серверу

:::info
Для управления внутренними событиями вы можете обращаться к [**методам Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "move-column"
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**Журнал изменений:** Это событие было добавлено в версии v1.1
