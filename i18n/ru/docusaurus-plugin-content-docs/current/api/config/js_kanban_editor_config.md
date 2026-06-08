---
sidebar_label: editor
title: API конфигурации editor
description: Ознакомьтесь с документацией по конфигурации редактора для DHTMLX Kanban. Узнайте, как включать, настраивать и управлять поведением редактора задач.
---

# editor

### Описание

@short: Необязательно. Объект настроек для конфигурации редактора Kanban

### Использование

~~~jsx {}
editor?: {
    show?: boolean,
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Параметры

- `show` - (необязательно) - включает/отключает редактор
- `autoSave` - (необязательно) включает/отключает режим автосохранения редактора
- `debounce` - (необязательно) время задержки автосохранения данных (работает только с параметром ***autoSave: true***)
- `placement` - (необязательно) задаёт расположение редактора. Можно установить следующие значения:
    - `"sidebar"` - отображает редактор в виде боковой панели
    - `"modal"` - отображает редактор в виде модального окна

### Конфигурация по умолчанию

~~~jsx {}
editor: {
    show: true,
    debounce: 100,
    autoSave: true,
    placement: "sidebar"
}
~~~

### Пример

~~~jsx {4-8}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        show: true
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // другие параметры
});
~~~

**Изменения:** Параметр `placement` был добавлен в версии v1.6

**Связанные примеры:** [Kanban. Открытие редактора в модальном окне](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)