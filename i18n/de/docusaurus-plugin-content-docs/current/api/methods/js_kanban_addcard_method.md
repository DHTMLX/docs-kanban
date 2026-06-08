---
sidebar_label: addCard()
title: addCard Methode API
description: Lesen Sie die API der addCard-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie eine neue Karte zum Board hinzufügen.
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

- `columnId` - (erforderlich) die ID der Zielspalte  
- `id` - (optional) die ID der neuen Karte  
- `rowId` - (optional) die ID der Zielreihe  
- `before` - (optional) die ID der Karte, vor der die neue Karte eingefügt wird  
- `select` - (optional) aktiviert/deaktiviert die Auswahl der neu hinzugefügten Karte  
- `card` - (optional) das Datenobjekt der neuen Karte  

:::info
Die vollständige Liste der **card**-Parameter finden Sie [**hier**](api/config/js_kanban_cards_config.md)
:::

### Beispiel

~~~jsx {7-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// neue Karte in die Spalte "backlog" einfügen
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "Neue Karte" }
});
~~~

:::tip
Sie können die ID der neuen Karte auch im **card**-Objekt angeben
:::