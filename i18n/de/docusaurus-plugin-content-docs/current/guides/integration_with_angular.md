---
sidebar_label: Integration mit Angular
title: Integration mit Angular
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit Angular. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Angular

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Angular** vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, besuchen Sie bitte die [**Angular-Dokumentation**](https://v17.angular.io/docs).
:::

DHTMLX Kanban ist mit **Angular** kompatibel. Wir haben Codebeispiele vorbereitet, wie Sie DHTMLX Kanban mit **Angular** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Erstellen eines Projekts

:::info
Bevor Sie beginnen, ein neues Projekt zu erstellen, installieren Sie [**Angular CLI**](https://v17.angular.io/cli) und [**Node.js**](https://nodejs.org/en/).
:::

Erstellen Sie ein neues **my-angular-kanban-app**-Projekt mit Angular CLI. Führen Sie dazu folgenden Befehl aus:

~~~json
ng new my-angular-kanban-app
~~~

:::note
Wenn Sie dieser Anleitung folgen möchten, deaktivieren Sie bei der Erstellung der neuen Angular-App Server-Side Rendering (SSR) und Static Site Generation (SSG/Prerendering)!
:::

Der obige Befehl installiert alle notwendigen Tools, sodass keine weiteren Befehle ausgeführt werden müssen.

### Installation von Abhängigkeiten

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-angular-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver. Verwenden Sie dafür den [**yarn**](https://yarnpkg.com/) Paketmanager:

~~~json
yarn
yarn start
~~~

Die App sollte nun auf dem lokalen Rechner laufen (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Nun sollten Sie den Quellcode von DHTMLX Kanban beziehen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des Kanban-Pakets fort.

### Schritt 1. Paketinstallation

Laden Sie das [**Trial-Kanban-Paket**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Schritten in der README-Datei. Beachten Sie, dass das Trial-Kanban nur 30 Tage verfügbar ist.
  
### Schritt 2. Komponentenerstellung

Nun müssen Sie eine Angular-Komponente erstellen, um Kanban mit Toolbar zur Anwendung hinzuzufügen. Erstellen Sie den **kanban**-Ordner im Verzeichnis **src/app/** und fügen Sie eine neue Datei mit dem Namen **kanban.component.ts** hinzu.

#### Quelldateien importieren

Öffnen Sie die Datei **kanban.component.ts** und importieren Sie die Kanban-Quelldateien. Beachten Sie dabei:

- Wenn Sie die PRO-Version verwenden und das Kanban-Paket aus einem lokalen Ordner installieren, sieht der Importpfad so aus:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- Wenn Sie die Trial-Version von Kanban verwenden, geben Sie folgenden Pfad an:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

In diesem Tutorial wird gezeigt, wie Sie die **Trial**-Version von Kanban konfigurieren.

#### Container setzen und Kanban mit Toolbar initialisieren

Um Kanban mit Toolbar auf der Seite anzuzeigen, müssen Sie Container für Kanban und Toolbar festlegen und diese Komponenten mit den entsprechenden Konstruktoren initialisieren:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // ein Template-Name, der in der Datei "app.component.ts" als <kanban /> verwendet wird
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

Um Kanban korrekt anzuzeigen, müssen die entsprechenden Styles bereitgestellt werden. Erstellen Sie dazu die Datei **kanban.component.css** im Verzeichnis **src/app/kanban/** und geben Sie wichtige Styles für Kanban und seinen Container an:

~~~css title="kanban.component.css"
/* Kanban-Styles importieren */
@import "@dhx/trial-kanban/dist/kanban.css";

/* Styles für die Startseite festlegen */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Styles für Kanban- und Toolbar-Container festlegen */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Styles für Kanban-Container festlegen */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Daten in Kanban hinzuzufügen, müssen Sie einen Datensatz bereitstellen. Sie können die Datei **data.ts** im Verzeichnis **src/app/kanban/** erstellen und einige Daten darin hinzufügen:

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

Öffnen Sie dann die Datei ***kanban.component.ts***. Importieren Sie die Datei mit den Daten und geben Sie die entsprechenden Daten-Eigenschaften im Konfigurationsobjekt von Kanban innerhalb der Methode `ngOnInit()` an, wie unten gezeigt:

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

Sie können auch die [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb der `ngOnInit()`-Methode von Angular verwenden, um Daten in Kanban zu laden.

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

        // Daten über die parse()-Methode anwenden
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

Die Methode `parse(data)` ermöglicht das erneute Laden der Daten bei jeder Änderung.

Jetzt ist die Kanban-Komponente einsatzbereit. Wenn das Element zur Seite hinzugefügt wird, wird Kanban mit den Daten initialisiert. Sie können auch die erforderlichen Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [Kanban API-Dokumentation](/api/overview/properties_overview/), um die vollständige Liste der verfügbaren Eigenschaften einzusehen.

#### Ereignisse behandeln

Wenn ein Benutzer eine Aktion im Kanban ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse verwenden, um die Aktion zu erkennen und den gewünschten Code auszuführen. Siehe die [vollständige Liste der Ereignisse](/api/overview/events_overview/).

Öffnen Sie die Datei **kanban.component.ts** und ergänzen Sie die Methode `ngOnInit()` wie folgt:

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

Um die ***KanbanComponent***-Komponente zu Ihrer App hinzuzufügen, öffnen Sie die Datei ***src/app/app.component.ts*** und ersetzen Sie den Standardcode durch folgenden:

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

Erstellen Sie dann die Datei ***app.module.ts*** im Verzeichnis ***src/app/*** und geben Sie die *KanbanComponent* wie folgt an:

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

Der letzte Schritt ist, die Datei ***src/main.ts*** zu öffnen und den bestehenden Code durch den folgenden zu ersetzen:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Danach können Sie die App starten, um Kanban mit Daten auf einer Seite zu sehen.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban mit Angular"
    className="img_border"
/>

Jetzt wissen Sie, wie Sie DHTMLX Kanban mit Angular integrieren. Sie können den Code entsprechend Ihren spezifischen Anforderungen anpassen. Das finale erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).