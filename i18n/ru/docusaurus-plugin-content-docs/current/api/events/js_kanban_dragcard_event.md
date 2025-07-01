---
sidebar_label: drag-card
title: Событие drag-card
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о событии drag-card. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# drag-card

### Описание

@short: Это событие срабатывает каждый раз, когда карточка перемещается с помощью drag-and-drop.

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

Коллбек для события **drag-card** получает объект со следующими свойствами:

- `id` - (обязательно) ID карточки, которая перетаскивается
- `columnId` - (обязательно) ID колонки, в которой в данный момент находится карточка
- `rowId` - (необязательно) ID строки, в которой в данный момент находится карточка
- `before` - (необязательно) ID карточки, которая идет сразу после перетаскиваемой карточки в колонке
- `source` - (необязательно) массив, содержащий ID карточек, которые были перемещены

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "drag-card"
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Журнал изменений:** Это событие доступно начиная с версии 1.4

**Связанный пример:** [Kanban. Отключение drag and drop для определённых колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
