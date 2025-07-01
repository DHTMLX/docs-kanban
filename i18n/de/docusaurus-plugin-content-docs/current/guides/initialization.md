---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Initialisierung. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Initialisierung

Hier erfahren Sie, wie Sie Kanban schnell auf einer Seite einrichten und alle Board-Funktionen zu Ihrer App hinzufügen. Befolgen Sie einfach diese Schritte, um die Komponente in Betrieb zu nehmen:

1. [Binden Sie die Kanban-Quelldateien auf einer Seite ein](#including-source-files).
2. [Erstellen Sie einen Container für Kanban](#creating-container).
3. [Initialisieren Sie Kanban mit einem Konstruktor](#initializing-kanban).

## Including source files

Laden Sie zunächst das [Paket herunter](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) und entpacken Sie es in Ihren Projektordner.

Damit Kanban funktioniert, fügen Sie einfach diese beiden Dateien zu Ihrer Seite hinzu:

- *kanban.js*
- *kanban.css*

Stellen Sie sicher, dass die Pfade zu diesen Dateien korrekt sind:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Creating container

Fügen Sie ein Containerelement für Kanban hinzu und vergeben Sie eine ID, z. B. *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Wenn das Kanban-Board eine *Toolbar* haben soll, fügen Sie auch dafür einen separaten Container hinzu:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Container für die Toolbar
<div id="root"></div> // Container für Kanban
~~~

## Initializing Kanban

Kanban wird mit dem **kanban.Kanban**-Konstruktor initialisiert. Er erwartet zwei Argumente:

- Einen HTML-Container (die ID des HTML-Containers)
- Ein Objekt mit Konfigurationseigenschaften. [Die vollständige Liste finden Sie hier](#configuration-properties)

~~~jsx title="index.html"
// Kanban erstellen
new kanban.Kanban("#root", {
    // Konfigurationseigenschaften
});
~~~

Wenn Sie auch eine *Toolbar* hinzufügen möchten, initialisieren Sie diese separat mit dem **kanban.Toolbar**-Konstruktor. Auch hier werden zwei Argumente benötigt:

- Einen HTML-Container (die ID des HTML-Containers)
- Ein Objekt mit Konfigurationseigenschaften

~~~jsx {6-8} title="index.html"
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    // Konfigurationseigenschaften
});

new kanban.Toolbar("#toolbar", {
    // Konfigurationseigenschaften
});
~~~

:::info
Weitere Informationen zum Einrichten der Kanban Toolbar finden Sie im Abschnitt [**Konfiguration**](/guides/configuration.md/#toolbar).
:::

### Configuration properties

:::note
Eine vollständige Liste der Konfigurationsoptionen für **Kanban** finden Sie [**hier**](/api/overview/properties_overview.md). <br /> 
Die vollständige Liste der Eigenschaften für die **Toolbar von Kanban** finden Sie [**hier**](/api/overview/toolbar_properties_overview.md).
:::

## Beispiel

Hier ein Beispiel, das zeigt, wie Kanban mit einigen Anfangsdaten initialisiert wird:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
