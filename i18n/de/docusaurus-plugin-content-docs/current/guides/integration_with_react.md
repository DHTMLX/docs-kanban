---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation zur DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit React. Durchstöbern Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit React

:::tip
Es ist hilfreich, die Grundlagen von [**React**](https://react.dev) zu kennen, bevor Sie mit dieser Dokumentation beginnen. Falls Sie Ihr Wissen zu React auffrischen möchten, schauen Sie in die [**React-Dokumentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Kanban funktioniert gut mit **React**. Es gibt Codebeispiele, die zeigen, wie Sie DHTMLX Kanban in React-Projekten verwenden können. Für weitere Details werfen Sie einen Blick auf das [**Beispiel auf GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Projekt erstellen

:::info
Bevor Sie ein neues Projekt starten, stellen Sie sicher, dass [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/) installiert sind.
:::

Sie können mit einem Standard-**React**-Projekt starten oder eines mit **React und Vite** einrichten. Für diese Anleitung heißt das Projekt **my-react-kanban-app**:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Installation der Abhängigkeiten

Wechseln Sie in das Verzeichnis der App:

~~~json
cd my-react-kanban-app
~~~

Fügen Sie die Abhängigkeiten hinzu und starten Sie den Entwicklungsserver. Sie können Ihren bevorzugten Paketmanager verwenden:

- Mit [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- Mit [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Die App ist dann lokal verfügbar, üblicherweise unter `http://localhost:3000`.

## Kanban erstellen

Als nächstes benötigen Sie den Quellcode von DHTMLX Kanban. Stoppen Sie zunächst die App und installieren Sie das Kanban-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Test-Kanban-Paket**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Anweisungen in der README-Datei. Beachten Sie, dass die Testversion für 30 Tage gültig ist.

### Schritt 2. Komponentenerstellung

Erstellen Sie eine neue React-Komponente, um das Kanban-Board in Ihrer App hinzuzufügen. Legen Sie eine Datei namens ***Kanban.jsx*** im Verzeichnis ***src/*** an.

#### Importieren der Quelldateien

Öffnen Sie ***Kanban.jsx*** und importieren Sie die Kanban-Quelldateien. Beachten Sie dabei Folgendes:

- Für die lokal installierte PRO-Version importieren Sie wie folgt:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Je nach Paket kann die CSS-Datei minifiziert sein. In diesem Fall verwenden Sie ***kanban.min.css***.

- Für die Testversion nutzen Sie diese Importpfade:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

Diese Anleitung zeigt die Arbeit mit der **Testversion**.

#### Container setzen und Kanban mit Toolbar hinzufügen

Um Kanban zusammen mit der Toolbar auf Ihrer Seite anzuzeigen, richten Sie Container für beide ein und initialisieren Sie sie mit ihren jeweiligen Konstruktoren:

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // Kanban-Stile einbinden

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // Container für Toolbar initialisieren
    let kanban_container = useRef(); // Container für Kanban initialisieren

    useEffect(() => {
        // Kanban-Komponente initialisieren
        const kanban = new Kanban(kanban_container.current, {});

        // Toolbar-Komponente initialisieren
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // Kanban-interne API übergeben
            // weitere Konfigurationseigenschaften
        });

        return () => {
            kanban.destructor(); // Kanban zerstören
            toolbar.destructor(); // Toolbar zerstören
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### Stile hinzufügen

Damit Kanban korrekt angezeigt wird, fügen Sie diese grundlegenden Stile in Ihre Haupt-CSS-Datei ein:

~~~css title="index.css"
/* Stile für die Ausgangsseite */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Stile für Kanban- und Toolbar-Container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Stile für Kanban-Container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Daten im Kanban anzuzeigen, benötigen Sie einen Datensatz. Erstellen Sie eine neue Datei namens ***data.js*** im Verzeichnis ***src/*** und fügen Sie beispielsweise folgendes hinzu:

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

Nun importieren Sie in ***App.js*** die Daten und übergeben sie als **props** an Ihre `<Kanban/>`-Komponente:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Verwenden Sie in ***Kanban.jsx*** die Props, um Kanban zu konfigurieren:

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // Spalten-Daten anwenden
            cards: props.cards, // Karten-Daten anwenden
            rows: props.rows, // Zeilen-Daten anwenden
            rowKey: "type",
            // weitere Konfigurationseigenschaften
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // weitere Konfigurationseigenschaften
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

Falls Sie Daten mithilfe der [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb von `useEffect()` laden möchten, können Sie das wie folgt machen:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns; // Daten für Spalten
    let cards = props.cards; // Daten für Karten
    let rows = props.rows; // Daten für Zeilen

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // weitere Konfigurationseigenschaften
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // weitere Konfigurationseigenschaften
        });
    
        kanban.parse({ columns, cards, rows });

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

Mit `parse(data)` können Sie Kanban-Daten neu laden, wann immer sich etwas ändert.

Zu diesem Zeitpunkt ist die Kanban-Komponente eingerichtet. Beim Rendern wird sie mit Ihren Daten initialisiert und Sie können die Konfiguration nach Bedarf erweitern. Weitere Einstellungen finden Sie in den [Kanban API-Dokumenten](/api/overview/properties_overview/).

#### Ereignisse behandeln

Wenn Nutzer mit Kanban interagieren, werden verschiedene Ereignisse ausgelöst. Diese Events helfen Ihnen, auf Nutzeraktionen zu reagieren und eigenen Code auszuführen. Die [vollständige Liste aller Events](/api/overview/events_overview/) finden Sie in der Dokumentation.

So richten Sie einen einfachen Event-Handler in ***Kanban.jsx*** ein:

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

Starten Sie nun einfach die App und Sie sehen das Kanban-Board mit Ihren Daten.

![Kanban-Initialisierung](/assets/trial_kanban.png)

Mit dieser Einrichtung läuft DHTMLX Kanban in React. Sie können den Code nach Bedarf für Ihren Anwendungsfall anpassen. Ein fortgeschritteneres Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/react-kanban-demo).
