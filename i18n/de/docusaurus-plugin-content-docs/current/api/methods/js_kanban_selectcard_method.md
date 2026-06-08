---
sidebar_label: selectCard()
title: selectCard Methode API
description: Lesen Sie die API-Dokumentation der selectCard-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie eine Karte anhand ihrer ID auswählen.
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