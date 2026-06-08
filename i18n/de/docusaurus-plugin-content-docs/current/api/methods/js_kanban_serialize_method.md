---
sidebar_label: serialize()
title: serialize Methode API
description: Lesen Sie die API-Dokumentation der serialize-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie die Board-Daten in JSON serialisieren.
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