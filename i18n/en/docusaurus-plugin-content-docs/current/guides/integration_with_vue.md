---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Vue

:::tip
It's helpful to know the basics of [**Vue**](https://vuejs.org/) before diving into this guide. If you need a refresher, check out the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban works smoothly with **Vue**. There are sample code snippets demonstrating how to use DHTMLX Kanban with **Vue 3**. For more details, see the [**Example on GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Creating a project

:::info
Make sure [**Node.js**](https://nodejs.org/en/) is installed before starting a new project.
:::

To spin up a **Vue** project, just use:

~~~json
npm create vue@latest
~~~

This command sets up and runs `create-vue`, which is the official **Vue** project starter. For more info, take a look at the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

In this example, the project is named **my-vue-kanban-app**.

### Installation of dependencies

Move into your app’s folder:

~~~json
cd my-vue-kanban-app
~~~

Install the dependencies and start up the development server. Depending on your package manager, use one of these:

- For [**yarn**](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // or yarn dev
~~~

- For [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app should now be running locally (for example, at `http://localhost:3000`).

## Creating Kanban

Next, grab the DHTMLX Kanban source code. Stop the app for now, and install the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the steps in the README. The trial version is available for 30 days.

### Step 2. Component creation

Create a new Vue component to add Kanban with a Toolbar to your app. In the ***src/components/*** directory, make a new file called ***Kanban.vue***.

#### Import source files

Open ***Kanban.vue*** and import the Kanban source files. Keep in mind:

- If you’re using the PRO version and installed the Kanban package from a local folder, your imports will look like this:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Depending on your package, the source files might be minified. In that case, make sure to import **kanban.min.css** instead.

- If you’re using the trial version, use these paths:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

This guide shows how to set up the **trial** version of Kanban.

#### Setting containers and adding Kanban with Toolbar

To show Kanban with a Toolbar, set up containers for both and initialize them with their constructors:

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

To make Kanban display properly, add these styles to your main CSS file:

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

To provide data for Kanban, create a ***data.js*** file in the ***src/*** directory and add your data like this:

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

Now, open ***App.vue***, import the data, and set it up using the `data()` method. Then pass it to the `<Kanban/>` component as **props**:

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

Then, in ***Kanban.vue***, use these **props** in the Kanban configuration object:

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

Alternatively, you can use the [`parse()`](/api/methods/js_kanban_parse_method/) method in the `mounted()` hook to load data into Kanban:

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

The `parse(data)` method lets you reload data whenever changes are made.

At this point, the Kanban component is set up and ready. Once you add it to the page, it initializes with your data. You can also pass in any extra configuration you need. To see all available properties, visit the [Kanban API docs](/api/overview/properties_overview/).

#### Handling events

When actions happen in Kanban, events are triggered. You can listen for these events and run your own code in response. Check out the [full list of events](/api/overview/events_overview/).

In ***Kanban.vue***, update the `mounted()` method like this:

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

Now, go ahead and run the app to see the Kanban board loaded with your data.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Vue"
    className="img_border"
/>

This is the basic setup for integrating DHTMLX Kanban with Vue. The code can be tweaked as needed. For a more advanced example, check out the project on [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).