---
sidebar_label: start-drag-card
title: Событие start-drag-card
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о событии start-drag-card. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# start-drag-card

### Описание

@short: Срабатывает при начале перетаскивания карточки

### Использование

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Параметры

Обратный вызов для события **start-drag-card** получает объект со следующими свойствами:

- `id` - (обязательно) ID перетаскиваемой карточки
- `columnId` - (обязательно) ID колонки, в которой сейчас находится карточка
- `rowId` - (необязательно) ID строки, в которой сейчас расположена карточка
- `before` - (необязательно) ID карточки, которая следует за перетаскиваемой в колонке
- `source` - (необязательно) массив, содержащий ID карточек, которые перемещаются

:::info
Для работы с внутренними событиями можно использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus).
:::

### Пример

~~~jsx {7-9}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "start-drag-card"
board.api.on("start-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Изменения:** Это событие было добавлено в версии 1.4

**Связанный пример:** [Kanban. Отключение перетаскивания в определённые колонки](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
