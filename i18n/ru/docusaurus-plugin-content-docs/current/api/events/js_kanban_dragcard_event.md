---
sidebar_label: drag-card
title: Событие drag-card
description: Вы можете узнать о событии drag-card в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# drag-card

### Описание

@short: Срабатывает при перемещении карточки с помощью dnd

### Использование

~~~jsx {}
"drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### Параметры

Колбэк события **drag-card** принимает объект со следующими параметрами:

- `id` - (обязательный) ID перетаскиваемой карточки
- `columnId` - (обязательный) ID колонки, в которой в данный момент находится карточка
- `rowId` - (необязательный) ID строки, в которой в данный момент находится карточка
- `before` - (необязательный) ID карточки, которая в колонке находится после перетаскиваемой карточки
- `source` - (необязательный) массив ID перемещаемых карточек

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
// подписываемся на событие "drag-card"
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**История изменений:** Событие добавлено в версии v1.4

**Связанный пример:** [Kanban. Отключение drag and drop для определённых колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)