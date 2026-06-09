---
sidebar_label: select-card
title: select-card Ereignis API
description: Lesen Sie die select-card Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Auswählen einer Karte ausgelöst wird.
---

# select-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte ausgewählt wird

### Verwendung

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### Parameter

Der Callback des **select-card** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der ausgewählten Karte
- `groupMode` - (optional) Mehrfachauswahl (standardmäßig false)

:::info
Für die Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "select-card" Event abonnieren
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~