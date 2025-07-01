---
sidebar_label: add-vote
title: Событие add-vote
description: Вы можете узнать о событии add-vote в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-vote

### Описание

@short: Срабатывает при добавлении пользователем нового голоса

### Использование

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обработчик события **add-vote** получает объект со следующими свойствами:

- `cardId` - (обязательно) идентификатор карточки, в которую добавляется голос
- `skipProvider` - (необязательно) управляет пропуском запроса к серверу

:::info
Для работы с внутренними событиями можно обращаться к [**методам Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "add-vote"
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**История изменений:** Событие было добавлено в версии v1.4
