---
sidebar_label: undo()
title: Метод undo API
description: Изучите API метода undo для DHTMLX Kanban. Узнайте, как отменить последнее действие на доске.
---

# undo()

### Описание

@short: Отменяет последнее действие в Kanban

:::info
Метод `undo()` работает только с конфигурацией [`history: true`](api/config/js_kanban_history_config.md)!
:::

### Использование

~~~jsx {}
undo(): void;
~~~

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// делает один шаг назад в истории Kanban
board.undo();
~~~

**Изменения:** Метод был добавлен в версии v1.3