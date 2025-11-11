---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX Kanban with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a **Svelte** project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/svelte/overview).

### Installation of dependencies

Let's name the project as **my-svelte-kanban-app** and go to the app directory:

~~~json
cd my-svelte-kanban-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn
yarn start
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Kanban

Now you should get the DHTMLX Kanban source code. First of all, stop the app and proceed with installing the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial Kanban is available 30 days only.

### Step 2. Component creation

Now you need to create a Svelte component, to add a Kanban with Toolbar into the application. Let's create a new file in the ***src/*** directory and name it ***Kanban.svelte***.

#### Importing source files

Open the ***Kanban.svelte*** file and import Kanban source files. Note that:

- if you use PRO version and install the Kanban package from a local folder, the import paths look like this:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **kanban.min.css**.

- if you use the trial version of Kanban, specify the following paths:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

In this tutorial you can see how to configure the **trial** version of Kanban.

#### Setting containers and adding Kanban with Toolbar

To display Kanban with Toolbar on the page, you need to create containers for Kanban and Toolbar, and initialize these components using the corresponding constructors:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // initialize containers for Kanban and Toolbar
let kanban, toolbar;

onMount(() => {
    // initialize the Kanban component
    kanban = new Kanban(kanban_container, {})

    // initialize the Toolbar component
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })
});

onDestroy(() => {
    kanban.destructor(); // destruct Kanban
    toolbar.destructor(); // destruct Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### Loading data

To add data into the Kanban, we need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***App.svelte*** file, import data, and pass it into the new created `<Kanban/>` components as **props**:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Go to the ***Kanban.svelte*** file and apply the passed **props** to the Kanban configuration object:

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
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
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

You can also use the [`setConfig()`](/api/methods/js_kanban_setconfig_method/) or [`parse()`](/api/methods/js_kanban_parse_method/) method inside the `onMount()` method of Svelte to load data into Kanban. The `setConfig` or `parse()` method provides data reloading on each applied change. 

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
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })

    kanban.setConfig({ columns, cards, rows });
    // or kanban.parse({ columns, cards, rows });
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

Now the Kanban component is ready to use. When the element will be added to the page, it will initialize the Kanban with data. You can provide necessary configuration settings as well. Visit our [Kanban API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Kanban, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***Kanban.svelte*** and complete the `onMount()` method in the following way:

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

### Step 3. Adding Kanban into the app

To add the component into the app, open the **App.svelte** file and replace the default code with the following one:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

After that, you can start the app to see Kanban loaded with data on a page.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Svelte"
    className="img_border"
/>

Now you know how to integrate DHTMLX Kanban with Svelte. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).
