---
sidebar_label: redo
title: redo Ereignis API
description: Lesen Sie die redo Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Wiederholen der durch die undo-Aktion rückgängig gemachten Aktion ausgelöst wird.
---

# redo

### Beschreibung

@short: Wird ausgelöst, wenn die Aktion wiederholt wird, die durch die undo Aktion rückgängig gemacht wurde

### Verwendung

~~~jsx {}
"redo": () => void;
~~~

:::info
Zur Handhabung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "redo" Event abonnieren
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**Änderungsprotokoll**: Das Event wurde in Version v1.7 hinzugefügt