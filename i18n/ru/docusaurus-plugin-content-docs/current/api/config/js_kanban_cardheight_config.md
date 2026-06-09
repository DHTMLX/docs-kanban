---
sidebar_label: cardHeight
title: API конфигурации cardHeight
description: Ознакомьтесь с API конфигурации cardHeight для DHTMLX Kanban. Узнайте, как фиксированная высота карточек поддерживает лейаут и ленивый рендеринг.
---

# cardHeight

### Описание

@short: Необязательный. Высота карточек

### Использование

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
Если вы используете настройки [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) и [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) одновременно, не забудьте указать статическую высоту карточек через свойство `cardHeight`. Если не указать, карточки не будут отображаться.
Если вы используете [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) с [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md), также рекомендуется зафиксировать высоту карточек через свойство `cardHeight`. Хотя для такого типа лейаута поддерживается переменная высота карточек, скролл может некорректно работать с кастомизациями карточек.

Если `cardHeight` не задан, виджет использует экспериментальное приближение высоты карточек на основе видимых полей, объявленных в [`cardShape`](api/config/js_kanban_cardshape_config.md). При использовании кастомного [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) это приближение не применяется — в таком случае либо задайте `cardHeight` явно, либо передайте кастомную функцию [`getCardHeight`](api/config/js_kanban_getcardheight_config.md).
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
