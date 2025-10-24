---
sidebar_label: update-row
title: update-row Ereignis
description: Sie können mehr über das update-row Ereignis in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# update-row

### Beschreibung

@short: Wird ausgelöst, wenn Zeilendaten aktualisiert werden

### Verwendung

~~~jsx {}
"update-row": ({
    id: string | number,
    row?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **update-row** Ereignisses kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (erforderlich) die ID der zu aktualisierenden Zeile
- `row` - (optional) das neue Datenobjekt der Zeile. Die vollständige Liste der **row**-Parameter finden Sie [**hier**](api/config/js_kanban_rows_config.md)
- `replace` - (optional) aktiviert/deaktiviert das vollständige Ersetzen der Daten

    :::note
    Wenn Sie den Parameter `replace` auf *true* setzen, werden die alten Daten vollständig durch die neuen ersetzt. Andernfalls aktualisiert die Methode nur die übergebenen Werte.
    :::

- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Handhabung der internen Ereignisse können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "update-row" Ereignis
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **row** wurden in Version 1.1 hinzugefügt
- Der Parameter **replace** wurde in Version 1.3 hinzugefügt