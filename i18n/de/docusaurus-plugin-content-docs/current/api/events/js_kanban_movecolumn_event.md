---
sidebar_label: move-column
title: move-column Event
description: Sie können mehr über das move-column Event in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# move-column

### Beschreibung

@short: Wird ausgelöst, wenn eine Spalte verschoben wird

### Verwendung

~~~jsx {}
"move-column": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **move-column** Events kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (erforderlich) die ID der zu verschiebenden Spalte
- `before` - (optional) die ID der Spalte, vor der die verschobene Spalte platziert wird. Wenn Sie den Parameter `before` nicht angeben, wird die Spalte am Ende des Boards platziert
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Handhabung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung zum "move-column" Event
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v1.1 hinzugefügt