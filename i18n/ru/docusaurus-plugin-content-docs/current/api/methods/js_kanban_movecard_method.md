---
sidebar_label: moveCard()
title: API метода moveCard
description: Ознакомьтесь с API метода moveCard для DHTMLX Kanban. Узнайте, как переместить карточку в определённый столбец или строку.
---

# moveCard()

### Описание

@short: Перемещает карточку в указанный столбец (и строку)

### Использование

~~~jsx {}
moveCard({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number
}): void;
~~~

### Параметры

- `id` - (обязательный) ID карточки, которая будет перемещена
- `columnId` - (обязательный) ID столбца, в который будет помещена карточка
- `rowId` - (необязательный) ID строки, в которую будет помещена карточка
- `before` - (необязательный) ID карточки, перед которой будет размещена новая карточка

:::info
Если в конфигурации виджета указан параметр **rowKey**, то параметр **rowId** метода **moveCard()** является *обязательным*!
:::

### Пример

~~~jsx {9-14}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// перемещаем карточку с ID 1
// элемент будет помещён в столбец "inprogress" и строку "feature",
// перед карточкой с ID 8
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~