---
sidebar_label: Integration mit Svelte
title: Integration mit Svelte
description: In der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren Sie mehr über die Integration mit Svelte. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Svelte

:::tip
Es ist hilfreich, ein grundlegendes Verständnis von **Svelte** zu haben, bevor Sie mit dieser Anleitung beginnen. Für eine schnelle Auffrischung besuchen Sie die [**Svelte Dokumentation**](https://svelte.dev/).
:::

DHTMLX Kanban arbeitet reibungslos mit **Svelte** zusammen. Es gibt Codebeispiele, die zeigen, wie DHTMLX Kanban in einer Svelte-Umgebung verwendet werden kann. Weitere Details finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).

## Erstellen eines Projekts

:::info
Bevor Sie ein neues Projekt starten, stellen Sie sicher, dass [**Vite**](https://vite.dev/) (optional) und [**Node.js**](https://nodejs.org/en/) installiert sind.
:::

Es gibt mehrere Möglichkeiten, ein **Svelte**-Projekt einzurichten:

- Verwenden Sie [**SvelteKit**](https://kit.svelte.dev/)

oder

- Verwenden Sie **Svelte und Vite** (ohne SvelteKit):

~~~json
npm create vite@latest
~~~

Weitere Einzelheiten finden Sie in diesem [verwandten Artikel](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation der Abhängigkeiten

Nennen wir das Projekt **my-svelte-kanban-app** und wechseln Sie in dieses Verzeichnis:

~~~json
cd my-svelte-kanban-app
~~~

Um Abhängigkeiten zu installieren und den Entwicklungsserver zu starten, wählen Sie Ihren bevorzugten Paketmanager:

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

Die App ist dann lokal verfügbar, in der Regel unter einer Adresse wie `http://localhost:3000`.

## Kanban erstellen

Als Nächstes muss der Quellcode von DHTMLX Kanban verfügbar sein. Stoppen Sie die App vorerst und installieren Sie das Kanban-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Test-Kanban-Paket**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Anweisungen in der README. Hinweis: Die Testversion ist 30 Tage lang funktionsfähig.

### Schritt 2. Komponentenerstellung

Jetzt ist es Zeit, eine Svelte-Komponente einzurichten, die Kanban zusammen mit einer Toolbar in die App einbindet. Legen Sie unter ***src/*** eine neue Datei an und nennen Sie sie ***Kanban.svelte***.

#### Importieren der Quelldateien

Öffnen Sie ***Kanban.svelte*** und importieren Sie die Kanban-Quelldateien. Beachten Sie dabei:

- Bei der Nutzung der PRO-Version und der lokalen Installation eines Pakets sehen die Importpfade wie folgt aus:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Abhängig vom Paket können die Quelldateien minifiziert sein. In diesem Fall importieren Sie bitte **kanban.min.css**.

- Bei der Verwendung der Testversion sehen die Importpfade so aus:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

Diese Anleitung verwendet für die Konfigurationsbeispiele die **Testversion**.

#### Container festlegen und Kanban mit Toolbar hinzufügen

Um Kanban mit Toolbar anzuzeigen, richten Sie Container für beide Komponenten ein und initialisieren Sie sie mit ihren Konstruktoren:

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
        api: kanban.api, // Kanban-internes API bereitstellen
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

Um Daten in Kanban zu laden, wird ein Datensatz benötigt. Erstellen Sie eine Datei ***data.js*** im Verzeichnis ***src/*** und fügen Sie Beispieldaten hinzu:

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

Öffnen Sie nun ***App.svelte***, importieren Sie die Daten und übergeben Sie sie als **props** an die neue `<Kanban/>`-Komponente:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Wechseln Sie zu ***Kanban.svelte*** und verwenden Sie diese **props** in der Kanban-Konfiguration:

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
        api: kanban.api, // Kanban-internes API bereitstellen
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

Alternativ kann die Methode [`parse()`](/api/methods/js_kanban_parse_method/) innerhalb von Sveltes `onMount()` verwendet werden, um Daten in Kanban zu laden:

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
        api: kanban.api, // Kanban-internes API bereitstellen
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

Mit der Methode `parse(data)` können die Daten jedes Mal neu geladen werden, wenn sich etwas ändert.

An dieser Stelle ist die Kanban-Komponente fertig eingerichtet. Sobald sie auf der Seite eingebunden ist, wird sie mit den übergebenen Daten initialisiert. Weitere gewünschte Einstellungen können nach Bedarf ergänzt werden. Die [Kanban API-Dokumentation](/api/overview/properties_overview/) enthält Details zu allen verfügbaren Optionen.

#### Ereignisse behandeln

Immer wenn im Kanban eine Aktion erfolgt, werden Events ausgelöst. Diese können genutzt werden, um auf Benutzeraktionen zu reagieren und eigene Logik auszuführen. Die [vollständige Liste der Events](/api/overview/events_overview/) gibt einen Überblick.

Fügen Sie dies in ***Kanban.svelte*** hinzu, um ein Ereignis innerhalb von `onMount()` zu behandeln:

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

### Schritt 3. Kanban in die App einbinden

Um die Komponente in der App anzuzeigen, öffnen Sie **App.svelte** und aktualisieren den Code wie folgt:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

Starten Sie jetzt die App, um Kanban mit den bereitgestellten Daten in Aktion zu sehen.

![Kanban initialization](/assets/trial_kanban.png)

Damit ist die Integration von DHTMLX Kanban in eine Svelte-App abgeschlossen. Der Code kann beliebig angepasst werden, um spezifische Anforderungen zu erfüllen. Ein fortgeschritteneres Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo).
