---
sidebar_label: selectCard()
title: selectCard Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren Sie mehr über die selectCard Methode. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# selectCard()

### Beschreibung

@short: Markiert eine Karte basierend auf der angegebenen ID.

### Verwendung

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der auszuwählenden Karte
- `groupMode` - (optional) aktiviert die Möglichkeit, mehrere Karten gleichzeitig auszuwählen (Standard ist **false**)

:::info
Wenn **groupMode** auf **true** gesetzt ist, behält die Methode **selectCard()** die aktuelle Auswahl bei und fügt die neue Karte der Auswahl hinzu.
:::

### Beispiel

~~~jsx {7-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// wähle die Karte mit der ID 1 aus
board.selectCard({
    id: 1,
    groupMode: true
});
~~~
