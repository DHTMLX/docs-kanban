---
sidebar_label: setConfig()
title: Метод setConfig
description: Вы можете ознакомиться с методом setConfig в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# setConfig()

### Описание

@short: Обновляет Kanban с новыми настройками конфигурации

### Использование

~~~jsx {}
setConfig(config: object): void;
~~~

### Параметры

- `config` - (обязательный) объект, содержащий параметры конфигурации Kanban. Полный список свойств смотрите [здесь](/api/overview/main_overview.md#свойства-kanban)

:::tip
Этот метод позволяет изменить настройки виджета Kanban и загрузить в него данные. Обратите внимание, что он не влияет на историю (изменение истории не поддерживается) и темы (для этого используйте метод [`setTheme()`](/api/methods/js_kanban_settheme_method.md)).
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

// обновляем конфигурацию Kanban новыми параметрами
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
                        
// обновляем конфигурацию Toolbar новыми элементами
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~
