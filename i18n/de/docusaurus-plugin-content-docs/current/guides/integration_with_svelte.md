---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit Svelte. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Svelte

:::tip
Diese Anleitung setzt Kenntnisse der Svelte-Konzepte und -Muster voraus. Zur Einführung siehe die [Svelte documentation](https://svelte.dev/docs/svelte/overview).
:::

DHTMLX Kanban ist mit Svelte kompatibel. Das vollständige Codebeispiel ist auf [GitHub](https://github.com/DHTMLX/svelte-kanban-demo) verfügbar.

## Projekt erstellen

:::info
Installieren Sie [Vite](https://vite.dev/) (optional) und [Node.js](https://nodejs.org/en/), bevor Sie das Projekt erstellen.
:::

Richten Sie ein Svelte-Projekt auf eine der folgenden Arten ein:

- mit [SvelteKit](https://kit.svelte.dev/) — empfohlen
- mit Svelte und Vite (ohne SvelteKit) — führen Sie aus:

~~~json
npm create vite@latest
~~~

Weitere Details finden Sie in der [Svelte documentation](https://svelte.dev/docs/svelte/overview).

### Abhängigkeiten installieren

Nennen Sie das Projekt *my-svelte-kanban-app*. Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-svelte-kanban-app
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

Die App läuft unter einer localhost-Adresse (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Stoppen Sie den Entwicklungsserver und installieren Sie das Kanban-Paket.

### Schritt 1. Paket installieren

Laden Sie das [trial Kanban package](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den im README aufgeführten Schritten. Die Testversion ist 30 Tage lang verfügbar.

### Schritt 2. Komponente erstellen

Erstellen Sie eine Svelte-Komponente, die Kanban und die Toolbar einbindet. Fügen Sie eine neue Datei *Kanban.svelte* im Verzeichnis *src/* hinzu.

#### Quelldateien importieren

Öffnen Sie *Kanban.svelte* und importieren Sie die Kanban-Quelldateien. Die Importpfade hängen von der Paketversion ab:

- Für die PRO-Version, die aus einem lokalen Ordner installiert wird:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Wenn das Paket minifizierte Quelldateien enthält, importieren Sie die CSS-Datei als *kanban.min.css*.

- Für die Testversion:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

In diesem Tutorial wird die Testversion von Kanban verwendet.

#### Container einrichten und Kanban initialisieren

Um Kanban mit der Toolbar anzuzeigen, erstellen Sie zwei Container und rufen Sie die Konstruktoren auf. Der folgende Code-Ausschnitt bindet die Container und instanziiert die Komponenten innerhalb von `onMount()`:

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
            label: "Archive the cards/boards",
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

Öffnen Sie *App.svelte*, importieren Sie den Datensatz und übergeben Sie die Werte als props an die neue `<Kanban/>`-Komponente:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Öffnen Sie *Kanban.svelte* und wenden Sie die props auf das Kanban-Konfigurationsobjekt an:

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

Alternativ können Sie Daten nach der Erstellung der Instanz mit [`setConfig()`](/api/methods/js_kanban_setconfig_method/) oder [`parse()`](/api/methods/js_kanban_parse_method/) innerhalb von `onMount()` laden:

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

    kanban.setConfig({ columns, cards, rows });
    // oder kanban.parse({ columns, cards, rows });
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

Die Kanban-Komponente ist nun einsatzbereit. Sobald das Element gerendert wird, initialisiert Kanban sich mit den Daten. Die vollständige Liste der unterstützten Konfigurationseigenschaften finden Sie in der [Kanban API-Referenz](/api/overview/properties_overview/).

#### Ereignisse verarbeiten

Benutzeraktionen in Kanban lösen Ereignisse aus. Hören Sie auf Ereignisse, um auf bestimmte Aktionen zu reagieren. Die vollständige Liste finden Sie in der [Kanban-Ereignisreferenz](/api/overview/events_overview/).

Öffnen Sie *Kanban.svelte* und erweitern Sie den `onMount()`-Callback:

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

Um die Komponente zu registrieren, öffnen Sie *App.svelte* und ersetzen Sie den Standardcode:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Starten Sie die App, um das befüllte Kanban-Board auf der Seite anzuzeigen.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban mit Svelte"
  className="img_border"
/>

Das vollständige Projekt finden Sie auf [GitHub](https://github.com/DHTMLX/svelte-kanban-demo).
