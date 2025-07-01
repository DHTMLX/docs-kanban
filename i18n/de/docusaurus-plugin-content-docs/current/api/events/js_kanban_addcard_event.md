---
sidebar_label: add-card
title: add-card Ereignis
description: Erfahren Sie, wie das add-card Ereignis in der DHTMLX JavaScript Kanban-Bibliothek funktioniert. Entdecken Sie Entwickleranleitungen, API-Referenzen, Testcode-Beispiele, sehen Sie sich Live-Demos an und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# add-card

### Beschreibung

@short: Wird ausgelöst, wenn eine neue Karte hinzugefügt wird

### Verwendung

~~~jsx {}
"add-card": ({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object,
    skipProvider?: boolean,
}) => void;
~~~

### Parameter

Der Callback für das **add-card** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `columnId` - (erforderlich) die ID der Spalte, in der die Karte hinzugefügt wird
- `id` - (optional) die ID, die der neuen Karte zugewiesen wird
- `rowId` - (optional) die ID der Zeile, in der die Karte platziert werden soll
- `before` - (optional) die ID der Karte, vor der die neue Karte eingefügt wird
- `select` - (optional) legt fest, ob die neu hinzugefügte Karte ausgewählt werden soll
- `card` - (optional) das Datenobjekt, das die neue Karte repräsentiert. Vollständige Details zu den Kartenparametern finden Sie [hier](/api/config/js_kanban_cards_config.md)
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server übersprungen werden soll

:::info
Für die Verwaltung interner Ereignisse siehe die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-card" Ereignis überwachen
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~
