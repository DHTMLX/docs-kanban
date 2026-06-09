---
sidebar_label: deleteComment()
title: deleteComment Methode API
description: Lesen Sie die API-Dokumentation der Methode deleteComment für DHTMLX Kanban. Erfahren Sie, wie Sie einen Kartenkommentar anhand seiner ID löschen.
---

# deleteComment()

### Beschreibung

@short: Löschen Sie einen Kommentar einer Karte anhand seiner ID

### Verwendung

~~~jsx {}
deleteComment({
    id: string | number, 
    cardId: string | number
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID des zu löschenden Kommentars
- `cardId` - (erforderlich) die ID der Karte, deren Kommentar gelöscht werden soll

### Beispiel

~~~jsx {7-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kommentar löschen
board.deleteComment({
    id: 1,
    cardId: 1,
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.4 hinzugefügt