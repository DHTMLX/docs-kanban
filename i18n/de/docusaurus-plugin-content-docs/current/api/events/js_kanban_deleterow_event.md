---
sidebar_label: delete-row
title: delete-row Ereignis API
description: Lesen Sie die delete-row Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Entfernen einer Zeile ausgelöst wird.
---

# delete-row

### Beschreibung

@short: Wird ausgelöst, wenn eine Zeile entfernt wird

### Verwendung

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### Parameter

Der Callback des **delete-row** Events kann ein Objekt mit folgenden Parametern erhalten:

- `id` - (erforderlich) die ID der zu löschenden Zeile
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern des Sendens der Anfrage an den Server

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung auf das "delete-row" Event
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~