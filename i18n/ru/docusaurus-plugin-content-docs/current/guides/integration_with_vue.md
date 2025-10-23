---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: Узнайте об интеграции с Vue в документации по JavaScript-библиотеке DHTMLX Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Интеграция с Vue

:::tip
Перед чтением этой документации рекомендуется ознакомиться с базовыми концепциями и паттернами [**Vue**](https://vuejs.org/). Для повторения знаний обратитесь к [**документации по Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban совместим с **Vue**. Мы подготовили примеры кода по использованию DHTMLX Kanban с **Vue 3**. Подробнее смотрите в соответствующем [**примере на GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Создание проекта

:::info
Перед созданием нового проекта установите [**Node.js**](https://nodejs.org/en/).
:::

Для создания проекта на **Vue** выполните следующую команду:

~~~json
npm create vue@latest
~~~

Эта команда установит и запустит `create-vue`, официальный инструмент для создания проектов на **Vue**. Подробнее смотрите в разделе [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Назовём проект **my-vue-kanban-app**.

### Установка зависимостей

Перейдите в директорию приложения:

~~~json
cd my-vue-kanban-app
~~~

Установите зависимости и запустите dev-сервер. Для этого используйте менеджер пакетов:

- если используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~jsx
yarn
yarn start // или yarn dev
~~~

- если используете [**npm**](https://www.npmjs.com/), выполните следующие команды:

~~~json
npm install
npm run dev
~~~

Приложение будет доступно на localhost (например, `http://localhost:3000`).

## Создание Kanban

Теперь необходимо получить исходный код DHTMLX Kanban. Сначала остановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**триальную версию Kanban**](/how_to_start/#installing-kanban-via-npm-or-yarn) и следуйте инструкциям из файла README. Обратите внимание, что триальная версия Kanban доступна только 30 дней.

### Шаг 2. Создание компонента

Теперь нужно создать компонент Vue, чтобы добавить Kanban с Toolbar в приложение. Создайте новый файл в директории ***src/components/*** и назовите его ***Kanban.vue***.

#### Импорт исходных файлов

Откройте файл ***Kanban.vue*** и импортируйте исходные файлы Kanban. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Kanban из локальной папки, пути к импортам будут такими:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Обратите внимание, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что импортируете CSS-файл как **kanban.min.css**.

- если вы используете триальную версию Kanban, укажите следующие пути:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

В этом руководстве показано, как настроить **триальную** версию Kanban.

#### Установка контейнеров и добавление Kanban с Toolbar

Чтобы отобразить Kanban с Toolbar на странице, необходимо создать контейнеры для Kanban и Toolbar и инициализировать эти компоненты с помощью соответствующих конструкторов:

~~~html {2,7-8,10-14} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    mounted() {
        // инициализация компонента Kanban
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        // инициализация компонента Toolbar
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, // передача внутреннего API Kanban
            // другие параметры конфигурации
        });
    },

    unmounted() {
        this.kanban.destructor(); // уничтожение Kanban
        this.toolbar.destructor(); // уничтожение Toolbar
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

Для корректного отображения Kanban необходимо задать важные стили для Kanban и его контейнера в основном css-файле проекта:

~~~css title="main.css"
/* стили для начальной страницы */
html,
body,
#app { /* убедитесь, что используется корневой контейнер #app */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнера Kanban и Toolbar */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* стили для контейнера Kanban */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных

Чтобы добавить данные в Kanban, необходимо предоставить набор данных. Можно создать файл ***data.js*** в директории ***src/*** и добавить туда данные:

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

Далее откройте файл ***App.vue***, импортируйте данные и инициализируйте их через внутренний метод `data()`. После этого можно передать данные в созданный компонент `<Kanban/>` как **props**:

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

Перейдите в файл ***Kanban.vue*** и примените переданные **props** к объекту конфигурации Kanban:

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
            // другие параметры конфигурации
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // другие параметры конфигурации
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

Вы также можете использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри метода `mounted()` компонента Vue для загрузки данных в Kanban:

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
            // другие параметры конфигурации
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // другие параметры конфигурации
        });

        this.kanban.parse({ 
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

Метод `parse(data)` обеспечивает перезагрузку данных при каждом изменении.

Теперь компонент Kanban готов к использованию. При добавлении элемента на страницу он инициализирует Kanban с данными. Также можно задать необходимые параметры конфигурации. Ознакомьтесь с полным списком доступных свойств в [документации по Kanban API](/api/overview/properties_overview/).

#### Обработка событий

Когда пользователь выполняет какое-либо действие в Kanban, срабатывает событие. Вы можете использовать эти события для отслеживания действий и запуска нужного кода. См. [полный список событий](/api/overview/events_overview/).

Откройте ***Kanban.vue*** и дополните метод `mounted()`:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.cont, {});

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

После этого можно запустить приложение и увидеть Kanban с загруженными данными на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Vue"
    className="img_border"
/>

Теперь вы знаете, как интегрировать DHTMLX Kanban с Vue. Вы можете адаптировать код под свои задачи. Финальный продвинутый пример доступен на [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).