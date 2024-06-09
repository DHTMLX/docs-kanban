---
sidebar_label: Integration with Svelte
title: Integration with Svelte
description: You can learn about the integration with Svelte in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX Kanban is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX Kanban with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vitejs.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's name the project as **my-svelte-kanban-app** and go to the app directory:

~~~json
cd my-svelte-kanban-app
~~~

Install dependencies and run the app. For this, use a package manager:

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

Now you need to create a Svelte component, to add a Kanban into the application. Let's create a new file in the ***src/*** directory and name it ***Kanban.svelte***.

#### Importing source files

Open the ***Kanban.svelte*** file and import Kanban source files. Note that:

- if you use PRO version and install the Kanban package from a local folder, the import paths look like this:

~~~html title="Kanban.svelte"
import { Kanban } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **kanban.min.css**.

- if you use the trial version of Kanban, specify the following paths:

~~~html title="Kanban.svelte"
import { Kanban } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
~~~

In this tutorial you can see how to configure the **trial** version of Kanban.

#### Setting the container and adding Kanban

To display Kanban on the page, you need to set the container to render the component inside. Check the code below:

~~~html {5,8} title="Kanban.svelte"
<script>
    import { Kanban } from "@dhx/trial-kanban";
    import "@dhx/trial-kanban/dist/kanban.min.css"
    
    let container;
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

Then you need to render Kanban in the container. Use the `new Kanban()` constructor inside the `onMount()` method of Svelte, to initialize Kanban inside of the container:

~~~html {4,8-10} title="Kanban.svelte"
<script>
    import { Kanban } from "@dhx/trial-kanban";
    import "@dhx/trial-kanban/dist/kanban.css";
    import { onMount } from "svelte";

    let container;

    onMount(() => {
        new Kanban(container,{}); 
    });
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

#### Loading data

To add data into the Kanban, we need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***App.svelte*** file, import data, and pass it into the new created `<Kanban/>` components as **props**:

~~~html {3-4,7} title="App.svelte"
<script>
    // ...
    import { getData } from "./data.js";
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} />
~~~

Open the ***Kanban.svelte*** file and apply the passed **props** to the Kanban configuration object:

~~~html {3-4,8-11} title="App.svelte"
<script>
    // ...
    export let columns;
    export let cards;

    let container;
    onMount(() => {
        new Kanban(container, {
            columns, 
            cards
        })
    });
</script>

<div bind:this={container} style="width: 100%; height: 100%;"></div>
~~~

You can also use the [`parse()`](/api/methods/js_kanban_parse_method/) method inside the `onMount()` method of Svelte to load data into Kanban:

~~~html {3-4,9} title="Kanban.svelte"
<script>
    // ...
    export let columns;
    export let cards;

    let container;
    onMount(() => {
        const board = new Kanban(container, {});
        board.parse({columns, cards});
    });
</script>
<!-- ... -->
~~~

Now the Kanban component is ready. When the element will be added to the page, it will initialize the Kanban object with data. You can provide necessary configuration settings as well. Visit our [Kanban API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Kanban, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open ***Kanban.svelte*** and complete the `onMount()` method as in:

~~~jsx title="Kanban.svelte"
onMount(() => {
    const board = new Kanban(container, { columns, cards });
    board.events.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
});
~~~

### Step 3. Adding Kanban into the app

To add the component into the app, open the **App.svelte** file and replace the default code with the following one:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} />
~~~

After that, you can start the app to see Kanban loaded with data on a page.

![Kanban initialization](../assets/trial_kanban.png)

Now you know how to integrate DHTMLX Kanban with Svelte. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).
