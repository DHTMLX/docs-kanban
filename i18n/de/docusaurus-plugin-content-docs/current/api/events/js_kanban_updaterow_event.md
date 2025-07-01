---
sidebar_label: update-row
title: update-row Ereignis
description: Entdecken Sie das update-row Ereignis in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Erkunden Sie Entwickleranleitungen, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# update-row

### Beschreibung

@short: Wird ausgelöst, wenn die Daten einer Zeile aktualisiert werden

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

Der Callback für das **update-row** Ereignis erhält ein Objekt mit folgenden Parametern:

- `id` - (erforderlich) die Kennung der zu aktualisierenden Zeile
- `row` - (optional) das neue Datenobjekt für die Zeile. Die vollständige Liste der **row** Parameter finden Sie [**hier**](/api/config/js_kanban_rows_config.md)
- `replace` - (optional) steuert, ob die Daten vollständig ersetzt oder nur teilweise aktualisiert werden

:::note
Wenn `replace` auf *true* gesetzt ist, werden die alten Daten vollständig durch die neuen überschrieben. Wird es weggelassen oder auf false gesetzt, werden nur die angegebenen Werte aktualisiert.
:::

- `skipProvider` - (optional) steuert, ob die Anfrage an den Server unterdrückt wird

:::info
Zur Verwaltung interner Ereignisse siehe die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "update-row" Ereignis abonnieren
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **row** wurden in Version 1.1 eingeführt
- Der Parameter **replace** wurde in Version 1.3 hinzugefügt
