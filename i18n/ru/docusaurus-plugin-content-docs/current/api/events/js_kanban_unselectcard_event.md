---
sidebar_label: unselect-card
title: Событие unselect-card
description: Вы можете узнать о событии unselect-card в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# unselect-card

### Описание

@short: Срабатывает при снятии выделения с карточки

### Использование

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Параметры

Callback события **unselect-card** принимает объект со следующим параметром:

- `id` - (обязательный) ID карточки, с которой снимается выделение

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
// подписываемся на событие "unselect-card"
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~