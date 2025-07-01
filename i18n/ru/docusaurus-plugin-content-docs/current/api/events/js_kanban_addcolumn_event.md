---
sidebar_label: add-column
title: Событие add-column
description: Изучите событие add-column в документации по JavaScript-библиотеке DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков, справочником API, попробуйте демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# add-column

### Описание

@short: Срабатывает при добавлении новой колонки

### Использование

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### Параметры

Объект, передаваемый в колбэк события **add-column**, содержит следующие необязательные свойства:

- `id` - ID, присвоенный новой колонке
- `column` - объект данных, представляющий новую колонку. Полный список параметров **column** доступен [**здесь**](/api/config/js_kanban_columns_config.md)
- `before` - ID колонки, перед которой будет вставлена новая колонка
- `skipProvider` - управляет тем, будет ли выполнен запрос к серверу или нет

:::info
Для работы с внутренними событиями вы можете использовать [**методы Event Bus**](/api/overview/main_overview.md/#методы-event-bus)
:::

### Пример

~~~jsx {7-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// подписываемся на событие "add-column"
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**История изменений**: параметры **id**, **before** и **column** были добавлены в версии v1.1
