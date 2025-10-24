---
sidebar_label: delete-column
title: delete-column Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das delete-column Event erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback des **delete-column** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der zu löschenden Spalte
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

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
// Auf das "delete-column" Event abonnieren 
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~