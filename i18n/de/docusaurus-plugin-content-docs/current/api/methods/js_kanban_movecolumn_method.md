---
sidebar_label: moveColumn()
title: moveColumn Methode API
description: Lesen Sie die API-Dokumentation der Methode moveColumn für DHTMLX Kanban. Erfahren Sie, wie Sie eine Spalte an eine neue Position verschieben.
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