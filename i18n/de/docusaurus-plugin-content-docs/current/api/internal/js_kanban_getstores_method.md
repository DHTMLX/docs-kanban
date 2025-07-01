---
sidebar_label: api.getStores()
title: getStores-Methode
description: Sie können die getStores-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.getStores()

### Beschreibung

@short: Ruft ein Objekt mit den DataStore-Eigenschaften des Kanban ab.

### Verwendung

~~~jsx {}
api.getStores(): object;
~~~

### Rückgabewert

Diese Methode gibt ein Objekt zurück, das die **DataStore**-Parameter enthält:

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
// DataStore-Objekt des Kanban abrufen
const store = board.api.getStores();
console.log(store);
~~~

**Änderungsprotokoll:** Die Methode wurde in Version 1.2 aktualisiert
