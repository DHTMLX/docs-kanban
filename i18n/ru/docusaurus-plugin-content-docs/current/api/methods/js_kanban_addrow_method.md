---
sidebar_label: addRow()
title: API метода addRow
description: Ознакомьтесь с API метода addRow для DHTMLX Kanban. Узнайте, как добавить новую строку (swimlane) на доску.
---

# addRow()

### Описание

@short: Добавляет новую строку в Kanban

### Использование

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### Параметры

- `id` - (необязательно) идентификатор новой строки
- `row` - (необязательно) объект данных новой строки
- `before` - (необязательно) идентификатор строки, перед которой будет размещена новая строка

:::info
Полный список параметров **row** можно найти [**здесь**](api/config/js_kanban_rows_config.md)
:::

### Пример

~~~jsx {8-15}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// добавляем новую строку
board.addRow({
    id: "extra_row",
    row: {
        label: "Дополнительная строка",
        collapsed: false
    },
    before: "row_2"
});
~~~

**История изменений**: Параметры **id**, **row** и **before** были добавлены в версии v1.1