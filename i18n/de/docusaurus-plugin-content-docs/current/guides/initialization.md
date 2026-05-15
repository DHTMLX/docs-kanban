---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Initialisierung. Durchstöbern Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Initialisierung

Erstellen Sie ein Kanban-Widget auf einer Seite in drei Schritten:

1. [Binden Sie die Quelldateien ein](#include-source-files).
2. [Erstellen Sie einen Container](#create-a-container).
3. [Initialisieren Sie Kanban](#initialize-kanban).

## Include source files

[Laden Sie das Paket herunter](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) und entpacken Sie den Inhalt in einen Ordner Ihres Projekts.

Binden Sie die folgenden Quelldateien in Ihre Seite ein:

- *kanban.js*
- *kanban.css*

Geben Sie korrekte relative Pfade zu beiden Dateien an:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Create a container

Fügen Sie einen Container für Kanban hinzu und weisen Sie ihm eine ID zu, zum Beispiel `root`:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Um das Widget mit einer Toolbar zu erstellen, fügen Sie einen separaten Container für die Toolbar hinzu:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Container für die Toolbar
<div id="root"></div> // Container für Kanban
~~~

## Initialize Kanban

Initialisieren Sie Kanban mit dem `kanban.Kanban`-Konstruktor. Der Konstruktor nimmt zwei Parameter entgegen:

- einen CSS-Selektor für den HTML-Container (oder das Container-Element selbst)
- ein Konfigurationsobjekt (siehe die [vollständige Liste der Eigenschaften](#configuration-properties))

Der folgende Code-Ausschnitt erstellt eine Kanban-Instanz:

~~~jsx title="index.html"
// Kanban erstellen
new kanban.Kanban("#root", {
    // Konfigurationseigenschaften
});
~~~

Um das Widget mit einer Toolbar zu erstellen, initialisieren Sie die Toolbar separat mit dem `kanban.Toolbar`-Konstruktor. Die Toolbar-Steuerelemente wirken über den Parameter [`api`](api/config/toolbar_api_config.md) auf die Kanban-Instanz ein. Übergeben Sie `board.api`, um die Toolbar mit dem Board zu verknüpfen:

~~~jsx {7} title="index.html"
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    // Konfigurationseigenschaften
});

new kanban.Toolbar("#toolbar", {
    api: board.api, // erforderlich: verknüpft die Toolbar-Steuerelemente mit der Kanban-Instanz
    // weitere Konfigurationseigenschaften
});
~~~

:::info
Weitere Informationen zur Konfiguration der Toolbar finden Sie im Abschnitt [Konfiguration](guides/configuration.md#toolbar).
:::

### Configuration properties

Die vollständige Konfigurationsreferenz:

- [Übersicht der Kanban-Eigenschaften](api/overview/properties_overview.md) — alle Kanban-Konfigurationseigenschaften
- [Übersicht der Toolbar-Eigenschaften](api/overview/toolbar_properties_overview.md) — alle Toolbar-Konfigurationseigenschaften

## Beispiel

Der folgende Ausschnitt initialisiert Kanban mit Beispieldaten:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
