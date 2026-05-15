---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: Узнайте об интеграции с Vue в документации по JavaScript-библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Интеграция с Vue

:::tip
Это руководство предполагает знакомство с концепциями и паттернами [Vue](https://vuejs.org/). Для повторения знаний обратитесь к [документации по Vue 3](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban совместим с Vue. Полный пример кода для Vue 3 доступен на [GitHub](https://github.com/DHTMLX/vue-kanban-demo).

## Создание проекта

:::info
Перед созданием нового проекта установите [Node.js](https://nodejs.org/en/).
:::

Следующая команда создаёт новый проект Vue:

~~~json
npm create vue@latest
~~~

Команда запускает `create-vue`, официальный инструмент для создания проектов на Vue. Подробнее смотрите в разделе [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Назовём проект *my-vue-kanban-app*.

### Установка зависимостей

Перейдите в директорию приложения:

~~~json
cd my-vue-kanban-app
~~~

Установите зависимости и запустите dev-сервер с помощью одного из менеджеров пакетов:

- Для [yarn](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // or yarn dev
~~~

- Для [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение будет доступно на localhost (например, `http://localhost:3000`).

## Создание Kanban

Остановите dev-сервер и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [триальную версию Kanban](/how_to_start/#installing-kanban-via-npm-or-yarn) и следуйте инструкциям из файла README. Триальная версия доступна 30 дней.

### Шаг 2. Создание компонента

Создайте компонент Vue, который монтирует Kanban и Toolbar. Добавьте новый файл *Kanban.vue* в директорию *src/components/*.

#### Импорт исходных файлов

Откройте *Kanban.vue* и импортируйте исходные файлы Kanban. Пути к импортам зависят от версии пакета:

- Для PRO-версии, установленной из локальной папки:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Если пакет поставляется с минифицированными исходными файлами, импортируйте CSS-файл как *kanban.min.css*.

- Для триальной версии:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

В этом руководстве используется триальная версия Kanban.

#### Настройка контейнеров и инициализация Kanban

Чтобы отобразить Kanban с Toolbar, создайте два контейнера и вызовите конструкторы. Следующий фрагмент кода настраивает refs и инициализирует компоненты внутри `mounted()`:

~~~html {2,7-8,10-14} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    mounted() {
        // initialize the Kanban component
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        // initialize the Toolbar component
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, // provide Kanban inner API
            // other configuration properties
        });
    },

    unmounted() {
        this.kanban.destructor(); // destroy Kanban
        this.toolbar.destructor(); // destroy Toolbar
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

#### Добавление стилей

Добавьте стили для Kanban и контейнера в основной CSS-файл:

~~~css title="main.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for Kanban and Toolbar container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* specify styles for Kanban container */
.widget {
    height: calc(100% - 56px);
}
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

Откройте *App.vue* и импортируйте набор данных. Инициализируйте значения через внутренний метод `data()`, затем передайте их в новый компонент `<Kanban/>` как props:

~~~html {3,8,10-12,19} title="App.vue"
<script>
import Kanban from "./components/Kanban.vue";
import { getData } from "./data";

export default {
    components: { Kanban },
    data() {
        const { columns, cards, rows } = getData();
        return { 
            columns, 
            cards,
            rows
        };
    }
};
</script>

<template>
    <Kanban :columns="columns" :cards="cards" :rows="rows"/>
</template>
~~~

Откройте *Kanban.vue* и примените props к объекту конфигурации Kanban:

~~~html {6,10-12} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            cards: this.cards,
            columns: this.columns,
            rows: this.rows,
            rowKey: "type",
            // other configuration properties
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // other configuration properties
        });
    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

В качестве альтернативы загрузите данные после создания экземпляра с помощью [`setConfig()`](/api/methods/js_kanban_setconfig_method/) или [`parse()`](/api/methods/js_kanban_parse_method/) внутри `mounted()`:

~~~html {6,22-26} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // other configuration properties
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // other configuration properties
        });

        this.kanban.setConfig({ 
            cards: this.cards,
            columns: this.columns,
            rows: this.rows
        });

    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

Компонент Kanban готов к использованию. При рендеринге элемента Kanban инициализируется с данными. Полный список поддерживаемых параметров конфигурации смотрите в [справочнике по Kanban API](/api/overview/properties_overview/).

#### Обработка событий

Действия пользователей в Kanban вызывают события. Подпишитесь на события, чтобы реагировать на определённые действия. Полный список смотрите в [справочнике по событиям Kanban](/api/overview/events_overview/).

Откройте *Kanban.vue* и расширьте метод `mounted()`:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        this.kanban.api.on("add-card", (obj) => {
            console.log(obj.columnId);
        });
    },

    unmounted() {
        this.kanban.destructor();
    }
}
</script>

// ...
~~~

Запустите приложение, чтобы увидеть Kanban с загруженными данными на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Vue"
  className="img_border"
/>

Полный пример проекта доступен на [GitHub](https://github.com/DHTMLX/vue-kanban-demo).
