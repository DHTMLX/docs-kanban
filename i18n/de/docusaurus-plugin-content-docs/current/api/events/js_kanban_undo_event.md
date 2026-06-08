---
sidebar_label: undo
title: undo Ereignis API
description: Lesen Sie die undo Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Rückgängigmachen der letzten Operation in Kanban ausgelöst wird.
---

# undo

### Beschreibung

@short: Wird ausgelöst, wenn die letzte Operation im Kanban rückgängig gemacht wird

### Verwendung

~~~jsx {}
"undo": () => void;
~~~

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "undo" Event
board.api.on("undo", () => {
    console.log("Undo operation");
});
~~~

**Änderungsprotokoll**: Das Event wurde in Version v1.7 hinzugefügt