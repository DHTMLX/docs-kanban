---
sidebar_label: api.getReactiveState()
title: getReactiveState Methode
description: Sie können die Methode getReactiveState in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.getReactiveState()

### Beschreibung

@short: Gibt ein Objekt mit den reaktiven Eigenschaften von Kanban zurück

### Verwendung

~~~jsx {}
api.getReactiveState(): object;
~~~

### Rückgabewert

Die Methode gibt ein Objekt mit den folgenden Parametern zurück:

~~~jsx {}
{
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    history: {...},
    links: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    editorShape: {...},
    rows: {...},
    search: {...},
    selected: {...},
    sort: {...},

    // entfernte Parameter
    /*  
        fromAreaMeta: {...},
        dropAreaItemsCoords: {...},
        dropAreasCoords: {...},
        overAreaMeta: {...},  
        before: {...},
        dragItemId: {...},
        dragItemsCoords: {...},
        overAreaId: {...},
    /*

    // private Parameter
    /*
        edit -> _edit: {...},
        layout -> layout: {...},
        cardsMap -> _cardsMap: {...},
        cardsMeta -> _cardsMeta: {...},
        areasMeta -> _areasMeta: {...},
        scroll -> _scroll: {...},
    */
}
~~~  

:::warning
Diese Zustands-Eigenschaften sind schreibgeschützt. Ändern Sie sie nicht, um unerwartetes Verhalten zu vermeiden!
:::

### Beispiel

~~~jsx {7-37}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Reaktiven Zustand von Kanban abrufen
const state = board.api.getReactiveState();

// Auf Änderungen der Spalten abonnieren und das Array der Spalten ausgeben
state.columns.subscribe((data) => {
    console.log(data);
});

// Auf Änderungen der Karten abonnieren und das Array der Karten ausgeben
state.cards.subscribe((data) => {
    console.log(data);
});

// Auf Änderungen der Reihen abonnieren und das Array der Reihen ausgeben
state.rows.subscribe((data) => {
    console.log(data);
});

// Auf die Kartenauswahl abonnieren und die IDs der ausgewählten Karten ausgeben
state.selected.subscribe((data) => {
    console.log(data);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.7 aktualisiert