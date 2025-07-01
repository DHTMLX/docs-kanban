---
sidebar_label: scroll
title: scroll Event
description: Entdecken Sie das scroll Event in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Finden Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# scroll

### Beschreibung

@short: Wird ausgelöst, wenn zu bestimmten Elementen gescrollt wird

### Verwendung

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### Parameter

Der Callback für das **scroll** Event erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (erforderlich) die ID des Ziel-Elements
- `to` - (erforderlich) gibt den Typ des Ziel-Elements an: *"column"*, *"row"* oder *"card"*
- `options` - (optional) ein Objekt mit Scroll-Optionen. Die vollständige Liste der Parameter finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

:::info
Um innere Events zu verarbeiten, können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden.
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Anmeldung für das "scroll" Event
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v1.2 eingeführt
