---
sidebar_label: Инициализация
title: Инициализация
description: Вы можете узнать об инициализации в документации по DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Инициализация

Создайте виджет Kanban на странице в три шага:

1. [Подключите исходные файлы](#include-source-files).
2. [Создайте контейнер](#create-a-container).
3. [Инициализируйте Kanban](#initialize-kanban).

## Подключение исходных файлов {#include-source-files}

[Скачайте пакет](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) и распакуйте содержимое в папку вашего проекта.

Подключите следующие исходные файлы на страницу:

- *kanban.js*
- *kanban.css*

Укажите правильные относительные пути к обоим файлам:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Создание контейнера {#create-a-container}

Добавьте контейнер для Kanban и задайте ему идентификатор, например `root`:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Чтобы создать виджет вместе с Toolbar, добавьте отдельный контейнер для Toolbar:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // контейнер для Toolbar
<div id="root"></div> // контейнер для Kanban
~~~

## Инициализация Kanban {#initialize-kanban}

Инициализируйте Kanban с помощью конструктора `kanban.Kanban`. Конструктор принимает два параметра:

- CSS-селектор HTML-контейнера (или сам элемент контейнера)
- объект конфигурации (см. [полный список свойств](#configuration-properties))

Следующий фрагмент кода создаёт экземпляр Kanban:

~~~jsx title="index.html"
// создание Kanban
new kanban.Kanban("#root", {
    // конфигурационные свойства
});
~~~

Чтобы создать виджет вместе с Toolbar, инициализируйте Toolbar отдельно с помощью конструктора `kanban.Toolbar`. Элементы управления Toolbar взаимодействуют с экземпляром Kanban через параметр [`api`](api/config/toolbar_api_config.md). Передайте `board.api`, чтобы привязать Toolbar к доске:

~~~jsx {7} title="index.html"
// создание Kanban
const board = new kanban.Kanban("#root", {
    // конфигурационные свойства
});

new kanban.Toolbar("#toolbar", {
    api: board.api, // обязательно: связывает элементы управления Toolbar с экземпляром Kanban
    // другие конфигурационные свойства
});
~~~

:::info
Подробнее о настройке Toolbar читайте в разделе [Configuration](guides/configuration.md#toolbar).
:::

### Конфигурационные свойства {#configuration-properties}

Полный справочник конфигурации:

- [Обзор свойств Kanban](api/overview/properties_overview.md) — все конфигурационные свойства Kanban
- [Обзор свойств Toolbar](api/overview/toolbar_properties_overview.md) — все конфигурационные свойства Toolbar

## Пример

Следующий пример инициализирует Kanban с тестовыми данными:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
