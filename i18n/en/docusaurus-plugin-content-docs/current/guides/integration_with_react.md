---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with React

:::tip
It's helpful to know the basics of [**React**](https://react.dev) before jumping into this guide. If a refresher is needed, the [**React documentation**](https://react.dev/learn) covers all the essentials.
:::

DHTMLX Kanban works well with **React**. There are some ready-to-use code examples showing how to set up DHTMLX Kanban in a **React** environment. For more details, check out this [**Example on GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Creating a project

:::info
It's a good idea to have [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/) installed before starting a new project.
:::

A basic **React** project can be created, or you can use **React with Vite**. The example project here is called **my-react-kanban-app**:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Installation of dependencies

Move into the new app folder:

~~~json
cd my-react-kanban-app
~~~

Next, install the dependencies and start the development server. Just pick your package manager:

- For [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- For [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

The app will start on localhost, usually at something like `http://localhost:3000`.

## Creating Kanban

To get started with DHTMLX Kanban, grab the source code. It's best to stop the app first, then install the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the README instructions. The trial version is available for 30 days.

### Step 2. Component creation

A React component is needed to add Kanban to the app. Create a new file named ***Kanban.jsx*** in the ***src/*** directory.

#### Importing source files

Open ***Kanban.jsx*** and import the Kanban files. There are a couple of options depending on the version:

- For the PRO version installed from a local folder, the imports look like this:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Depending on the package, you might need to import ***kanban.min.css*** if the files are minified.

- For the trial version, use these paths:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

This guide shows how to set up the **trial** version.

#### Setting containers and adding Kanban with Toolbar

To show Kanban with a Toolbar, create containers for both and initialize them using their constructors:

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

To make sure Kanban displays correctly, add some necessary styles for Kanban and its container in the main CSS file:

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

Kanban needs some data to work with. Make a ***data.js*** file in the ***src/*** directory and add some sample data:

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

Next, open ***App.js*** and import the data. Then, pass the data into the `<Kanban/>` component as **props**:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Head over to ***Kanban.jsx*** and use the passed **props** in the Kanban configuration:

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

Another way to load data is by using the [`setConfig()`](/api/methods/js_kanban_setconfig_method) or [`parse()`](/api/methods/js_kanban_parse_method/) method inside React's `useEffect()`:

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

The `setConfig()` or `parse()` method can be handy for reloading data when changes are made.

At this point, the Kanban component is set up. When the component is added to the page, it initializes Kanban with the provided data. You can also adjust the configuration as needed. The [Kanban API docs](/api/overview/properties_overview/) have the full list of available options.

#### Handling events

Kanban fires events whenever something happens—like a card is added or moved. These events can be used to trigger custom code. The [complete list of events](/api/overview/events_overview/) is available for reference.

To handle an event, update ***Kanban.jsx*** and add the following to the `useEffect()`:

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

Now, the app can be started, and Kanban will show up on the page with data loaded.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with React"
    className="img_border"
/>

This is how DHTMLX Kanban can be integrated with React. The code can be tweaked as needed. For a more advanced example, take a look at the [**GitHub**](https://github.com/DHTMLX/react-kanban-demo) repository.