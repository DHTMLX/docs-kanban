---
sidebar_label: select-card
title: select-card Event
description: Sie können mehr über das select-card Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# select-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte ausgewählt wird

### Verwendung

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### Parameter

Der Callback des **select-card** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der ausgewählten Karte
- `groupMode` - (optional) Mehrfachauswahl (standardmäßig false)

:::info
Für die Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auf das "select-card" Event abonnieren
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~