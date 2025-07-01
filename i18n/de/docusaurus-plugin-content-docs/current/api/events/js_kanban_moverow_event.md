---
sidebar_label: move-row
title: move-row Ereignis
description: Entdecken Sie das move-row Ereignis in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Finden Sie Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# move-row

### Beschreibung

@short: Wird ausgelöst, wenn eine Zeile verschoben wird

### Verwendung

~~~jsx {}
"move-row": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **move-row** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die ID der verschobenen Zeile
- `before` - (erforderlich) die ID der Zeile, vor der die verschobene Zeile eingefügt wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server übersprungen wird

:::info
Zur Verwaltung interner Ereignisse können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {8-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// auf das "move-row" Ereignis hören
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v1.1 eingeführt
