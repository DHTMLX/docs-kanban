---
sidebar_label: Integration with Angular
title: Integration with Angular
description: You can learn about the integration with Angular in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Integration with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX Kanban is compatible with **Angular**. We have prepared code examples on how to use DHTMLX Kanban with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://v17.angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-kanban-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-kanban-app
~~~

:::note
If you want to follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating new Angular app!
:::

The command above installs all the necessary tools, so you don't need to run any additional commands.

### Installation of dependencies

Go to the new created app directory:

~~~json
cd my-angular-kanban-app
~~~

Install dependencies and start the dev server. For this, use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Kanban

Now you should get the DHTMLX Kanban source code. First of all, stop the app and proceed with installing the Kanban package.

### Step 1. Package installation

Download the [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial Kanban is available 30 days only.
  
### Step 2. Component creation

Now you need to create an Angular component, to add Kanban with Toolbar into the application. Create  the **kanban** folder in the **src/app/** directory, add a new file into it and name it **kanban.component.ts**. 

#### Import source files

Open the **kanban.component.ts** file and import Kanban source files. Note that:

- if you use PRO version and install the Kanban package from a local folder, the imported path looks like this:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- if you use the trial version of Kanban, specify the following path:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

In this tutorial you can see how to configure the **trial** version of Kanban.

#### Set containers and initialize the Kanban with Toolbar

To display Kanban with Toolbar on the page, you need to set containers for Kanban and Toolbar, and initialize these components using the corresponding constructors:

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

To display Kanban correctly, you need to provide the corresponding styles. For this purpose, you can create the **kanban.component.css** file in the **src/app/kanban/** directory and specify important styles for Kanban and its container:

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

To add data into Kanban, you need to provide a data set. You can create the **data.ts** file in the **src/app/kanban/** directory and add some data into it:

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

Then open the ***kanban.component.ts*** file. Import the file with data and specify the corresponding data properties to the configuration object of Kanban within the `ngOnInit()` method, as shown below:

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

You can also use the [`setConfig()`](/api/methods/js_kanban_setconfig_method/) or [`parse()`](/api/methods/js_kanban_parse_method/) method inside the `ngOnInit()` method of Angular to load data into Kanban. The `setConfig` or `parse()` method provides data reloading on each applied change.

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

        // apply the data via the setConfig() or parse() method
        this._kanban.setConfig({ 
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

Now the Kanban component is ready to use. When the element will be added to the page, it will initialize the Kanban with data. You can provide necessary configuration settings as well. Visit our [Kanban API docs](/api/overview/properties_overview/) to check the full list of available properties.

#### Handling events

When a user makes some action in the Kanban, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/api/overview/events_overview/).

Open the **kanban.component.ts** file and complete the `ngOnInit()` method in the following way:

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

To add the ***KanbanComponent*** component into your app, open the ***src/app/app.component.ts*** file and replace the default code with the following one:

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

Then create the ***app.module.ts*** file in the ***src/app/*** directory and specify the *KanbanComponent* as shown below:

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

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

After that, you can start the app to see Kanban loaded with data on a page.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Angular"
    className="img_border"
/>

Now you know how to integrate DHTMLX Kanban with Angular. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).
