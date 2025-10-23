---
sidebar_label: setConfig()
title: Метод setConfig
description: Вы можете ознакомиться с методом setConfig в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setConfig()

### Описание

@short: Устанавливает новые параметры конфигурации Kanban

### Использование

~~~jsx {}
setConfig(config: object): void;
~~~

### Параметры

- `config` - (обязательный) объект конфигурации Kanban. Полный список свойств смотрите [здесь](api/overview/main_overview.md#kanban-properties)

:::tip
С помощью этого метода вы можете настроить виджет Kanban, а также загрузить в него данные. Метод не изменяет историю (изменение истории невозможно).
:::

### Пример

~~~jsx {10-20,22-23}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// создаём Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// задаём новые параметры конфигурации Kanban
board.setConfig({
    columnKey: "stage",
    rowKey: "type",
    cardShape,
    editorShape,
    editor: {
       autoSave: false
    },
    /* другие параметры */
});
                        
// задаём новые параметры конфигурации Toolbar
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~