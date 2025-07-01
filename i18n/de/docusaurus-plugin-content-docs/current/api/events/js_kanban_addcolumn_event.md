---
sidebar_label: add-column
title: add-column Ereignis
description: Entdecken Sie das add-column Ereignis in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, testen Sie Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **add-column** Ereignis erhält ein Objekt mit folgenden optionalen Eigenschaften:

- `id` - die ID, die der neuen Spalte zugewiesen wurde
- `column` - das Datenobjekt, das die neue Spalte repräsentiert. Die vollständige Liste der **column** Parameter finden Sie [**hier**](/api/config/js_kanban_columns_config.md)
- `before` - die ID der Spalte, vor der die neue Spalte eingefügt wird
- `skipProvider` - steuert, ob die Anfrage an den Server verhindert wird oder nicht

:::info
Um mit internen Ereignissen zu arbeiten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "add-column" Ereignis hören
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**Änderungsprotokoll**: Die Parameter **id**, **before** und **column** wurden in Version v1.1 eingeführt
