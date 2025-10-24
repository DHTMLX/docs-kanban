---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Initialisierung. Durchstöbern Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Initialisierung

Diese Anleitung gibt Ihnen eine detaillierte Schritt-für-Schritt-Anleitung, wie Sie Kanban auf einer Seite erstellen, um Ihre Anwendung mit den Funktionen eines Kanban-Boards zu erweitern. Gehen Sie wie folgt vor, um eine einsatzbereite Komponente zu erhalten:

1. [Binden Sie die Kanban-Quelldateien in die Seite ein](#including-source-files).
2. [Erstellen Sie einen Container für Kanban](#creating-container).
3. [Initialisieren Sie Kanban mit einem Konstruktor](#initializing-kanban).

## Including source files

[Laden Sie das Paket herunter](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) und entpacken Sie es in einen Ordner Ihres Projekts.

Um Kanban zu erstellen, müssen Sie zwei Quelldateien in Ihre Seite einbinden:

- *kanban.js*
- *kanban.css*

Stellen Sie sicher, dass Sie die korrekten relativen Pfade zu den Quelldateien angeben:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Creating container

Fügen Sie einen Container für Kanban hinzu und geben Sie ihm eine ID, zum Beispiel *"root"*:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Wenn Sie das Widget zusammen mit der *Toolbar* erstellen möchten, müssen Sie dafür einen separaten Container hinzufügen:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Container für die Toolbar
<div id="root"></div> // Container für Kanban
~~~

## Initializing Kanban

Initialisieren Sie Kanban mit dem **kanban.Kanban**-Konstruktor. Er nimmt zwei Parameter entgegen:

- einen HTML-Container (die ID des HTML-Containers)
- ein Objekt mit Konfigurationseigenschaften. [Siehe die vollständige Liste hier](#configuration-properties)

~~~jsx title="index.html"
// Kanban erstellen
new kanban.Kanban("#root", {
    // Konfigurationseigenschaften
});
~~~

Wenn Sie das Widget zusammen mit der *Toolbar* erstellen möchten, müssen Sie diese separat mit dem **kanban.Toolbar**-Konstruktor initialisieren. Auch dieser nimmt zwei Parameter entgegen:

- einen HTML-Container (die ID des HTML-Containers)
- ein Objekt mit Konfigurationseigenschaften

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
Um mehr über die Konfiguration der Toolbar von Kanban zu erfahren, lesen Sie den Abschnitt [**Konfiguration**](guides/configuration.md/#toolbar)
:::

### Configuration properties

:::note
Die vollständige Liste der Eigenschaften zur Konfiguration von **Kanban** finden Sie [**hier**](api/overview/properties_overview.md). <br/>
Die vollständige Liste der Eigenschaften zur Konfiguration der **Toolbar von Kanban** finden Sie [**hier**](api/overview/toolbar_properties_overview.md).
:::

## Beispiel

In diesem Beispiel sehen Sie, wie **Kanban** mit Anfangsdaten initialisiert wird:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>