---
sidebar_label: setConfig()
title: Метод setConfig API
description: Изучите API метода setConfig для DHTMLX Kanban. Узнайте, как динамически обновлять конфигурацию доски во время выполнения.
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