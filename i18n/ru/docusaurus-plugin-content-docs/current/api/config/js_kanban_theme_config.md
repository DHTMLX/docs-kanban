---
sidebar_label: theme
title: Конфигурация темы
description: Изучите параметры настройки темы в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочниками по API, живыми демо и получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# theme

### Описание

@short: Необязательно. Определяет тему, которая будет применена к доске Kanban.

### Использование

~~~jsx {}
theme?: {
    name: string, // "material" (по умолчанию) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
Кроме установки свойства `theme`, тему также можно применить, добавив соответствующие *css* классы непосредственно к контейнерам виджета:

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

Также можно подключить нужную тему, добавив ссылку на её таблицу стилей из папки skins:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### Параметры

Ниже приведены параметры, которые можно использовать для настройки **theme**:

- `theme` - (необязательно) объект с настройками темы. Поддерживает:
    - `name` - (обязательно) имя темы, которая будет применена к Kanban
    - `fonts` - (необязательно) управляет загрузкой шрифтов с CDN (шрифт wxi)

:::tip
Темы **Willow** и **Willow-Dark** также доступны. Для динамического переключения тем можно использовать метод [`setTheme()`](../../methods/js_kanban_settheme_method).
:::

### Конфигурация по умолчанию

По умолчанию доска Kanban использует тему **Material**.

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
        name: "willow-dark", // изначально устанавливает тему "willow-dark"
        fonts: false
    }
    // другие параметры
});
~~~

**История изменений:** Свойство было добавлено в версии v1.4

**Связанные статьи:** [Стилизация](/guides/stylization)

**Связанные примеры:**
- [Kanban. Использование тем](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Подключение темы как таблицы стилей](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Смена темы через CSS класс](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
