---
sidebar_label: destructor()
title: Methode destructor
description: Sie können mehr über die Methode destructor in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# destructor()

### Beschreibung

@short: Löscht alle HTML-Elemente des Kanban-Boards und entfernt alle zugehörigen Ereignishandler.

### Verwendung

~~~jsx {}
destructor(): void;
~~~

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban entfernen
board.destructor();
~~~
