---
sidebar_label: set-edit
title: Событие set-edit
description: Изучите событие set-edit в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочником по API, попробуйте демо вживую и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# set-edit

### Описание

@short: Срабатывает при переключении редактора

### Использование

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Параметры

Обратный вызов для события **set-edit** принимает либо *null*, либо объект со следующими свойствами:

- `cardId` - (обязательно) ID редактируемой карточки
- `eventSource` - (необязательно) указывает на действие ***"select-card"***, которое вызвало событие ***set-edit***

:::note
Значение ***null*** означает, что редактор закрывается
:::

:::info
Для управления внутренними событиями можно использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// блокируем редактирование при одиночном клике по карточке
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**Журнал изменений:**
    - Событие добавлено в версии v1.2
    - Параметр ***eventSource*** добавлен в версии v1.6

**Связанные примеры:** [Kanban. Открытие редактора двойным кликом по задаче](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)
