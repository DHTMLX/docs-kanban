---
sidebar_label: serialize()
title: serialize Methode
description: Sie können mehr über die serialize Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# serialize()

### Beschreibung

@short: Serialisiert die Kanban-Daten in JSON

### Verwendung

~~~jsx {}
serialize(): object;
~~~

### Rückgabewert

Die Methode gibt das Objekt mit den Kanban-Daten zurück  

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...],
    links: [{...}, {...}, ...]
}
~~~

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Das Objekt mit den Kanban-Daten abrufen
board.serialize();
~~~