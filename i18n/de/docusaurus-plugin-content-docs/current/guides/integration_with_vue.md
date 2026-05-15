---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: Erfahren Sie in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek mehr über die Integration mit Vue. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Integration mit Vue

:::tip
Dieser Leitfaden setzt Kenntnisse der grundlegenden Konzepte und Muster von [Vue](https://vuejs.org/) voraus. Als Hintergrundlektüre empfiehlt sich die [Vue 3-Dokumentation](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban ist mit Vue kompatibel. Das vollständige Codebeispiel für Vue 3 ist auf [GitHub](https://github.com/DHTMLX/vue-kanban-demo) verfügbar.

## Projekt erstellen

:::info
Installieren Sie [Node.js](https://nodejs.org/en/) vor der Erstellung des Projekts.
:::

Mit folgendem Befehl wird ein neues Vue-Projekt erstellt:

~~~json
npm create vue@latest
~~~

Der Befehl führt `create-vue` aus, das offizielle Vue-Projekt-Scaffolding-Tool. Details finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Nennen Sie das Projekt *my-vue-kanban-app*.

### Installation der Abhängigkeiten

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-vue-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Dev-Server mit einem der folgenden Paketmanager:

- Für [yarn](https://yarnpkg.com/):

~~~jsx
yarn
yarn start // oder yarn dev
~~~

- Für [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Die App läuft unter einer localhost-Adresse (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Stoppen Sie den Dev-Server und installieren Sie das Kanban-Paket.

### Schritt 1. Paket installieren

Laden Sie das [Test-Kanban-Paket](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Schritten in der README-Datei. Die Testversion ist 30 Tage lang verfügbar.

### Schritt 2. Komponente erstellen

Erstellen Sie eine Vue-Komponente, die Kanban und die Toolbar einbindet. Fügen Sie eine neue Datei *Kanban.vue* im Verzeichnis *src/components/* hinzu.

#### Quellcode importieren

Öffnen Sie *Kanban.vue* und importieren Sie die Kanban-Quellcodes. Die Import-Pfade hängen von der Paketversion ab:

- Für die PRO-Version, die aus einem lokalen Ordner installiert wird:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Wenn das Paket minifizierte Quellcodes enthält, importieren Sie die CSS-Datei als *kanban.min.css*.

- Für die Testversion:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

Dieses Tutorial verwendet die Testversion von Kanban.

#### Container einrichten und Kanban initialisieren

Um Kanban mit der Toolbar anzuzeigen, erstellen Sie zwei Container und rufen Sie die Konstruktoren auf. Der folgende Code-Ausschnitt verbindet Refs und instanziiert die Komponenten innerhalb von `mounted()`:

~~~html {2,7-8,10-14} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    mounted() {
        // Initialisierung der Kanban-Komponente
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        // Initialisierung der Toolbar-Komponente
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, // Kanban-internes API bereitstellen
            // weitere Konfigurationseigenschaften
        });
    },

    unmounted() {
        this.kanban.destructor(); // Kanban zerstören
        this.toolbar.destructor(); // Toolbar zerstören
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

#### Styles hinzufügen

Fügen Sie Styles für Kanban und den Container in der Haupt-CSS-Datei hinzu:

~~~css title="main.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
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

Öffnen Sie *App.vue* und importieren Sie den Datensatz. Initialisieren Sie die Werte über die interne Methode `data()` und übergeben Sie sie als Props an die neue `<Kanban/>`-Komponente:

~~~html {3,8,10-12,19} title="App.vue"
<script>
import Kanban from "./components/Kanban.vue";
import { getData } from "./data";

export default {
    components: { Kanban },
    data() {
        const { columns, cards, rows } = getData();
        return { 
            columns, 
            cards,
            rows
        };
    }
};
</script>

<template>
    <Kanban :columns="columns" :cards="cards" :rows="rows"/>
</template>
~~~

Öffnen Sie *Kanban.vue* und wenden Sie die Props auf das Kanban-Konfigurationsobjekt an:

~~~html {6,10-12} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            cards: this.cards,
            columns: this.columns,
            rows: this.rows,
            rowKey: "type",
            // weitere Konfigurationseigenschaften
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // weitere Konfigurationseigenschaften
        });
    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

Alternativ können Sie Daten nach der Erstellung der Instanz mit [`setConfig()`](/api/methods/js_kanban_setconfig_method/) oder [`parse()`](/api/methods/js_kanban_parse_method/) innerhalb von `mounted()` laden:

~~~html {6,22-26} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // weitere Konfigurationseigenschaften
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // weitere Konfigurationseigenschaften
        });

        this.kanban.setConfig({ 
            cards: this.cards,
            columns: this.columns,
            rows: this.rows
        });

    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

Die Kanban-Komponente ist nun einsatzbereit. Sobald das Element gerendert wird, initialisiert sich Kanban mit den Daten. Die vollständige Liste der unterstützten Konfigurationseigenschaften finden Sie in der [Kanban API-Referenz](/api/overview/properties_overview/).

#### Ereignisse verarbeiten

Benutzeraktionen in Kanban lösen Ereignisse aus. Lauschen Sie auf Ereignisse, um auf bestimmte Aktionen zu reagieren. Die vollständige Liste finden Sie in der [Kanban-Ereignisreferenz](/api/overview/events_overview/).

Öffnen Sie *Kanban.vue* und erweitern Sie die Methode `mounted()`:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        this.kanban.api.on("add-card", (obj) => {
            console.log(obj.columnId);
        });
    },

    unmounted() {
        this.kanban.destructor();
    }
}
</script>

// ...
~~~

Starten Sie die App, um das befüllte Kanban-Board auf der Seite anzuzeigen.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban mit Vue"
  className="img_border"
/>

Das vollständige Projekt finden Sie auf [GitHub](https://github.com/DHTMLX/vue-kanban-demo).
