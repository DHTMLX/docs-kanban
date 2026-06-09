---
sidebar_label: parse()
title: API метода parse
description: Ознакомьтесь с API метода parse для DHTMLX Kanban. Узнайте, как загружать карточки, колонки, строки и данные доски из JSON.
---

# parse()

### Описание

@short: Выполняет парсинг данных в Kanban

Метод `parse()` является алиасом для [`setConfig()`](/api/methods/js_kanban_setconfig_method), ограниченным свойствами, связанными с данными (`cards`, `columns`, `rows`, `links`). Для этих свойств оба метода выполняют одну и ту же операцию.

:::tip Предпочтительнее использовать setConfig()
Используйте метод [`setConfig()`](/api/methods/js_kanban_setconfig_method), который принимает те же свойства данных **плюс** другие параметры конфигурации Kanban. Вызовите `setConfig()` один раз для всех свойств вместо того, чтобы вызывать `parse()` для данных и `setConfig()` для остальных свойств (таких как [`columnKey`](api/config/js_kanban_columnkey_config.md), [`rowKey`](api/config/js_kanban_rowkey_config.md), [`cardShape`](api/config/js_kanban_cardshape_config.md)):

~~~js
// вместо двух вызовов
kanban.setConfig({ columnKey: "type" });
kanban.parse({ columns });

// используйте один
kanban.setConfig({
    columnKey: "type",
    columns
});
~~~
:::

### Использование

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array,
    links?: array
}): void;
~~~

### Параметры

- [`columns`](api/config/js_kanban_columns_config.md) - (необязательно) массив объектов с данными колонок
- [`rows`](api/config/js_kanban_rows_config.md) - (необязательно) массив объектов с данными строк
- [`cards`](api/config/js_kanban_cards_config.md) - (необязательно) массив объектов с данными карточек
- [`links`](api/config/js_kanban_links_config.md) - (необязательно) массив объектов с данными связей

### Пример

~~~jsx {4-9}
// создаём Kanban
const board = new kanban.Kanban("#root", {});
// парсим данные в Kanban
board.parse({
    columns,
    cards,
    rows,
    links
});

// эквивалентный вызов через setConfig()
// board.setConfig({ columns, cards, rows, links });
~~~

**История изменений:** Начиная с версии v1.1 нет необходимости сбрасывать исходные данные в конструкторе перед парсингом новых данных

**Связанные статьи:** [Работа с данными](guides/working_with_data.md#load-data-from-a-local-source)
