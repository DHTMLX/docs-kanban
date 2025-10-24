---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit Svelte. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Svelte

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von **Svelte** vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, besuchen Sie bitte die [**Svelte documentation**](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban ist mit **Svelte** kompatibel. Wir haben Codebeispiele vorbereitet, wie Sie DHTMLX Kanban mit **Svelte** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Ein Projekt erstellen

:::info
Bevor Sie mit der Erstellung eines neuen Projekts beginnen, installieren Sie [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/).
:::

Es gibt mehrere Möglichkeiten, ein **Svelte**-Projekt zu erstellen:

- Sie können [**SvelteKit**](https://kit.svelte.dev/) verwenden

oder

- Sie können auch **Svelte mit Vite** (aber ohne SvelteKit) nutzen:

~~~json
npm create vite@latest
~~~

Weitere Details finden Sie im [related article](https://svelte.dev/docs/svelte/overview).

### Installation der Abhängigkeiten

Nennen wir das Projekt **my-svelte-kanban-app** und wechseln Sie in das App-Verzeichnis:

~~~json
cd my-svelte-kanban-app
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

Die App sollte nun auf localhost laufen (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Jetzt sollten Sie den DHTMLX Kanban-Quellcode besorgen. Stoppen Sie zunächst die App und fahren Sie mit der Installation des Kanban-Pakets fort.

### Schritt 1. Paketinstallation

Laden Sie das [**trial Kanban package**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den im README aufgeführten Schritten. Beachten Sie, dass die Testversion von Kanban nur 30 Tage verfügbar ist.

### Schritt 2. Komponentenerstellung

Nun müssen Sie eine Svelte-Komponente erstellen, um ein Kanban mit Toolbar zur Anwendung hinzuzufügen. Erstellen Sie eine neue Datei im ***src/***-Verzeichnis und nennen Sie sie ***Kanban.svelte***.

#### Importieren der Quelldateien

Öffnen Sie die ***Kanban.svelte***-Datei und importieren Sie die Kanban-Quelldateien. Beachten Sie dabei:

- Wenn Sie die PRO-Version verwenden und das Kanban-Paket aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Beachten Sie, dass die Quelldateien, abhängig vom verwendeten Paket, minifiziert sein können. Stellen Sie in diesem Fall sicher, dass Sie die CSS-Datei als **kanban.min.css** importieren.

- Wenn Sie die Testversion von Kanban nutzen, geben Sie folgende Pfade an:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

In diesem Tutorial sehen Sie, wie Sie die **trial**-Version von Kanban konfigurieren.

#### Container setzen und Kanban mit Toolbar hinzufügen

Um Kanban mit Toolbar auf der Seite anzuzeigen, müssen Sie Container für Kanban und Toolbar erstellen und diese Komponenten mit den entsprechenden Konstruktoren initialisieren:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // Container für Kanban und Toolbar initialisieren
let kanban, toolbar;

onMount(() => {
    // Kanban-Komponente initialisieren
    kanban = new Kanban(kanban_container, {})

    // Toolbar-Komponente initialisieren
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // interne Kanban-API bereitstellen
        // weitere Konfigurationseigenschaften
    })
});

onDestroy(() => {
    kanban.destructor(); // Kanban zerstören
    toolbar.destructor(); // Toolbar zerstören
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### Daten laden

Um dem Kanban Daten hinzuzufügen, müssen Sie einen Datensatz bereitstellen. Sie können die Datei ***data.js*** im ***src/***-Verzeichnis erstellen und einige Daten hinzufügen:

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
            label: "Archive the cards/kanbans ",
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

Öffnen Sie dann die ***App.svelte***-Datei, importieren Sie die Daten und geben Sie sie als **props** an die neu erstellte `<Kanban/>`-Komponente weiter:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Wechseln Sie zur ***Kanban.svelte***-Datei und wenden Sie die übergebenen **props** auf das Kanban-Konfigurationsobjekt an:

~~~html {6-8,15-17} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar, defaultEditorShape } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container;
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns, 
        cards,
        rows,
        rowKey: "type",
        // weitere Konfigurationseigenschaften
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // interne Kanban-API bereitstellen
        // weitere Konfigurationseigenschaften
    })
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Sie können auch die [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb der `onMount()`-Methode von Svelte verwenden, um Daten in Kanban zu laden:

~~~html {6-8,27} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar} from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container; 
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns: [],
        cards: [],
        rows: [],
        rowKey: "type",
        // weitere Konfigurationseigenschaften
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // interne Kanban-API bereitstellen
        // weitere Konfigurationseigenschaften
    })

    kanban.parse({ columns, cards, rows });
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

Die Methode `parse(data)` ermöglicht das erneute Laden der Daten bei jeder Änderung.

Nun ist die Kanban-Komponente einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, initialisiert es Kanban mit den Daten. Sie können die benötigten Konfigurationseinstellungen ebenfalls angeben. Besuchen Sie unsere [Kanban API docs](/api/overview/properties_overview/), um die vollständige Liste der verfügbaren Eigenschaften zu sehen.

#### Ereignisse verarbeiten

Wenn ein Benutzer eine Aktion im Kanban ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code auszuführen. Sehen Sie sich die [full list of events](/api/overview/events_overview/) an.

Öffnen Sie ***Kanban.svelte*** und ergänzen Sie die `onMount()`-Methode wie folgt:

~~~html {8-10} title="Kanban.svelte"
<script>
// ...
let kanban;

onMount(() => {
    kanban = new Kanban(kanban_container, {})

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
});

onDestroy(() => {
    kanban.destructor();
});
</script>

// ...
~~~

### Schritt 3. Kanban zur App hinzufügen

Um die Komponente zur App hinzuzufügen, öffnen Sie die **App.svelte**-Datei und ersetzen Sie den Standardcode durch den folgenden:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Danach können Sie die App starten, um Kanban mit Daten auf der Seite zu sehen.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban mit Svelte"
    className="img_border"
/>

Nun wissen Sie, wie Sie DHTMLX Kanban mit Svelte integrieren können. Sie können den Code an Ihre spezifischen Anforderungen anpassen. Das finale, erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).