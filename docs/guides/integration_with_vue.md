---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Vue

:::tip
This guide assumes familiarity with [Vue](https://vuejs.org/) concepts and patterns. For background, see the [Vue 3 documentation](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban is compatible with Vue. The full code example for Vue 3 is available on [GitHub](https://github.com/DHTMLX/vue-kanban-demo).

## Create a project

:::info
Install [Node.js](https://nodejs.org/en/) before creating the project.
:::

The following command creates a new Vue project:

~~~json
npm create vue@latest
~~~

The command runs `create-vue`, the official Vue project scaffolding tool. For details, see the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Name the project *my-vue-kanban-app*.

### Install dependencies

Move into the app directory:

~~~json
cd my-vue-kanban-app
~~~

Install dependencies and start the dev server with one of the package managers:

- For [yarn](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // or yarn dev
~~~

- For [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app runs on a localhost address (for example, `http://localhost:3000`).

## Create Kanban

Stop the dev server and install the Kanban package.

### Step 1. Install the package

Download the [trial Kanban package](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the steps in the README file. The trial version is available for 30 days.

### Step 2. Create the component

Create a Vue component that mounts Kanban and the Toolbar. Add a new *Kanban.vue* file to the *src/components/* directory.

#### Import source files

Open *Kanban.vue* and import the Kanban source files. The import paths depend on the package version:

- For the PRO version installed from a local folder:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

If the package ships minified source files, import the CSS file as *kanban.min.css*.

- For the trial version:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

This tutorial uses the trial version of Kanban.

#### Set up containers and initialize Kanban

To display Kanban with the Toolbar, create two containers and call the constructors. The following code snippet wires up refs and instantiates the components inside `mounted()`:

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

#### Add styles

Add styles for Kanban and the container in the main CSS file:

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

#### Load data

To populate Kanban, provide a data set. Create the *data.js* file in the *src/* directory:

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

Open *App.vue* and import the dataset. Initialize the values through the inner `data()` method, then pass the values to the new `<Kanban/>` component as props:

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

Open *Kanban.vue* and apply the props to the Kanban configuration object:

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

As an alternative, load data after creating the instance with [`setConfig()`](/api/methods/js_kanban_setconfig_method/) or [`parse()`](/api/methods/js_kanban_parse_method/) inside `mounted()`:

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

The Kanban component is now ready. When the element renders, Kanban initializes with data. For the full list of supported configuration properties, see the [Kanban API reference](/api/overview/properties_overview/).

#### Handle events

User actions in Kanban trigger events. Listen to events to react to specific actions. For the complete list, see the [Kanban events reference](/api/overview/events_overview/).

Open *Kanban.vue* and extend the `mounted()` method:

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

Run the app to view the populated Kanban board on the page.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Vue"
  className="img_border"
/>

See the complete project on [GitHub](https://github.com/DHTMLX/vue-kanban-demo).
