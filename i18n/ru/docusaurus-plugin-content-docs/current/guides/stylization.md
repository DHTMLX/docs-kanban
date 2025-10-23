---
sidebar_label: Стилизация
title: Стилизация
description: Ознакомьтесь с возможностями стилизации в документации по DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Стилизация

В Kanban вы можете стилизовать внешний вид **колонок**, **строк** и **карточек** с помощью свойств [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md) и [`cardShape.css`](api/config/js_kanban_cardshape_config.md). Эти свойства позволяют условно применять стили к колонкам, строкам и карточкам.

Также вы можете применить собственный CSS-класс к отдельной **колонке**, **строке** или **карточке** с помощью свойств [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md) и [`cards.css`](api/config/js_kanban_cards_config.md).

Кроме того, вы можете применять пользовательские стили к любой части интерфейса Kanban, чтобы соответствовать требованиям вашего проекта. Для этого библиотека предоставляет широкий набор CSS-переменных. Обратите внимание, что Kanban включает два типа переменных:
- CSS-переменные, связанные со стилем **Kanban**
- CSS-переменные, связанные со стилем библиотеки **WX** (*элементы управления, календари и т.д.*)

:::info
Обратите внимание, что библиотека **WX** используется только для внутренних процессов. Она предоставляет некоторые небольшие элементы, используемые в Kanban (*элементы управления, календари и т.д.*)
:::

## Стиль по умолчанию

~~~css
.wx-material-theme {
    /* CSS-переменные библиотеки WX */
    --wx-field-width: 100%;
    --wx-theme-name: material;
    /* конец CSS-переменных библиотеки WX */

    /* CSS-переменные Kanban */
    --wx-kanban-background: #f1f1f1;

    /*  стили колонок */
    --wx-kanban-column-width: 300px;
    --wx-kanban-column-height: 300px;

    /* стили панели инструментов */
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

    /* стили элемента прогресса */
    --wx-progress-height: 4px;
    --wx-kanban-progress-inactive-color: #dbdbdb;

    /* стили меню */
    --wx-kanban-menu-min-width: 100px;

    /* стили тени и рамки */
    --wx-kanban-shadow: none;
    --wx-kanban-box-border: var(--wx-border);

    /* стили свернутых колонок */
    --wx-kanban-collapsed-padding: var(--wx-padding);
    --wx-kanban-collapsed-margin: 0px;
    --wx-kanban-collapsed-background: transparent;
    --wx-kanban-collapsed-background-hover: #dfdfdf;

/* Конец CSS-переменных Kanban */
}
~~~

:::tip Примечание
В будущих версиях Kanban могут быть изменены некоторые переменные и их имена. Пожалуйста, не забывайте проверять их после обновления на новую версию и вносить изменения в ваш код, чтобы избежать проблем с отображением компонента.
:::

## Стилизация скролла

Вы также можете применить пользовательский стиль к полосе прокрутки Kanban. Для этого можно использовать CSS-класс `.wx-styled-scroll`. Перед использованием проверьте совместимость с современными браузерами [здесь](https://caniuse.com/css-scrollbar).

~~~html {4} title="index.html"
<!--контейнер для Toolbar-->
<div id="toolbar"></div> //
<!--контейнер для Kanban-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## Пользовательский стиль

В этом примере показано, как применить пользовательский стиль к Kanban

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Адаптивность

В этом примере показано, как создать адаптивную версию Kanban с использованием пользовательских CSS-стилей

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Связанные статьи:** [Кастомизация](guides/customization.md)