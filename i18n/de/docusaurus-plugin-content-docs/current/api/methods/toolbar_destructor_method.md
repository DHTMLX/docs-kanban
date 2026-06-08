---
sidebar_label: destructor()
title: Toolbar destructor Methode API
description: Lesen Sie die Toolbar destructor Method API für DHTMLX Kanban. Erfahren Sie, wie Sie die Toolbar zerstören und alle zugehörigen Event-Listener entfernen.
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