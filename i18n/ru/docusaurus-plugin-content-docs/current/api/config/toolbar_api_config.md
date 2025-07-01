---
sidebar_label: api
title: api Config
description: Изучите конфигурацию api (Toolbar) в документации по библиотеке DHTMLX JavaScript Kanban. Найдите руководства для разработчиков, справочные материалы по API, примеры кода, демонстрации и бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# api

### Описание

@short: Обязательно. Объект, представляющий внутренний API Kanban.

:::info
Здесь **внутренний API Kanban** относится к **элементам управления**, находящимся на Toolbar.
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

**Связанные статьи:** [Configuration](/guides/configuration#панель-инструментов)

**Связанный пример:** [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
