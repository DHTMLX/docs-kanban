---
sidebar_label: set-edit
title: API события set-edit
description: Прочитайте API события set-edit для DHTMLX Kanban. Узнайте, как обрабатывать событие, возникающее при переключении редактора.
---

# set-edit

### Описание

@short: Срабатывает при переключении редактора

### Использование

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Параметры

Колбэк события **set-edit** может принимать значение *null* или объект со следующими параметрами:

- `cardId` - (обязательный) ID карточки, которую нужно отредактировать
- `eventSource` - (необязательный) действие ***"select-card"***, вызывающее событие ***set-edit***

:::note
Значение ***null*** используется при закрытии редактора
:::

:::info
Для обработки внутренних событий вы можете использовать [**Event Bus методы**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// запрещаем редактирование при одиночном клике по карточке
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**История изменений:**
    - Событие добавлено в версии v1.2
    - Параметр ***eventSource*** добавлен в версии v1.6

**Связанные примеры:** [Kanban. Открытие редактора двойным кликом по задаче](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)