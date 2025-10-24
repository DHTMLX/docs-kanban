---
sidebar_label: getCard()
title: getCard Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die getCard Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# getCard()

### Beschreibung

@short: Ruft das Datenobjekt der Karte anhand der angegebenen ID ab

### Verwendung

~~~jsx {}
getCard(id: string | number): object;
~~~

### Parameter

- `id` - (erforderlich) die ID der Zielkarte

### Rückgabewert

Die Methode gibt das Datenobjekt der Karte mit der angegebenen ID zurück

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// das Datenobjekt der Karte mit der ID 1 abrufen
const card_data = board.getCard(1);
console.log(card_data);
~~~