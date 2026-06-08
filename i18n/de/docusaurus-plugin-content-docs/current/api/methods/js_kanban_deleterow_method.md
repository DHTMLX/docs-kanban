---
sidebar_label: deleteRow()
title: deleteRow Methode API
description: Lesen Sie die API-Dokumentation der Methode deleteRow für DHTMLX Kanban. Erfahren Sie, wie Sie eine Zeile anhand ihrer ID vom Board entfernen.
---

# deleteRow()

### Beschreibung

@short: Entfernt die angegebene Zeile aus dem Datenspeicher des Kanban

### Verwendung

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu löschenden Zeile

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Zeile anhand ihrer ID entfernen
board.deleteRow({ id: "feature" });
~~~