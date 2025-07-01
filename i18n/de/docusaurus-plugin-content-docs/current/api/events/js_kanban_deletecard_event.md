---
sidebar_label: delete-card
title: delete-card Ereignis
description: Entdecken Sie das delete-card Ereignis in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Finden Sie Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **delete-card** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die Kennung der gelöschten Karte
- `skipProvider` - (optional) steuert, ob das Senden der Anfrage an den Server blockiert werden soll

:::info
Um interne Ereignisse zu verwalten, siehe die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "delete-card" Ereignis hören 
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~
