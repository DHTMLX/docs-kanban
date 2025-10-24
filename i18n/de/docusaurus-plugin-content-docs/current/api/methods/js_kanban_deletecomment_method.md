---
sidebar_label: deleteComment()
title: deleteComment Methode
description: Sie können die deleteComment Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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