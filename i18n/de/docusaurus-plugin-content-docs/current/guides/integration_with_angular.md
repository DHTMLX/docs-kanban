---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit Angular. Stöbern Sie in Entwicklerhandbüchern und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Angular

:::tip
Es ist hilfreich, über Grundkenntnisse in **Angular** zu verfügen, bevor Sie mit dieser Anleitung beginnen. Falls Sie eine Auffrischung benötigen, besuchen Sie die [**Angular-Dokumentation**](https://angular.io/docs).
:::

DHTMLX Kanban funktioniert nahtlos mit **Angular**. Es gibt Codebeispiele, die zeigen, wie Sie DHTMLX Kanban zusammen mit **Angular** nutzen können. Weitere Details finden Sie in diesem [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Ein Projekt erstellen

:::info
Bevor Sie mit einem neuen Projekt beginnen, stellen Sie sicher, dass Sie [**Angular CLI**](https://angular.io/cli) und [**Node.js**](https://nodejs.org/en/) installiert haben.
:::

Um ein neues Projekt mit dem Namen **my-angular-kanban-app** mit Angular CLI zu erstellen, führen Sie einfach Folgendes aus:

~~~json
ng new my-angular-kanban-app
~~~

:::note
Wenn Sie dieser Anleitung folgen, denken Sie daran, Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering) bei der Erstellung Ihrer Angular-App zu deaktivieren!
:::

Dieser Befehl richtet alles Nötige ein, weitere Befehle sind nicht erforderlich.

### Installation der Abhängigkeiten

Wechseln Sie in das Verzeichnis Ihrer neuen App:

~~~json
cd my-angular-kanban-app
~~~

Installieren Sie anschließend die Abhängigkeiten und starten Sie den Entwicklungsserver. Hier ein Beispiel mit [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Ihre App sollte nun lokal laufen (zum Beispiel unter `http://localhost:3000`).

## Kanban erstellen

Nun sollten Sie den Quellcode von DHTMLX Kanban besorgen. Stoppen Sie zunächst Ihre App und installieren Sie das Kanban-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Trial Kanban Package**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Schritten in der README. Beachten Sie, dass die Testversion 30 Tage lang nutzbar ist.

### Schritt 2. Komponente erstellen

Erstellen Sie als Nächstes eine Angular-Komponente, um Kanban mit einer Toolbar zu Ihrer App hinzuzufügen. Legen Sie einen **kanban**-Ordner unter **src/app/** an und fügen Sie eine neue Datei namens **kanban.component.ts** hinzu.

#### Quell-Dateien importieren

Öffnen Sie **kanban.component.ts** und importieren Sie die Kanban-Quell-Dateien. Die Importpfade sehen wie folgt aus:

- Für die PRO-Version, installiert aus einem lokalen Ordner:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- Für die Testversion:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

Die Beispiele hier verwenden die **Testversion**.

#### Container setzen und Kanban mit Toolbar initialisieren

Um Kanban mit einer Toolbar anzuzeigen, richten Sie Container für beide ein und initialisieren Sie die Komponenten mit deren Konstruktoren:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // ein Template-Name, der in "app.component.ts" als <kanban /> verwendet wird
    styleUrls: ["./kanban.component.css"], // CSS-Datei einbinden
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    // Container für Toolbar initialisieren
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // Container für Kanban initialisieren
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // Kanban-Komponente initialisieren
        this._kanban = new Kanban(this.kanban_container.nativeElement, {});

        // Toolbar-Komponente initialisieren
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // weitere Konfigurationseigenschaften
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); // Kanban zerstören
        this._toolbar.destructor(); // Toolbar zerstören
    }
}
~~~

#### Styles hinzufügen

Damit Kanban korrekt angezeigt wird, fügen Sie die notwendigen Styles hinzu. Erstellen Sie dazu eine **kanban.component.css**-Datei in **src/app/kanban/** und fügen Sie folgende Styles ein:

~~~css title="kanban.component.css"
/* Kanban-Styles importieren */
@import "@dhx/trial-kanban/dist/kanban.css";

/* Styles für die Startseite */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für Kanban- und Toolbar-Container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Styles für Kanban-Container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Daten in Kanban zu laden, erstellen Sie ein Datenset. Sie können eine **data.ts**-Datei unter **src/app/kanban/** anlegen und dort Ihre Daten hinzufügen:

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

Öffnen Sie nun ***kanban.component.ts***. Importieren Sie Ihre Datendatei und übergeben Sie die Daten-Properties in der Kanban-Konfiguration innerhalb der `ngOnInit()`-Methode wie folgt:

~~~jsx {2,23,25-27} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // Daten importieren
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
        const { cards, columns, rows } = getData(); // Daten initialisieren
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns, // Spaltendaten anwenden
            cards, // Kartendaten anwenden
            rows, // Zeilendaten anwenden
            rowKey: "type",
            // weitere Konfigurationseigenschaften
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // weitere Konfigurationseigenschaften
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

Eine weitere Möglichkeit, Daten in Kanban zu laden, ist die Verwendung der [`parse()`](/api/methods/js_kanban_parse_method/) Methode innerhalb der `ngOnInit()`-Methode.

~~~jsx {2,23,37-42} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // Daten importieren
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
        const { cards, columns, rows } = getData(); // Daten initialisieren
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // weitere Konfigurationseigenschaften
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // weitere Konfigurationseigenschaften
        });

        // Daten mit parse()-Methode anwenden
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

Mit `parse(data)` können Sie die Daten jederzeit neu laden.

Damit ist die Kanban-Komponente einsatzbereit. Sobald Sie das Element zur Seite hinzufügen, wird Kanban mit dem Datenset initialisiert. Sie können auch alle gewünschten Konfigurationseinstellungen anpassen. In den [Kanban API-Dokumenten](/api/overview/properties_overview/) finden Sie eine vollständige Liste der verfügbaren Eigenschaften.

#### Events behandeln

Jedes Mal, wenn jemand mit Kanban interagiert, wird ein Event ausgelöst. Sie können diese Events nutzen, um Aktionen nachzuverfolgen und eigenen Code auszuführen. Sehen Sie sich die [vollständige Eventliste](/api/overview/events_overview/) an.

Öffnen Sie **kanban.component.ts** und aktualisieren Sie die `ngOnInit()`-Methode wie folgt:

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

### Schritt 3. Kanban zur App hinzufügen

Um die ***KanbanComponent*** in Ihrer App zu verwenden, öffnen Sie ***src/app/app.component.ts*** und tauschen Sie den Standard-Code gegen Folgendes aus:

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

Erstellen Sie anschließend ***app.module.ts*** in ***src/app/*** und deklarieren Sie *KanbanComponent* wie folgt:

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

Öffnen Sie zuletzt ***src/main.ts*** und verwenden Sie diesen Code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Nun können Sie Ihre App starten und sehen, dass Kanban mit Daten auf der Seite geladen wird.

![Kanban initialization](/assets/trial_kanban.png)

Das ist das grundlegende Setup für die Integration von DHTMLX Kanban mit Angular. Der Code kann an Ihre Anforderungen angepasst werden. Für ein weiterführendes Beispiel schauen Sie auf [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo) vorbei.
