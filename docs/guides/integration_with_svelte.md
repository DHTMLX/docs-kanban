---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Svelte

:::tip
This guide assumes familiarity with Svelte concepts and patterns. For background, see the [Svelte documentation](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban is compatible with Svelte. The full code example is available on [GitHub](https://github.com/DHTMLX/svelte-kanban-demo).

## Create a project

:::info
Install [Vite](https://vite.dev/) (optional) and [Node.js](https://nodejs.org/en/) before creating the project.
:::

Set up a Svelte project in one of two ways:

- with [SvelteKit](https://kit.svelte.dev/) — recommended
- with Svelte and Vite (without SvelteKit) — run:

~~~json
npm create vite@latest
~~~

For details, see the [Svelte documentation](https://svelte.dev/docs/svelte/overview).

### Install dependencies

Name the project *my-svelte-kanban-app*. Move into the app directory:

~~~json
cd my-svelte-kanban-app
~~~

Install dependencies and start the dev server with one of the package managers:

- For [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
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

Create a Svelte component that mounts Kanban and the Toolbar. Add a new *Kanban.svelte* file to the *src/* directory.

#### Import source files

Open *Kanban.svelte* and import the Kanban source files. The import paths depend on the package version:

- For the PRO version installed from a local folder:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

If the package ships minified source files, import the CSS file as *kanban.min.css*.

- For the trial version:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

This tutorial uses the trial version of Kanban.

#### Set up containers and initialize Kanban

To display Kanban with the Toolbar, create two containers and call the constructors. The following code snippet binds the containers and instantiates the components inside `onMount()`:

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
    kanban.destructor(); // destroy Kanban
    toolbar.destructor(); // destroy Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
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

Open *App.svelte*, import the dataset, and pass the values to the new `<Kanban/>` component as props:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Open *Kanban.svelte* and apply the props to the Kanban configuration object:

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

As an alternative, load data after creating the instance with [`setConfig()`](/api/methods/js_kanban_setconfig_method/) or [`parse()`](/api/methods/js_kanban_parse_method/) inside `onMount()`:

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

The Kanban component is now ready. When the element renders, Kanban initializes with data. For the full list of supported configuration properties, see the [Kanban API reference](/api/overview/properties_overview/).

#### Handle events

User actions in Kanban trigger events. Listen to events to react to specific actions. For the complete list, see the [Kanban events reference](/api/overview/events_overview/).

Open *Kanban.svelte* and extend the `onMount()` callback:

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

### Step 3. Add Kanban to the app

To register the component, open *App.svelte* and replace the default code:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Run the app to view the populated Kanban board on the page.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Svelte"
  className="img_border"
/>

See the complete project on [GitHub](https://github.com/DHTMLX/svelte-kanban-demo).
