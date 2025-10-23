---
sidebar_label: destructor()
title: destructor Methode
description: Sie können mehr über die destructor Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# destructor()

### Beschreibung

@short: Entfernt alle HTML-Elemente des Kanban und löst alle zugehörigen Ereignisse.

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