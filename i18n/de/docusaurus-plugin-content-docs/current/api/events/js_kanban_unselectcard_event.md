---
sidebar_label: unselect-card
title: unselect-card Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das unselect-card Event erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# unselect-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte abgewählt wird

### Verwendung

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### Parameter

Der Callback für das **unselect-card** Event erhält ein Objekt mit folgender Eigenschaft:

- `id` - (erforderlich) die ID der Karte, die abgewählt wurde

:::info
Um interne Events zu verwalten, können Sie sich auf die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden) beziehen.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "unselect-card" Event
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~
