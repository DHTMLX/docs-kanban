---
sidebar_label: deleteCard()
title: Methode deleteCard
description: Sie können die Methode deleteCard in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteCard()

### Beschreibung

@short: Entfernt die angegebene Karte aus dem Datenspeicher des Kanban

### Verwendung

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu löschenden Karte

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Karte anhand ihrer ID entfernen
board.deleteCard({ id: 1 });
~~~