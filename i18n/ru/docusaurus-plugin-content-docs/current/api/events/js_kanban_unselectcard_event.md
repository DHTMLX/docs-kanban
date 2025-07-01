---
sidebar_label: unselect-card
title: Событие unselect-card
description: В документации по библиотеке DHTMLX JavaScript Kanban вы можете узнать о событии unselect-card. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# unselect-card

### Описание

@short: Срабатывает при отмене выбора карточки

### Использование

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Параметры

Обработчик события **unselect-card** получает объект со следующим свойством:

- `id` - (обязательно) ID карточки, для которой был снят выбор

:::info
Для управления внутренними событиями вы можете обратиться к [**Event Bus methods**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "unselect-card"
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~
