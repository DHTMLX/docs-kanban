---
sidebar_label: api.getState()
title: getState-Methode
description: Sie können die getState-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.getState()

### Beschreibung

@short: Gibt ein Objekt mit den StateStore-Eigenschaften des Kanban zurück

### Verwendung

~~~jsx {}
api.getState(): object;
~~~

### Rückgabewert

Die Methode gibt ein Objekt mit den folgenden Parametern zurück:

~~~jsx {}
{
    cardHeight: number | null,
    cards: array,
    cardShape: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    links: array,
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    editorShape: array,
    history: object,
    search: object,
    selected: array,
    sort: object,

    // entfernte Parameter
    /*    
        fromAreaMeta: object,
        dropAreaItemsCoords: array,
        dropAreasCoords: array,
        overAreaMeta: object,
        before: string | number,
        dragItemId: string | number,
        dragItemsCoords: array,
        overAreaId: string | number,
    /*

    // private Parameter
    /*
        edit -> _edit: object,
        layout -> layout: string,
        cardsMap -> _cardsMap: object,
        cardsMeta -> _cardsMeta: object,
        areasMeta -> _areasMeta: object,
        scroll -> _scroll: object,
    */
}
~~~

:::warning
Diese Zustands-Eigenschaften sind schreibgeschützt. Ändern Sie sie nicht, um unerwartetes Verhalten zu vermeiden!
:::

### Beispiel

~~~jsx {7-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// den Zustand des Kanban abrufen
const state = board.api.getState();
console.log(state.cards); // gibt die Kartendaten aus
console.log(state.columns); // gibt die Spaltendaten aus
console.log(state.rows); // gibt die Zeilendaten aus
console.log(state.cardShape); // gibt die Kartenkonfiguration aus
//...
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.7 aktualisiert