---
sidebar_label: set-sort
title: Событие set-sort
description: Вы можете узнать о событии set-sort в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# set-sort

### Описание

@short: Вызывается при каждой сортировке карточек.

### Использование

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### Параметры

Обработчик события **set-sort** может принимать либо *null*, либо объект со следующими свойствами:

- `by` - (необязательно) указывает поле карточки, используемое для сортировки (*string* или *function*)
- `dir` - (необязательно) направление сортировки, либо *"asc"*, либо *"desc"*
- `preserve` - (необязательно) определяет, сохранять ли текущее состояние сортировки
- `columnId` - (необязательно) идентифицирует колонку, по которой производится сортировка

:::info
Для работы с внутренними событиями обратитесь к [**Event Bus methods**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "set-sort"
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Это событие было добавлено в версии v1.2
