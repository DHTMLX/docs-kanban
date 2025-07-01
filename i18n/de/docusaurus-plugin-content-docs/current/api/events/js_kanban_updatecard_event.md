---
sidebar_label: update-card
title: update-card Ereignis
description: Erfahren Sie mehr über das update-card Ereignis in der DHTMLX JavaScript Kanban Bibliothek. Finden Sie Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos und eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# update-card

### Beschreibung

@short: Wird ausgelöst, wenn Kartendaten aktualisiert werden

### Verwendung

~~~jsx {}
"update-card": ({
    id: string | number,
    card?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **update-card** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die Kennung der zu aktualisierenden Karte
- `card` - (optional) ein Objekt mit den neuen Kartendaten. Eine vollständige Liste der **card** Attribute finden Sie [**hier**](/api/config/js_kanban_cards_config.md)
- `replace` - (optional) bestimmt, ob die bestehenden Daten vollständig ersetzt werden

:::note
Wenn `replace` auf *true* gesetzt ist, werden die alten Daten vollständig durch die neuen Daten überschrieben. Andernfalls werden nur die angegebenen Werte aktualisiert.
:::

- `skipProvider` - (optional) steuert, ob die Aktualisierung an den Server gesendet wird oder nicht

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "update-card" Ereignis hören
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll**:
- Parameter **id** und **card** hinzugefügt in v1.1
- Parameter **replace** hinzugefügt in v1.3
