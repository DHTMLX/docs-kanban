---
sidebar_label: Integration with React
title: Integration with React
description: You can learn about the integration with React in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Kanban is compatible with **React**. We have prepared code examples on how to use DHTMLX Kanban with **React**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vitejs.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

You can create a basic **React** project or use **React with Vite**:

~~~json
npx create-vite my-react-kanban-app --template react
~~~

### Installation of dependencies

Go to the app directory. Let's call the project as **my-react-kanban-app** and run:

~~~json
cd my-react-kanban-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), call the following commands:

~~~json
yarn install
yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), call the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on `http://localhost:3000`.

## Creating Kanban

Now you should get the DHTMLX Kanban code. First of all, stop the app by pressing **Ctrl+C** in the command line. Then you can proceed with installing the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) and follow steps mentioned in the README file. Note that trial Kanban is available 30 days only.

### Step 2. Component creation

Now you need to create a React component, to add a Kanban into the application. Create a new file in the ***src/*** directory and name it ***Kanban.jsx***.

#### Importing source files

Open the ***Kanban.jsx*** file and import Kanban source files. Note that:

- if you use PRO version and install the Kanban package from a local folder, the import paths look like this:

~~~jsx title="Kanban.jsx"
import { Kanban } from 'dhx-kanban-package';
import 'dhx-kanban-package/codebase/kanban.css'; // ??? /codebase/ or /dist/ TODO
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **kanban.min.css**.

:::note
**In case you use *npm* with a local Kanban package**, the way of importing Kanban source files is different. [Check the details below](#using-npm-with-kanban-package)
:::

- if you use the trial version of Kanban, specify the following paths:

~~~jsx title="Kanban.jsx"
import { Kanban } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

In this tutorial you can see how to configure the **trial** version of Kanban.

#### Setting the container and adding Kanban

To display Kanban on the page, you need to set the container to render the component inside. Check the code below:

~~~jsx title="Kanban.jsx"
import { Kanban } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';

// eslint-disable-next-line react/prop-types
const KanbanComponent = () => {
    let container = useRef();

    return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default KanbanComponent;
~~~

Then you need to add Kanban into the container. For this purpose, import the `useEffect()` method of React and use it to render the Kanban instance and destruct when it is no longer needed:

~~~jsx {2,8-12} title="Kanban.jsx"
// ...
import { useEffect, useRef} from "react";

// eslint-disable-next-line react/prop-types
const KanbanComponent = () => {
    let container = useRef();

    useEffect(() => {
        new Kanban(container.current, {});

        return () => (container.current.innerHTML = "");
    }, []);
    
    return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default KanbanComponent;
~~~

#### Loading data

To add data into the Kanban, you need to provide a data set. Let's create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***Kanban.jsx*** file, pass the name of the data file to the component constructor function:

~~~jsx {1,6-7} title="Kanban.jsx"
const KanbanComponent = ({ data }) => {
    let container = useRef();

    useEffect(() => {
        new Kanban(container.current, {
            columns: data.columns,
            cards: data.cards
        });
        return () => (container.current.innerHTML = "");
    }, []);
    
    return <div ref={container}></div>;
};
~~~

You can also use the `parse()` method inside the `useEffect()` method of React to load data into Kanban:

~~~jsx {6} title="Kanban.jsx"
const KanbanComponent = ({ data }) => {
    let container = useRef();

    useEffect(() => {
        const board = new Kanban(container.current, {});
        board.parse(data);
        return () => (container.current.innerHTML = "");
    }, []);
    
    return <div ref={container}></div>;
};
~~~

The `board.parse(data);` line provides data reloading on each applied change.

Now the Kanban component is ready. When the element will be added to the page, it will initialize the Kanban object with data. You can provide necessary configuration settings as well. Visit our [Kanban API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Kanban, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open **Kanban.jsx** and complete the `useEffect()` method in the following way:

~~~jsx {4-6} title="Kanban.jsx"
useEffect(() => {
    const board = new Kanban(container.current, {});

    board.events.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
    
    return () => (container.current.innerHTML = "");
  }, []);
~~~

### Step 3. Adding Kanban into the app

To add the component into our app, open the **App.jsx** file and replace the default code with the following one:

~~~jsx title="App.jsx"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards } = getData();
    return <Kanban columns={columns} cards={cards} />;
}

export default App;
~~~

![Kanban initialization](../assets/trial_kanban.png)

Now you know how to integrate DHTMLX Kanban with React. You can customize the code according to your specific requirements.
