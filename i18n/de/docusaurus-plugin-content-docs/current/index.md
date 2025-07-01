---
sidebar_label: Kanban-Übersicht
title: JavaScript Kanban Übersicht
slug: /
description: In der Dokumentation erhalten Sie einen Überblick über die DHTMLX JavaScript Kanban-Bibliothek. Durchstöbern Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DHTMLX Kanban Übersicht

JavaScript Kanban ist ein praktisches Tool zur Visualisierung von Workflows. Es erleichtert das Verständnis Ihrer Geschäftsprozesse und bietet einen Überblick über die Arbeitsbelastung Ihres Teams. Das Tool ist sehr flexibel und kann beliebig viele Karten, Spalten und Swimlanes verarbeiten. Da es mit reinem JavaScript und CSS entwickelt wurde, ist die Einrichtung und Anpassung unkompliziert und es lässt sich problemlos in jede Webanwendung oder Webseite integrieren.

## Kanban-Struktur

### Toolbar

Die **Toolbar** im Kanban befindet sich als eigener Bereich innerhalb der Oberfläche. Sie enthält eine Suchleiste zum Finden von Karten, eine Steuerung zum Sortieren von Karten nach verschiedenen Optionen, Undo/Redo-Buttons zur Verwaltung der Historie sowie Steuerelemente zum Hinzufügen neuer Spalten und Zeilen. Sie können das Such- und Sortierverhalten individuell anpassen und die Toolbar ganz einfach erweitern, indem Sie eigene Elemente hinzufügen oder die Reihenfolge der vorhandenen Elemente ändern. Weitere Informationen finden Sie im Abschnitt [Configuration](./guides/configuration#toolbar).

![Kanban Toolbar](/assets/js_kanban_toolbar.png)

### Board

Das **Board** ist der zentrale Bereich im Kanban. Hier werden Karten in Spalten und Zeilen (Swimlanes) angeordnet. Sie können das Aussehen der Karten leicht anpassen oder eigene Templates verwenden. Mehr dazu im Abschnitt [Configuration](./guides/configuration#karten).

Auf dem **Board**-Panel können Sie mit ***Karten***, ***Spalten*** und ***Zeilen*** auf verschiedene Weise interagieren:

- Neue Karten durch Klicken auf das Plus-Symbol hinzufügen (unter Berücksichtigung etwaiger *Limits* für jede Spalte und Swimlane)
- Kommentare und Stimmen zu Aufgaben über das Editor-Panel hinzufügen ([Example](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Verknüpfungen zwischen Aufgaben im Editor anlegen ([Example](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Karten, Spalten und Zeilen über das Kontextmenü (Drei-Punkte-Symbol) löschen
- Karten über das Kontextmenü (Drei-Punkte-Symbol) oder mit `Ctrl (Command)`+`D` duplizieren (ermöglicht das gleichzeitige Duplizieren mehrerer Karten)
- Kanban-Daten als JSON-Datei exportieren
- Die Kanban-Historie mit diesen Shortcuts verwalten:
    - `Ctrl (Command)`+`Z` zum Rückgängig machen der letzten Aktion (einen Schritt zurück in der Kanban-Historie)
    - `Ctrl (Command)`+`Y` oder `Ctrl (Command)`+`Shift`+`Z` zum Wiederholen einer rückgängig gemachten Aktion (einen Schritt vorwärts in der Kanban-Historie)
- Karten durch Drag & Drop innerhalb von Spalten oder Zeilen verschieben
- Spalten und Zeilen über das Kontextmenü (Drei-Punkte-Symbol) verschieben
- Spalten und Zeilen durch Doppelklick auf das Label oder über das Kontextmenü (Drei-Punkte-Symbol) umbenennen
- Einen Karten-Editor durch Klicken auf eine Karte öffnen
- Zeilen mit dem Pfeil-Symbol links neben dem Zeilen-Label ein- oder ausklappen
- Spalten mit dem Pfeil-Symbol links neben dem Spalten-Label ein- oder ausklappen
- Mehrere Karten mit folgenden Shortcuts auswählen:
    - `Shift` + Klick, um mehrere Karten in derselben Spalte zu markieren
    - `Ctrl (Command)` + Klick, um Karten in verschiedenen Spalten auszuwählen

![Kanban Board](/assets/js_kanban_board.png)

### Editor

Der **Editor** öffnet sich als modales Fenster und bietet Felder und Steuerelemente zum Bearbeiten der Details der ausgewählten Karte. Klicken Sie einfach auf eine beliebige Karte, um den Editor aufzurufen. Sie können den Editor auch individuell anpassen, indem Sie neue Felder oder Steuerelemente hinzufügen. Weitere Informationen finden Sie im Abschnitt [Configuration](./guides/configuration#editor).

![Kanban Editor](/assets/js_kanban_editor.png)

## Wie geht es weiter?

Um Kanban in Ihrer Anwendung zu integrieren, folgen Sie dem Tutorial [How to start](./how_to_start) für eine schrittweise Anleitung.
