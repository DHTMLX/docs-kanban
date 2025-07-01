---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Vue

:::tip
It helps to be comfortable with the basic ideas and patterns of [**Vue**](https://vuejs.org/) before jumping in here. If you want a refresher, check out the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban works well with **Vue**. There are code samples available that show how to use DHTMLX Kanban with **Vue 3**. For more details, take a look at the [**Example on GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Creating a project

:::info
Make sure [**Node.js**](https://nodejs.org/en/) is installed before starting a new project.
:::

To spin up a **Vue** project, use this command:

~~~json
npm create vue@latest
~~~

This will install and launch `create-vue`, the official tool for scaffolding **Vue** projects. More info is available in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

The project can be named **my-vue-kanban-app**.

### Installation of dependencies

Move into your app's folder:

~~~json
cd my-vue-kanban-app
~~~

Next, install the dependencies and start the development server. Choose a package manager:

- With [**yarn**](https://yarnpkg.com/), use:

~~~jsx
yarn
yarn start // or yarn dev
~~~

- With [**npm**](https://www.npmjs.com/), run:

~~~json
npm install
npm run dev
~~~

The app should now be running locally (for example, at `http://localhost:3000`).

## Creating Kanban

To get started with DHTMLX Kanban, first grab the source code. Pause the app and install the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the steps in the README file. The trial version lasts for 30 days.

### Step 2. Component creation

Next, set up a Vue component to add Kanban with a Toolbar to your app. Create a new file in ***src/components/*** called ***Kanban.vue***.

#### Import source files

Open ***Kanban.vue*** and import the Kanban files. Here's how to do it:

- For the PRO version, if you install Kanban from a local folder, import paths will look like:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

If your package comes with minified files, make sure to import **kanban.min.css** instead.

- For the trial version, use these paths:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

This guide shows how to set up the **trial** version of Kanban.

#### Setting containers and adding Kanban with Toolbar

To show Kanban and the Toolbar, set up containers and initialize these components with their constructors:

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
        this.kanban.destructor(); // destruct Kanban
        this.toolbar.destructor(); // destruct Toolbar
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

#### Adding styles

To make sure Kanban displays properly, add some important styles for Kanban and its container in your main css file:

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

#### Loading data

To fill your Kanban with data, create a ***data.js*** file in ***src/*** and add some sample data:

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

Then, open ***App.vue***, import your data, and set it up via the inner `data()` method. After that, pass the data to your `<Kanban/>` component as **props**:

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

Now in ***Kanban.vue***, apply those **props** to the Kanban configuration object:

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

It's also possible to use the [`parse()`](/api/methods/js_kanban_parse_method/) method inside Vue's `mounted()` to load data into Kanban:

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

The `parse(data)` method will reload data every time a change is made.

At this point, the Kanban component is good to go. Once the element is added to your page, it will initialize Kanban with your data. You can also add any configuration you need. To see all available properties, check the [Kanban API docs](/api/overview/properties_overview/).

#### Handling events

Whenever something happens in the Kanban, it triggers an event. These can be used to react to user actions with your own code. The [full list of events](/api/overview/events_overview/) is available.

Open ***Kanban.vue*** and update the `mounted()` method like this:

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

Now you can start up the app and see your Kanban board with data.

![Kanban initialization](/assets/trial_kanban.png)

That's all there is to integrating DHTMLX Kanban with Vue. You can tweak and extend the code as needed. There's a more advanced example on [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).
