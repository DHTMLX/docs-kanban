---
sidebar_label: moveColumn()
title: moveColumn Methode
description: Sie können die moveColumn Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# moveColumn()

### Beschreibung

@short: Verschiebt eine Spalte an eine neue Position

### Verwendung

~~~jsx {}
moveColumn({
    id: string | number,
    before?: string | number
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu verschiebenden Spalte
- `before` - (optional) die ID der Spalte, vor der die verschobene Spalte platziert wird. Wenn Sie den Parameter `before` nicht angeben, wird die Spalte am Ende des Boards eingefügt

### Beispiel

~~~jsx {7-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Verschiebt die "backlog"-Spalte und platziert sie vor der "done"-Spalte
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.1 hinzugefügt