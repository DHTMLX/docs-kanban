---
sidebar_label: add-row
title: add-row Event
description: Sie können mehr über das add-row Event in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-row

### Beschreibung

@short: Wird ausgelöst, sobald eine neue Zeile hinzugefügt wird

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

Der Callback für das **add-row** Event akzeptiert ein Objekt mit folgenden optionalen Eigenschaften:

- `id` - die Kennung für die neue Zeile
- `row` - das Datenobjekt, das die neue Zeile repräsentiert. Die vollständige Liste der **row**-Parameter finden Sie [**hier**](/api/config/js_kanban_rows_config.md)
- `before` - die ID der Zeile, vor der die neue Zeile eingefügt wird
- `skipProvider` - steuert, ob die Anfrage an den Server verhindert oder erlaubt wird

:::info
Um interne Events zu verwalten, verwenden Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "add-row" Event hören
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **before** und **row** wurden in Version v1.1 eingeführt
