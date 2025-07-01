---
sidebar_label: getCard()
title: getCard-Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die getCard-Methode. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getCard()

### Beschreibung

@short: Ruft das Datenobjekt einer Karte anhand ihrer angegebenen ID ab

### Verwendung

~~~jsx {}
getCard(id: string | number): object;
~~~

### Parameter

- `id` - (erforderlich) die ID der Karte, auf die Sie zugreifen möchten

### Rückgabewert

Diese Methode gibt das Datenobjekt zurück, das mit der durch die angegebene ID identifizierten Karte verknüpft ist

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ruft das Datenobjekt für die Karte mit der ID 1 ab
board.getCard(1);
~~~
