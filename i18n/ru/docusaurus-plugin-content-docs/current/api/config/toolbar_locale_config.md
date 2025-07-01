---
sidebar_label: locale
title: Конфигурация locale
description: Узнайте, как настроить локализацию (Toolbar) в JavaScript-библиотеке DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочниками API, опробуйте примеры кода и живые демо, а также получите бесплатный 30-дневный пробный период DHTMLX Kanban.
---

# locale

### Описание

@short: Необязательно. Объект, определяющий пользовательскую локализацию для Toolbar.

:::info
Объект **locale** должен включать все метки как для Kanban, так и для Toolbar вместе с их переводами.
:::

### Использование

~~~jsx {}
locale?: object;
~~~

### Конфигурация по умолчанию

По умолчанию Toolbar настроен на локаль [**English**](/guides/localization/#локаль-по-умолчанию). Вы также можете указать свою собственную пользовательскую локаль.

:::tip
Для динамического переключения локали можно использовать метод Toolbar [**setLocale()**](../../methods/toolbar_setlocale_method).
:::

### Пример

~~~jsx {8}
// создаем Kanban
const board = new kanban.Kanban("#root", {
    locale: zh
});
// создаем Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: zh // применяем локаль "zh" к Toolbar
});

**Связанный пример:** [Kanban. Локализация](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
