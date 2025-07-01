---
sidebar_label: delete-column
title: delete-column Event
description: Erkunden Sie das delete-column Event in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# delete-column

### Beschreibung

@short: Wird ausgelöst, wenn eine Spalte entfernt wird

### Verwendung

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **delete-column** Event erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die ID der zu löschenden Spalte
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server gesendet wird oder nicht

:::info
Um interne Events zu verwalten, siehe die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "delete-column" Event hören
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~
