---
sidebar_label: api.detach()
title: detach-Methode
description: Sie können die detach-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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