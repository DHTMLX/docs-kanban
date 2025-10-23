---
sidebar_label: locale
title: locale Конфигурация
description: Вы можете ознакомиться с конфигурацией locale в документации по библиотеке DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# locale

### Описание

@short: Необязательно. Объект с пользовательской локалью Kanban

:::info
Объект **locale** должен содержать все метки Kanban и Toolbar с соответствующими переводами.
:::

### Использование

~~~jsx {}
locale?: object;
~~~

### Конфигурация по умолчанию

По умолчанию Kanban использует локаль [**английский**](guides/localization.md#default-locale). Вы также можете установить пользовательскую локаль.

:::tip
Для динамического изменения текущей локали можно использовать метод [**setLocale()**](api/methods/js_kanban_setlocale_method.md) Kanban
:::

### Пример

~~~jsx {5}
// создание Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // изначально будет установлена локаль "cn"
    // другие параметры
});
~~~

**Связанные статьи:** [Локализация](guides/localization.md)

**Связанный пример:** [Kanban. Локализация](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)