---
sidebar_label: rows
title: Конфигурация rows
description: Изучите конфигурацию rows в документации по библиотеке DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, API-справочниками, попробуйте примеры кода и живые демо, а также получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# rows

### Описание

@short: Опционально. Массив объектов, содержащих данные строк (swimlanes)

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
Для настройки Swimlanes предоставьте соответствующие данные в массиве **rows**. Вы можете сворачивать/разворачивать, переименовывать, удалять и перемещать swimlanes через UI или с помощью [соответствующего API](/howtos/#работа-со-строками-swimlanes).
:::

### Параметры

Каждая строка (swimlane) может включать следующие параметры:

- `id` - (обязательный) **ID** строки (swimlane), используемый для управления строкой через её методы
- `label` - (опционально) метка для строки (swimlane), отображаемая в области строки
- `collapsed` - (опционально) указывает, начинается ли строка (swimlane) свернутой. Если ***true***, то изначально свернута. По умолчанию ***false*** (развернута)
- `css` - (опционально) применяет CSS-стили к отдельной строке

:::info
Для динамической загрузки новых данных строки (swimlane) можно использовать метод [**parse()**](../../methods/js_kanban_parse_method).
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
    rows, // данные swimlane
    // другие параметры
});
~~~

**История изменений:** Параметр ***css*** был добавлен в версии v1.4

**Связанные статьи:**
- [Работа с данными](/guides/working_with_data)
- [updateRow()](/api/methods/js_kanban_updaterow_method.md)

**Связанный пример:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
