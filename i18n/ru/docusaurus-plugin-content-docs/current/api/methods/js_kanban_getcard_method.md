---
sidebar_label: getCard()
title: API метода getCard
description: Ознакомьтесь с API метода getCard для DHTMLX Kanban. Узнайте, как получить объект данных карточки по её ID.
---

# getCard()

### Описание

@short: Получает объект данных карточки по указанному ID

### Использование

~~~jsx {}
getCard(id: string | number): object;
~~~

### Параметры

- `id` - (обязательный) ID целевой карточки

### Возвращаемое значение

Метод возвращает объект данных карточки с указанным ID

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// получаем объект данных карточки с ID 1
const card_data = board.getCard(1);
console.log(card_data);
~~~