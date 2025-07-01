---
sidebar_label: api.on()
title: on Methode
description: Erfahren Sie mehr über die on Methode in der DHTMLX JavaScript Kanban Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.on()

### Beschreibung

@short: Ermöglicht das Anhängen eines Handlers an interne Ereignisse

### Verwendung

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameter

- `event` - (erforderlich) das Ereignis, auf das gehört werden soll 
- `handler` - (erforderlich) die Funktion, die das Ereignis behandelt (Argumente hängen vom ausgelösten Ereignis ab)

### Ereignisse

:::info
Die vollständige Liste der internen Kanban-Ereignisse finden Sie [**hier**](/api/overview/main_overview.md/#kanban-events)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kartendaten werden in der Konsole protokolliert, wenn eine Karte verschoben wird
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
});
~~~
