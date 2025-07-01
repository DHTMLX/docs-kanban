---
sidebar_label: scrollType
title: Конфигурация scrollType
description: Изучите конфигурацию scrollType в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков, справочником API, примерами кода, живыми демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# scrollType

### Описание

@short: Опционально. Определяет поведение прокрутки.

### Использование

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
Когда `scrollType` установлен в `"column"`, прокрутка каждой колонки осуществляется независимо.
:::

### Конфигурация по умолчанию

~~~jsx {}
scrollType: "default"
~~~

:::important
Если вы используете [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md) вместе с `scrollType: "default"`, обязательно задайте фиксированную высоту карточек с помощью свойства [`cardHeight`](/api/config/js_kanban_cardheight_config.md). Без этого карточки не будут отображаться.
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

**История изменений:** Это свойство было добавлено в версии v1.2

**Связанные статьи:** [Конфигурация](/guides/configuration#карточки)

**Связанный пример:** [Kanban. Фиксированные заголовки, ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
