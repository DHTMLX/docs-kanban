---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit Vue. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Integration mit Vue

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von [**Vue**](https://vuejs.org/) vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**Vue 3-Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban ist mit **Vue** kompatibel. Wir haben Codebeispiele vorbereitet, wie Sie DHTMLX Kanban mit **Vue 3** verwenden können. Weitere Informationen finden Sie im entsprechenden [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Projekt erstellen

:::info
Bevor Sie mit der Erstellung eines neuen Projekts beginnen, installieren Sie [**Node.js**](https://nodejs.org/en/).
:::

Um ein **Vue**-Projekt zu erstellen, führen Sie den folgenden Befehl aus:

~~~json
npm create vue@latest
~~~

Dieser Befehl installiert und führt `create-vue` aus, das offizielle **Vue**-Projekt-Scaffolding-Tool. Details finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Nennen wir das Projekt **my-vue-kanban-app**.

### Installation der Abhängigkeiten

Wechseln Sie in das App-Verzeichnis:

~~~json
cd my-vue-kanban-app
~~~

Installieren Sie die Abhängigkeiten und starten Sie den Dev-Server. Verwenden Sie dazu einen Paketmanager:

- Wenn Sie [**yarn**](https://yarnpkg.com/) verwenden, führen Sie folgende Befehle aus:

~~~jsx
yarn
yarn start // oder yarn dev
~~~

- Wenn Sie [**npm**](https://www.npmjs.com/) verwenden, führen Sie folgende Befehle aus:

~~~json
npm install
npm run dev
~~~

Die App sollte auf localhost laufen (zum Beispiel `http://localhost:3000`).

## Kanban erstellen

Nun sollten Sie den DHTMLX Kanban-Quellcode erhalten. Stoppen Sie zuerst die App und fahren Sie mit der Installation des Kanban-Pakets fort.

### Schritt 1. Paketinstallation

Laden Sie das [**Test-Kanban-Paket**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den im README beschriebenen Schritten. Beachten Sie, dass die Testversion von Kanban nur 30 Tage verfügbar ist.

### Schritt 2. Komponentenerstellung

Nun müssen Sie eine Vue-Komponente erstellen, um Kanban mit Toolbar in die Anwendung einzufügen. Erstellen Sie eine neue Datei im Verzeichnis ***src/components/*** und nennen Sie sie ***Kanban.vue***.

#### Quellcode importieren

Öffnen Sie die Datei ***Kanban.vue*** und importieren Sie die Kanban-Quellcodes. Beachten Sie dabei:

- Wenn Sie die PRO-Version verwenden und das Kanban-Paket aus einem lokalen Ordner installieren, sehen die Import-Pfade wie folgt aus:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Beachten Sie, dass die Quellcodes je nach verwendetem Paket minifiziert sein können. In diesem Fall stellen Sie sicher, dass Sie die CSS-Datei als **kanban.min.css** importieren.

- Wenn Sie die Testversion von Kanban verwenden, geben Sie folgende Pfade an:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

In diesem Tutorial sehen Sie, wie Sie die **Testversion** von Kanban konfigurieren.

#### Container setzen und Kanban mit Toolbar hinzufügen

Um Kanban mit Toolbar auf der Seite anzuzeigen, müssen Sie Container für Kanban und Toolbar erstellen und diese Komponenten mit den entsprechenden Konstruktoren initialisieren:

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

Damit Kanban korrekt angezeigt wird, müssen Sie wichtige Styles für Kanban und seinen Container in der Haupt-CSS-Datei des Projekts angeben:

~~~css title="main.css"
/* Styles für die Initialseite */
html,
body,
#app { /* stellen Sie sicher, dass Sie den #app Root-Container verwenden */
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

Um Daten in Kanban hinzuzufügen, müssen Sie einen Datensatz bereitstellen. Sie können die Datei ***data.js*** im Verzeichnis ***src/*** erstellen und dort einige Daten hinzufügen:

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

Öffnen Sie dann die Datei ***App.vue***, importieren Sie die Daten und initialisieren Sie sie über die interne Methode `data()`. Danach können Sie die Daten als **props** an die neu erstellte `<Kanban/>`-Komponente übergeben:

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

Gehen Sie zur Datei ***Kanban.vue*** und wenden Sie die übergebenen **props** auf das Kanban-Konfigurationsobjekt an:

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

Sie können auch die [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb der `mounted()`-Methode von Vue verwenden, um Daten in Kanban zu laden:

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

        this.kanban.parse({ 
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

Die Methode `parse(data)` ermöglicht das Nachladen von Daten bei jeder Änderung.

Nun ist die Kanban-Komponente einsatzbereit. Sobald das Element zur Seite hinzugefügt wird, initialisiert es Kanban mit den Daten. Sie können auch die gewünschten Konfigurationseinstellungen bereitstellen. Besuchen Sie unsere [Kanban API-Dokumentation](/api/overview/properties_overview/), um die vollständige Liste der verfügbaren Eigenschaften zu sehen.

#### Ereignisse verarbeiten

Wenn ein Benutzer eine Aktion im Kanban ausführt, wird ein Ereignis ausgelöst. Sie können diese Ereignisse nutzen, um die Aktion zu erkennen und den gewünschten Code auszuführen. Die [vollständige Liste der Ereignisse](/api/overview/events_overview/) finden Sie hier.

Öffnen Sie ***Kanban.vue*** und vervollständigen Sie die Methode `mounted()`:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.cont, {});

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

Danach können Sie die App starten, um Kanban mit Daten auf der Seite zu sehen.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban mit Vue"
    className="img_border"
/>

Jetzt wissen Sie, wie Sie DHTMLX Kanban mit Vue integrieren können. Sie können den Code entsprechend Ihren spezifischen Anforderungen anpassen. Das finale, erweiterte Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).