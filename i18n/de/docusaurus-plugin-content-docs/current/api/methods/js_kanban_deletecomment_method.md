---
sidebar_label: deleteComment()
title: deleteComment Methode
description: Sie können die deleteComment-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteComment()

### Beschreibung

@short: Entfernt einen Kommentar von einer Karte anhand seiner ID

### Verwendung

~~~jsx {}
deleteComment({
    id?: string | number, 
    cardId: string | number
}): void;
~~~

### Parameter

- `id` - (optional) die ID des zu entfernenden Kommentars
- `cardId` - (erforderlich) die ID der Karte, die den Kommentar enthält

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
