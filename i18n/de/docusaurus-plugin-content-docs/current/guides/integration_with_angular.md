---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: Erfahren Sie in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die Integration mit Angular. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Angular

:::tip
Dieser Leitfaden setzt Kenntnisse der Angular-Konzepte und -Muster voraus. Als Hintergrund empfiehlt sich die [Angular-Dokumentation](https://v17.angular.io/docs).
:::

DHTMLX Kanban ist mit Angular kompatibel. Das vollständige Codebeispiel ist auf [GitHub](https://github.com/DHTMLX/angular-kanban-demo) verfügbar.

## Projekt erstellen

:::info
Installieren Sie [Angular CLI](https://v17.angular.io/cli) und [Node.js](https://nodejs.org/en/), bevor Sie das Projekt anlegen.
:::

Der folgende Befehl erstellt ein neues Projekt *my-angular-kanban-app* mit Angular CLI:

~~~json
ng new my-angular-kanban-app
~~~

:::note
Deaktivieren Sie Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering) auf Nachfrage, damit das Projekt mit dieser Anleitung übereinstimmt.
:::

Der Befehl installiert alle notwendigen Tools. Weitere Schritte sind nicht erforderlich.

### Abhängigkeiten installieren

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-angular-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit dem [yarn](https://yarnpkg.com/) Paketmanager:

~~~json
yarn
yarn start
~~~

Die App läuft unter einer lokalen Adresse (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Stoppen Sie den Entwicklungsserver und installieren Sie das Kanban-Paket.

### Schritt 1. Paket installieren

Laden Sie das [Trial-Kanban-Paket](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Schritten in der README-Datei. Die Trial-Version ist 30 Tage verfügbar.

### Schritt 2. Komponente erstellen

Erstellen Sie eine Angular-Komponente, die Kanban und die Toolbar einbindet. Erstellen Sie den Ordner *src/app/kanban/* und fügen Sie darin eine Datei *kanban.component.ts* hinzu.

#### Quellcodedateien importieren

Öffnen Sie *kanban.component.ts* und importieren Sie die Kanban-Quelldateien. Der Importpfad hängt von der Paketversion ab:

- Für die PRO-Version, die aus einem lokalen Ordner installiert wird:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- Für die Trial-Version:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

Dieses Tutorial verwendet die Trial-Version von Kanban.

#### Container einrichten und Kanban initialisieren

Um Kanban mit der Toolbar anzuzeigen, richten Sie zwei Container ein und rufen Sie die Konstruktoren auf. Der folgende Code definiert das Komponenten-Template, referenziert die Container und erstellt die Instanzen:

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

Fügen Sie Styles für Kanban und den Container hinzu. Erstellen Sie die Datei *kanban.component.css* im Verzeichnis *src/app/kanban/*:

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

Um Kanban mit Daten zu befüllen, stellen Sie einen Datensatz bereit. Erstellen Sie die Datei *data.ts* im Verzeichnis *src/app/kanban/*:

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

Öffnen Sie *kanban.component.ts*, importieren Sie den Datensatz und übergeben Sie die Dateneigenschaften an das Kanban-Konfigurationsobjekt innerhalb von `ngOnInit()`:

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

Alternativ können Sie die Daten nach der Instanzerstellung mit [`setConfig()`](/api/methods/js_kanban_setconfig_method/) oder [`parse()`](/api/methods/js_kanban_parse_method/) innerhalb von `ngOnInit()` laden:

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

Die Kanban-Komponente ist jetzt einsatzbereit. Wenn das Element gerendert wird, initialisiert sich Kanban mit den Daten. Die vollständige Liste der unterstützten Konfigurationseigenschaften finden Sie in der [Kanban API-Referenz](/api/overview/properties_overview/).

#### Ereignisse behandeln

Benutzeraktionen in Kanban lösen Ereignisse aus. Verwenden Sie Event-Listener, um auf bestimmte Aktionen zu reagieren. Die vollständige Liste finden Sie in der [Kanban-Ereignisreferenz](/api/overview/events_overview/).

Öffnen Sie *kanban.component.ts* und erweitern Sie die Methode `ngOnInit()`:

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

Um die `KanbanComponent` in der App zu registrieren, öffnen Sie *src/app/app.component.ts* und ersetzen Sie den Standardcode:

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

Erstellen Sie *app.module.ts* im Verzeichnis *src/app/* und deklarieren Sie die `KanbanComponent`:

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

Öffnen Sie *src/main.ts* und ersetzen Sie den vorhandenen Code:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Starten Sie die App, um das befüllte Kanban-Board auf der Seite anzuzeigen.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban mit Angular"
  className="img_border"
/>

Das vollständige Projekt finden Sie auf [GitHub](https://github.com/DHTMLX/angular-kanban-demo).
