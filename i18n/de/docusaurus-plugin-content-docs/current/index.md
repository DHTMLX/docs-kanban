---
sidebar_label: Kanban-Übersicht
title: JavaScript Kanban Übersicht
slug: /
description: In der Dokumentation erhalten Sie einen Überblick über die DHTMLX JavaScript Kanban-Bibliothek. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# DHTMLX Kanban Übersicht

JavaScript Kanban ist eine effektive Lösung zur Visualisierung von Workflows. Das Widget hilft Ihnen, Ihre Geschäftsprozesse besser zu verstehen und einen Überblick über die Arbeitsauslastung Ihres Teams zu erhalten. Dieses flexible Tool kann mit beliebig vielen Karten, Spalten und Swimlanes arbeiten. Die Komponente ist vollständig in reinem JavaScript und CSS geschrieben und lässt sich einfach einrichten, anpassen und in jede Webanwendung oder Webseite integrieren.

## Kanban-Struktur­

### Toolbar

Die **Toolbar** von Kanban ist ein separater Teil der Benutzeroberfläche. Sie beinhaltet eine Suchleiste zum *Suchen* von Karten, eine Steuerung zum *Sortieren* von Karten nach bestimmten Parametern, zwei Steuerelemente zur Verwaltung der Historie (*Undo/Redo*) sowie Steuerelemente zum *Hinzufügen neuer Spalten und Zeilen*. Sie können die Such- und Sortierlogik flexibel steuern sowie die Struktur der Toolbar anpassen, indem Sie eigene Elemente hinzufügen oder die Reihenfolge der eingebauten Elemente verändern. Weitere Informationen finden Sie im Abschnitt [Konfiguration](guides/configuration.md#toolbar).

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
    src={toolbar}
    alt="Kanban Toolbar"
    className="img_border"
/>

### Board

Das **Board** ist der Hauptbestandteil von Kanban. Es besteht aus Karten, die auf Spalten und Zeilen (Swimlanes) verteilt sind. Sie können das Aussehen der Karten flexibel konfigurieren und eine eigene Vorlage anwenden. Weitere Informationen finden Sie im Abschnitt [Konfiguration](guides/configuration.md#cards).

Auf dem **Board**-Panel können Sie mit den ***Karten***, ***Spalten*** und ***Zeilen*** wie folgt arbeiten:

- Neue Karten durch Klicken auf das Plus-Symbol hinzufügen (entsprechend den festgelegten *Limits* für jede Spalte und Swimlane)
- Kommentare und Stimmen für Aufgaben über das Editor-Panel hinzufügen ([Beispiel](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Verknüpfungen zwischen Aufgaben über den Editor setzen ([Beispiel](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Karten, Spalten und Zeilen über das Kontextmenü (ein 3-Punkte-Symbol) löschen
- Karten über das Kontextmenü (ein 3-Punkte-Symbol) oder die Tastenkombination `Ctrl (Command)`+`D` duplizieren (ermöglicht das Duplizieren mehrerer Karten)
- Kanban-Daten in eine JSON-Datei exportieren
- Die Kanban-Historie mit folgenden Tastenkombinationen verwalten:
    - `Ctrl (Command)`+`Z` – macht die letzte Aktion im Kanban rückgängig (ein Schritt zurück in der Kanban-Historie)
    - `Ctrl (Command)`+`Y` oder `Ctrl (Command)`+`Shift`+`Z` – wiederholt die mit *Undo* rückgängig gemachte Aktion (ein Schritt vorwärts in der Kanban-Historie)
- Karten per Drag & Drop an die gewünschte Stelle (Zeile und Spalte) verschieben
- Spalten und Zeilen über das Kontextmenü (ein 3-Punkte-Symbol) verschieben
- Spalten und Zeilen durch Doppelklick auf die entsprechenden Beschriftungen oder über das Kontextmenü (ein 3-Punkte-Symbol) umbenennen
- Einen Karten-Editor durch Klicken auf die Karte öffnen
- Zeilen durch Klicken auf das Pfeilsymbol links neben dem Zeilenlabel ein- oder ausklappen
- Spalten durch Klicken auf das Pfeilsymbol links neben dem Spaltenlabel ein- oder ausklappen
- Mehrere Karten mit folgenden Tastenkombinationen auswählen:
    - `Shift` + Klick auf die entsprechenden Karten, um mehrere Karten in derselben Spalte auszuwählen
    - `Ctrl (Command)` + Klick auf die entsprechenden Karten, um mehrere Karten in verschiedenen Spalten auszuwählen

import board from '@site/static/img/js_kanban_board.png';

<img
    src={board}
    alt="Kanban Board"
    className="img_border"
/>

### Editor

Der **Editor** ist ein modales Panel, das aus Feldern und Steuerelementen zur Verwaltung der ausgewählten Kartendaten besteht. Um den Editor anzuzeigen, klicken Sie auf die Karte, die Sie bearbeiten möchten. Sie können die Struktur des Editors flexibel anpassen, indem Sie neue Felder und Steuerelemente hinzufügen. Weitere Informationen finden Sie im Abschnitt [Konfiguration](guides/configuration.md#editor).

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="Kanban Editor"
    className="img_border"
/>

## Wie geht es weiter?

Jetzt können Sie Kanban in Ihrer Anwendung verwenden. Folgen Sie der Anleitung im Tutorial [How to start](how_to_start.md) für weitere Hinweise.