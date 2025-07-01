---
sidebar_label: cardHeight
title: Конфигурация cardHeight
description: Вы можете узнать о конфигурации cardHeight в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cardHeight

### Описание

@short: Необязательно. Определяет высоту карточек.

### Использование

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
При использовании [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md) вместе с [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md) важно установить фиксированную высоту карточек с помощью свойства `cardHeight`. Без этого карточки не будут видны.
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

**Журнал изменений:** Это свойство было добавлено в версии 1.2

**Связанные статьи:** [Конфигурация](/guides/configuration#карточки)

**Связанный пример:** [Kanban. Ленивый рендеринг и прокрутка колонок](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
