---
sidebar_label: moveCard()
title: Метод moveCard
description: Изучите метод moveCard в документации JavaScript-библиотеки DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков, справочником по API, примерами кода, живыми демонстрациями и получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# moveCard()

### Описание

@short: Перемещает карточку в указанную колонку (и строку).

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

- `id` - (обязательный) ID карточки, которую нужно переместить
- `columnId` - (обязательный) ID целевой колонки, в которую будет помещена карточка
- `rowId` - (необязательный) ID целевой строки, в которую будет размещена карточка
- `before` - (необязательный) ID карточки, перед которой будет вставлена перемещаемая карточка

:::info
Если в конфигурации виджета задано свойство **rowKey**, то указание **rowId** в методе **moveCard()** становится *обязательным*!
:::

### Пример

~~~jsx {9-14}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// перемещаем карточку с ID 1
// она будет помещена в колонку "inprogress" и строку "feature",  
// перед карточкой с ID 8
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~
