---
sidebar_label: api.exec()
title: exec Methode API
description: Lesen Sie die API der exec-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie Board-Aktionen und interne Ereignisse programmgesteuert auslösen.
---

# api.exec()

### Beschreibung

@short: Ermöglicht das Auslösen interner Ereignisse

### Verwendung

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameter

- `event` - (erforderlich) ein auszulösendes Ereignis
- `config` - (erforderlich) das Konfigurationsobjekt mit Parametern (siehe das auszulösende Ereignis)

### Ereignisse

:::info
Die vollständige Liste der internen Kanban-Ereignisse finden Sie [**hier**](api/overview/main_overview.md/#kanban-events)
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