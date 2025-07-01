---
sidebar_label: addColumn()
title: Метод addColumn
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о методе addColumn. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# addColumn()

### Описание

@short: Вставляет новую колонку в доску Kanban

### Использование

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### Параметры

- `id` - (необязательно) задаёт ID для новой колонки
- `column` - (необязательно) содержит объект данных, определяющий новую колонку
- `before` - (необязательно) указывает ID колонки, перед которой будет вставлена новая

:::info
Полный список параметров **column** доступен [**здесь**](/api/config/js_kanban_columns_config.md)
:::

### Пример

~~~jsx {7-16}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// добавляем новую колонку
board.addColumn({
    id: "extra_column",
    column: {
        label: "Extra column",
        limit: 2,
        strictLimit: 2,
        collapsed: true
    },
    before: "column_2"
});
~~~

**Изменения в версии**: параметры **id**, **column** и **before** были добавлены в версии v1.1
