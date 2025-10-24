---
sidebar_label: add-card
title: Событие add-card
description: Вы можете ознакомиться с событием add-card в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-card

### Описание

@short: Срабатывает при добавлении новой карточки

### Использование

~~~jsx {}
"add-card": ({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object,
    skipProvider?: boolean,
}) => void;
~~~

### Параметры

Обработчик события **add-card** принимает объект со следующими параметрами:

- `columnId` - (обязательный) ID целевой колонки
- `id` - (необязательный) ID новой карточки
- `rowId` - (необязательный) ID целевой строки
- `before` - (необязательный) ID карточки, перед которой будет размещена новая карточка
- `select` - (необязательный) включает/отключает выделение вновь добавленной карточки
- `card` - (необязательный) объект данных новой карточки. Полный список параметров карточки доступен [здесь](api/config/js_kanban_cards_config.md)
- `skipProvider` - (необязательный) включает/отключает предотвращение отправки запроса на сервер

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "add-card"
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~