---
sidebar_label: Integration mit React
title: Integration mit React
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit React. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Integration mit React

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von [**React**](https://react.dev) vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, besuchen Sie bitte die [**React Dokumentation**](https://react.dev/learn).
:::

DHTMLX Kanban ist mit **React** kompatibel. Wir haben Codebeispiele vorbereitet, wie Sie DHTMLX Kanban mit **React** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Erstellen eines Projekts

:::info
Bevor Sie mit der Erstellung eines neuen Projekts beginnen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Sie können ein grundlegendes **React**-Projekt erstellen oder **React mit Vite** verwenden. Nennen wir das Projekt **my-react-kanban-app**:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Installation der Abhängigkeiten

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-react-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver. Verwenden Sie dazu einen Paketmanager:

- Wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie folgende Befehle aus:

~~~json
yarn
yarn start
~~~

- Wenn Sie [**npm**](https://www.npmjs.com/) verwenden, führen Sie folgende Befehle aus:

~~~json
npm install
npm run dev
~~~

Die App sollte nun auf einem lokalen Server laufen (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Nun sollten Sie den Quellcode von DHTMLX Kanban beziehen. Beenden Sie zunächst die App und installieren Sie das Kanban-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Test-Kanban-Paket**](/how_to_start/#installing-kanban-via-npm-or-yarn) herunter und befolgen Sie die Schritte in der README-Datei. Beachten Sie, dass die Testversion von Kanban nur 30 Tage verfügbar ist.

### Schritt 2. Komponentenerstellung

Jetzt müssen Sie eine React-Komponente erstellen, um ein Kanban zum Projekt hinzuzufügen. Erstellen Sie eine neue Datei im Verzeichnis ***src/*** und nennen Sie sie ***Kanban.jsx***.

#### Importieren der Quelldateien

Öffnen Sie die Datei ***Kanban.jsx*** und importieren Sie die Kanban-Quelldateien. Beachten Sie dabei:

- Wenn Sie die PRO-Version verwenden und das Kanban-Paket aus einem lokalen Ordner installieren, sehen die Importpfade so aus:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Beachten Sie, dass je nach verwendetem Paket die Quelldateien minifiziert sein können. In diesem Fall stellen Sie sicher, dass Sie die CSS-Datei als ***kanban.min.css*** importieren.

- Wenn Sie die Testversion von Kanban verwenden, geben Sie folgende Pfade an:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

In diesem Tutorial sehen Sie, wie Sie die **Testversion** von Kanban konfigurieren.

#### Container setzen und Kanban mit Toolbar hinzufügen

Um Kanban mit Toolbar auf der Seite anzuzeigen, müssen Sie Container für Kanban und Toolbar anlegen und diese Komponenten mit den entsprechenden Konstruktoren initialisieren:

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
            api: kanban.api, // Kanban-internes API bereitstellen
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

Damit Kanban korrekt angezeigt wird, müssen Sie wichtige Stile für Kanban und seinen Container in der Haupt-CSS-Datei des Projekts festlegen:

~~~css title="index.css"
/* Stile für die Startseite festlegen */
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

Um Daten in das Kanban zu laden, müssen Sie einen Datensatz bereitstellen. Sie können die Datei ***data.js*** im Verzeichnis ***src/*** anlegen und dort einige Daten hinzufügen:

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

Öffnen Sie dann die Datei ***App.js*** und importieren Sie die Daten. Danach können Sie die Daten per **props** an die neu erstellte `<Kanban/>`-Komponente übergeben:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Öffnen Sie die Datei ***Kanban.jsx*** und wenden Sie die übergebenen **props** auf das Kanban-Konfigurationsobjekt an:

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

Sie können auch die [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb der `useEffect()`-Methode von React verwenden, um Daten in Kanban zu laden:

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

Die Methode `parse(data)` ermöglicht das Neuladen der Daten bei jeder Änderung.

Nun ist die Kanban-Komponente einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, wird Kanban mit Daten initialisiert. Sie können auch weitere Konfigurationseinstellungen vornehmen. Besuchen Sie unsere [Kanban API-Dokumentation](/api/overview/properties_overview/), um die vollständige Liste der verfügbaren Eigenschaften zu sehen.

#### Ereignisse behandeln

Wenn ein Benutzer eine Aktion im Kanban ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code auszuführen. Sehen Sie sich die [vollständige Liste der Ereignisse](/api/overview/events_overview/) an.

Öffnen Sie ***Kanban.jsx*** und ergänzen Sie die `useEffect()`-Methode wie folgt:

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

Danach können Sie die App starten, um Kanban mit Daten auf einer Seite zu sehen.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban mit React"
    className="img_border"
/>

Jetzt wissen Sie, wie Sie DHTMLX Kanban mit React integrieren können. Sie können den Code nach Ihren spezifischen Anforderungen anpassen. Das endgültige, erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/react-kanban-demo).