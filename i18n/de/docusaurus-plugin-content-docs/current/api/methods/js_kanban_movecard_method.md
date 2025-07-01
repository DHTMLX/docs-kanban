---
sidebar_label: moveCard()
title: moveCard-Methode
description: Entdecken Sie die moveCard-Methode in der DHTMLX JavaScript Kanban-Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen, Code-Beispiele, Live-Demos an und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# moveCard()

### Beschreibung

@short: Verschiebt eine Karte in eine angegebene Spalte (und Zeile).

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

- `id` - (erforderlich) die ID der zu verschiebenden Karte 
- `columnId` - (erforderlich) die ID der Zielspalte, in der die Karte platziert wird 
- `rowId` - (optional) die ID der Zielzeile, in der die Karte positioniert wird
- `before` - (optional) die ID der Karte, vor der die verschobene Karte eingefügt wird

:::info
Wenn die Eigenschaft **rowKey** in der Widget-Konfiguration gesetzt ist, wird das Angeben von **rowId** in der **moveCard()**-Methode *verpflichtend*!
:::

### Beispiel

~~~jsx {9-14}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Karte mit ID 1 verschieben
// sie wird in der Spalte "inprogress" und der Zeile "feature" platziert,
// positioniert vor der Karte mit der ID 8
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~
