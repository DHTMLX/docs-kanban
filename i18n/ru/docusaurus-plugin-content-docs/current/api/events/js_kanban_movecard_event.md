---
sidebar_label: move-card
title: Событие move-card
description: Вы можете узнать о событии move-card в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# move-card

### Описание

@short: Срабатывает при перемещении карточки

### Использование

~~~jsx {}
"move-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Параметры

Колбэк события **move-card** принимает объект со следующими параметрами:

- `id` - (обязательно) ID карточки, которая будет перемещена
- `columnId` - (обязательно) ID колонки, в которую будет помещена карточка
- `rowId` - (необязательно) ID строки, в которую будет помещена карточка
- `before` - (необязательно) ID карточки, перед которой будет размещена новая карточка
- `skipProvider` - (необязательно) включает/отключает предотвращение отправки запроса на сервер

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
// подписываемся на событие "move-card"
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Связанный пример:** [Kanban. Отключение drag and drop для определённых колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)