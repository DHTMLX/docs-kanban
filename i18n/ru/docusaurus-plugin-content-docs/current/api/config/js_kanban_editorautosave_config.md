---
sidebar_label: editorAutoSave
title: API конфигурации editorAutoSave
description: Ознакомьтесь с API конфигурации editorAutoSave для DHTMLX Kanban. Узнайте, как включить или отключить автосохранение в редакторе карточек.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
Начиная с версии 1.3, свойство `editorAutoSave` **устарело**. Для управления режимом "автосохранения" используйте свойство [`editor`](api/config/js_kanban_editor_config.md)!
:::

### Описание

@short: Необязательно. Включает/отключает режим автосохранения

:::info
С помощью этого параметра можно включить или отключить режим автосохранения в Kanban. Если установить свойство **editorAutoSave** в значение **false**, редактор будет отображать кнопку "Сохранить" для сохранения отредактированных данных.
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