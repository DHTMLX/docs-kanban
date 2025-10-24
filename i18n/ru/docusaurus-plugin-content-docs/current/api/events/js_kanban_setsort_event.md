---
sidebar_label: set-sort
title: Событие set-sort
description: Вы можете узнать о событии set-sort в документации библиотеки DHTMLX JavaScript Kanban. Просматривайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# set-sort

### Описание

@short: Срабатывает при сортировке карточек

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

Коллбэк события **set-sort** может принимать значение *null* или объект со следующими параметрами:

- `by` - (необязательный) поле карточки для сортировки (*string* или *function*)
- `dir` - (необязательный) порядок сортировки. Возможные значения: *"asc"* и *"desc"*
- `preserve` - (необязательный) включает/отключает сохранение состояния сортировки
- `columnId` - (необязательный) ID колонки, которую нужно отсортировать

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "set-sort"
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**История изменений:** Событие добавлено в версии v1.2