---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Angular

:::tip
It helps to have a basic understanding of **Angular** before diving into this guide. If you need a refresher, check out the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX Kanban works smoothly with **Angular**. There are code examples available that show how to use DHTMLX Kanban together with **Angular**. More details can be found in this [**Example on GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Creating a project

:::info
Before getting started with a new project, make sure you have [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/) installed.
:::

To set up a new project called **my-angular-kanban-app** with Angular CLI, just run:

~~~json
ng new my-angular-kanban-app
~~~

:::note
If you're following this guide, remember to turn off Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating your Angular app!
:::

This command will set up everything you need, so no extra commands are required.

### Installation of dependencies

Head over to your new app's directory:

~~~json
cd my-angular-kanban-app
~~~

Next, install dependencies and launch the development server. Here's how, using [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Your app should be running locally (for example, at `http://localhost:3000`).

## Creating Kanban

At this point, you'll want to get the DHTMLX Kanban source code. First, stop your app and install the Kanban package.

### Step 1. Package installation

Grab the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow the steps in the README. Keep in mind the trial version is good for 30 days.

### Step 2. Component creation

Next, create an Angular component to add Kanban with a Toolbar to your app. Make a **kanban** folder in **src/app/**, then add a new file named **kanban.component.ts**.

#### Import source files

Open **kanban.component.ts** and import the Kanban source files. Here's what the import paths look like:

- For the PRO version installed from a local folder:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- For the trial version:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

The examples here use the **trial** version.

#### Set containers and initialize the Kanban with Toolbar

To show Kanban with a Toolbar, set up containers for both and initialize the components using their constructors:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // a template name used in the "app.component.ts" file as <kanban />
    styleUrls: ["./kanban.component.css"], // include the css file
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    // initialize container for Toolbar
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // initialize container for Kanban
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // initialize the Kanban component
        this._kanban = new Kanban(this.kanban_container.nativeElement, {});

        // initialize the Toolbar component
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); // destruct Kanban
        this._toolbar.destructor(); // destruct Toolbar
    }
}
~~~

#### Adding styles

To make sure Kanban displays properly, add the necessary styles. You can do this by creating a **kanban.component.css** file in **src/app/kanban/** and including these styles:

~~~css title="kanban.component.css"
/* import Kanban styles */
@import "@dhx/trial-kanban/dist/kanban.css";

/* specify styles for initial page */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for Kanban and Toolbar container*/
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

To get data into Kanban, put together a data set. You can create a **data.ts** file in **src/app/kanban/** and add your data there:

~~~jsx {2,14,37,48} title="data.ts"
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

Now, open ***kanban.component.ts***. Import your data file and plug the data properties into the Kanban config inside the `ngOnInit()` method like so:

~~~jsx {2,23,25-27} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", 
    styleUrls: ["./kanban.component.css"],
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { cards, columns, rows } = getData(); // initialize data properties
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns, // apply column data
            cards, // apply card data
            rows, // apply row data
            rowKey: "type",
            // other configuration properties 
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // other configuration properties 
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

Another way to load data into Kanban is by using the [`parse()`](/api/methods/js_kanban_parse_method/) method inside the `ngOnInit()` method.

~~~jsx {2,23,37-42} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", 
    styleUrls: ["./kanban.component.css"],
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { cards, columns, rows } = getData(); // initialize data properties
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // other configuration properties 
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // other configuration properties 
        });

        // apply the data via the parse() method
        this._kanban.parse({ 
            columns, 
            cards, 
            rows 
        }); 
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

Using `parse(data)` lets you reload data anytime you need.

With this in place, the Kanban component is good to go. Once you add the element to the page, Kanban will be initialized with the data set. You can also adjust any configuration settings you need. The [Kanban API docs](/api/overview/properties_overview/) have a complete list of available properties.

#### Handling events

Whenever someone interacts with Kanban, an event fires. You can use these events to track actions and run your own code. Check out the [full list of events](/api/overview/events_overview/).

Open **kanban.component.ts** and update the `ngOnInit()` method like this:

~~~jsx {5-7} title="kanban.component.ts"
// ...
ngOnInit() {
    this._kanban = new Kanban(this.kanban_container.nativeElement, {});

    this._kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
}

ngOnDestroy(): void {
    this._kanban.destructor(); 
}
~~~

### Step 3. Adding Kanban into the app

To hook up the ***KanbanComponent*** in your app, open ***src/app/app.component.ts*** and swap the default code with this:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<kanban/>`
})
export class AppComponent {
    name = "";
}
~~~

Next, create ***app.module.ts*** in ***src/app/*** and declare *KanbanComponent* as shown:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { KanbanComponent } from "./kanban/kanban.component";

@NgModule({
    declarations: [AppComponent, KanbanComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Finally, open ***src/main.ts*** and use this code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

At this point, you can start your app and see Kanban loaded with data on the page.

![Kanban initialization](/assets/trial_kanban.png)

That's the basic setup for integrating DHTMLX Kanban with Angular. The code can be tweaked to fit your needs. For a more advanced example, check out [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).
