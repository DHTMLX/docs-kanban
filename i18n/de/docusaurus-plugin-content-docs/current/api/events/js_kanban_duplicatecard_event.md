---
sidebar_label: duplicate-card
title: duplicate-card Event
description: Lernen Sie das duplicate-card Event aus der DHTMLX JavaScript Kanban Bibliothek kennen. Entdecken Sie Entwicklerhandbücher, API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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

Der Callback für das **duplicate-card** Event erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die ID der Karte, die dupliziert wird
- `card` - (optional) das Datenobjekt für die neue Karte. Die vollständige Liste der Kartenparameter finden Sie [hier](/api/config/js_kanban_cards_config.md)
- `select` - (optional) steuert, ob die neu hinzugefügte Karte ausgewählt wird oder nicht

:::info
Um mit internen Events zu arbeiten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// auf das "duplicate-card" Event hören
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Der Parameter `select` wurde in Version v1.5.10 eingeführt
