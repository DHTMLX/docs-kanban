---
sidebar_label: getColumnCards()
title: getColumnCards Methode API
description: Lesen Sie die API-Dokumentation der Methode getColumnCards für DHTMLX Kanban. Erfahren Sie, wie Sie alle Karten einer Spalte als Array von Datenobjekten abrufen.
---

# getColumnCards()

### Beschreibung

@short: Gibt ein Array zurück, das die Datenobjekte aller Karten in der angegebenen Spalte speichert

### Verwendung

~~~jsx {}
getColumnCards(id: string | number): array;
~~~

### Parameter

- `id` - (erforderlich) die ID der Zielspalte

### Rückgabewert

Die Methode gibt ein Array zurück, das die Datenobjekte aller Karten in der angegebenen Spalte speichert

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Datenobjekte aller Karten innerhalb der Spalte mit der ID 1 abrufen
const cards_data = board.getColumnCards(1);
console.log(cards_data);
~~~

**Änderungsprotokoll**: Die Methode wurde in Version v1.7 hinzugefügt