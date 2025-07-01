---
sidebar_label: api.intercept()
title: Метод intercept
description: Вы можете узнать о методе intercept в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api.intercept()

### Описание

@short: Позволяет перехватывать и блокировать внутренние события до их выполнения.

### Использование

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Параметры

- `event` - (обязательный) событие для прослушивания
- `callback` - (обязательный) функция, которая будет выполнена (ее аргументы зависят от перехватываемого события)

### События

:::info
Полный список внутренних событий Kanban можно посмотреть [**здесь**](/api/overview/main_overview.md/#события-kanban)
:::

### Пример

~~~jsx {7-11}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// предотвращаем перемещение карточек в колонку с ID "done"
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
});
~~~
