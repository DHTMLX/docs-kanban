---
sidebar_label: api.getStores()
title: getStores Methode
description: Sie können mehr über die getStores Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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