---
sidebar_label: getSelection()
title: getSelection Methode
description: Sie können mehr über die getSelection Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getSelection()

### Beschreibung

@short: Gibt ein Array mit der ID bzw. den IDs der ausgewählten Karte(n) zurück

### Verwendung

~~~jsx {}
getSelection(): array;
~~~

### Rückgabewert

Diese Methode gibt ein Array mit der ID bzw. den IDs der aktuell ausgewählten Karte(n) zurück.

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
