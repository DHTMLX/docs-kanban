---
sidebar_label: end-drag-card
title: Событие end-drag-card
description: Вы можете узнать о событии end-drag-card в документации JavaScript-библиотеки DHTMLX Kanban. Просматривайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# end-drag-card

### Описание

@short: Срабатывает при завершении перетаскивания карточки

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

Колбэк для события **end-drag-card** получает объект со следующими данными:

- `id` - (обязательно) ID перетаскиваемой карточки
- `columnId` - (обязательно) ID колонки, в которой теперь находится карточка
- `rowId` - (необязательно) ID строки, в которую помещена карточка
- `before` - (необязательно) ID карточки, которая следует после перетаскиваемой в колонке
- `source` - (необязательно) массив, содержащий ID перемещённых карточек

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
// слушаем событие "end-drag-card"
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**Журнал изменений:** Событие доступно начиная с версии v1.4

**Связанный пример:** [Kanban. Отключение drag and drop для отдельных колонок](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
