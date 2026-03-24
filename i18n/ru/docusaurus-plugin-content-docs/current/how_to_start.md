---
sidebar_label: Как начать
title: Как начать
description: Ознакомьтесь с тем, как начать работу с DHTMLX Kanban в документации к JavaScript библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Как начать

Этот подробный и понятный учебник проведет вас по основным шагам, которые необходимо выполнить, чтобы разместить полнофункциональный Kanban на странице.

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="JS Kanban Main"
    className="img_border"
/>

## Шаг 1. Подключение исходных файлов

Начните с создания HTML-файла и назовите его *index.html*. Затем подключите исходные файлы Kanban к созданному файлу.

Необходимы два файла:

- JS-файл Kanban
- CSS-файл Kanban

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // ваш код будет здесь
        </script>
    </body>
</html>
~~~

### Установка Kanban через npm или yarn

Вы можете импортировать JavaScript Kanban в свой проект с помощью менеджера пакетов `yarn` или `npm`.

#### Установка пробной версии Kanban через npm или yarn

:::info
Если вы хотите использовать пробную версию Kanban, скачайте [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) и выполните шаги, описанные в файле *README*. Обратите внимание, что пробная версия Kanban доступна только 30 дней.
:::

#### Установка PRO Kanban через npm или yarn

:::info
Вы можете получить доступ к приватному **npm** DHTMLX напрямую в [Client's Area](https://dhtmlx.com/clients/), сгенерировав свой логин и пароль для **npm**. Подробная инструкция по установке также доступна там. Обратите внимание, что доступ к приватному **npm** возможен только при активной лицензии на Kanban.
:::

## Шаг 2. Создание Kanban

Теперь вы готовы добавить Kanban на страницу. Сначала создайте DIV-контейнеры для Kanban и его Toolbar. Выполните следующие шаги:

- укажите два DIV-контейнера в файле *index.html*
- инициализируйте Kanban и его Toolbar с помощью конструкторов **kanban.Kanban** и **kanban.Toolbar**

:::info
Toolbar — это необязательная часть интерфейса Kanban. Чтобы создать Kanban без Toolbar, вы можете указать только один DIV-контейнер и инициализировать виджет через конструктор **kanban.Kanban**  
:::

В качестве параметров конструкторы принимают ID HTML-контейнеров, в которые будут помещены Kanban и Toolbar, а также соответствующие объекты конфигурации.

~~~html {9-10,13-15,17-19} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">  
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const board = new kanban.Kanban("#root", {
                // свойства конфигурации
            });

            new kanban.Toolbar("#toolbar", {
                // свойства конфигурации
            });
        </script>
    </body>
</html>
~~~

## Шаг 3. Настройка Kanban

Далее вы можете задать свойства конфигурации, которые должен иметь компонент Kanban при инициализации.

Для начала работы с Kanban необходимо предоставить исходные данные для **cards** и **columns** (и *rows*).
Помимо исходных данных, вы можете настроить внешний вид [cards](guides/configuration.md#cards), [editor](guides/configuration.md#editor) и [toolbar](guides/configuration.md#toolbar).

~~~jsx {2-7,11-18}
const board = new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    rowKey: "row",
    cardShape,
    editorShape
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        "search",
        "spacer",
        "sort",
        "addColumn",
        "addRow"
    ]
});
~~~

## Что дальше

Вот и все. Всего три простых шага — и у вас есть удобный инструмент для визуализации и управления рабочими процессами. Теперь вы можете приступить к работе со своими задачами или продолжить изучение возможностей JavaScript Kanban.