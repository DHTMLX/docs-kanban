---
sidebar_label: getSelection()
title: getSelection Methode API
description: Lesen Sie die API-Dokumentation der Methode getSelection für DHTMLX Kanban. Erfahren Sie, wie Sie die IDs der aktuell ausgewählten Karten abrufen.
---

# getSelection()

### Beschreibung

@short: Gibt ein Array mit der ID bzw. den IDs der ausgewählten Karte(n) zurück

### Verwendung

~~~jsx {}
getSelection(): array;
~~~

### Rückgabewert

Die Methode gibt ein Array mit der ID bzw. den IDs der ausgewählten Karte(n) zurück

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// gibt ein Array mit den IDs der ausgewählten Karten zurück
board.getSelection();
~~~