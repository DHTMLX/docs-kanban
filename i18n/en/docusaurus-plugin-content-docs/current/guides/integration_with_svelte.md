---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Svelte

:::tip
It's helpful to know the basics of **Svelte** before jumping in here. If you want to brush up, check out the [**Svelte documentation**](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban works well with **Svelte**. There are some code samples showing how to use DHTMLX Kanban in a Svelte project. For more details, check out the [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Creating a project

:::info
Before starting a new project, make sure you have [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/) installed.
:::

There are a couple of ways to set up a **Svelte** project:

- You can use [**SvelteKit**](https://kit.svelte.dev/)

or

- You can use **Svelte with Vite** (without SvelteKit):

~~~json
npm create vite@latest
~~~

You can find more info in the [related article](https://svelte.dev/docs/svelte/overview).

### Installation of dependencies

Let's call the project **my-svelte-kanban-app** and move into the app directory:

~~~json
cd my-svelte-kanban-app
~~~

Install the dependencies and start the development server. You can use your preferred package manager:

- For [**yarn**](https://yarnpkg.com/), use these commands:

~~~json
yarn
yarn start
~~~

- For [**npm**](https://www.npmjs.com/), use these commands:

~~~json
npm install
npm run dev
~~~

The app should now be running locally (for example at `http://localhost:3000`).

## Creating Kanban

Next, you'll need to get the DHTMLX Kanban source code. Stop the app for a moment and install the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the README instructions. Just a heads up, the trial Kanban works for 30 days.

### Step 2. Component creation

Now it's time to make a Svelte component to add Kanban with a Toolbar to the app. Create a new file in the ***src/*** directory and call it ***Kanban.svelte***.

#### Importing source files

Open up ***Kanban.svelte*** and import the Kanban source files. Here are a couple of things to keep in mind:

- If you're using the PRO version and installed Kanban from a local folder, your import paths would look like this:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Depending on the package, the CSS might be minified, so you might need to import **kanban.min.css** instead.

- If you're using the trial version, use these paths:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

This tutorial shows how to set up the **trial** version of Kanban.

#### Setting containers and adding Kanban with Toolbar

To show Kanban with a Toolbar on the page, set up containers for both and initialize them using their constructors:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // containers for Kanban and Toolbar
let kanban, toolbar;

onMount(() => {
    // set up the Kanban component
    kanban = new Kanban(kanban_container, {})

    // set up the Toolbar component
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // give Toolbar access to Kanban's API
        // other config options
    })
});

onDestroy(() => {
    kanban.destructor(); // clean up Kanban
    toolbar.destructor(); // clean up Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### Loading data

To get data into Kanban, you'll need to provide a data set. You can create a ***data.js*** file in the ***src/*** directory and add some sample data:

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

Then, in ***App.svelte***, import the data and pass it as **props** to your `<Kanban/>` component:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Now, open ***Kanban.svelte*** and use the passed **props** in the Kanban configuration:

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
        // other config options
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // give Toolbar access to Kanban's API
        // other config options
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

If you want, you can also use the [`parse()`](/api/methods/js_kanban_parse_method/) method in Svelte's `onMount()` to load data into Kanban:

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
        // other config options
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // give Toolbar access to Kanban's API
        // other config options
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

The `parse(data)` method is handy for reloading data whenever something changes.

At this point, the Kanban component is good to go. Once it's on the page, it will initialize with your data. You can tweak the configuration as needed. To see all the available settings, check out the [Kanban API docs](/api/overview/properties_overview/).

#### Handling events

Whenever something happens in Kanban (like a user action), an event is triggered. You can use these events to run your own code. The [full list of events](/api/overview/events_overview/) is available.

In ***Kanban.svelte***, update the `onMount()` method like this:

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

To bring the component into your app, open **App.svelte** and swap out the default code for this:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Now you can start the app and see Kanban loaded with your data.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Svelte"
    className="img_border"
/>

This is the basic setup for integrating DHTMLX Kanban with Svelte. Feel free to customize things to fit your needs. For a more advanced example, check out the [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo) repo.