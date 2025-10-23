---
sidebar_label: add-vote
title: add-vote Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das add-vote Event erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-vote

### Beschreibung

@short: Wird ausgelöst, wenn ein Nutzer eine neue Stimme hinzufügt

### Verwendung

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **add-vote** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `cardId` - (erforderlich) die ID der Karte, zu der die Stimme hinzugefügt werden soll
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

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
// Auf das "add-vote" Event abonnieren
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**Änderungsprotokoll:** Das Event wurde in v1.4 hinzugefügt