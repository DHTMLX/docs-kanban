---
sidebar_label: Кастомизация
title: Кастомизация
description: Вы можете узнать о возможностях кастомизации в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Кастомизация

Вы можете кастомизировать внешний вид и поведение Kanban с помощью следующих свойств:

- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — отображение карточек с помощью кастомного HTML-шаблона
- [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md), [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) — изменение контекстного меню карточек, колонок и строк
- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md), [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — замена шаблонов заголовков колонок
- [`cardShape.css`](api/config/js_kanban_cardshape_config.md), [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md) — условное применение CSS-классов
- [`items`](api/config/toolbar_items_config.md) — изменение структуры Toolbar и добавление кастомных элементов управления
- CSS-переменные — настройка визуальных стилей (см. раздел [Стилизация](guides/stylization.md))

## Кастомные карточки {#custom-cards}

Используйте свойство [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) для отображения карточек с помощью кастомного HTML-шаблона. Колбэк возвращает разметку для каждой карточки.

Колбэк принимает объект со следующими параметрами:

- `cardFields` — данные карточки
- `selected` — выбрана ли карточка
- `dragging` — перетаскивается ли карточка в данный момент
- `cardShape` — конфигурация карточки

Чтобы встроить элемент вызова контекстного меню в кастомный шаблон карточки, оберните иконку меню в `<div>` с атрибутом `data-menu-id=${cardFields.id}` (аналогично встроенной карточке). Виджет привязывает меню к обёртке через этот атрибут.

Следующее демо применяет кастомный шаблон карточки:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомное контекстное меню

Настройте контекстное меню карточек, колонок и строк через свойства [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md) и [`rowShape.menu`](api/config/js_kanban_rowshape_config.md). Каждый элемент `menu.items` может использовать встроенный идентификатор действия для вызова стандартной операции или определять кастомный обработчик `onClick` для любого другого поведения.

### `cardShape.menu`

По умолчанию меню карточки содержит опции **Дублировать** и **Удалить**. Доступные встроенные идентификаторы действий:

- `"duplicate-card"` — дублировать карточку
- `"delete-card"` — удалить карточку

### `columnShape.menu`

- `"add-card"` — добавить новую карточку в колонку
- `"set-edit"` — переименовать колонку
- `"move-column:left"`, `"move-column:right"` — переместить колонку влево или вправо
- `"delete-column"` — удалить колонку

### `rowShape.menu`

- `"set-edit"` — переименовать строку
- `"move-row:up"`, `"move-row:down"` — переместить строку вверх или вниз
- `"delete-row"` — удалить строку

Задайте `menu.items` как функцию, чтобы отображать разное меню для каждой карточки, колонки или строки. Верните `null` или `false` из функции, чтобы скрыть меню для конкретного элемента.

Следующее демо применяет кастомное контекстное меню:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомные заголовки колонок

Свойство [`columnShape`](api/config/js_kanban_columnshape_config.md) предоставляет шаблоны и настройки поведения заголовков колонок:

- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md) — HTML-шаблон заголовка колонки в развёрнутом состоянии
- [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — HTML-шаблон заголовка колонки в свёрнутом состоянии
- [`columnShape.fixedHeaders`](api/config/js_kanban_columnshape_config.md) — фиксация заголовков колонок при вертикальной прокрутке (по умолчанию: `true`)

Следующий фрагмент кода задаёт кастомный шаблон заголовка с иконкой сворачивания, подписью с количеством карточек и элементом вызова меню:

~~~jsx {5-21}
new kanban.Kanban("#root", {
    columns,
    cards,
    columnShape: {
        headerTemplate: kanban.template(({ column, columnState }) => {
            return `<div class="wx-collapse-icon" data-action="collapse">
                        <i class="${column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}"></i>
                    </div>
                    ${!column.collapsed
                        ? `<div class="wx-label" data-action="rename">
                                ${column.label} (${columnState.cardsCount})
                            </div>
                            <div class="wx-menu" data-menu-id="${column.id}">
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""}`;
        }),
        collapsedTemplate: kanban.template(({ column }) => `<div class="wx-collapsed-label">${column.label}</div>`)
    }
});
~~~

:::tip
Чтобы `fixedHeaders` вступил в силу, задайте фиксированную высоту контейнера Kanban — тогда доска будет прокручиваться по вертикали.
:::

## Условные CSS-классы {#conditional-css-classes}

Чтобы применять CSS-класс условно, передайте функцию в параметр `css` свойства [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md) или [`rowShape`](api/config/js_kanban_rowshape_config.md). Функция возвращает имя класса на основе текущих данных:

- [`cardShape.css: (card) => string`](api/config/js_kanban_cardshape_config.md) — класс, применяемый к карточке
- [`columnShape.css: (column, cards) => string`](api/config/js_kanban_columnshape_config.md) — класс, применяемый к колонке
- [`rowShape.css: (row, cards) => string`](api/config/js_kanban_rowshape_config.md) — класс, применяемый к строке

Следующий фрагмент кода выделяет просроченные карточки и недозагруженные колонки:

~~~jsx {5,8}
new kanban.Kanban("#root", {
    columns,
    cards,
    cardShape: {
        css: (card) => card.end_date < new Date() ? "overdue" : ""
    },
    columnShape: {
        css: (column, cards) => cards.length < 5 ? "low-load" : ""
    }
});
~~~

## Кастомный Toolbar {#custom-toolbar}

Используйте свойство [`items`](api/config/toolbar_items_config.md) для кастомизации структуры Toolbar. Массив определяет, какие элементы управления отображаются, их порядок и поведение. Элемент может быть:

- встроенным элементом управления: `"search"`, `"sort"`, `"undo"`, `"redo"`, `"addColumn"`, `"addRow"`, `"spacer"`
- объектом, переопределяющим поисковую строку или элемент сортировки с кастомными параметрами
- кастомным элементом управления, переданным в виде строкового идентификатора или функции

Следующее демо кастомизирует порядок элементов управления, поисковую строку, элемент сортировки и кастомный элемент:

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомные стили

Изменяйте значения CSS-переменных для кастомизации внешнего вида Kanban. Полный список переменных смотрите в разделе [Стилизация](guides/stylization.md).

В следующем примере показано, как применить кастомные стили к Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
