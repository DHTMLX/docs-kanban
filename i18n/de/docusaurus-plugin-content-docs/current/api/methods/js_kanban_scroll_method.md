---
sidebar_label: scroll()
title: scroll Methode
description: Entdecken Sie die scroll Methode in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# scroll()

### Beschreibung

@short: Bewegt die Kanban-Ansicht zu einem bestimmten Element

### Verwendung

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID des Elements, zu dem gescrollt werden soll
- `to` - (erforderlich) gibt den Elementtyp an, zu dem gescrollt wird; kann "column", "row" oder "card" sein
- `options` - (optional) ein Objekt mit Scroll-Optionen. Eine vollständige Liste der verfügbaren Parameter finden Sie [hier](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)

### Beispiel

~~~jsx {7-15}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Scrolle das Kanban zu der Karte mit der ID 246
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

**Änderungsprotokoll:** Diese Methode wurde in Version 1.2 eingeführt
