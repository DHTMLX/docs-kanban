---
sidebar_label: add-card
title: add-card Ereignis
description: Sie können mehr über das add-card Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback des **add-card** Ereignisses kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `columnId` - (erforderlich) die ID der Zielspalte
- `id` - (optional) die ID der neuen Karte
- `rowId` - (optional) die ID der Zielreihe
- `before` - (optional) die ID der Karte, vor der die neue Karte eingefügt wird
- `select` - (optional) aktiviert/deaktiviert die Auswahl der neu hinzugefügten Karte
- `card` - (optional) das Datenobjekt der neuen Karte. Die vollständige Liste der Kartenparameter finden Sie [hier](api/config/js_kanban_cards_config.md)
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Für die Behandlung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung zum "add-card" Ereignis
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~