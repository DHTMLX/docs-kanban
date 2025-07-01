---
sidebar_label: move-column
title: move-column Event
description: Erfahren Sie mehr über das move-column Event in der DHTMLX JavaScript Kanban Bibliothek. Entdecken Sie Entwickleranleitungen, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# move-column

### Beschreibung

@short: Wird ausgelöst, wenn eine Spalte verschoben wird

### Verwendung

~~~jsx {}
"move-column": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **move-column** Event erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die ID der verschobenen Spalte
- `before` - (erforderlich) die ID der Spalte, vor der die verschobene Spalte eingefügt wird
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server übersprungen wird oder nicht

:::info
Um interne Events zu verwalten, können Sie auf die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden) verweisen.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "move-column" Event hören
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v1.1 eingeführt
