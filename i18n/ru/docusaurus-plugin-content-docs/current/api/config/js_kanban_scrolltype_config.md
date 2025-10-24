---
sidebar_label: scrollType
title: Конфигурация scrollType
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать о конфигурации scrollType. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
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
Если вы комбинируете настройки [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) и `scrollType: "default"`, не забудьте указать статическую высоту для карточек через свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md). Если не указать это, карточки не будут отображаться.
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