---
sidebar_label: addCard()
title: Methode addCard
description: Sie können mehr über die Methode addCard in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# addCard()

### Beschreibung

@short: Fügt eine neue Karte in das Kanban-Board ein

### Verwendung

~~~jsx {}
addCard({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object
}): void;
~~~

### Parameter

- `columnId` - (erforderlich) die ID der Spalte, in die die Karte eingefügt wird  
- `id` - (optional) die Kennung für die neue Karte  
- `rowId` - (optional) die ID der Zeile, in der die Karte platziert werden soll  
- `before` - (optional) die ID der Karte, vor der die neue Karte eingefügt wird  
- `select` - (optional) bestimmt, ob die neue Karte nach dem Einfügen ausgewählt wird  
- `card` - (optional) das Datenobjekt, das die neue Karte repräsentiert  

:::info
Eine vollständige Liste der **card**-Parameter finden Sie [**hier**](/api/config/js_kanban_cards_config.md)
:::

### Beispiel

~~~jsx {7-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// neue Karte in der Spalte "backlog" hinzufügen
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "Neue Karte" }
});
~~~

:::tip
Es ist auch möglich, die Karten-ID innerhalb des **card**-Objekts anzugeben
:::
