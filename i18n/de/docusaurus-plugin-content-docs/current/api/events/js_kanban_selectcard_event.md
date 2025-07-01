---
sidebar_label: select-card
title: select-card Event
description: Erfahren Sie, wie das select-card Event in der DHTMLX JavaScript Kanban-Bibliothek funktioniert. Entdecken Sie Entwicklerhandbücher und API-Referenzen, sehen Sie sich Codebeispiele und Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **select-card** Event erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die ID der ausgewählten Karte
- `groupMode` - (optional) zeigt den Multiselect-Modus an (Standardwert ist false)

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "select-card" Event abonnieren
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~
