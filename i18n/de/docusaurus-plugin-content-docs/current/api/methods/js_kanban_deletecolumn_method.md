---
sidebar_label: deleteColumn()
title: deleteColumn Methode
description: Sie können die deleteColumn Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteColumn()

### Beschreibung

@short: Löscht eine angegebene Spalte aus dem Kanban-Datenspeicher.

### Verwendung

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu entfernenden Spalte

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Spalte anhand ihrer ID entfernen
board.deleteColumn({ id: "backlog" });
~~~
