---
sidebar_label: editor
title: Конфигурация editor
description: Изучите конфигурацию редактора в документации DHTMLX JavaScript Kanban библиотеки. Ознакомьтесь с руководствами для разработчиков, справочниками API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# editor

### Описание

@short: Необязательно. Содержит настройки для кастомизации редактора Kanban

### Использование

~~~jsx {}
editor?: {
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Параметры

- `autoSave` - (необязательно) включает или отключает функцию автосохранения
- `debounce` - (необязательно) задает время задержки перед автосохранением данных (эффективно только при ***autoSave: true***)
- `placement` - (необязательно) определяет, где отображается редактор. Возможные значения:
    - `"sidebar"` - отображает редактор в виде сайдбара
    - `"modal"` - отображает редактор в модальном окне

### Конфигурация по умолчанию

~~~jsx {}
editor: {
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
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // другие параметры
});
~~~

**История изменений:** Опция `placement` была добавлена в версии v1.6

**Связанные примеры:** [Kanban. Открытие редактора в модальном окне](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)
