---
sidebar_label: api.getReactiveState()
title: Methode getReactiveState
description: Sie erfahren mehr über die Methode getReactiveState in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.getReactiveState()

### Beschreibung

@short: Ruft ein Objekt mit den reaktiven Eigenschaften des Kanban-Boards ab.

### Verwendung

~~~jsx {}
api.getReactiveState(): object;
~~~

### Rückgabewert

Diese Methode gibt ein Objekt mit folgenden Eigenschaften zurück:

~~~jsx {}
{
    areasMeta: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...},
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    cardsMap: {...},
    cardsMeta: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    dragItemId: {...},
    dragItemsCoords: {...},
    edit: {...},
    history: {...},
    layout: {...},
    links: {...},
    overAreaId: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    rows: {...},
    scroll: {...},
    search: {...},
    selected: {...},
    sort: {...}
}
~~~  

### Beispiel

~~~jsx {7-37}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Zugriff auf den reaktiven Zustand des Kanban-Boards
const state = board.api.getReactiveState();

// Auf Änderungen der Spalten abonnieren und das aktualisierte Array ausgeben
state.columns.subscribe((data) => {
    console.log(data);
});

// Auf Änderungen der Karten abonnieren und das aktualisierte Array ausgeben
state.cards.subscribe((data) => {
    console.log(data);
});

// Auf Änderungen der Reihen abonnieren und das aktualisierte Array ausgeben
state.rows.subscribe((data) => {
    console.log(data);
});

// Auf Änderungen der Kartenauswahl abonnieren und die ausgewählten Karten-IDs ausgeben
state.selected.subscribe((data) => {
    console.log(data);
});

// Neue Auswahl setzen
state.selected.set([1, 2]);

// Die Auswahl aktualisieren, indem eine weitere Karten-ID hinzugefügt wird
state.selected.update((data) => {
    data.push(3);
    return data;
});
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version 1.4 aktualisiert
