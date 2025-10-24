---
sidebar_label: api
title: api Config
description: Вы можете ознакомиться с конфигурацией api (Toolbar) в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# api

### Описание

@short: Обязательно. Объект с внутренним API Kanban

:::info
В данном случае **внутренний API Kanban** используется для **элементов управления**, расположенных на Toolbar
:::

### Использование

~~~jsx {}
api: object;
~~~

### Пример

~~~jsx {7}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

**Связанные статьи:** [Конфигурация](guides/configuration.md#toolbar)

**Связанный пример:** [Kanban. Пользовательский toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)