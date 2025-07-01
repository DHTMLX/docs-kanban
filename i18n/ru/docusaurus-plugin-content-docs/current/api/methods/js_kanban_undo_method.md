---
sidebar_label: undo()
title: Метод undo
description: Вы можете узнать о методе undo в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# undo()

### Описание

@short: Отменяет последнюю операцию в Gantt

:::info
Метод `undo()` работает только при включенной конфигурации [`history: true`](/api/config/js_kanban_history_config.md)!
:::

### Использование

~~~jsx {}
undo(): void;
~~~

### Пример

~~~jsx {7}
// создаём Gantt
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// возвращается на один шаг назад в истории Gantt
board.undo();
~~~

**Изменения в версии:** Метод был добавлен в версии v1.3
