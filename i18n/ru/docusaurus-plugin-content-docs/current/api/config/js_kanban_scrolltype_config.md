---
sidebar_label: scrollType
title: API конфигурации scrollType
description: Ознакомьтесь с API конфигурации scrollType для DHTMLX Kanban. Узнайте, как настроить прокрутку доски и поведение прокрутки колонок.
---

# scrollType

### Описание

@short: Необязательно. Определяет тип прокрутки

### Использование

~~~jsx {}
scrollType?: "default" | "column";
~~~

:::note
Если вы используете настройку `scrollType: "column"`, вы сможете прокручивать каждую колонку отдельно.
:::

### Конфигурация по умолчанию

~~~jsx {}
scrollType: "default"
~~~

:::important
Если вы комбинируете настройки [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) и `scrollType: "default"`, не забудьте указать статическую высоту для карточек через свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md). Если не указать высоту, карточки не будут отображаться.
Если вы используете [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) и `scrollType: "column"`, мы советуем также фиксировать высоту карточек через свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md). Хотя для этого типа лейаута поддерживается переменная высота карточек, скролл может работать нестабильно с кастомным содержимым карточек.

Если `cardHeight` не задан, виджет использует экспериментальное приближение высоты карточек на основе [`cardShape`](api/config/js_kanban_cardshape_config.md). Для досок с кастомным [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) вместо этого передайте кастомную функцию [`getCardHeight`](api/config/js_kanban_getcardheight_config.md).
:::

### Пример

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    scrollType: "column",
    // другие параметры
});
~~~

**Изменения:** Свойство добавлено в версии v1.2

**Связанные статьи:** [Конфигурация](guides/configuration.md#cards)

**Связанный пример:** [Kanban. Фиксированные заголовки, ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
