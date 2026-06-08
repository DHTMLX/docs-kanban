---
sidebar_label: redo()
title: Метод redo API
description: Изучите API метода redo для DHTMLX Kanban. Узнайте, как повторить действие, отменённое с помощью undo.
---

# redo()

### Описание

@short: Повторяет действие, которое было отменено с помощью undo

:::info
Метод `redo()` работает только с конфигурацией [`history: true`](api/config/js_kanban_history_config.md)!
:::

### Использование

~~~jsx {}
redo(): void;
~~~

### Пример

~~~jsx {7}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// делает один шаг вперед в истории Kanban
board.redo();
~~~

**История изменений:** Метод был добавлен в версии v1.3