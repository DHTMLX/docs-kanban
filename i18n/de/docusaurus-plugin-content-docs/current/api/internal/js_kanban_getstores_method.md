---
sidebar_label: api.getStores()
title: getStores Methode API
description: Lesen Sie die API der getStores-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie ein Objekt mit den DataStore-Eigenschaften des Boards abrufen.
---

# api.getStores()

### Beschreibung

@short: Gibt ein Objekt mit den DataStore-Eigenschaften des Kanban zurück

### Verwendung

~~~jsx {}
api.getStores(): object;
~~~

### Rückgabewert

Die Methode gibt ein Objekt mit den **DataStore** Parametern zurück:

~~~jsx {}
{
    data: DataStore // ( Objekt mit Parametern )
}
~~~

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// das DataStore-Objekt des Kanban abrufen
const store = board.api.getStores();
console.log(store);
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 aktualisiert