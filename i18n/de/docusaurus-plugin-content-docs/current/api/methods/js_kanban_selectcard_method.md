---
sidebar_label: selectCard()
title: selectCard Methode
description: Sie können die selectCard Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# selectCard()

### Beschreibung

@short: Wählt eine Karte anhand der angegebenen ID aus

### Verwendung

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der auszuwählenden Karte
- `groupMode` - (optional) aktiviert/deaktiviert die Mehrfachauswahl von Karten (**false** standardmäßig)

:::info
Wenn Sie den Parameter **groupMode** auf **true** setzen, setzt die Methode **selectCard()** die Auswahl der anderen Elemente nicht zurück
:::

### Beispiel

~~~jsx {7-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Karte mit der ID 1 auswählen
board.selectCard({
    id: 1,
    groupMode: true
});
~~~