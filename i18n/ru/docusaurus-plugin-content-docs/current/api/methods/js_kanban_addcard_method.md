---
sidebar_label: addCard()
title: API метода addCard
description: Ознакомьтесь с API метода addCard для DHTMLX Kanban. Узнайте, как добавить новую карточку на доску.
---

# addCard()

### Описание

@short: Добавляет новую карточку в Kanban

### Использование

~~~jsx {}
addCard({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object
}): void;
~~~

### Параметры

- `columnId` - (обязательный) ID целевой колонки  
- `id` - (необязательный) ID новой карточки  
- `rowId` - (необязательный) ID целевой строки  
- `before` - (необязательный) ID карточки, перед которой будет размещена новая карточка  
- `select` - (необязательный) включает/отключает выделение вновь добавленной карточки  
- `card` - (необязательный) объект с данными новой карточки  

:::info
Полный список параметров **card** доступен [**здесь**](api/config/js_kanban_cards_config.md)
:::

### Пример

~~~jsx {7-12}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// добавляем новую карточку в колонку "backlog"
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" }
});
~~~

:::tip
Вы также можете указать ID новой карточки в объекте **card**
:::