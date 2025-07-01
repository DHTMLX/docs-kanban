---
sidebar_label: Как начать
title: Как начать
description: Ознакомьтесь с тем, как начать работу с DHTMLX Kanban в документации по JavaScript-библиотеке DHTMLX Kanban. Просмотрите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Как начать

Перед вами простой туториал, который пошагово покажет, как разместить полностью работоспособную доску Kanban на веб-странице.

![JS Kanban Main](/assets/js_kanban_editor.png)

## Шаг 1. Подключение исходных файлов

Начните с создания HTML-файла с именем *index.html*. Затем добавьте исходные файлы Kanban в этот файл.

Вам понадобятся два файла:

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

Kanban можно также импортировать в ваш проект с помощью `yarn` или `npm`.

#### Установка пробной версии Kanban через npm или yarn

:::info
Для пробной версии скачайте [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) и следуйте инструкциям в файле *README*. Пробная версия доступна в течение 30 дней.
:::

#### Установка PRO Kanban через npm или yarn

:::info
Доступ к приватному **npm** DHTMLX предоставляется в [Client's Area](https://dhtmlx.com/clients/), где вы можете сгенерировать логин и пароль для **npm**. Там же описаны шаги по установке. Обратите внимание: доступ к приватному **npm** возможен только при активной лицензии на проприетарную версию Kanban.
:::

## Шаг 2. Создание Kanban

После подключения файлов можно добавить Kanban на страницу. Начните с добавления DIV-контейнеров для доски Kanban и её Toolbar:

- Добавьте два DIV-контейнера в файл *index.html*
- Инициализируйте Kanban и Toolbar с помощью конструкторов **kanban.Kanban** и **kanban.Toolbar**

:::info
Toolbar является необязательным элементом интерфейса Kanban. Если вам нужна только доска Kanban, используйте один DIV и конструктор **kanban.Kanban**.
:::

Конструкторы принимают идентификаторы HTML-контейнеров, куда будет размещён Kanban и Toolbar, а также их объекты конфигурации.

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

Теперь вы можете задать параметры конфигурации, определяющие внешний вид и работу Kanban при запуске.

Для запуска достаточно добавить начальные данные для **cards** и **columns** (и *rows*, если потребуется).
Помимо данных, можно настроить отображение [карточек](/guides/configuration#карточки), [редактора](/guides/configuration#редактор) и [toolbar](/guides/configuration#панель-инструментов).

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

Вот и всё - всего три простых шага, и у вас есть простой инструмент для визуализации и управления рабочим процессом. Вы можете сразу приступить к работе с задачами или глубже изучить возможности JavaScript Kanban.
