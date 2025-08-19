---
sidebar_label: locale
title: Конфигурация locale
description: Ознакомьтесь с настройкой locale в документации библиотеки DHTMLX JavaScript Kanban. Изучите руководства для разработчиков, справочники по API, примеры кода, живые демо и скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# locale

### Описание

@short: Необязательно. Объект, определяющий пользовательский locale для Kanban

:::info
Объект **locale** должен содержать все метки Kanban и Toolbar вместе с их переведёнными версиями.
:::

### Использование

~~~jsx {}
locale?: object;
~~~

### Конфигурация по умолчанию

Kanban по умолчанию использует [**английский**](/guides/localization/#локаль-по-умолчанию) язык. При необходимости можно указать кастомный locale.

:::tip
Для мгновенного переключения locale в Kanban доступен метод [**setLocale()**](../../methods/js_kanban_setlocale_method).
:::

### Пример

~~~jsx {5}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: zh // изначально применяется locale "zh"
    // другие параметры
});
~~~

**Связанные статьи:** [Локализация](/guides/localization)

**Связанный пример:** [Kanban. Локализация](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
