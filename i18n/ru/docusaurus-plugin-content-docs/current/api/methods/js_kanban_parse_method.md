---
sidebar_label: parse()
title: Метод parse
description: Вы можете узнать о методе parse в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# parse()

### Описание

@short: Загружает данные в доску Kanban

### Использование

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array
}): void;
~~~

### Параметры

- [`columns`](/api/config/js_kanban_columns_config.md) - (необязательно) массив объектов с данными колонок
- [`rows`](/api/config/js_kanban_rows_config.md) - (необязательно) массив объектов с данными строк
- [`cards`](/api/config/js_kanban_cards_config.md) - (необязательно) массив объектов с данными карточек

### Пример

~~~jsx {4-8}
// создаём Kanban
const board = new kanban.Kanban("#root", {});
// загружаем данные в Kanban
board.parse({
    columns,
    cards,
    rows
});
~~~

**Изменения:** Начиная с версии 1.1, нет необходимости сбрасывать исходные данные в конструкторе перед парсингом новых данных

**Связанные статьи:** [Работа с данными](/guides/working_with_data#загрузка-данных-из-локального-источника)
