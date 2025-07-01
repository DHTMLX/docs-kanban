---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете узнать об интеграции с Vue. Просмотрите руководства для разработчиков и справочник по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Интеграция с Vue

:::tip
Перед началом работы рекомендуется ознакомиться с базовыми концепциями и паттернами [**Vue**](https://vuejs.org/). Для повторения ознакомьтесь с [**документацией Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban отлично работает с **Vue**. Доступны примеры кода, демонстрирующие использование DHTMLX Kanban с **Vue 3**. Подробнее см. [**Пример на GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Создание проекта

:::info
Перед началом убедитесь, что установлен [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать проект на **Vue**, используйте следующую команду:

~~~json
npm create vue@latest
~~~

Эта команда установит и запустит `create-vue` - официальный инструмент для создания проектов на **Vue**. Дополнительная информация доступна в [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Проект можно назвать **my-vue-kanban-app**.

### Установка зависимостей

Перейдите в папку вашего приложения:

~~~json
cd my-vue-kanban-app
~~~

Далее установите зависимости и запустите сервер разработки. Выберите менеджер пакетов:

- С помощью [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // или yarn dev
~~~

- С помощью [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Теперь приложение должно работать локально (например, по адресу `http://localhost:3000`).

## Создание Kanban

Для начала работы с DHTMLX Kanban сначала получите исходный код. Приостановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**триальную версию Kanban**](/how_to_start/#установка-kanban-через-npm-или-yarn) и выполните шаги из файла README. Пробная версия действует 30 дней.

### Шаг 2. Создание компонента

Далее создайте Vue-компонент для добавления Kanban с Toolbar в ваше приложение. Создайте новый файл в ***src/components/*** с именем ***Kanban.vue***.

#### Импорт исходных файлов

Откройте ***Kanban.vue*** и импортируйте файлы Kanban. Пример:

- Для PRO-версии, если Kanban установлен из локальной папки, пути для импорта будут такими:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Если в вашем пакете есть минифицированные файлы, убедитесь, что вы импортируете **kanban.min.css**.

- Для триальной версии используйте следующие пути:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

В этом руководстве показано, как настроить работу с **триальной** версией Kanban.

#### Настройка контейнеров и добавление Kanban с Toolbar

Чтобы отобразить Kanban и Toolbar, настройте контейнеры и инициализируйте компоненты с помощью их конструкторов:

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

Чтобы Kanban отображался корректно, добавьте необходимые стили для Kanban и его контейнера в основной css-файл:

~~~css title="main.css"
/* стили для начальной страницы */
html,
body,
#app { /* убедитесь, что используете корневой контейнер #app */
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

Чтобы заполнить Kanban данными, создайте файл ***data.js*** в ***src/*** и добавьте пример данных:

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

Затем откройте ***App.vue***, импортируйте ваши данные и задайте их через внутренний метод `data()`. После этого передайте данные в компонент `<Kanban/>` через **props**:

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

Теперь в ***Kanban.vue*** примените эти **props** в объекте конфигурации Kanban:

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

Также можно использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри Vue в `mounted()` для загрузки данных в Kanban:

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

Метод `parse(data)` будет обновлять данные каждый раз при изменении.

На этом этапе компонент Kanban готов к работе. После добавления элемента на страницу произойдет инициализация Kanban с вашими данными. Вы также можете добавить любую необходимую конфигурацию. Для просмотра всех доступных свойств обратитесь к [документации по API Kanban](/api/overview/properties_overview/).

#### Обработка событий

Всякий раз, когда в Kanban что-либо происходит, срабатывает событие. Вы можете использовать их для выполнения пользовательского кода в ответ на действия пользователя. [Полный список событий](/api/overview/events_overview/) доступен в документации.

Откройте ***Kanban.vue*** и обновите метод `mounted()` следующим образом:

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

Теперь вы можете запустить приложение и увидеть вашу Kanban-доску с данными.

![Kanban initialization](/assets/trial_kanban.png)

Это всё, что нужно для интеграции DHTMLX Kanban с Vue. Вы можете доработать и расширить код по своему усмотрению. Более продвинутый пример доступен на [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).
