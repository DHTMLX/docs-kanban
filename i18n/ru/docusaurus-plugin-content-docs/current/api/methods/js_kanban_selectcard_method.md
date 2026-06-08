---
sidebar_label: selectCard()
title: Метод selectCard API
description: Изучите API метода selectCard для DHTMLX Kanban. Узнайте, как выбрать карточку по её ID.
---

# selectCard()

### Описание

@short: Выбирает карточку по указанному ID

### Использование

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Параметры

- `id` - (обязательный) ID выбранной карточки
- `groupMode` - (необязательный) включает/отключает множественный выбор карточек (**false** по умолчанию)

:::info
Если параметр **groupMode** установлен в **true**, метод **selectCard()** не сбросит выбор других элементов
:::

### Пример

~~~jsx {7-10}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// выбираем карточку с ID 1
board.selectCard({
    id: 1,
    groupMode: true
});
~~~