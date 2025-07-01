---
sidebar_label: Инициализация
title: Инициализация
description: Вы можете узнать об инициализации в документации по DHTMLX JavaScript Kanban. Просмотрите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Инициализация

Вот как быстро добавить Kanban на страницу и подключить все функции доски к вашему приложению. Просто выполните следующие шаги, чтобы компонент начал работать:

1. [Подключите исходные файлы Kanban на страницу](#подключение-исходных-файлов).
2. [Создайте контейнер для Kanban](#создание-контейнера).
3. [Инициализируйте Kanban с помощью конструктора](#инициализация-kanban).

## Подключение исходных файлов

Сначала [скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) и распакуйте его в папку вашего проекта.

Для работы Kanban достаточно добавить на страницу два файла:

- *kanban.js*
- *kanban.css*

Убедитесь, что пути к этим файлам указаны верно:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Создание контейнера

Добавьте элемент-контейнер для Kanban и присвойте ему ID, например, *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Если вы хотите, чтобы доска Kanban имела *Toolbar*, добавьте для него отдельный контейнер:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // контейнер для Toolbar
<div id="root"></div> // контейнер для Kanban
~~~

## Инициализация Kanban

Kanban инициализируется с помощью конструктора **kanban.Kanban**. Он принимает два аргумента:

- HTML-контейнер (ID HTML-контейнера)
- объект с конфигурационными свойствами. [Смотрите полный список здесь](#конфигурационные-свойства)

~~~jsx title="index.html"
// создаём Kanban
new kanban.Kanban("#root", {
    // конфигурационные свойства
});
~~~

Если вы также добавляете *Toolbar*, инициализируйте его отдельно с помощью конструктора **kanban.Toolbar**. Он также принимает два аргумента:

- HTML-контейнер (ID HTML-контейнера)
- объект с конфигурационными свойствами

~~~jsx {6-8} title="index.html"
// создаём Kanban
const board = new kanban.Kanban("#root", {
    // конфигурационные свойства
});

new kanban.Toolbar("#toolbar", {
    // конфигурационные свойства
});
~~~

:::info
Подробнее о настройке Toolbar для Kanban можно узнать в разделе [**Конфигурация**](/guides/configuration.md/#панель-инструментов).
:::

### Конфигурационные свойства

:::note
Полный список опций конфигурации для **Kanban** доступен [**здесь**](/api/overview/properties_overview.md). <br />
Полный перечень свойств для **Toolbar в Kanban** смотрите [**здесь**](/api/overview/toolbar_properties_overview.md).
:::

## Пример

Вот пример инициализации Kanban с начальными данными:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
