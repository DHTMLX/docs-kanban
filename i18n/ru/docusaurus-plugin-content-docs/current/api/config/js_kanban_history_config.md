---
sidebar_label: history
title: API конфигурации history
description: Ознакомьтесь с API конфигурации history для DHTMLX Kanban. Узнайте, как включить или отключить историю изменений с поддержкой отмены и повтора действий.
---

# history

### Описание

@short: Необязательно. Включает/отключает управление историей изменений

:::info
С помощью свойства `history` вы можете включить или отключить управление историей Kanban. Если установить его в **false**, вы не сможете управлять историей через API и элементы управления на Toolbar.
:::

:::tip
Вы также можете пропускать некоторые операции в истории Kanban, используя параметр [`$meta`](api/common/js_kanban_meta_parameter.md) с методами и событиями!
:::

### Использование

~~~jsx {}
history?: boolean; 
~~~

### Конфигурация по умолчанию

~~~jsx {}
history: true
~~~

### Пример

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false, // отключить управление историей
    // другие параметры
});
~~~

**Журнал изменений:** Свойство добавлено в v1.3

**Полезные статьи:** [`undo()`](api/methods/js_kanban_undo_method.md) и [`redo()`](api/methods/js_kanban_redo_method.md)