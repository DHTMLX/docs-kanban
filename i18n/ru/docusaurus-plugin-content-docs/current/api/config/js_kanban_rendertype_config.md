---
sidebar_label: renderType
title: renderType Конфигурация
description: Вы можете узнать о конфигурации renderType в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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
