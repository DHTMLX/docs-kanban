---
sidebar_label: api.getState()
title: getState Methode
description: Sie können mehr über die getState Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.getState()

### Beschreibung

@short: Ruft ein Objekt ab, das die Eigenschaften des StateStore des Kanban enthält.

### Verwendung

~~~jsx {}
api.getState(): object;
~~~

### Rückgabewert

Diese Methode gibt ein Objekt mit den folgenden Eigenschaften zurück:

~~~jsx {}
{    
    areasMeta: object, 
    before: string | number, 
    cardHeight: number | null, 
    cards: array,
    cardShape: object,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    edit: object,
    history: object,
    layout: string,
    links: array,
    overAreaId: string | number, 
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    scroll: object,
    search: object,
    selected: array, 
    sort: object,
    // veraltete Optionen
    fromAreaMeta: object, // gelöscht in v.1.2
    editorShape: array, // gelöscht in v.1.4
    dropAreaItemsCoords: array, // veraltet in v1.4
    dropAreasCoords: array, // veraltet in v1.4 
    overAreaMeta: object, // veraltet in v1.4
}
~~~

### Beispiel

~~~jsx {7-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// den aktuellen Zustand des Kanban abrufen
const state = board.api.getState();
console.log(state.cards); // zeigt die Kartendaten an
console.log(state.columns); // zeigt die Spaltendaten an
console.log(state.rows); // zeigt die Zeilendaten an
console.log(state.cardShape); // zeigt die Kartenkonfiguration an
//...
~~~

**Änderungsprotokoll:**
Die Methode wurde in Version 1.4 aktualisiert. Die folgenden Parameter wurden veraltet:
- ***dropAreaItemsCoords***
- ***dropAreasCoords***
- ***overAreaMeta***
Der Parameter ***editorShape*** wurde entfernt
