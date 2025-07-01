---
sidebar_label: moveColumn()
title: moveColumn Methode
description: Sie können mehr über die moveColumn Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# moveColumn()

### Beschreibung

@short: Verschiebt eine Spalte an eine neue Position innerhalb des Boards.

### Verwendung

~~~jsx {}
moveColumn({
    id: string | number,
    before: string | number
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu verschiebenden Spalte
- `before` - (erforderlich) die ID der Spalte, vor der die verschobene Spalte eingefügt wird

### Beispiel

~~~jsx {7-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// die Spalte "backlog" verschieben und vor der Spalte "done" platzieren
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.1 eingeführt
