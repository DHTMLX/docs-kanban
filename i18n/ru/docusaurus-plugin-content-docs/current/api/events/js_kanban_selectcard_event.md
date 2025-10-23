---
sidebar_label: select-card
title: Событие select-card
description: Вы можете узнать о событии select-card в документации JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Колбэк события **select-card** принимает объект со следующими параметрами:

- `id` - (обязательно) ID выбранной карточки
- `groupMode` - (необязательно) мультивыбор (по умолчанию false)

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
// подписываемся на событие "select-card"
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~