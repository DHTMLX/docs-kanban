---
sidebar_label: unselectCard()
title: Метод unselectCard API
description: Изучите API метода unselectCard для DHTMLX Kanban. Узнайте, как снять выделение с карточек по их ID.
---

# unselectCard()

### Описание

@short: Снимает выделение с карточки(ек) по её ID

### Использование

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
Чтобы снять выделение со всех карточек, вызовите метод **unselectCard()** без параметров
:::

### Параметры

- `id` - (обязательный) ID карточки, с которой нужно снять выделение

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// снимаем выделение с карточки с ID 1
board.unselectCard({ id: 1 });
~~~