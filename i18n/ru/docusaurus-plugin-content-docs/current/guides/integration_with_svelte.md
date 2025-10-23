---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: Ознакомьтесь с документацией по интеграции с Svelte для JavaScript-библиотеки DHTMLX Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Интеграция с Svelte

:::tip
Перед чтением этой документации рекомендуется ознакомиться с базовыми понятиями и паттернами **Svelte**. Для обновления знаний обратитесь к [**документации Svelte**](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban совместим с **Svelte**. Мы подготовили примеры кода по использованию DHTMLX Kanban с **Svelte**. Для получения дополнительной информации смотрите соответствующий [**пример на GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Создание проекта

:::info
Перед началом создания нового проекта установите [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Существует несколько способов создания проекта на **Svelte**:

- можно использовать [**SvelteKit**](https://kit.svelte.dev/)

или

- можно также использовать **Svelte с Vite** (без SvelteKit):

~~~json
npm create vite@latest
~~~

Подробнее смотрите в [связанной статье](https://svelte.dev/docs/svelte/overview).

### Установка зависимостей

Назовём проект **my-svelte-kanban-app** и перейдём в директорию приложения:

~~~json
cd my-svelte-kanban-app
~~~

Установите зависимости и запустите dev-сервер. Для этого используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~json
yarn
yarn start
~~~

- если вы используете [**npm**](https://www.npmjs.com/), выполните следующие команды:

~~~json
npm install
npm run dev
~~~

Приложение должно запуститься на localhost (например, `http://localhost:3000`).

## Создание Kanban

Теперь необходимо получить исходный код DHTMLX Kanban. Сначала остановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**пробный пакет Kanban**](/how_to_start/#installing-kanban-via-npm-or-yarn) и следуйте шагам, описанным в файле README. Обратите внимание, что пробная версия Kanban доступна только 30 дней.

### Шаг 2. Создание компонента

Теперь нужно создать компонент Svelte, чтобы добавить Kanban с Toolbar в приложение. Создайте новый файл в директории ***src/*** и назовите его ***Kanban.svelte***.

#### Импорт исходных файлов

Откройте файл ***Kanban.svelte*** и импортируйте исходные файлы Kanban. Обратите внимание:

- если вы используете PRO-версию и устанавливаете Kanban из локальной папки, пути для импорта будут такими:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

В зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что импортируете CSS-файл как **kanban.min.css**.

- если вы используете пробную версию Kanban, укажите следующие пути:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

В этом руководстве показано, как настраивать **пробную** версию Kanban.

#### Задание контейнеров и добавление Kanban с Toolbar

Чтобы отобразить Kanban с Toolbar на странице, необходимо создать контейнеры для Kanban и Toolbar, а затем инициализировать эти компоненты с помощью соответствующих конструкторов:

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

Чтобы добавить данные в Kanban, необходимо предоставить набор данных. Вы можете создать файл ***data.js*** в директории ***src/*** и добавить в него данные:

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
            label: "Archive the cards/kanbans ",
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

Затем откройте файл ***App.svelte***, импортируйте данные и передайте их в созданный компонент `<Kanban/>` через **props**:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Перейдите в файл ***Kanban.svelte*** и примените переданные **props** к объекту конфигурации Kanban:

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

Также вы можете использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри метода `onMount()` Svelte для загрузки данных в Kanban:

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

    kanban.parse({ columns, cards, rows });
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

Метод `parse(data)` обеспечивает перезагрузку данных при каждом внесённом изменении.

Теперь компонент Kanban готов к использованию. Когда элемент будет добавлен на страницу, он инициализирует Kanban с данными. Вы также можете указать необходимые параметры конфигурации. Посетите [документацию по API Kanban](/api/overview/properties_overview/), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий

Когда пользователь выполняет какое-либо действие в Kanban, вызывается событие. Вы можете использовать эти события для отслеживания действий и запуска необходимого кода. Смотрите [полный список событий](/api/overview/events_overview/).

Откройте ***Kanban.svelte*** и дополните метод `onMount()` следующим образом:

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

Чтобы добавить компонент в приложение, откройте файл **App.svelte** и замените стандартный код следующим:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

После этого вы можете запустить приложение и увидеть Kanban с загруженными данными на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Svelte"
    className="img_border"
/>

Теперь вы знаете, как интегрировать DHTMLX Kanban с Svelte. Вы можете настроить код под свои задачи. Финальный расширенный пример доступен на [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).