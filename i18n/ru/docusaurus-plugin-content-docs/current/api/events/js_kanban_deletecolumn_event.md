---
sidebar_label: delete-column
title: API события delete-column
description: Ознакомьтесь с API события delete-column для DHTMLX Kanban. Узнайте, как обрабатывать событие, срабатывающее при удалении колонки.
---

# delete-column

### Описание

@short: Срабатывает при удалении колонки

### Использование

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обратный вызов события **delete-column** принимает объект со следующими параметрами:

- `id` - (обязательный) ID колонки, которую нужно удалить
- `skipProvider` - (необязательный) включает/отключает предотвращение отправки запроса на сервер

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
// подписываемся на событие "delete-column"
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~