---
sidebar_label: theme
title: Конфигурация theme
description: Вы можете узнать о конфигурации темы (Toolbar) в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# theme

### Описание

@short: Необязательно. Тема, которая будет применена к Toolbar

### Использование

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
Помимо использования свойства `theme`, нужную тему можно применить, добавив соответствующие *css* классы к контейнерам виджетов:

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

или просто подключите нужную тему на странице из папки skins:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Конфигурация по умолчанию

По умолчанию Toolbar использует тему **Material**. Вы также можете установить темы **Willow** и **Willow-Dark**.

:::tip
Чтобы динамически изменить текущую тему, вы можете использовать метод [**setConfig()**](api/methods/toolbar_setconfig_method.md).
:::

### Пример

~~~jsx {5,11}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // изначально будет установлена тема "willow-dark"
    // другие параметры
});
// создаём Toolbar
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // изначально будет установлена тема "willow-dark"
});
~~~

**История изменений:** Свойство добавлено в версии v1.4

**Связанные статьи:** [Стилизация](guides/stylization.md)

**Связанный пример:** [Kanban. Изменение темы через CSS класс](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)