---
sidebar_label: addColumn()
title: Метод addColumn
description: Вы можете узнать о методе addColumn в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную оценочную версию DHTMLX Kanban.
---

# addColumn()

### Описание

@short: Добавляет новую колонку в Kanban

### Использование

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### Параметры

- `id` - (необязательно) ID новой колонки
- `column` - (необязательно) объект с данными новой колонки
- `before` - (необязательно) ID колонки, перед которой будет вставлена новая колонка

:::info
Полный список параметров **column** можно найти [**здесь**](api/config/js_kanban_columns_config.md)
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
        label: "Дополнительная колонка",
        limit: 2,
        strictLimit: 2,
        collapsed: true
    },
    before: "column_2"
});
~~~

**История изменений**: Параметры **id**, **column** и **before** были добавлены в версии v1.1