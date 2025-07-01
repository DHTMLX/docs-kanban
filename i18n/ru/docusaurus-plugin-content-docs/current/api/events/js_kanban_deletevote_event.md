---
sidebar_label: delete-vote
title: Событие delete-vote
description: Вы можете узнать о событии delete-vote в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# delete-vote

### Описание

@short: Срабатывает, когда пользователь удаляет голос с карточки

### Использование

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Обработчик события **delete-vote** получает объект с следующими свойствами:

- `cardId` - (обязательно) ID карточки, с которой удаляется голос
- `skipProvider` - (необязательно) управляет тем, нужно ли пропускать запрос к серверу

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
// слушаем событие "delete-vote"
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**История изменений:** Событие было добавлено в версии v1.4
