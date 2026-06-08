---
sidebar_label: api.detach()
title: detach Methode API
description: Lesen Sie die API der detach-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie einen Event-Listener entfernen oder abtrennen.
---

# api.detach()

## Beschreibung

@short: Ermöglicht das Entfernen/Abtrennen eines Event-Listeners

## Verwendung

~~~jsx
api.detach(tag: number | string | symbol ): void;
~~~

## Parameter

- `tag` - das Tag, das zur Identifizierung eines Event-Handlers bei dessen Erstellung verwendet wurde

### Beispiel

~~~jsx {11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

board.api.on("move-card", ({ id, columnId }) => {
    console.log("Move the card");
}, { tag: "move" });

board.api.detach("move");
~~~

**Änderungsprotokoll**: Die interne Methode wurde in Version v1.7 hinzugefügt