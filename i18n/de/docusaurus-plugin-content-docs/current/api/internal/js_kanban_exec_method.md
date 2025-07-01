---
sidebar_label: api.exec()
title: exec Methode
description: Erfahren Sie mehr über die exec Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.exec()

### Beschreibung

@short: Diese Methode ermöglicht es Ihnen, interne Ereignisse innerhalb des Kanban-Boards auszulösen.

### Verwendung

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameter

- `event` - (erforderlich) das Ereignis, das Sie auslösen möchten 
- `config` - (erforderlich) ein Objekt mit Parametern, die sich auf das ausgelöste Ereignis beziehen

### Ereignisse

:::info
Eine vollständige Liste der internen Kanban-Ereignisse finden Sie [**hier**](/api/overview/main_overview.md/#kanban-events)
:::

### Beispiel

~~~jsx {7,9-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Karte mit der ID 1 auswählen
board.api.exec("select-card", { id: 1 });
// Neue Karte hinzufügen, ohne Änderungen an den Server zu senden
board.api.exec("add-card", { 
    columnId: "backlog",
    skipProvider: true, 
});
~~~

**Verwandtes Beispiel:** [Kanban. Sortierung beibehalten](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)
