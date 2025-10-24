---
sidebar_label: duplicate-card
title: duplicate-card Event
description: Sie können mehr über das duplicate-card Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# duplicate-card

### Beschreibung

@short: Wird ausgelöst, wenn eine Karte dupliziert wird

### Verwendung

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### Parameter

Der Callback des **duplicate-card** Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - (erforderlich) die ID der zu duplizierenden Karte
- `card` - (optional) das Datenobjekt der neuen Karte. Die vollständige Liste der Kartenparameter finden Sie [hier](api/config/js_kanban_cards_config.md)
- `select` - (optional) aktiviert/deaktiviert die Auswahl der neu hinzugefügten Karte

:::info
Für die Handhabung der internen Events können Sie die [**Event Bus Methoden**](api/overview/main_overview.md/#event-bus-methods) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung auf das "duplicate-card" Event
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Der Parameter `select` wurde in Version v1.5.10 hinzugefügt