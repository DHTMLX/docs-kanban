---
sidebar_label: locale
title: Конфигурация locale
description: Вы можете узнать о конфигурации locale (панели инструментов) в документации библиотеки DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# locale

### Описание

@short: Необязательно. Объект с пользовательской локализацией панели инструментов (Toolbar)

:::info
Объект **locale** должен содержать все метки Kanban и Toolbar с соответствующими переводами.
:::

### Использование

~~~jsx {}
locale?: object;
~~~

### Конфигурация по умолчанию

По умолчанию Toolbar использует локаль [**английский**](guides/localization.md#default-locale). Вы также можете задать пользовательскую локаль.

:::tip
Чтобы динамически изменить текущую локаль, используйте метод [**setLocale()**](api/methods/toolbar_setlocale_method.md) панели инструментов (Toolbar).
:::

### Пример

~~~jsx {8}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    locale: cn
});
// создаём Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: cn // применяем локаль "cn" к Toolbar
});
~~~

**Связанные статьи:** [Локализация](guides/localization.md)

**Связанный пример:** [Kanban. Локализация](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)