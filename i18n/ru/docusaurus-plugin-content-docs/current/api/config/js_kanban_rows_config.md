---
sidebar_label: rows
title: Конфигурация rows
description: Вы можете узнать о конфигурации rows в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# rows

### Описание

@short: Необязательно. Массив объектов, содержащих данные строк (swimlanes)

### Использование

~~~jsx {}
rows?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        css?: string,
    }, {...} // другие данные строки
];
~~~

:::info
Для создания Swimlanes необходимо указать соответствующие данные в массиве свойства **rows**. Вы можете сворачивать/разворачивать, переименовывать, удалять и перемещать swimlanes через UI или используя [соответствующий API](howtos.md#how-to-work-with-rows-swimlanes)
:::

### Параметры

Для каждой строки (swimlane) можно указать следующие параметры (данные):

- `id` - (обязательно) **ID** строки (swimlane). Используется для управления строкой через соответствующие методы
- `label` - (необязательно) метка строки (swimlane). Отображается в разделе строки
- `collapsed` - (необязательно) текущее состояние строки (swimlane). Если ***true***, строка изначально свернута. Значение по умолчанию — ***false*** (развернутое состояние)
- `css` - (необязательно) задаёт CSS-стили для отдельной строки

:::info
Если вы хотите динамически загружать новые данные для строк (swimlanes), вы можете использовать метод [**setConfig()**](api/methods/js_kanban_setconfig_method.md) или [**parse()**](api/methods/js_kanban_parse_method.md)!
:::

### Пример

~~~jsx {1-4,9}
const rows = [
    { label: "Feature", id: "feature", collapsed: false, css: "red" },
    { label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows, // данные swimlanes
    // другие параметры
});
~~~

**История изменений:** Параметр ***css*** был добавлен в версии v1.4

**Связанные статьи:**
- [Работа с данными](guides/working_with_data.md)
- [updateRow()](api/methods/js_kanban_updaterow_method.md)

**Связанный пример:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
