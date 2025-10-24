---
sidebar_label: update-column
title: update-column Event
description: Sie können im Handbuch der DHTMLX JavaScript Kanban-Bibliothek mehr über das update-column Event erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# update-column

### Beschreibung

@short: Wird ausgelöst, wenn Spaltendaten aktualisiert werden

### Verwendung

~~~jsx {}
"update-column": ({
    id: string | number,
    column?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback des **update-column** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der zu aktualisierenden Spalte
- `column` - (optional) das neue Datenobjekt der Spalte. Die vollständige Liste der **column**-Parameter finden Sie [**hier**](api/config/js_kanban_columns_config.md)
- `replace` - (optional) aktiviert/deaktiviert das vollständige Ersetzen der Daten

    :::note
    Wenn Sie den Parameter `replace` auf *true* setzen, werden die alten Daten vollständig durch die neuen ersetzt. Andernfalls aktualisiert die Methode nur die übergebenen Werte.
    :::

- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "update-column" Event
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **column** wurden in Version v1.1 hinzugefügt
- Der Parameter **replace** wurde in Version v1.3 hinzugefügt