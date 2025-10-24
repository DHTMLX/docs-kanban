---
sidebar_label: getAreaCards()
title: getAreaCards Methode
description: Sie können die getAreaCards-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# getAreaCards()

### Beschreibung

@short: Gibt ein Array mit Datenobjekten aller Karten der angegebenen Spalte (und Zeile) zurück

### Verwendung

~~~jsx {}
getAreaCards(
    columnId: string | number,
    rowId?: string | number
): array;
~~~

### Parameter

- `columnId` - (erforderlich) die ID der Zielspalte
- `rowId` - (optional) die ID der Zielzeile

### Rückgabewert

Die Methode gibt ein Array mit Datenobjekten der Karten zurück

:::info
Wenn Kanban nur **Spalten** ohne **Zeilen** enthält, müssen Sie nur den Parameter ***columnId*** übergeben. In diesem Fall gibt die Methode ein Array mit Datenobjekten zurück, die alle Karten der angegebenen Spalte enthalten.

Wenn Kanban **Spalten** und **Zeilen** enthält, können Sie sowohl die Parameter ***columnId*** als auch ***rowId*** übergeben. In diesem Fall gibt die Methode ein Array mit Datenobjekten zurück, die alle Karten der spezifischen Spalte und Zeile enthalten.
:::

### Beispiel

~~~jsx {8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// ein Array mit den Datenobjekten der Karten der angegebenen Spalte und Zeile abrufen
board.getAreaCards("column_id", "row_id");
~~~