---
sidebar_label: getAreaCards()
title: getAreaCards Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die getAreaCards Methode. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getAreaCards()

### Beschreibung

@short: Ruft ein Array mit Datenobjekten aller Karten in der angegebenen Spalte (und Zeile) ab.

### Verwendung

~~~jsx {}
getAreaCards(
    columnId: string | number,
    rowId?: string | number
): array;
~~~

### Parameter

- `columnId` - (erforderlich) die ID der anzusprechenden Spalte  
- `rowId` - (optional) die ID der anzusprechenden Zeile

### Rückgabewert

Diese Methode gibt ein Array von Datenobjekten zurück, die die Karten repräsentieren.

:::info
Wenn das Kanban-Board **Spalten** ohne **Zeilen** hat, ist nur der Parameter ***columnId*** erforderlich. In diesem Fall liefert die Methode ein Array mit allen Kartendatenobjekten in dieser Spalte.

Wenn das Kanban-Board sowohl **Spalten** als auch **Zeilen** enthält, müssen sowohl die Parameter ***columnId*** als auch ***rowId*** angegeben werden. Die Methode gibt dann ein Array von Datenobjekten für Karten zurück, die sich in der angegebenen Spalte und Zeile befinden.
:::

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Array von Kartendatenobjekten aus der angegebenen Spalte und Zeile abrufen
board.getAreaCards("column_id", "row_id");
~~~
