---
sidebar_label: api.intercept()
title: intercept Methode
description: Sie können die intercept Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.intercept()

### Beschreibung

@short: Ermöglicht das Abfangen und Blockieren interner Ereignisse, bevor sie eintreten.

### Verwendung

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameter

- `event` - (erforderlich) das zu überwachende Ereignis
- `callback` - (erforderlich) die auszuführende Funktion (deren Argumente vom abgefangenen Ereignis abhängen)

### Ereignisse

:::info
Die vollständige Liste der internen Kanban-Ereignisse finden Sie [**hier**](/api/overview/main_overview.md/#kanban-events)
:::

### Beispiel

~~~jsx {7-11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// verhindern, dass Karten in die Spalte mit der ID "done" verschoben werden
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
});
~~~
