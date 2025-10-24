---
sidebar_label: redo()
title: Метод redo
description: Вы можете узнать о методе redo в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и интерактивные демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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