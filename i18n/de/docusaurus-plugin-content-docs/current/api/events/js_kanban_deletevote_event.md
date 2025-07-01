---
sidebar_label: delete-vote
title: delete-vote Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das delete-vote Event erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# delete-vote

### Beschreibung

@short: Wird ausgelöst, wenn ein Benutzer eine Stimme von einer Karte entfernt

### Verwendung

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **delete-vote** Event erhält ein Objekt mit den folgenden Eigenschaften:

- `cardId` - (erforderlich) die ID der Karte, von der die Stimme entfernt wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server übersprungen werden soll oder nicht

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden) konsultieren
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "delete-vote" Event hören
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v1.4 eingeführt
