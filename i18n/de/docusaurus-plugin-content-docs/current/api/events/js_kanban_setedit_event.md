---
sidebar_label: set-edit
title: set-edit Event
description: Sie können mehr über das set-edit Event in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# set-edit

### Beschreibung

@short: Wird ausgelöst, wenn ein Editor umgeschaltet wird

### Verwendung

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Parameter

Der Callback des **set-edit** Events kann den Wert *null* oder ein Objekt mit den folgenden Parametern annehmen:

- `cardId` - (erforderlich) die ID der Karte, die bearbeitet werden soll
- `eventSource` - (optional) die Aktion ***"select-card"***, die das ***set-edit*** Event auslöst

:::note
Der Wert ***null*** wird verwendet, wenn der Editor geschlossen wird
:::

:::info
Zum Umgang mit internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Bearbeitung verhindern, wenn ein Benutzer die Karte einmal anklickt
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**Änderungsprotokoll:**
    - Das Event wurde in Version 1.2 hinzugefügt
    - Der Parameter ***eventSource*** wurde in Version 1.6 hinzugefügt

**Verwandte Beispiele:** [Kanban. Öffnen des Editors durch Doppelklick auf die Aufgabe](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)