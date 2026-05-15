---
sidebar_label: Integration mit React
title: Integration mit React
description: Erfahren Sie in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die Integration mit React. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Integration mit React

:::tip
Dieser Leitfaden setzt Kenntnisse der grundlegenden Konzepte und Muster von [React](https://react.dev) voraus. Zur Auffrischung lesen Sie bitte die [React Dokumentation](https://react.dev/learn).
:::

DHTMLX Kanban ist mit React kompatibel. Das vollständige Codebeispiel ist auf [GitHub](https://github.com/DHTMLX/react-kanban-demo) verfügbar.

## Ein Projekt erstellen

:::info
Installieren Sie vor dem Erstellen eines neuen Projekts [Vite](https://vite.dev/) (optional) und [Node.js](https://nodejs.org/en/).
:::

Erstellen Sie ein Standard-React-Projekt (oder React mit Vite). Nennen Sie das Projekt *my-react-kanban-app*:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Abhängigkeiten installieren

Wechseln Sie in das neu erstellte App-Verzeichnis:

~~~json
cd my-react-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Entwicklungsserver mit einem der folgenden Paketmanager:

- Für [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- Für [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Die App läuft unter einer lokalen Adresse (z.B. `http://localhost:3000`).

## Kanban erstellen

Beenden Sie den Entwicklungsserver und installieren Sie das Kanban-Paket.

### Schritt 1. Paket installieren

Laden Sie das [Trial-Kanban-Paket](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und befolgen Sie die Schritte in der README-Datei. Die Testversion ist 30 Tage verfügbar.

### Schritt 2. Komponente erstellen

Erstellen Sie eine React-Komponente, die Kanban zur Anwendung hinzufügt. Legen Sie eine neue Datei im Verzeichnis *src/* an und nennen Sie sie *Kanban.jsx*.

#### Quelldateien importieren

Öffnen Sie *Kanban.jsx* und importieren Sie die Kanban-Quelldateien. Die Importpfade hängen von der Paketversion ab:

- Für die PRO-Version, die aus einem lokalen Ordner installiert wurde:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Wenn das Paket minifizierte Quelldateien enthält, importieren Sie die CSS-Datei als *kanban.min.css*.

- Für die Testversion:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

Dieses Tutorial verwendet die Testversion von Kanban.

#### Container einrichten und Kanban initialisieren

Um Kanban mit der Toolbar anzuzeigen, erstellen Sie zwei Container und rufen Sie die Konstruktoren auf. Der folgende Code-Ausschnitt verbindet Refs und instanziiert die Komponenten innerhalb von `useEffect()`:

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

Fügen Sie die Stile für Kanban und den Container in der Haupt-CSS-Datei hinzu:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for Kanban and Toolbar container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* specify styles for Kanban container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Daten laden

Um Kanban mit Daten zu befüllen, stellen Sie einen Datensatz bereit. Erstellen Sie die Datei *data.js* im Verzeichnis *src/*:

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

Öffnen Sie *App.js*, importieren Sie den Datensatz und übergeben Sie die Werte per props an die neue `<Kanban/>`-Komponente:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Öffnen Sie *Kanban.jsx* und wenden Sie die props auf das Kanban-Konfigurationsobjekt an:

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

Alternativ können Sie Daten nach dem Erstellen der Instanz mit [`setConfig()`](/api/methods/js_kanban_setconfig_method/) oder [`parse()`](/api/methods/js_kanban_parse_method/) innerhalb von `useEffect()` laden:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns;
    let cards = props.cards;
    let rows = props.rows;

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
    
        kanban.setConfig({ columns, cards, rows });
        // oder kanban.parse({ columns, cards, rows });

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

Die Kanban-Komponente ist nun einsatzbereit. Wenn das Element gerendert wird, initialisiert sich Kanban mit den Daten. Die vollständige Liste der unterstützten Konfigurationseigenschaften finden Sie in der [Kanban API-Referenz](/api/overview/properties_overview/).

#### Ereignisse behandeln

Benutzeraktionen in Kanban lösen Ereignisse aus. Lauschen Sie auf Ereignisse, um auf bestimmte Aktionen zu reagieren. Die vollständige Liste finden Sie in der [Kanban Ereignisreferenz](/api/overview/events_overview/).

Öffnen Sie *Kanban.jsx* und erweitern Sie den `useEffect()`-Aufruf:

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

Starten Sie die App, um das befüllte Kanban-Board auf der Seite anzuzeigen.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban mit React"
  className="img_border"
/>

Das vollständige Projekt finden Sie auf [GitHub](https://github.com/DHTMLX/react-kanban-demo).
