---
sidebar_label: Integration mit Vue
title: Integration mit Vue
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Integration mit Vue. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Integration mit Vue

:::tip
Es ist hilfreich, wenn Sie mit den grundlegenden Ideen und Mustern von [**Vue**](https://vuejs.org/) vertraut sind, bevor Sie hier einsteigen. Falls Sie eine Auffrischung benötigen, schauen Sie in die [**Vue 3 Dokumentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Kanban funktioniert sehr gut mit **Vue**. Es stehen Codebeispiele zur Verfügung, die zeigen, wie DHTMLX Kanban mit **Vue 3** verwendet wird. Weitere Details finden Sie im [**Beispiel auf GitHub**](https://github.com/DHTMLX/vue-kanban-demo).

## Projekt erstellen

:::info
Stellen Sie sicher, dass [**Node.js**](https://nodejs.org/en/) installiert ist, bevor Sie ein neues Projekt starten.
:::

Um ein **Vue**-Projekt zu erstellen, verwenden Sie folgenden Befehl:

~~~json
npm create vue@latest
~~~

Damit wird `create-vue`, das offizielle Tool zum Erstellen von **Vue**-Projekten, installiert und gestartet. Weitere Informationen finden Sie im [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Das Projekt kann **my-vue-kanban-app** genannt werden.

### Installation der Abhängigkeiten

Wechseln Sie in den Ordner Ihrer App:

~~~json
cd my-vue-kanban-app
~~~

Installieren Sie danach die Abhängigkeiten und starten Sie den Entwicklungsserver. Wählen Sie einen Paketmanager:

- Mit [**yarn**](https://yarnpkg.com/) verwenden Sie:

~~~jsx
yarn
yarn start // oder yarn dev
~~~

- Mit [**npm**](https://www.npmjs.com/) führen Sie aus:

~~~json
npm install
npm run dev
~~~

Die App sollte nun lokal (zum Beispiel unter `http://localhost:3000`) laufen.

## Kanban erstellen

Um mit DHTMLX Kanban zu beginnen, holen Sie sich zuerst den Quellcode. Pausieren Sie die App und installieren Sie das Kanban-Paket.

### Schritt 1. Paketinstallation

Laden Sie das [**Test-Kanban-Paket**](/how_to_start/#kanban-mit-npm-oder-yarn-installieren) herunter und folgen Sie den Schritten in der README-Datei. Die Testversion ist 30 Tage lang gültig.

### Schritt 2. Komponentenerstellung

Richten Sie anschließend eine Vue-Komponente ein, um Kanban mit einer Toolbar zu Ihrer App hinzuzufügen. Erstellen Sie eine neue Datei in ***src/components/*** mit dem Namen ***Kanban.vue***.

#### Quelldateien importieren

Öffnen Sie ***Kanban.vue*** und importieren Sie die Kanban-Dateien. So gehen Sie vor:

- Für die PRO-Version, wenn Sie Kanban aus einem lokalen Ordner installieren, sehen die Importpfade wie folgt aus:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

Falls Ihr Paket minifizierte Dateien enthält, achten Sie darauf, stattdessen **kanban.min.css** zu importieren.

- Für die Testversion verwenden Sie diese Pfade:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

Diese Anleitung zeigt, wie die **Testversion** von Kanban eingerichtet wird.

#### Container setzen und Kanban mit Toolbar hinzufügen

Um Kanban und die Toolbar anzuzeigen, richten Sie Container ein und initialisieren Sie diese Komponenten mit ihren Konstruktoren:

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
            api: this.kanban.api, // Kanban-API bereitstellen
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

Damit Kanban korrekt angezeigt wird, fügen Sie einige wichtige Styles für Kanban und seinen Container in Ihrer Haupt-CSS-Datei hinzu:

~~~css title="main.css"
/* Styles für die Startseite */
html,
body,
#app { /* Stellen Sie sicher, dass Sie den #app-Root-Container verwenden */
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

Um Ihr Kanban mit Daten zu füllen, erstellen Sie eine Datei ***data.js*** in ***src/*** und fügen Sie Beispieldaten hinzu:

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

Öffnen Sie anschließend ***App.vue***, importieren Sie Ihre Daten und richten Sie diese über die interne `data()`-Methode ein. Danach geben Sie die Daten als **props** an Ihre `<Kanban/>`-Komponente weiter:

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

Wenden Sie nun in ***Kanban.vue*** diese **props** auf das Kanban-Konfigurationsobjekt an:

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

Es ist auch möglich, die [`parse()`](/api/methods/js_kanban_parse_method/)-Methode innerhalb von Vues `mounted()` zu verwenden, um Daten in Kanban zu laden:

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

Die `parse(data)`-Methode lädt die Daten jedes Mal neu, wenn eine Änderung vorgenommen wird.

An dieser Stelle ist die Kanban-Komponente einsatzbereit. Sobald das Element zu Ihrer Seite hinzugefügt wird, initialisiert es Kanban mit Ihren Daten. Sie können jede gewünschte Konfiguration hinzufügen. Eine Übersicht aller verfügbaren Eigenschaften finden Sie in der [Kanban API-Dokumentation](/api/overview/properties_overview/).

#### Ereignisse verarbeiten

Wann immer etwas im Kanban passiert, wird ein Ereignis ausgelöst. Diese können genutzt werden, um auf Benutzeraktionen mit eigenem Code zu reagieren. Die [vollständige Liste der Ereignisse](/api/overview/events_overview/) ist verfügbar.

Öffnen Sie ***Kanban.vue*** und aktualisieren Sie die `mounted()`-Methode wie folgt:

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

Nun können Sie die App starten und Ihr Kanban-Board mit Daten sehen.

![Kanban-Initialisierung](/assets/trial_kanban.png)

Das ist alles, was zur Integration von DHTMLX Kanban mit Vue nötig ist. Sie können den Code nach Bedarf anpassen und erweitern. Ein weiterführendes Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo).
