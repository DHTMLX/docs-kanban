---
sidebar_label: deleteCard()
title: deleteCard Methode
description: Sie können die deleteCard Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteCard()

### Beschreibung

@short: Löscht eine bestimmte Karte aus dem Kanban-Datenspeicher.

### Verwendung

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die eindeutige Kennung der zu entfernenden Karte

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Löschen einer Karte anhand ihrer id
board.deleteCard({ id: 1 });
~~~
