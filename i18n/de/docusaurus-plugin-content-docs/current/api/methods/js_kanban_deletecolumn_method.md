---
sidebar_label: deleteColumn()
title: deleteColumn Methode
description: Sie können mehr über die deleteColumn Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteColumn()

### Beschreibung

@short: Entfernt die angegebene Spalte aus dem Datenspeicher des Kanban

### Verwendung

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu löschenden Spalte

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