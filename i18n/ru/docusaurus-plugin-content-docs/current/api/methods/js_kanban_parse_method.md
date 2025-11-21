---
sidebar_label: parse()
title: Метод parse
description: Вы можете узнать о методе parse в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# parse()

### Описание

@short: Выполняет парсинг данных в Kanban

Этот метод выполняет ту же операцию, что и [`setConfig`](/api/methods/js_kanban_setconfig_method) при использовании с настройками Kanban, связанными с данными. Поэтому для согласованности с другими вариантами конфигурирования рекомендуется использовать `setConfig`, однако `parse` по-прежнему поддерживается как алиас для загрузки данных.

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
~~~

**История изменений:** Начиная с версии v1.1 нет необходимости сбрасывать исходные данные в конструкторе перед парсингом новых данных

**Связанные статьи:** [Работа с данными](guides/working_with_data.md#loading-data-from-local-source)
