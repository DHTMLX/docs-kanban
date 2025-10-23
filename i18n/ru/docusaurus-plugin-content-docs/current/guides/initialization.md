---
sidebar_label: Инициализация
title: Инициализация
description: Вы можете узнать об инициализации в документации по DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Инициализация

В этом руководстве вы найдете подробные инструкции по созданию Kanban на странице для расширения вашего приложения возможностями Kanban-доски. Выполните следующие шаги, чтобы получить готовый к использованию компонент:

1. [Подключите исходные файлы Kanban на страницу](#including-source-files).
2. [Создайте контейнер для Kanban](#creating-container).
3. [Инициализируйте Kanban с помощью конструктора](#initializing-kanban).

## Подключение исходных файлов

[Скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) и распакуйте его в папку вашего проекта.

Для создания Kanban необходимо подключить 2 исходных файла на страницу:

- *kanban.js*
- *kanban.css*

Убедитесь, что вы указали правильные относительные пути к исходным файлам:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Создание контейнера

Добавьте контейнер для Kanban и задайте ему идентификатор, например, *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Если вы хотите создать виджет вместе с *Toolbar*, необходимо добавить для него отдельный контейнер:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // контейнер для Toolbar
<div id="root"></div> // контейнер для Kanban
~~~

## Инициализация Kanban

Инициализируйте Kanban с помощью конструктора **kanban.Kanban**. Он принимает два параметра:

- HTML-контейнер (ID HTML-контейнера)
- объект с конфигурационными свойствами. [Полный список смотрите здесь](#configuration-properties)

~~~jsx title="index.html"
// создание Kanban
new kanban.Kanban("#root", {
    // конфигурационные свойства
});
~~~

Если вы хотите создать виджет вместе с *Toolbar*, его необходимо инициализировать отдельно с помощью конструктора **kanban.Toolbar**. Он также принимает два параметра:

- HTML-контейнер (ID HTML-контейнера)
- объект с конфигурационными свойствами

~~~jsx {6-8} title="index.html"
// создание Kanban
const board = new kanban.Kanban("#root", {
    // конфигурационные свойства
});

new kanban.Toolbar("#toolbar", {
    // конфигурационные свойства
});
~~~

:::info
Чтобы узнать больше о настройке Toolbar для Kanban, прочитайте раздел [**Configuration**](guides/configuration.md/#toolbar)
:::

### Конфигурационные свойства

:::note
Полный список свойств для настройки **Kanban** можно найти [**здесь**](api/overview/properties_overview.md). <br/> 
Полный список свойств для настройки **Toolbar для Kanban** можно найти [**здесь**](api/overview/toolbar_properties_overview.md).
:::

## Пример

В этом примере показано, как инициализировать **Kanban** с начальными данными:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>