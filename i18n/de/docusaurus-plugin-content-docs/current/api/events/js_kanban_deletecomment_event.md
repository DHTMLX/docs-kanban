---
sidebar_label: delete-comment
title: delete-comment Event
description: Erfahren Sie mehr über das delete-comment Event in der DHTMLX JavaScript Kanban Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# delete-comment

### Beschreibung

@short: Wird ausgelöst, wenn ein Kommentar zu einer Karte gelöscht wird

### Verwendung

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **delete-comment** Event erhält ein Objekt mit folgenden Eigenschaften:

- `id` -  (optional) die ID des gelöschten Kommentars
- `cardId` - (erforderlich) die ID der Karte, die den Kommentar enthält
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server gesendet wird oder nicht

:::info
Zur Verwaltung interner Ereignisse können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "delete-comment" Event hören
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 1.4 eingeführt.
