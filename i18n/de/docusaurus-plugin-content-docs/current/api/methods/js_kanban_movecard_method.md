---
sidebar_label: moveCard()
title: moveCard Methode
description: Erfahren Sie mehr über die moveCard Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# moveCard()

### Beschreibung

@short: Verschiebt eine Karte in die angegebene Spalte (und Zeile)

### Verwendung

~~~jsx {}
moveCard({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der Karte, die verschoben werden soll  
- `columnId` - (erforderlich) die ID der Spalte, in die die Karte eingefügt wird  
- `rowId` - (optional) die ID der Zeile, in die die Karte eingefügt wird  
- `before` - (optional) die ID der Karte, vor der die neue Karte platziert wird  

:::info
Wenn Sie die Eigenschaft **rowKey** in der Widget-Konfiguration angeben, ist der Parameter **rowId** der Methode **moveCard()** *erforderlich*!
:::

### Beispiel

~~~jsx {9-14}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// die Karte mit der ID 1 verschieben
// das Element wird in die Spalte "inprogress" und die Zeile "feature"  
// vor der Karte mit der ID 8 eingefügt
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~