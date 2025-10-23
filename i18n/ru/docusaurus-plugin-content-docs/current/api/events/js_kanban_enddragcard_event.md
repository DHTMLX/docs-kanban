---
sidebar_label: end-drag-card
title: Событие end-drag-card
description: Вы можете узнать о событии end-drag-card в документации по JavaScript библиотеке DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# end-drag-card

### Описание

@short: Срабатывает при прекращении перетаскивания карточки

### Использование

~~~jsx {}
"end-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### Параметры

Коллбэк события **end-drag-card** принимает объект со следующими параметрами:

- `id` - (обязательно) ID перетаскиваемой карточки
- `columnId` - (обязательно) ID колонки, в которой в данный момент находится карточка
- `rowId` - (необязательно) ID строки, в которой в данный момент находится карточка
- `before` - (необязательно) ID карточки, которая сейчас находится после перетаскиваемой карточки в колонке
- `source` - (необязательно) массив ID перемещённых карточек

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
// подписываемся на событие "end-drag-card"
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**История изменений:** Событие добавлено в версии v1.4

**Связанный пример:** [Kanban. Отключение перетаскивания в определённые колонки](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)