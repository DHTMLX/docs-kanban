---
sidebar_label: add-row
title: add-row Event
description: Sie können mehr über das add-row Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-row

### Beschreibung

@short: Wird ausgelöst, wenn eine neue Zeile hinzugefügt wird

### Verwendung

~~~jsx {}
"add-row": ({
    id?: string | number,
    row?: object,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **add-row** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (optional) die ID der neuen Zeile
- `row` - (optional) das Datenobjekt der neuen Zeile. Die vollständige Liste der **row**-Parameter finden Sie [**hier**](api/config/js_kanban_rows_config.md)
- `before` - (optional) die ID der Zeile, vor der die neue Zeile eingefügt wird
- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zum Verarbeiten der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "add-row" Event
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **before** und **row** wurden in Version v1.1 hinzugefügt