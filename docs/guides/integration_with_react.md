---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with React

:::tip
It's helpful to know the basics of [**React**](https://react.dev) before diving into this documentation. If you want to brush up on React, check out the [**React documentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Kanban works well with **React**. There are code samples showing how to use DHTMLX Kanban in React projects. For more details, check out the [**Example on GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Creating a project

:::info
Before starting a new project, make sure you have [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/) installed.
:::

You can start with a standard **React** project or set one up with **React and Vite**. For this guide, the project is called **my-react-kanban-app**:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Installation of dependencies

Switch to the app's directory:

~~~json
cd my-react-kanban-app
~~~

Add dependencies and run the development server. You can use your favorite package manager:

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

The app will be available locally, usually at `http://localhost:3000`.

## Creating Kanban

Next, grab the DHTMLX Kanban source code. First, stop the app and install the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the instructions in its README file. Remember, the trial version is good for 30 days.

### Step 2. Component creation

Create a new React component to add the Kanban board into your app. Add a file called ***Kanban.jsx*** inside the ***src/*** directory.

#### Importing source files

Open ***Kanban.jsx*** and import the Kanban source files. Here's what to keep in mind:

- For the PRO version installed locally, import like this:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Depending on the package, the CSS file may be minified. In that case, use ***kanban.min.css***.

- For the trial version, use these import paths:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

This guide shows how to work with the **trial** version.

#### Setting containers and adding Kanban with Toolbar

To show Kanban with the Toolbar on your page, set up containers for both and initialize them with their constructors:

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // include Kanban styles

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // initialize container for Toolbar
    let kanban_container = useRef(); // initialize container for Kanban

    useEffect(() => {
        // initialize the Kanban component
        const kanban = new Kanban(kanban_container.current, {});

        // initialize the Toolbar component
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // provide Kanban inner API
            // other configuration properties
        });

        return () => {
            kanban.destructor(); // destruct Kanban
            toolbar.destructor(); // destruct Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### Adding styles

For Kanban to look right, add these key styles in your main CSS file:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root {
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

To display data in Kanban, you'll need a data set. Make a new file called ***data.js*** inside ***src/*** and add something like this:

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

Now, in ***App.js*** import the data and pass it into your `<Kanban/>` component as **props**:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

In ***Kanban.jsx***, use the props to configure Kanban:

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // apply column data
            cards: props.cards, // apply card data
            rows: props.rows, // apply row data
            rowKey: "type",
            // other configuration properties
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // other configuration properties
        });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

If you want to load data into Kanban using the [`parse()`](/api/methods/js_kanban_parse_method/) method inside `useEffect()`, here's how you can do it:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns; // data for columns
    let cards = props.cards; // data for cards
    let rows = props.rows; // data for rows

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // other configuration properties
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // other configuration properties
        });
    
        kanban.parse({ columns, cards, rows });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

Using `parse(data)` lets you reload Kanban data whenever there's a change.

At this point, the Kanban component is set up. When it's rendered, it will initialize with your data and you can add more configuration as needed. For more settings, check the [Kanban API docs](/api/overview/properties_overview/).

#### Handling events

When users interact with Kanban, different events fire. These events can help you react to user actions and run your own code. The [full list of events](/api/overview/events_overview/) is available in the docs.

Here's how to set up a simple event handler in ***Kanban.jsx***:

~~~jsx {5-7} title="Kanban.jsx"
// ...
useEffect(() => {
    const kanban = new Kanban(kanban_container.current, {});

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
    
    return () => {
        kanban.destructor();
    };
}, []);
// ...
~~~

Now just run the app and you'll see the Kanban board loaded with your data.

![Kanban initialization](/assets/trial_kanban.png)

With this setup, DHTMLX Kanban is working inside React. You can adjust the code as needed for your use case. For a more advanced example, head over to [**GitHub**](https://github.com/DHTMLX/react-kanban-demo).
