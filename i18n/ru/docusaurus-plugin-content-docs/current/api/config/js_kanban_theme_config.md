---
sidebar_label: theme
title: Конфигурация темы
description: Вы можете ознакомиться с конфигурацией темы в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# theme

### Описание

@short: Необязательно. Тема, которая будет применена к Kanban

### Использование

~~~jsx {}
theme?: {
    name: string, // "material" (по умолчанию) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
Помимо использования свойства `theme`, нужную тему можно применить, добавив соответствующие *css* классы к контейнерам виджета:

- **Тема Material**
~~~html {}
    <!-- Панель инструментов Kanban -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Контейнер Kanban -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Тема Willow**
~~~html {}
    <!-- Панель инструментов Kanban -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Контейнер Kanban -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Тема Willow-Dark**
~~~html {}
    <!-- Панель инструментов Kanban -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Контейнер Kanban -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

или просто подключите нужную тему на страницу из папки skins:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Параметры

Для настройки **theme** можно использовать следующие параметры.

- `theme` - (необязательно) объект с настройками темы. Здесь можно указать следующие параметры:
    - `name` - (обязательно) имя темы, которая будет применена к Kanban
    - `fonts` - (необязательно) включает или отключает загрузку шрифтов с CDN (шрифт wxi)

:::tip
Вы также можете применять темы **Willow** и **Willow-Dark**. Для динамического изменения текущей темы используйте метод [`setTheme()`](api/methods/js_kanban_settheme_method.md).
:::

### Конфигурация по умолчанию

По умолчанию Kanban использует тему **Material**.

~~~jsx {}
theme: {
    name: "material",
    fonts: true
}
~~~

### Пример

~~~jsx {5-8}
// создание Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: {
        name: "willow-dark", // изначально будет установлена тема "willow-dark"
        fonts: false
    }
    // другие параметры
});
~~~

**История изменений:** Свойство добавлено в версии v1.4

**Связанные статьи:** [Стилизация](guides/stylization.md)

**Связанный пример:** [Kanban. Изменение темы через CSS класс](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)