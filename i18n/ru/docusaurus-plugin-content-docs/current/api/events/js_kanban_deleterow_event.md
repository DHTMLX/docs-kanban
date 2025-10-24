---
sidebar_label: delete-row
title: Событие delete-row
description: Узнайте, как работает событие delete-row в JavaScript библиотеке DHTMLX Kanban. Изучите руководства для разработчиков, ознакомьтесь с API, протестируйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# delete-row

### Описание

@short: Срабатывает при удалении строки

### Использование

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### Параметры

Обработчик события **delete-row** принимает объект с следующими параметрами:

- `id` - (обязательный) ID строки, которая удаляется
- `skipProvider` - (необязательный) контролирует, отправляется ли запрос на сервер

:::info
Для работы с внутренними событиями вы можете обратиться к [**методам Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "delete-row"
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~
