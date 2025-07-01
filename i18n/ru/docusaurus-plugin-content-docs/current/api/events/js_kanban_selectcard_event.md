---
sidebar_label: select-card
title: Событие select-card
description: Узнайте, как работает событие select-card в библиотеке DHTMLX JavaScript Kanban. Изучите руководства для разработчиков и справочники по API, ознакомьтесь с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# select-card

### Описание

@short: Срабатывает при выборе карточки

### Использование

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### Параметры

Колбэк для события **select-card** получает объект со следующими свойствами:

- `id` - (обязательный) ID выбранной карточки
- `groupMode` - (необязательный) указывает режим мультивыбора (по умолчанию false)

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "select-card"
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~
