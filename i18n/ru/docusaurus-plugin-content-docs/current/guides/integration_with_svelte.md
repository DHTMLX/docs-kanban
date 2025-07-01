---
sidebar_label: Интеграция с Svelte
title: Интеграция с Svelte
description: Узнайте об интеграции с Svelte в документации по JavaScript библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Интеграция с Svelte

:::tip
Перед началом работы с этим руководством желательно иметь базовые знания **Svelte**. Для быстрого ознакомления посмотрите [**документацию Svelte**](https://svelte.dev/).
:::

DHTMLX Kanban отлично работает с **Svelte**. Ниже приведены примеры кода, показывающие, как использовать DHTMLX Kanban в проекте на Svelte. Подробнее смотрите [**пример на GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Создание проекта

:::info
Перед началом нового проекта убедитесь, что установлены [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Есть несколько способов создать проект на **Svelte**:

- Используйте [**SvelteKit**](https://kit.svelte.dev/)

или

- Используйте связку **Svelte и Vite** (без SvelteKit):

~~~json
npm create vite@latest
~~~

Подробнее об этом читайте в [соответствующей статье](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Установка зависимостей

Назовём проект **my-svelte-kanban-app** и перейдём в его директорию:

~~~json
cd my-svelte-kanban-app
~~~

Чтобы установить зависимости и запустить сервер разработки, выберите предпочитаемый пакетный менеджер:

- С [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- С [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение будет доступно локально, обычно по адресу вроде `http://localhost:3000`.

## Создание Kanban

Далее потребуется исходный код DHTMLX Kanban. Остановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**триальную версию Kanban**](/how_to_start/#установка-kanban-через-npm-или-yarn) и следуйте инструкциям из README. Обратите внимание - триальная версия работает 30 дней.

### Шаг 2. Создание компонента

Теперь создайте компонент Svelte, который добавит Kanban с Toolbar в приложение. Добавьте новый файл в директорию ***src/*** с именем ***Kanban.svelte***.

#### Импорт исходных файлов

Откройте ***Kanban.svelte*** и импортируйте исходные файлы Kanban. Учтите:

- При использовании PRO-версии и локальной установки импорт будет выглядеть так:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

В зависимости от пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что импортируете **kanban.min.css**.

- При использовании триальной версии пути для импорта следующие:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

В этом руководстве для примеров настройки используется **триальная** версия.

#### Задание контейнеров и добавление Kanban с Toolbar

Чтобы отобразить Kanban с Toolbar, создайте контейнеры для обоих компонентов и инициализируйте их с помощью конструкторов:

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

Чтобы передать данные в Kanban, потребуется набор данных. Создайте файл ***data.js*** в директории ***src/*** и добавьте туда пример данных:

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

Теперь откройте ***App.svelte***, импортируйте данные и передайте их в новый компонент `<Kanban/>` через **props**:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Перейдите к ***Kanban.svelte*** и используйте эти **props** в конфигурации Kanban:

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

Также можно использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри `onMount()` в Svelte для загрузки данных в Kanban:

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

Использование метода `parse(data)` позволяет перезагружать данные каждый раз при их изменении.

На этом этапе компонент Kanban полностью готов. После добавления на страницу он инициализируется с данными. При необходимости можно добавить любые другие настройки. Все доступные параметры описаны в [документации по Kanban API](/api/overview/properties_overview/).

#### Обработка событий

При взаимодействии с Kanban срабатывают события. Их можно использовать для реагирования на действия пользователя и реализации собственной логики. Полный список событий смотрите в [документации](/api/overview/events_overview/).

Добавьте следующий код в ***Kanban.svelte*** для обработки события внутри `onMount()`:

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

Чтобы отобразить компонент в приложении, откройте **App.svelte** и обновите его код:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Теперь запустите приложение, чтобы увидеть Kanban с переданными данными.

![Инициализация Kanban](/assets/trial_kanban.png)

Это всё, что нужно для интеграции DHTMLX Kanban в приложение на Svelte. Код можно адаптировать под любые задачи. Для более продвинутого примера посмотрите [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).
