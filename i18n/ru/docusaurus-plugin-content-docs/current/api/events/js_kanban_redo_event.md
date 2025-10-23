---
sidebar_label: redo
title: событие redo
description: Вы можете узнать о событии redo в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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