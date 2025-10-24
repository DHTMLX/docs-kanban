---
sidebar_label: update-card
title: update-card Event
description: Sie können das update-card Event in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
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

Der Callback des **update-card** Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der zu aktualisierenden Karte
- `card` - (optional) das neue Datenobjekt der Karte. Die vollständige Liste der **card**-Parameter finden Sie [**hier**](api/config/js_kanban_cards_config.md)
- `replace` - (optional) aktiviert/deaktiviert das vollständige Ersetzen der Daten

    :::note
    Wenn Sie den Parameter `replace` auf *true* setzen, werden die alten Daten vollständig durch die neuen ersetzt. Andernfalls aktualisiert die Methode nur die übergebenen Werte.
    :::

- `skipProvider` - (optional) aktiviert/deaktiviert das Verhindern, dass die Anfrage an den Server gesendet wird

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung am "update-card" Event
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll**:
- Die Parameter **id** und **card** wurden in Version v1.1 hinzugefügt
- Der Parameter **replace** wurde in Version v1.3 hinzugefügt