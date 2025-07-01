---
sidebar_label: Стилизация
title: Стилизация
description: Узнайте о возможностях стилизации в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную пробную версию DHTMLX Kanban на 30 дней.
---

# Стилизация

В Kanban довольно просто настраивать внешний вид **колонок**, **строк** и **карт** с помощью свойств [`columnShape.css`](/api/config/js_kanban_columnshape_config), [`rowShape.css`](/api/config/js_kanban_rowshape_config) и [`cardShape.css`](/api/config/js_kanban_cardshape_config). Эти опции позволяют добавить условные стили для колонок, строк и карточек.

Если вам нужно больше гибкости, вы можете добавить собственные CSS-классы к любой конкретной **колонке**, **строке** или **карте** через свойства [`columns.css`](/api/config/js_kanban_columns_config), [`rows.css`](/api/config/js_kanban_rows_config) и [`cards.css`](/api/config/js_kanban_cards_config).

Также вы можете стилизовать любые элементы интерфейса Kanban под нужды вашего проекта. Для этого доступно множество CSS-переменных. В Kanban есть два основных типа переменных:
- CSS-переменные для стилизации **Kanban**
- CSS-переменные из библиотеки **WX** (охватывают такие элементы интерфейса, как контролы, календари и др.)

:::info
Библиотека **WX** используется во внутренней реализации некоторых элементов. Она управляет отдельными частями интерфейса Kanban, например, контролами и календарями.
:::

## Стиль по умолчанию

~~~css
.wx-material-theme {
    /* css-переменные библиотеки WX */
    --wx-field-width: 100%;
    --wx-theme-name: material;
    /* конец css-переменных библиотеки WX */

    /* CSS-переменные Kanban */
    --wx-kanban-background: #f1f1f1;

    /* стили колонок */
    --wx-kanban-column-width: 300px;
    --wx-kanban-column-height: 300px;

    /* стили тулбара */
    --wx-kanban-toolbar-height: 56px;
    --wx-kanban-toolbar-align: center;
    --wx-kanban-toolbar-justify: flex-start;
    --wx-kanban-toolbar-control-hover: rgba(0, 0, 0, 0.07);
    --wx-kanban-toolbar-control-active: rgba(0, 0, 0, 0.15);
    --wx-kanban-toolbar-border: var(--wx-border);

    /* стили карточек */
    --wx-kanban-card-field-padding: 12px;
    --wx-kanban-content-background: var(--wx-background);
    --wx-kanban-card-border: var(--wx-border);
    --wx-kanban-card-border-radius: 6px;
    --wx-kanban-header-border-radius: var(--wx-kanban-card-border-radius);

    /* стили строк */
    --wx-kanban-row-line: var(--wx-border);

    /* стили иконки пользователя */
    --wx-kanban-user-icon-size: 36px;

    /* стили редактора */
    --wx-kanban-header-height: 64px;
    --wx-kanban-editor-width: 569px;
    --wx-kanban-editor-height: auto;
    --wx-kanban-editor-x-padding: 20px;
    --wx-kanban-editor-background: var(--wx-kanban-content-background);
    --wx-kanban-editor-top-border: none;

    /* стили колонок */
    --wx-kanban-over-limit-color: var(--wx-color-danger);
    --wx-kanban-collapsed-column-width: 44px;
    --wx-kanban-z-index: 1;

    /* стили прогресс-контрола */
    --wx-progress-height: 4px;
    --wx-kanban-progress-inactive-color: #dbdbdb;

    /* стили меню */
    --wx-kanban-menu-min-width: 100px;

    /* стили box и тени */
    --wx-kanban-shadow: none;
    --wx-kanban-box-border: var(--wx-border);

    /* стили свернутой колонки */
    --wx-kanban-collapsed-padding: var(--wx-padding);
    --wx-kanban-collapsed-margin: 0px;
    --wx-kanban-collapsed-background: transparent;
    --wx-kanban-collapsed-background-hover: #dfdfdf;

/* Конец CSS-переменных Kanban */
}
~~~

:::tip Примечание
В будущих версиях Kanban некоторые переменные могут быть изменены или переименованы. Рекомендуется проверять названия переменных после обновления и удостовериться, что ваши стили работают корректно.
:::

## Встроенные темы

Доступно несколько встроенных тем, которые можно применить, указав свойство [`theme`](/api/config/js_kanban_theme_config) или вызвав метод [`setTheme()`](/api/methods/js_kanban_settheme_method). Среди доступных тем: **material**, **willow** и **willow-dark**.

:::important
В качестве альтернативы свойству `theme` вы можете переключать темы, добавляя соответствующий *css* класс к контейнерам Kanban:

- **Material theme**
~~~html {}
    <!-- Toolbar Kanban -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Контейнер Kanban -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow theme**
~~~html {}
    <!-- Toolbar Kanban -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Контейнер Kanban -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark theme**
~~~html {}
    <!-- Toolbar Kanban -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Контейнер Kanban -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

Если вам удобнее, просто подключите CSS-файл нужной темы из папки skins:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

Ниже пример использования темы **willow-dark**:
<iframe src="https://snippet.dhtmlx.com/k3iw6ti0?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Стилизация скролла

Скроллбар Kanban также можно стилизовать. Для этого используйте CSS-класс `.wx-styled-scroll`. Перед использованием этой возможности проверьте [поддержку в браузерах](https://caniuse.com/css-scrollbar) для кастомных скроллбаров.

~~~html {4} title="index.html"
<!--контейнер для Toolbar-->
<div id="toolbar"></div> //
<!--контейнер для Kanban-->
<div id="root" class="wx-styled-scroll"></div>
~~~

## Кастомная стилизация

Пример добавления собственной стилизации в Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Адаптивность

Этот пример демонстрирует, как сделать Kanban адаптивным с помощью пользовательских CSS-стилей:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Связанные статьи:** [Кастомизация](../customization)
