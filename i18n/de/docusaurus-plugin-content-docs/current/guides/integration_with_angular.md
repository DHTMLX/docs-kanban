---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: Erfahren Sie in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die Integration mit Angular. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Angular

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Angular** vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, besuchen Sie bitte die [**Angular-Dokumentation**](https://v17.angular.io/docs).
:::

DHTMLX Kanban ist mit **Angular** kompatibel. Wir haben Codebeispiele vorbereitet, wie Sie DHTMLX Kanban mit **Angular** verwenden können. Siehe auch das zugehörige [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Projekt erstellen

:::info
Bevor Sie beginnen, ein neues Projekt zu erstellen, installieren Sie [**Angular CLI**](https://v17.angular.io/cli) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie mit Angular CLI ein neues Projekt **my-angular-kanban-app**. Führen Sie diesen Befehl aus:

~~~json
ng new my-angular-kanban-app
~~~

:::note
Wenn Sie dieser Anleitung folgen möchten, deaktivieren Sie bei der Erstellung der neuen Angular-App Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering)!
:::

Der Befehl installiert alle notwendigen Tools, sodass keine weiteren Schritte erforderlich sind.

### Abhängigkeiten installieren

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-angular-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver. Verwenden Sie den [**yarn**](https://yarnpkg.com/) Paketmanager:

~~~json
yarn
yarn start
~~~

Die App sollte nun lokal laufen (zum Beispiel unter `http://localhost:3000`).

## Kanban erstellen

Jetzt benötigen Sie die Quellcodes von DHTMLX Kanban. Stoppen Sie zunächst die App und fahren Sie mit der Installation des Kanban-Pakets fort.

### Schritt 1. Paket installieren

Laden Sie das [**Trial-Kanban-Paket**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Schritten in der README-Datei. Bitte beachten Sie, dass das Trial-Kanban nur 30 Tage verfügbar ist.
  
### Schritt 2. Komponente erstellen

Erstellen Sie eine Angular-Komponente, um Kanban und Toolbar zur Anwendung hinzuzufügen. Erstellen Sie dazu den Ordner **kanban** im Verzeichnis **src/app/** und fügen Sie darin eine neue Datei **kanban.component.ts** hinzu.

#### Quellcodedateien importieren

Öffnen Sie **kanban.component.ts** und importieren Sie die Kanban-Quelldateien. Beachten Sie:

- Wenn Sie die PRO-Version verwenden und das Kanban-Paket lokal installiert haben, sieht der Importpfad so aus:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- Wenn Sie die Trial-Version von Kanban verwenden, nutzen Sie diesen Pfad:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

In diesem Tutorial wird die **Trial**-Version von Kanban verwendet.

#### Container festlegen und Kanban mit Toolbar initialisieren

Um Kanban mit Toolbar auf der Seite einzufügen, müssen Sie Container für Kanban und Toolbar festlegen und diese Komponenten mit den jeweiligen Konstruktoren initialisieren:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // ein Template-Name, der in "app.component.ts" als <kanban /> verwendet wird
    styleUrls: ["./kanban.component.css"], // CSS einbinden
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

Um Kanban korrekt darzustellen, müssen Sie die entsprechenden Styles bereitstellen. Erstellen Sie die Datei **kanban.component.css** im Verzeichnis **src/app/kanban/** und fügen Sie die nötigen Styles für Kanban und den Container ein:

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

Um Daten in Kanban zu laden, müssen Sie einen Datensatz bereitstellen. Erstellen Sie die Datei **data.ts** im Verzeichnis **src/app/kanban/** und fügen Sie einige Daten hinzu:

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

Öffnen Sie dann die Datei ***kanban.component.ts***. Importieren Sie die Datei mit den Daten und fügen Sie die entsprechenden Daten-Eigenschaften im Konfigurationsobjekt von Kanban in der Methode `ngOnInit()` wie unten gezeigt hinzu:

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

Sie können auch die [`setConfig()`](/api/methods/js_kanban_setconfig_method/) oder [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb der `ngOnInit()`-Methode von Angular verwenden, um Daten in Kanban zu laden. Die Methode `setConfig` oder `parse()` ermöglicht das erneute Laden der Daten bei jeder Änderung.

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

        // Daten über die setConfig()- oder parse()-Methode anwenden
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

Jetzt ist die Kanban-Komponente einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, wird Kanban mit Daten initialisiert. Sie können zudem die nötigen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [Kanban API-Dokumentation](/api/overview/properties_overview/), um die vollständige Liste der verfügbaren Eigenschaften zu sehen.

#### Ereignisse behandeln

Wenn ein Benutzer eine Aktion in Kanban ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und eigenen Code auszuführen. Die [vollständige Liste der Ereignisse](/api/overview/events_overview/) ist verfügbar.

Öffnen Sie **kanban.component.ts** und erweitern Sie die Methode `ngOnInit()` beispielsweise so:

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

Um die ***KanbanComponent***-Komponente zu Ihrer App hinzuzufügen, öffnen Sie ***src/app/app.component.ts*** und ersetzen Sie den Standardcode durch:

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

Erstellen Sie im Verzeichnis ***src/app/*** die Datei ***app.module.ts*** und deklarieren Sie die *KanbanComponent* wie folgt:

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

Öffnen Sie abschließend ***src/main.ts*** und ersetzen Sie den Inhalt durch:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Danach können Sie die App starten und Kanban mit Daten auf einer Seite sehen.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban mit Angular"
    className="img_border"
/>

Jetzt wissen Sie, wie Sie DHTMLX Kanban mit Angular integrieren. Sie können den Code für Ihre Anforderungen anpassen. Das vollständige, erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).
