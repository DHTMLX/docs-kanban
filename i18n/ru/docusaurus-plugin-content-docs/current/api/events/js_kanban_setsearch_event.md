---
sidebar_label: set-search
title: API события set-search
description: Прочитайте API события set-search для DHTMLX Kanban. Узнайте, как обрабатывать событие, возникающее при поиске карточек.
---

# set-search

### Описание

@short: Срабатывает при поиске карточек

### Использование

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### Параметры

Колбэк события **set-search** принимает объект со следующими параметрами:

- `value` - (обязательный) значение для поиска
- `by` - (необязательный) поле карточки, по которому выполняется поиск

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
// подписываемся на событие "set-search"
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~