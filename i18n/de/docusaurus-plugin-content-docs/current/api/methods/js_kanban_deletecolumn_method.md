---
sidebar_label: deleteColumn()
title: deleteColumn Methode API
description: Lesen Sie die API-Dokumentation der Methode deleteColumn für DHTMLX Kanban. Erfahren Sie, wie Sie eine Spalte anhand ihrer ID vom Board entfernen.
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