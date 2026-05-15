---
sidebar_label: Стилизация
title: Стилизация
description: Ознакомьтесь с возможностями стилизации в документации по DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Стилизация

Вы можете стилизовать внешний вид Kanban с помощью CSS-классов и CSS-переменных. Следующие свойства принимают CSS-классы для колонок, строк и карточек:

- [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md), [`cardShape.css`](api/config/js_kanban_cardshape_config.md) — функции, возвращающие CSS-класс условно на основе данных элемента
- [`columns.css`](api/config/js_kanban_columns_config.md), [`rows.css`](api/config/js_kanban_rows_config.md), [`cards.css`](api/config/js_kanban_cards_config.md) — строковый CSS-класс, применяемый к отдельному элементу

Подробности и примеры кода для условных функций `css` см. в разделе [Условные CSS-классы](guides/customization.md#conditional-css-classes).

Следующий фрагмент кода применяет CSS-класс к конкретной колонке, строке и карточке:

~~~jsx
const columns = [
    { id: "backlog", label: "Backlog", css: "highlighted" },
    // other columns
];
const rows = [
    { id: "feature", label: "Feature", css: "row-feature" },
    // other rows
];
const cards = [
    { id: 1, label: "Task", column: "backlog", css: "urgent" },
    // other cards
];
~~~

Помимо CSS на уровне отдельных элементов, Kanban предоставляет CSS-переменные для тематизации. Переменные делятся на две группы:

- Переменные Kanban — определяют стили, специфичные для Kanban
- Переменные библиотеки WX — стилизуют общие элементы интерфейса (элементы управления, календари)

:::info
Библиотека WX обеспечивает работу внутренних UI-компонентов Kanban. Рассматривайте переменные WX как часть стилизации Kanban.
:::

## Переменные темы

Переопределите эти CSS-переменные в своей таблице стилей, чтобы настроить тему Material:

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
    --wx-kanban-card-field-padding: 10px;
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
    --wx-kanban-editor-background: var(--wx-background);
    --wx-kanban-editor-top-border: var(--wx-border);
    --wx-kanban-editor-modal-width: 1000px;
    --wx-editor-right-background: rgba(0, 0, 0, 0.03);
    --wx-editor-cancel-background: rgba(0, 0, 0, 0.04);

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
Имена переменных могут измениться в будущих версиях. Проверяйте их после обновления и вносите необходимые изменения в стили вашего проекта.
:::

## Стилизация скролла

Примените CSS-класс `.wx-styled-scroll` к контейнеру Kanban, чтобы включить пользовательский стиль полосы прокрутки. Перед использованием проверьте [совместимость с браузерами](https://caniuse.com/css-scrollbar):

~~~html {4} title="index.html"
<!-- container for Toolbar -->
<div id="toolbar"></div>
<!-- container for Kanban -->
<div id="root" class="wx-styled-scroll"></div>
~~~

## Пользовательский стиль

В следующем демо показано, как применить пользовательский стиль к Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Адаптивный макет

В следующем демо показано, как создать адаптивный макет Kanban с помощью пользовательских CSS-стилей:

<iframe src="https://snippet.dhtmlx.com/807qbp9v?mode=result&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Связанные статьи:** [Кастомизация](guides/customization.md)
