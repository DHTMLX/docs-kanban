---
sidebar_label: rowKey
title: API конфигурации rowKey
description: Ознакомьтесь с документацией по конфигурации rowKey для DHTMLX Kanban. Узнайте, как привязывать карточки задач к строкам-swimlanes.
---

# rowKey

### Описание

@short: Необязательно. Определяет принадлежность карточки к строке

:::info
Для распределения карточек по строкам (swimlanes) необходимо указать **пользовательский ключ** и установить его в **ID** нужной строки в объекте данных карточки. Свойство **rowKey** должно быть установлено в этот *пользовательский ключ* в объекте конфигурации виджета.
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