---
sidebar_label: $meta
title: $meta Parameter
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über den $meta Parameter. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# $meta

### Beschreibung

@short: Ein Objekt mit zusätzlichen Einstellungen zur Anpassung von Kanban-Methoden und -Ereignissen

:::important
Das `$meta` Objekt stellt zusätzliche Parameter bereit, die dabei helfen, Methoden zu konfigurieren, die mit Kanban-Ereignissen verknüpft sind!
:::

### Verwendung

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### Parameter

Das `$meta` Objekt enthält folgenden Parameter:

- `skipHistory` - (optional) steuert, ob eine Operation von der Verlaufshistorie des Kanban ausgeschlossen werden soll

### Beispiel

~~~jsx {11-13}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// neue Karte hinzufügen und diese Aktion im Kanban-Verlauf überspringen
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "Neue Karte" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**Änderungsprotokoll:** Der `$meta` Parameter wurde in Version 1.3 eingeführt

**Verwandter Artikel:** [`history`](/api/config/js_kanban_history_config.md)
