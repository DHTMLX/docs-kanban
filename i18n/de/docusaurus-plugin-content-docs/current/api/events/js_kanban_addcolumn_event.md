---
sidebar_label: add-column
title: add-column Ereignis
description: Sie können das add-column Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-column

### Beschreibung

@short: Wird ausgelöst, wenn eine neue Spalte hinzugefügt wird

### Verwendung

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### Parameter

Der Callback des **add-column** Ereignisses kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (optional) die ID der neuen Spalte
- `column` - (optional) das Datenobjekt der neuen Spalte. Die vollständige Liste der **column** Parameter finden Sie [**hier**](api/config/js_kanban_columns_config.md)
- `before` - (optional) die ID der Spalte, vor der die neue Spalte eingefügt wird
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern des Versendens der Anfrage an den Server

:::info
Für die Behandlung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung auf das "add-column" Ereignis
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **before** und **column** wurden in Version v1.1 hinzugefügt