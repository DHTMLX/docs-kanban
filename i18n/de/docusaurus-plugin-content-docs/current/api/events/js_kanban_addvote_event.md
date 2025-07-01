---
sidebar_label: add-vote
title: add-vote Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das add-vote-Event erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-vote

### Beschreibung

@short: Wird ausgelöst, sobald ein Benutzer eine neue Stimme hinzufügt

### Verwendung

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **add-vote**-Event erhält ein Objekt mit den folgenden Eigenschaften:

- `cardId` - (erforderlich) die ID der Karte, zu der die Stimme hinzugefügt wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server übersprungen wird oder nicht

:::info
Um mit internen Events zu arbeiten, können Sie die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden) heranziehen
:::

### Beispiel

~~~jsx {7-9}
// Erstellen des Kanban
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Lauschen auf das "add-vote"-Event
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 1.4 eingeführt
