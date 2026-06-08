---
sidebar_label: delete-card
title: delete-card Ereignis API
description: Lesen Sie die delete-card Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Entfernen einer Karte ausgelöst wird.
---

# delete-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte entfernt wird

### Verwendung

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **delete-card** Events kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (erforderlich) die ID der zu löschenden Karte
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "delete-card" Event abonnieren
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~