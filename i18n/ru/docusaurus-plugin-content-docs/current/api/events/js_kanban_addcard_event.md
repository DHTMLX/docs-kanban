---
sidebar_label: add-card
title: Событие add-card
description: Узнайте, как работает событие add-card в библиотеке DHTMLX JavaScript Kanban. Изучите руководства для разработчиков, справочник API, примеры тестового кода, посмотрите демонстрации вживую и получите бесплатную 30-дневную пробную версию DHTMLX Kanban.
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

Объект, передаваемый в колбэк события **add-card**, содержит следующие свойства:

- `columnId` - (обязательно) ID колонки, в которую будет добавлена карточка
- `id` - (необязательно) ID, присваиваемый новой карточке
- `rowId` - (необязательно) ID строки, в которую должна быть помещена карточка
- `before` - (необязательно) ID карточки, перед которой будет вставлена новая карточка
- `select` - (необязательно) определяет, должна ли вновь добавленная карточка быть выделена
- `card` - (необязательно) объект с данными, представляющий новую карточку. Полное описание параметров карточки доступно [здесь](/api/config/js_kanban_cards_config.md)
- `skipProvider` - (необязательно) управляет, нужно ли пропускать запрос к серверу

:::info
Для работы с внутренними событиями обращайтесь к [**методам Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// слушаем событие "add-card"
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~
