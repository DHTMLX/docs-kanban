---
sidebar_label: redo
title: API события redo
description: Прочитайте API события redo для DHTMLX Kanban. Узнайте, как обрабатывать событие, возникающее при повторении действия, отменённого с помощью undo.
---

# redo

### Описание

@short: Срабатывает при повторении действия, отменённого с помощью undo

### Использование

~~~jsx {}
"redo": () => void;
~~~

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/main_overview.md/#event-bus-methods)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "redo"
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**История изменений**: событие добавлено в версии v1.7