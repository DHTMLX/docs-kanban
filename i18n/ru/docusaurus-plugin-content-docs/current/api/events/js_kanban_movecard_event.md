---
sidebar_label: move-card
title: Событие move-card
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о событии move-card. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Обработчик события **move-card** получает объект со следующими свойствами:

- `id` - (обязательно) ID карточки, которая перемещается
- `columnId` - (обязательно) ID колонки, в которую будет помещена карточка
- `rowId` - (необязательно) ID строки, в которую будет помещена карточка
- `before` - (необязательно) ID карточки, перед которой будет вставлена перемещаемая карточка
- `skipProvider` - (необязательно) контролирует, будет ли предотвращён запрос на сервер

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
// подписываемся на событие "move-card"
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Связанный пример:** [Kanban. Отключение drag and drop для конкретных колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
