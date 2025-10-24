---
sidebar_label: destructor()
title: destructor Methode
description: Sie erfahren mehr über die destructor Methode der Toolbar in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# destructor()

### Beschreibung

@short: Entfernt alle HTML-Elemente der Toolbar und trennt alle zugehörigen Ereignisse

### Verwendung

~~~jsx {}
destructor(): void;
~~~

### Beispiel

~~~jsx {6}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Toolbar erstellen
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// Toolbar entfernen
toolbar.destructor();
~~~