---
sidebar_label: scroll
title: scroll Event
description: Sie können mehr über das scroll Event in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# scroll

### Beschreibung

@short: Wird ausgelöst, wenn zu den angegebenen Elementen gescrollt wird

### Verwendung

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Parameter

Der Callback des **scroll** Events kann ein Objekt mit den folgenden Parametern erhalten:

- `id` - (erforderlich) die ID des Ziel-Elements
- `to` - (erforderlich) der Typ des Ziel-Elements. Verfügbare Werte sind *"column"*, *"row"* und *"card"*
- `options` - (optional) das Objekt mit den Scroll-Optionen. Die vollständige Liste der Scroll-Parameter finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

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
// Anmeldung zum "scroll" Event
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Das Event wurde in Version v1.2 hinzugefügt