---
sidebar_label: scroll
title: scroll Ereignis API
description: Lesen Sie die scroll Event API für DHTMLX Kanban. Erfahren Sie, wie Sie das Event behandeln, das beim Scrollen zu den angegebenen Elementen ausgelöst wird.
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