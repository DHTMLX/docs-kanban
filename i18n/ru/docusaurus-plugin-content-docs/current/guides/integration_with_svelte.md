---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: Ознакомьтесь с документацией по интеграции с Svelte для JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Интеграция с Svelte

:::tip
Это руководство предполагает знакомство с концепциями и паттернами Svelte. Для справки обратитесь к [документации Svelte](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban совместим с Svelte. Полный пример кода доступен на [GitHub](https://github.com/DHTMLX/svelte-kanban-demo).

## Создание проекта

:::info
Перед созданием проекта установите [Vite](https://vite.dev/) (опционально) и [Node.js](https://nodejs.org/en/).
:::

Проект на Svelte можно настроить одним из двух способов:

- с помощью [SvelteKit](https://kit.svelte.dev/) — рекомендуется
- с помощью Svelte и Vite (без SvelteKit) — выполните:

~~~json
npm create vite@latest
~~~

Подробнее смотрите в [документации Svelte](https://svelte.dev/docs/svelte/overview).

### Установка зависимостей

Назовите проект *my-svelte-kanban-app*. Перейдите в директорию приложения:

~~~json
cd my-svelte-kanban-app
~~~

Установите зависимости и запустите dev-сервер с помощью одного из менеджеров пакетов:

- Для [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- Для [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение запустится на адресе localhost (например, `http://localhost:3000`).

## Создание Kanban

Остановите dev-сервер и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [пробный пакет Kanban](/how_to_start/#installing-kanban-via-npm-or-yarn) и следуйте шагам, описанным в файле README. Пробная версия доступна 30 дней.

### Шаг 2. Создание компонента

Создайте компонент Svelte, который монтирует Kanban и Toolbar. Добавьте новый файл *Kanban.svelte* в директорию *src/*.

#### Импорт исходных файлов

Откройте *Kanban.svelte* и импортируйте исходные файлы Kanban. Пути для импорта зависят от версии пакета:

- Для PRO-версии, установленной из локальной папки:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Если пакет поставляется с минифицированными исходными файлами, импортируйте CSS-файл как *kanban.min.css*.

- Для пробной версии:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

В этом руководстве используется пробная версия Kanban.

#### Настройка контейнеров и инициализация Kanban

Чтобы отобразить Kanban с Toolbar, создайте два контейнера и вызовите конструкторы. Следующий фрагмент кода привязывает контейнеры и создаёт экземпляры компонентов внутри `onMount()`:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // инициализация контейнеров для Kanban и Toolbar
let kanban, toolbar;

onMount(() => {
    // инициализация компонента Kanban
    kanban = new Kanban(kanban_container, {})

    // инициализация компонента Toolbar
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // передача внутреннего API Kanban
        // другие параметры конфигурации
    })
});

onDestroy(() => {
    kanban.destructor(); // уничтожение Kanban
    toolbar.destructor(); // уничтожение Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### Загрузка данных

Чтобы наполнить Kanban данными, предоставьте набор данных. Создайте файл *data.js* в директории *src/*:

~~~jsx {2,14,37,48} title="data.js"
export function getData() {
    const columns = [
        {
            label: "Backlog",
            id: "backlog"
        },
        {
            label: "In progress",
            id: "inprogress"
        },
        // ...
    ];

    const cards = [
        {
            id: 1,
            label: "Integration with Angular/React",
            priority: 1,
            color: "#65D3B3",
            start_date: new Date("01/07/2021"),
            users: [3, 2],
            column: "backlog",
            type: "feature",
        },
        {
            label: "Archive the cards/boards",
            priority: 3,
            color: "#58C3FE",
            users: [4],
            progress: 1,
            column: "backlog",
            type: "feature",
        },
        // ...
    ];

    const rows = [
        {
            label: "Feature",
            id: "feature",
        },
        {
            label: "Task",
            id: "task",
        }
    ];

    return { columns, cards, rows };
}
~~~

Откройте *App.svelte*, импортируйте набор данных и передайте значения в новый компонент `<Kanban/>` через props:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Откройте *Kanban.svelte* и примените props к объекту конфигурации Kanban:

~~~html {6-8,15-17} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar, defaultEditorShape } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container;
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns, 
        cards,
        rows,
        rowKey: "type",
        // другие параметры конфигурации
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // передача внутреннего API Kanban
        // другие параметры конфигурации
    })
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

В качестве альтернативы загрузите данные после создания экземпляра с помощью [`setConfig()`](/api/methods/js_kanban_setconfig_method/) или [`parse()`](/api/methods/js_kanban_parse_method/) внутри `onMount()`:

~~~html {6-8,27} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar} from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container; 
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns: [],
        cards: [],
        rows: [],
        rowKey: "type",
        // другие параметры конфигурации
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // передача внутреннего API Kanban
        // другие параметры конфигурации
    })

    kanban.setConfig({ columns, cards, rows });
    // или kanban.parse({ columns, cards, rows });
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Компонент Kanban готов к работе. При рендеринге элемента Kanban инициализируется с данными. Полный список поддерживаемых свойств конфигурации смотрите в [справочнике API Kanban](/api/overview/properties_overview/).

#### Обработка событий

Действия пользователя в Kanban вызывают события. Подписывайтесь на события для реакции на конкретные действия. Полный список смотрите в [справочнике событий Kanban](/api/overview/events_overview/).

Откройте *Kanban.svelte* и расширьте калбэк `onMount()`:

~~~html {8-10} title="Kanban.svelte"
<script>
// ...
let kanban;

onMount(() => {
    kanban = new Kanban(kanban_container, {})

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
});

onDestroy(() => {
    kanban.destructor();
});
</script>

// ...
~~~

### Шаг 3. Добавление Kanban в приложение

Чтобы зарегистрировать компонент, откройте *App.svelte* и замените стандартный код:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Запустите приложение, чтобы увидеть заполненную доску Kanban на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Svelte"
  className="img_border"
/>

Полный проект доступен на [GitHub](https://github.com/DHTMLX/svelte-kanban-demo).
