---
sidebar_label: getCard()
title: Метод getCard
description: Вы можете узнать о методе getCard в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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