---
sidebar_label: update-column
title: update-column Ereignis
description: Entdecken Sie das update-column Ereignis in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# update-column

### Beschreibung

@short: Wird ausgelöst, sobald Spaltendaten aktualisiert werden.

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

Der Callback für das **update-column** Ereignis erhält ein Objekt mit den folgenden Eigenschaften:

- `id` - (erforderlich) identifiziert die zu aktualisierende Spalte
- `column` - (optional) liefert das neue Datenobjekt für die Spalte. Die vollständige Liste der **column**-Eigenschaften finden Sie [**hier**](/api/config/js_kanban_columns_config.md)
- `replace` - (optional) bestimmt, ob der gesamte Datensatz ersetzt oder nur bestimmte Felder aktualisiert werden

:::note
Wird `replace` auf *true* gesetzt, werden die bestehenden Daten vollständig durch die neuen Daten ersetzt. Bei false oder wenn der Parameter weggelassen wird, werden nur die angegebenen Werte aktualisiert.
:::

- `skipProvider` - (optional) steuert, ob die Anfrage zur Aktualisierung des Servers gesendet oder übersprungen wird

:::info
Um interne Events zu verwalten, verwenden Sie die [**Event Bus methods**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "update-column" Ereignis hören
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **column** wurden in Version v1.1 eingeführt
- Der Parameter **replace** wurde in Version v1.3 hinzugefügt
