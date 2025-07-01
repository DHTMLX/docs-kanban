---
sidebar_label: moveRow()
title: moveRow-Methode
description: Sie können mehr über die moveRow-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# moveRow()

### Beschreibung

@short: Verschiebt eine Zeile an eine neue Position innerhalb des Boards.

### Verwendung

~~~jsx {}
moveRow({
    id: string | number,
    before: string | number
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der Zeile, die verschoben werden soll
- `before` - (erforderlich) die ID der Zeile, vor der die verschobene Zeile positioniert wird

### Beispiel

~~~jsx {8-11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// Verschiebt die Swimlane "task" und platziert sie vor der Swimlane "feature"
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.1 hinzugefügt
