---
sidebar_label: scroll()
title: scroll Methode
description: Sie können die scroll Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# scroll()

### Beschreibung

@short: Scrollt das Kanban auf das angegebene Element

### Verwendung

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID des Ziel-Elements
- `to` - (erforderlich) der Typ des Ziel-Elements. Verfügbare Werte sind "column", "row" und "card"
- `options` - (optional) das Objekt mit den Scroll-Optionen. Die vollständige Liste der Scroll-Parameter finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

### Beispiel

~~~jsx {7-15}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Scrolle das Kanban zur Karte mit der ID 246
board.scroll({
    id: 246,
    to: "card",
    options: {
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    }
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 hinzugefügt