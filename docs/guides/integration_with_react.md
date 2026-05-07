---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with React

:::tip
This guide assumes familiarity with [React](https://react.dev) concepts and patterns. For background, see the [React documentation](https://react.dev/learn).
:::

DHTMLX Kanban is compatible with React. The full code example is available on [GitHub](https://github.com/DHTMLX/react-kanban-demo).

## Create a project

:::info
Install [Vite](https://vite.dev/) (optional) and [Node.js](https://nodejs.org/en/) before creating the project.
:::

Create a basic React project (or React with Vite). Let's name the project *my-react-kanban-app*:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Install dependencies

Move into the new app directory:

~~~json
cd my-react-kanban-app
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

Create a React component that adds Kanban to the application. Add a new file to the *src/* directory and name it *Kanban.jsx*.

#### Import source files

Open *Kanban.jsx* and import the Kanban source files. The import paths depend on the package version:

- For the PRO version installed from a local folder:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

If the package ships minified source files, import the CSS file as *kanban.min.css*.

- For the trial version:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

This tutorial uses the trial version of Kanban.

#### Set up containers and initialize Kanban

To display Kanban with the Toolbar, create containers for both components and call the corresponding constructors. The following code snippet wires up refs and instantiates the components inside `useEffect()`:

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

#### Add styles

Add styles for Kanban and its container in the main CSS file of the project:

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

Open *App.js*, import the data, and pass it to the new `<Kanban/>` component as props:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Open *Kanban.jsx* and apply the props to the Kanban configuration object:

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

To reload data after each change, call [`setConfig()`](/api/methods/js_kanban_setconfig_method/) or [`parse()`](/api/methods/js_kanban_parse_method/) inside `useEffect()`:

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
    
        kanban.setConfig({ columns, cards, rows });
        // or kanban.parse({ columns, cards, rows });

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

The Kanban component is now ready. When the element renders, Kanban initializes with data. For the full list of supported configuration properties, see the [Kanban API reference](/api/overview/properties_overview/).

#### Handle events

User actions on the Kanban trigger events. Listen to events to react to specific actions. For the complete list, see the [Kanban events reference](/api/overview/events_overview/).

Open *Kanban.jsx* and extend the `useEffect()` call:

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

Start the app to see Kanban loaded with data on the page.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with React"
  className="img_border"
/>

The full advanced example is available on [GitHub](https://github.com/DHTMLX/react-kanban-demo).
