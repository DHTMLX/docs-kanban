---
sidebar_label: api.on()
title: Метод on
description: Узнайте о методе on в документации по библиотеке DHTMLX JavaScript Kanban. Изучите руководства для разработчиков, справочники по API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.on()

### Описание

@short: Позволяет прикрепить обработчик к внутренним событиям

### Использование

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Параметры

- `event` - (обязательный) событие, за которым нужно следить 
- `handler` - (обязательный) функция для обработки события (аргументы зависят от вызванного события)

### События

:::info
Полный список внутренних событий Kanban можно найти [**здесь**](/api/overview/main_overview.md/#события-kanban)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// выводим данные карточки в консоль при её перемещении
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
});
~~~
