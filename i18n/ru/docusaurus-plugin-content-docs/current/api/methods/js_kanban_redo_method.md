---
sidebar_label: redo()
title: Метод redo
description: Вы можете узнать о методе redo в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# redo()

### Описание

@short: Повторно выполняет действие, отменённое методом undo

:::info
Метод `redo()` работает только при включённой опции [`history: true`](/api/config/js_kanban_history_config.md) в конфигурации!
:::

### Использование

~~~jsx {}
redo(): void;
~~~

### Пример

~~~jsx {7}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// повторяет последнее отменённое действие в истории Kanban
board.redo();
~~~

**История изменений:** Этот метод был добавлен в версии v1.3
