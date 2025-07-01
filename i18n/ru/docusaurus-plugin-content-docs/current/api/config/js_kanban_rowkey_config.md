---
sidebar_label: rowKey
title: Конфигурация rowKey
description: Изучите конфигурацию rowKey в документации по библиотеке DHTMLX JavaScript Kanban. Найдите руководства для разработчиков и справочники по API, экспериментируйте с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# rowKey

### Описание

@short: Необязательно. Определяет, как карточка привязывается к ряду.

:::info
Для организации карточек по рядам (swimlanes) необходимо задать **пользовательский ключ**, который будет соответствовать **ID** ряда в данных каждой карточки. Затем в конфигурации виджета установите свойство **rowKey** равным этому *пользовательскому ключу*.
:::

### Использование

~~~jsx {}
rowKey?: string;
~~~  

### Пример

~~~jsx {4,8,16}
const cards = [
    {
        label: "Backlog task",
        row_custom_key: "feature"
    },
    {
        label: "In progress task",
        row_custom_key: "done"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    rowKey: "row_custom_key",
    // другие параметры
});
~~~

**Связанный пример:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
