---
sidebar_label: cardHeight
title: Конфигурация cardHeight
description: Вы можете узнать о конфигурации cardHeight в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cardHeight

### Описание

@short: Необязательно. Высота карточек

### Использование

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
Если вы используете настройки [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) и [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) одновременно, не забудьте указать статическую высоту карточек через свойство `cardHeight`. Если не указать, карточки не будут отображаться.
:::

### Пример

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    cardHeight: 150, // px
    // другие параметры
});
~~~

**История изменений:** Свойство добавлено в версии v1.2

**Связанные статьи:** [Конфигурация](guides/configuration.md#cards)

**Связанный пример:** [Kanban. Ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)