---
sidebar_label: serialize()
title: serialize Methode
description: Sie können die serialize Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# serialize()

### Beschreibung

@short: Wandelt die Kanban-Daten in ein JSON-Format um.

### Verwendung

~~~jsx {}
serialize(): object;
~~~

### Rückgabewert

Diese Methode gibt ein Objekt zurück, das die Kanban-Daten enthält:

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...]
}
~~~

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban-Datenobjekt abrufen
board.serialize();
~~~
