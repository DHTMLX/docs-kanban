---
sidebar_label: delete-link
title: delete-link Ereignis API
description: Lesen Sie die delete-link Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Entfernen eines Links ausgelöst wird.
---

# delete-link

### Beschreibung

@short: Wird ausgelöst, wenn ein Link entfernt wird

### Verwendung

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **delete-link** Events kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (erforderlich) die ID des zu löschenden Links
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern des Sendens der Anfrage an den Server

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {8-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// auf das "delete-link" Event abonnieren
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**Änderungsprotokoll:** Das Event wurde in Version v1.4 hinzugefügt