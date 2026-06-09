---
sidebar_label: renderType
title: API конфигурации renderType
description: Ознакомьтесь с API конфигурации renderType для DHTMLX Kanban. Узнайте, как включить ленивый рендеринг и оптимизировать работу с большими досками.
---

# renderType

### Описание

@short: Необязательный параметр. Определяет тип рендеринга карточек.

:::info
Это свойство используется при работе с большим количеством карточек. Если установить значение *"lazy"*, виджет будет рендерить только те карточки, которые видны на доске. Это может значительно повысить производительность виджета.
:::

### Использование

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
Если вы используете настройки `renderType: "lazy"` и [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) вместе, не забудьте указать статическую высоту карточек через свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md). Если этого не сделать, карточки будут отображаться некорректно.
Если вы используете `renderType: "lazy"` с [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md), мы советуем также фиксировать высоту карточек через свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md). Хотя переменная высота карточек поддерживается для такого типа лейаута, скролл может работать нестабильно с кастомным содержимым карточек.

Если `cardHeight` не задан, виджет использует экспериментальный механизм приближённого расчёта высоты карточек на основе [`cardShape`](api/config/js_kanban_cardshape_config.md). Для досок с кастомным [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) следует передать собственную функцию [`getCardHeight`](api/config/js_kanban_getcardheight_config.md).
:::

### Конфигурация по умолчанию

~~~jsx {}
renderType: "default"
~~~

### Пример

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    // другие параметры
});
~~~

**История изменений:** Свойство добавлено в версии v1.2

**Связанные статьи:** [Конфигурация](guides/configuration.md#cards)

**Связанный пример:** [Kanban. Фиксированные заголовки, ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
