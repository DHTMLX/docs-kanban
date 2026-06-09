---
sidebar_label: destructor()
title: destructor Methode API
description: Lesen Sie die API-Dokumentation der Methode destructor für DHTMLX Kanban. Erfahren Sie, wie Sie das Board zerstören und alle zugehörigen Event-Listener trennen.
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