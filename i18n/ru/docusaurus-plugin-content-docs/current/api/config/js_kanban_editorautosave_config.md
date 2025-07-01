---
sidebar_label: editorAutoSave
title: Конфигурация editorAutoSave
description: Вы можете узнать о конфигурации editorAutoSave в документации библиотеки DHTMLX JavaScript Kanban. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
Начиная с версии 1.3, свойство `editorAutoSave` **устарело**. Для управления режимом "автосохранения" используйте свойство [`editor`](/api/config/js_kanban_editor_config.md).
:::

### Описание

@short: Опционально. Включает или выключает режим автосохранения

:::info
Этот параметр позволяет включить или отключить автосохранение в редакторе Kanban. Когда свойство **editorAutoSave** установлено в **false**, в редакторе появляется кнопка "Сохранить" для ручного сохранения изменений.
:::

### Использование

~~~jsx {}
editorAutoSave?: boolean; // (по умолчанию true)
~~~

### Конфигурация по умолчанию

~~~jsx {}
editorAutoSave: true
~~~

### Пример

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    editorAutoSave: false, // отключить автосохранение
    // другие параметры
});
~~~
