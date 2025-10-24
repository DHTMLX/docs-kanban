---
sidebar_label: set-search
title: Событие set-search
description: Вы можете узнать о событии set-search в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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