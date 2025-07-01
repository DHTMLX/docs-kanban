---
sidebar_label: set-edit
title: set-edit Event
description: Erfahren Sie mehr über das set-edit Event in der DHTMLX JavaScript Kanban Bibliothek. Sehen Sie Entwickleranleitungen, API-Referenzen, testen Sie Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# set-edit

### Beschreibung

@short: Wird ausgelöst, wenn der Editor umgeschaltet wird

### Verwendung

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### Parameter

Der Callback für das **set-edit** Event akzeptiert entweder *null* oder ein Objekt mit folgenden Eigenschaften:

- `cardId` - (erforderlich) die ID der Karte, die bearbeitet wird
- `eventSource` - (optional) gibt die ***"select-card"*** Aktion an, die das ***set-edit*** Event ausgelöst hat

:::note
Ein ***null*** Wert bedeutet, dass der Editor geschlossen wird
:::

:::info
Zur Verwaltung interner Events können die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwendet werden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Bearbeitung blockieren, wenn ein Benutzer eine Karte einmal anklickt
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**Änderungsprotokoll:**
    - Das Event wurde in v1.2 eingeführt
    - Der Parameter ***eventSource*** wurde in v1.6 hinzugefügt

**Verwandte Beispiele:** [Kanban. Öffnen Sie den Editor durch Doppelklick auf die Aufgabe](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)
