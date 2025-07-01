---
sidebar_label: destructor()
title: destructor-Methode
description: Sie erfahren mehr über die destructor-Methode der Toolbar in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# destructor()

### Beschreibung

@short: Räumt auf, indem alle Toolbar-HTML-Elemente entfernt und alle zugehörigen Ereignisse abgehängt werden.

### Verwendung

~~~jsx {}
destructor(): void;
~~~

### Beispiel

~~~jsx {6}
// create Kanban
const board = new kanban.Kanban("#root", {});
// create Toolbar
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// remove Toolbar
toolbar.destructor();
~~~
