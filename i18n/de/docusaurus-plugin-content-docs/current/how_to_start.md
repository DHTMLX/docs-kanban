---
sidebar_label: Erste Schritte
title: Erste Schritte
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie, wie Sie mit DHTMLX Kanban beginnen können. Durchstöbern Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Erste Schritte

Hier finden Sie eine einfache Anleitung, die Sie Schritt für Schritt beim Einrichten eines vollständig funktionsfähigen Kanban-Boards auf einer Webseite begleitet.

![JS Kanban Main](/assets/js_kanban_editor.png)

## Schritt 1. Einbinden der Quelldateien

Beginnen Sie mit der Erstellung einer HTML-Datei und benennen Sie sie *index.html*. Fügen Sie anschließend die Kanban-Quelldateien in diese Datei ein.

Sie benötigen zwei Dateien:

- Die Kanban-JS-Datei
- Die Kanban-CSS-Datei

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

Kanban kann auch mit `yarn` oder `npm` in Ihr Projekt importiert werden.

#### Testversion von Kanban über npm oder yarn installieren

:::info
Laden Sie für die Testversion das [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) herunter und folgen Sie den Anweisungen in der *README*-Datei. Die Testversion ist für 30 Tage verfügbar.
:::

#### PRO Kanban über npm oder yarn installieren

:::info
Der Zugang zum DHTMLX privaten **npm** ist im [Client's Area](https://dhtmlx.com/clients/) verfügbar, wo Sie Ihren Login und Ihr Passwort für **npm** generieren können. Die Installationsschritte werden dort ebenfalls beschrieben. Bitte beachten Sie, dass der Zugang zum privaten **npm** nur aktiv ist, solange Ihre proprietäre Kanban-Lizenz gültig ist.
:::

## Schritt 2. Kanban erstellen

Nachdem die Dateien eingebunden wurden, kann Kanban auf der Seite hinzugefügt werden. Beginnen Sie damit, zwei DIV-Container für das Kanban-Board und die Toolbar zu erstellen:

- Fügen Sie zwei DIV-Container in die Datei *index.html* ein
- Initialisieren Sie Kanban und die Toolbar mit den Konstruktoren **kanban.Kanban** und **kanban.Toolbar**

:::info
Die Toolbar ist im Kanban-Interface optional. Wenn Sie nur das Kanban-Board benötigen, reicht ein einziger DIV-Container und der **kanban.Kanban**-Konstruktor.
:::

Die Konstruktoren erwarten die IDs der HTML-Container, in die Kanban und die Toolbar eingefügt werden sollen, sowie deren Konfigurationsobjekte.

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

Nun können Sie die Konfigurationseigenschaften festlegen, wie Kanban beim Start aussehen und funktionieren soll.

Um zu beginnen, fügen Sie die Anfangsdaten für **cards** und **columns** (und *rows*, falls benötigt) hinzu.
Zusätzlich können Sie das Aussehen von [cards](/guides/configuration#karten), dem [editor](/guides/configuration#editor) und der [toolbar](/guides/configuration#toolbar) anpassen.

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

Das war's - mit diesen drei einfachen Schritten haben Sie ein Werkzeug, um Ihren Workflow zu visualisieren und zu verwalten. Sie können nun direkt mit Ihren Aufgaben arbeiten oder tiefer in die Funktionen des JavaScript Kanban eintauchen.
