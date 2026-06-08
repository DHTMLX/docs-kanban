---
sidebar_label: moveRow()
title: moveRow Methode API
description: Lesen Sie die API-Dokumentation der Methode moveRow für DHTMLX Kanban. Erfahren Sie, wie Sie eine Zeile an eine neue Position verschieben.
---

# moveRow()

### Beschreibung

@short: Verschiebt eine Zeile an eine neue Position

### Verwendung

~~~jsx {}
moveRow({
    id: string | number,
    before?: string | number
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu verschiebenden Zeile
- `before` - (optional) die ID der Zeile, vor der die verschobene Zeile platziert wird. Wenn Sie den Parameter `before` nicht angeben, wird die Zeile am Ende des Boards eingefügt.

### Beispiel

~~~jsx {8-11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// Verschiebt die "task" Swimlane und platziert sie vor (über) der "feature" Swimlane
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.1 hinzugefügt