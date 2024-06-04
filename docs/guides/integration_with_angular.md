---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX Kanban is compatible with **Angular**. We have prepared code examples on how to use DHTMLX Kanabn with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-kanban-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-kanban-app
~~~

The command above installs all the necessary tools and dependencies, so you don't need to run any additional commands.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-angular-kanban-app
~~~

Run the app with the following command:

~~~json
yarn install
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Kanban

Now you should get the DHTMLX Kanban code. First of all, stop the app and proceed with installing the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Kanban is available 30 days only.
  
### Step 2. Component creation

Now you need to create a component, to add a Kanban into the application. Create  the **kanban** folder in the **src/app/** directory, add a new file into it and name it **kanban.component.ts**. Then complete the steps described below.

#### Importing source files

Open the file and import Kanban source files. Note that:

- if you use PRO version and install the Kanban package from a local folder, the imported paths look like this:

~~~jsx
import { Kanban } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css'; 
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **kanban.min.css**.

- if you use the trial version of Kanban, specify the following paths:

~~~jsx
import { Kanban } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
~~~

In this tutorial you can see how to configure the **trial** version of Kanban.

#### Setting the container and adding Kanban

To display Kanban on the page, we need to set the container to render the component inside. Use the code below:

~~~jsx title="kanban.component.ts"
import { Kanban } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';

@Component({
    selector: 'kanban',
    template: '<div #container></div>'
})
export class KanbanComponent implements OnInit {
    @ViewChild('container', { static: true }) container!: ElementRef;
}
~~~

Then we need to render our Kanban in the container. To do that, use the `ngOnInit()` method of Angular:

~~~jsx {6-9} title="kanban.component.ts"
export class KanbanComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) container!: ElementRef;

    private _board!: Kanban;

    ngOnInit() {
        const board = new Kanban(this.container.nativeElement,{});
        this._board = board;
    }

    ngOnDestroy() {
        this._board.destructor();
    }
}
~~~

In the above code we also specified the `ngOnDestroy()` method that contains the `kanban.destructor()` expression to clear the component when it is no longer needed.

#### Loading data

To add data into Kanban, you need to provide a data set. You can create the **data.ts** file in the **src/app/kanban/** directory and add some data into it:

~~~jsx title="data.ts"
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
            type: "feature"
        },
        {
            label: "Archive the cards/boards ",
            priority: 3,
            color: "#58C3FE",
            users: [4],
            progress: 1,
            column: "backlog",
            type: "feature"
        },
        // ...
    ];

    return {
        columns,
        cards
    };
}
~~~

Then open the ***kanban.component.ts*** file. Import the file with data and specify the corresponding data properties to the configuration object of Kanban within the `ngOnInit()` method, as shown below.

~~~jsx {2,6-9} title="kanban.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
    const { cards, columns } = getData();
    const board = new Kanban(this.container.nativeElement, {
        columns,
        cards
    });
}
~~~

You can also use the `parse()` method inside the `ngOnInit()` method of Angular to load data into Kanban. It will reload data on each applied change.

~~~jsx {11} title="kanban.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
    const { cards, columns } = getData();
    const board = new Kanban(this.container.nativeElement, {
        columns: [],
        cards: []
    });

    board.parse({ columns, cards });
}
~~~

Now the Kanban component is ready. When the element will be added to the page, it will initialize the Kanban object with data. You can provide necessary configuration settings as well. Visit our [Kanban API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Kanban, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open the **kanban.component.ts** file and complete the `ngOnInit()` method as in:

~~~jsx {4-6} title="kanban.component.ts"
ngOnInit() {
    const board = new Kanban(this.container.nativeElement,{ /*...*/ });

    board.events.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
}
~~~

### Step 3. Adding Kanban into the app

Now it's time to add the component into our app. Open ***src/app/app.component.ts*** and use *KanbanComponent* instead of the default content by inserting the code below:

~~~jsx title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<kanban/>`
})
export class AppComponent {
    name = "";
}
~~~

Then create the ***app.module.ts*** file in the ***src/app/*** directory and insert the *KanbanComponent* as provided below:

~~~jsx title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { KanbanComponent } from "./kanban/kanban.component";

@NgModule({
    declarations: [AppComponent, KanbanComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

For correct rendering of fonts, open the ***angular.json*** file and complete the "assets" array in the following way (replace *kanban_package* with the name of your local folder that contains Kanban source files):

~~~jsx {5-9} title="angular.json"
...
"assets": [
    "src/favicon.ico",
    "src/assets",
    {
        "input": "./kanban_package/dist/fonts",
        "glob": "**/*",
        "output": "assets"
    }
],
...
~~~

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

After that, when you can start the app to see Kanban loaded with data on a page.

![Kanban initialization](../assets/trial_kanban.png)

Now you know how to integrate DHTMLX Kanban with Angular. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).
