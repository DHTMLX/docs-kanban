---
sidebar_label: move-row
title: move-row Event
description: Sie können mehr über das move-row Event in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# move-row

### Beschreibung

@short: Wird ausgelöst, wenn eine Zeile verschoben wird

### Verwendung

~~~jsx {}
"move-row": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **move-row** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der zu verschiebenden Zeile
- `before` - (optional) die ID der Zeile, vor der die verschobene Zeile platziert wird. Wenn der Parameter `before` nicht angegeben wird, wird die Zeile am Ende des Boards eingefügt
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Handhabung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {8-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Anmeldung zum "move-row" Event
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v1.1 hinzugefügt