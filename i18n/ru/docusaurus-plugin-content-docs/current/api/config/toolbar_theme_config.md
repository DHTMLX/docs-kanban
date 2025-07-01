---
sidebar_label: theme
title: Конфигурация темы
description: Изучите конфигурацию темы (Toolbar) в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# theme

### Описание

@short: Необязательно. Указывает тему, применяемую к Toolbar.

### Использование

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
Помимо установки свойства `theme`, вы можете применить нужную тему, добавив соответствующие *css* классы в контейнеры виджетов:

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

Или же просто подключите нужный файл стилей темы из папки skins:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Конфигурация по умолчанию

По умолчанию Toolbar использует тему **Material**. Также можно переключиться на тему **Willow** или **Willow-Dark**.

:::tip
Для динамического изменения темы используйте метод [**setConfig()**](../../methods/toolbar_setconfig_method).
:::

### Пример

~~~jsx {5,11}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // устанавливает начальную тему "willow-dark"
    // другие параметры
});
// создаём Toolbar
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // устанавливает начальную тему "willow-dark"
});
~~~

**История изменений:** Свойство добавлено в версии v1.4

**Связанные статьи:** [Стилизация](/guides/stylization)

**Связанные примеры:**
- [Kanban. Использование тем](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Подключение темы как файла стилей](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Изменение темы через CSS класс](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
