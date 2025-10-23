---
sidebar_label: Erste Schritte
title: Erste Schritte
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit DHTMLX Kanban beginnen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Erste Schritte

Dieses übersichtliche und umfassende Tutorial führt Sie durch die notwendigen Schritte, um ein voll funktionsfähiges Kanban auf einer Seite einzubinden.

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="JS Kanban Main"
    className="img_border"
/>

## Schritt 1. Einbinden der Quelldateien

Beginnen Sie mit dem Erstellen einer HTML-Datei und nennen Sie sie *index.html*. Fügen Sie dann die Kanban-Quelldateien in die erstellte Datei ein.

Es gibt zwei notwendige Dateien:

- die JS-Datei von Kanban
- die CSS-Datei von Kanban

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // Ihr Code wird hier eingefügt
        </script>
    </body>
</html>
~~~

### Kanban mit npm oder yarn installieren

Sie können JavaScript Kanban mit dem Paketmanager `yarn` oder `npm` in Ihr Projekt importieren.

#### Testversion von Kanban mit npm oder yarn installieren

:::info
Wenn Sie die Testversion von Kanban verwenden möchten, laden Sie das [**Test-Kanban-Paket**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) herunter und folgen Sie den Schritten in der *README*-Datei. Beachten Sie, dass die Testversion von Kanban nur 30 Tage verfügbar ist.
:::

#### PRO Kanban mit npm oder yarn installieren

:::info
Sie können direkt im [Kundenbereich](https://dhtmlx.com/clients/) auf das private **npm** von DHTMLX zugreifen, indem Sie Ihre Zugangsdaten für **npm** generieren. Dort finden Sie auch eine ausführliche Installationsanleitung. Bitte beachten Sie, dass der Zugriff auf das private **npm** nur solange verfügbar ist, wie Ihre proprietäre Kanban-Lizenz aktiv ist.
:::

## Schritt 2. Kanban erstellen

Nun sind Sie bereit, Kanban auf der Seite hinzuzufügen. Erstellen Sie zunächst die DIV-Container für Kanban und die Toolbar. Gehen Sie dazu wie folgt vor:

- Fügen Sie zwei DIV-Container in die *index.html* Datei ein
- Initialisieren Sie Kanban und die Toolbar mit den Konstruktoren **kanban.Kanban** und **kanban.Toolbar**

:::info
Die Toolbar ist ein optionaler Bestandteil der Kanban-Oberfläche. Um Kanban ohne Toolbar zu erstellen, können Sie nur einen DIV-Container angeben und das Widget über den **kanban.Kanban** Konstruktor initialisieren.  
:::

Als Parameter nehmen die Konstruktoren die IDs der HTML-Container, in denen Kanban und Toolbar platziert werden, sowie die entsprechenden Konfigurationsobjekte.

~~~html {9-10,13-15,17-19} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">  
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const board = new kanban.Kanban("#root", {
                // Konfigurationseigenschaften
            });

            new kanban.Toolbar("#toolbar", {
                // Konfigurationseigenschaften
            });
        </script>
    </body>
</html>
~~~

## Schritt 3. Kanban konfigurieren

Als Nächstes können Sie die gewünschten Konfigurationseigenschaften für die Initialisierung der Kanban-Komponente angeben.

Um mit Kanban zu arbeiten, müssen Sie zunächst die Anfangsdaten für **cards** und **columns** (und *rows*) bereitstellen.
Neben den Anfangsdaten können Sie das Aussehen der [cards](guides/configuration.md#cards), des [editor](guides/configuration.md#editor) und der [toolbar](guides/configuration.md#toolbar) konfigurieren.

~~~jsx {2-7,11-18}
const board = new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    rowKey: "row",
    cardShape,
    editorShape
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        "search",
        "spacer",
        "sort",
        "addColumn",
        "addRow"
    ]
});
~~~

## Wie geht es weiter?

Das war's! Nur drei einfache Schritte und Sie verfügen über ein praktisches Tool zur Visualisierung und Verwaltung Ihres Workflows. Jetzt können Sie mit Ihren Aufgaben arbeiten oder die Möglichkeiten von JavaScript Kanban weiter erkunden.