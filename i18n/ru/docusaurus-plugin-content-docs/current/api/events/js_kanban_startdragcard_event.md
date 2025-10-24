---
sidebar_label: start-drag-card
title: Событие start-drag-card
description: Вы можете узнать о событии start-drag-card в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Обработчик события **start-drag-card** принимает объект со следующими параметрами:

- `id` - (обязательно) ID перетаскиваемой карточки
- `columnId` - (обязательно) ID колонки, в которой в данный момент находится карточка
- `rowId` - (необязательно) ID строки, в которой в данный момент находится карточка
- `before` - (необязательно) ID карточки, которая в колонке находится после перетаскиваемой карточки
- `source` - (необязательно) массив ID перемещаемых карточек

:::info
Для работы с внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "start-drag-card"
board.api.on("start-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**История изменений:** Событие добавлено в версии v1.4

**Связанный пример:** [Kanban. Отключение drag and drop для определённых колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)