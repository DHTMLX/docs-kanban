---
sidebar_label: delete-row
title: delete-row Event
description: Erfahren Sie, wie das delete-row Event in der DHTMLX JavaScript Kanban-Bibliothek funktioniert. Entdecken Sie Entwicklerhandbücher, sehen Sie sich die API-Referenz an, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **delete-row** Event akzeptiert ein Objekt mit den folgenden Parametern:

- `id` - (erforderlich) die ID der Zeile, die gelöscht wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server gesendet wird oder nicht

:::info
Um mit internen Events zu arbeiten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) konsultieren
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "delete-row" Event hören
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~
