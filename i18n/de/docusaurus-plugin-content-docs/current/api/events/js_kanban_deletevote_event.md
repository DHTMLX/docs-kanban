---
sidebar_label: delete-vote
title: delete-vote Event
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Kanban-Bibliothek mehr über das delete-vote Event erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# delete-vote

### Beschreibung

@short: Wird ausgelöst, wenn ein Benutzer eine Stimme von einer Karte löscht

### Verwendung

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **delete-vote** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `cardId` - (erforderlich) die ID der Karte, von der die Stimme gelöscht wird
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
// Anmeldung auf das "delete-vote" Event
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**Änderungsprotokoll:** Das Event wurde in Version v1.4 hinzugefügt