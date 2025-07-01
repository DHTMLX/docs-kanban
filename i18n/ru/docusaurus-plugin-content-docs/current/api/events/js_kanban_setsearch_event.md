---
sidebar_label: set-search
title: Событие set-search
description: Узнайте о событии set-search в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, изучите справочник API, протестируйте примеры кода и живые демо, а также получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# set-search

### Описание

@short: Срабатывает при выполнении поиска карточек

### Использование

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### Параметры

Обратный вызов для события **set-search** получает объект со следующими параметрами:

- `value` - (обязательно) поисковый запрос
- `by` - (необязательно) поле карточки, по которому выполняется поиск

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "set-search"
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~
