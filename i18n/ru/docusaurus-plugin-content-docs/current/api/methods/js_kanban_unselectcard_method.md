---
sidebar_label: unselectCard()
title: Метод unselectCard
description: Вы можете узнать о методе unselectCard в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# unselectCard()

### Описание

@short: Снимает выделение с карточки(ок), идентифицированных по их ID.

### Использование

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
Вызов **unselectCard()** без аргументов снимет выделение со всех карточек.
:::

### Параметры

- `id` - (обязательный) уникальный идентификатор карточки, с которой нужно снять выделение.

### Пример

~~~jsx {7}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// снимаем выделение с карточки с ID 1
board.unselectCard({ id: 1 });
~~~
