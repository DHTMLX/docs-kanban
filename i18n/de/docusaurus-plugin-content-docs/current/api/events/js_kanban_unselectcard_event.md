---
sidebar_label: unselect-card
title: unselect-card Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das unselect-card Event erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Beispielcode und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# unselect-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte abgewählt wird

### Verwendung

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Parameter

Der Callback des **unselect-card** Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `id` - (erforderlich) die ID der Karte, die abgewählt wird

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
// Abonnieren des "unselect-card" Events
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~