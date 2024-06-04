---
sidebar_label: Integration with Vue
title: Integration with Vue
description: You can learn about the integration with Vue in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://v3.vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban is compatible with **Vue**. We have prepared code examples on how to use DHTMLX Kanban with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **kanban-vue**.

### Installation of dependencies

Go to the app directory:

~~~json
cd kanban-vue
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn install
yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Kanban

Now you should get the DHTMLX Kanban code. First of all, stop the app and proceed with installing the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Kanban is available 30 days only.

### Step 2. Component creation

Now you need to create a Vue component, to add a Kanban into the application. Create a new file in the ***src/components/*** directory and name it ***Kanban.vue***.

#### Importing source files

Open the ***Kanban.vue*** file and import Kanban source files. Note that:

- if you use PRO version and install the Kanban package from a local folder, the import paths look like this:

~~~html title="Kanban.vue"
import { Kanban } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **kanban.min.css**.

- if you use the trial version of Kanban, specify the following paths:

~~~html title="Kanban.vue"
import { Kanban } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
~~~

In this tutorial you can see how to configure the **trial** version of Kanban.

#### Setting the container and adding Kanban

To display Kanban on the page, you need to set the container to render the component inside. Check the code below:

~~~html {6-8} title="Kanban.vue"
<script>
    import { Kanban } from "@dhx/trial-kanban";
    import "@dhx/trial-kanban/dist/kanban.css";
</script>

<template>
    <div ref="container" style="width: 100%; height: 100%; "></div>
</template>
~~~

Then you need to render Kanban in the container. Use the `new Kanban()` constructor inside the `mounted()` method of Vue to initialize Kanban inside of the container:

~~~html title="Kanban.vue"
<script>
    export default {
        mounted: function() {
            this.board = new Kanban(this.$refs.container, {});
        }
    };
</script>

<template>
    <div ref="container" style="width: 100%; height: 100%; "></div>
</template>
~~~

To clear the component as it has unmounted, use the `kanban.destructor()` call and remove the container after that inside the `unmounted()` method of ***Vue.js***, as follows:

~~~html {7-10} title="Kanban.vue"
<script>
    export default {
        mounted: function() {
            this.board = new Kanban(this.$refs.container, {});
        },

        unmounted() {
            this.board.destructor();
            this.$refs.container.innerHTML = "";
        }
    }
</script>

<template>
    <div ref="container" style="width: 100%; height: 100%; "></div>
</template>
~~~

#### Loading data

To add data into the Kanban, you need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx title="data.js"
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
            label: "Archive the cards/boards ",
            priority: 3,
            color: "#58C3FE",
            users: [4],
            progress: 1,
            column: "backlog",
            type: "feature",
        },
        // ...
    ];

    return {
        columns,
        cards
    };
}
~~~

Then open the ***App.vue*** file, import data, and initialize it via the inner `data()` method. After this you can pass data into the new created `<Kanban/>` components as **props**:

~~~html {3,7-10,15} title="App.vue"
<script>
    // ...
    import { getData } from "./data";

    export default {
        // ...
        data() {
            const { columns, cards } = getData();
            return { columns, cards };
        }
    };
</script>

<template>
    <Kanban :columns="columns" :cards="cards" />
</template>
~~~

Open the ***Kanban.vue*** file and apply the passed **props** to the Kanban configuration object:

~~~html {3,7-8} title="Kanban.vue"
<script>
    export default {
        props: ["cards", "columns"],

        mounted() {
            this.board = new Kanban(this.$refs.container, {
                cards: this.cards,
                columns: this. columns
            });
        }
    }
</script>
~~~

You can also use the `parse()` method inside the `mounted()` method of Vue to load data into Kanban:

~~~html {7} title="Kanban.vue"
<script>
    export default {
        props: ["cards", "columns"],

        mounted() {
            this.board = new Kanban(this.$refs.cont, {});
            this.board.parse({ columns: this.columns, cards: this.cards });
        }
    }
</script>
~~~

Now the Kanban component is ready. When the element will be added to the page, it will initialize the Kanban object with data. You can provide necessary configuration settings as well. Visit our [Kanban API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Kanban, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***Kanban.vue*** and complete the `mounted()` method:

~~~html {6-8} title="Kanban.vue"
<script>
    export default {
        // ...
        mounted() {
            this.board = new Kanban(this.$refs.cont, {});
            this.board.events.on("add-card", (obj) => {
                console.log(obj.columnId);
            });
        }
    }
</script>
~~~

### Step 3. Adding Kanban into the app

To add the component into the app, open the **App.vue** file and replace the default code with the following one:

~~~html title="App.vue"
<script>
    import Kanban from "./components/Kanban.vue";
    import { getData } from "./data";

    export default {
        components: { Kanban },
        data() {
            const { columns, cards } = getData();
            return { columns, cards };
        }
    };
</script>

<template>
    <Kanban :columns="columns" :cards="cards" />
</template>
~~~

After that, when you can start the app to see Kanban loaded with data on a page.

![Kanban initialization](../assets/trial_kanban.png)

Now you know how to integrate DHTMLX Kanban with Vue. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).
