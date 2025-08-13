---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/docs/kit/introduction).
:::

DHTMLX Kanban works smoothly with **Svelte**. There are code examples showing how DHTMLX Kanban can be used in a Svelte setup. For more details, take a look at the [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Creating a project

:::info
Before starting a new project, make sure [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/) are installed.
:::

There are a couple of ways to set up a **Svelte** project:

- Use [**SvelteKit**](https://kit.svelte.dev/)

or

- Go with **Svelte and Vite** (without SvelteKit):

~~~json
npm create vite@latest
~~~

More details are available in this [related article](https://svelte.dev/docs/introduction/#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's call the project **my-svelte-kanban-app** and switch to its directory:

~~~json
cd my-svelte-kanban-app
~~~

To install dependencies and start the development server, pick your preferred package manager:

- With [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- With [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app will then be available locally, usually at something like `http://localhost:3000`.

## Creating Kanban

Next, the DHTMLX Kanban source code needs to be available. Stop the app for now and install the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the README instructions. Just a heads up-the trial version works for 30 days.

### Step 2. Component creation

Now it's time to set up a Svelte component that brings Kanban with a Toolbar into the app. Add a new file under ***src/*** and name it ***Kanban.svelte***.

#### Importing source files

Open ***Kanban.svelte*** and bring in the Kanban source files. Keep in mind:

- When using the PRO version and installing from a local package, import paths would look like:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Depending on the package, source files might be minified. If that's the case, make sure to import **kanban.min.css**.

- When working with the trial version, the import paths are:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

This guide uses the **trial** version for configuration examples.

#### Setting containers and adding Kanban with Toolbar

To show Kanban with Toolbar, set up containers for both components and initialize them with their constructors:

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

To get data into Kanban, a data set is needed. Create a ***data.js*** file in the ***src/*** directory and add some example data:

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

Now, open ***App.svelte***, import the data, and pass it into the new `<Kanban/>` component as **props**:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Head over to ***Kanban.svelte*** and use these **props** in the Kanban configuration:

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

Alternatively, the [`parse()`](/api/methods/js_kanban_parse_method/) method can be used in Svelte's `onMount()` to load data into Kanban:

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

Using the `parse(data)` method helps reload data every time something changes.

At this point, the Kanban component is all set. Once it's added to the page, it will initialize with data. Any other required settings can be added freely. The [Kanban API docs](/api/overview/properties_overview/) have details on all available options.

#### Handling events

Whenever there's activity in Kanban, events get fired. These can be used to react to user actions and kick off custom logic. Check out the [full list of events](/api/overview/events_overview/).

Add this to ***Kanban.svelte*** to handle an event inside `onMount()`:

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

To display the component in the app, open **App.svelte** and update its code:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Now, start the app to see Kanban in action with the provided data.

![Kanban initialization](/assets/trial_kanban.png)

This covers integrating DHTMLX Kanban into a Svelte app. The code can be tweaked to fit any specific needs. For a more advanced example, take a look at [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).
