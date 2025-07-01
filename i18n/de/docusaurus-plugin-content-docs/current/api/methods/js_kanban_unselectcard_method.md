---
sidebar_label: unselectCard()
title: Methode unselectCard
description: Sie können die Methode unselectCard in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# unselectCard()

### Beschreibung

@short: Hebt die Auswahl der Karte(n) auf, die durch ihre ID identifiziert werden.

### Verwendung

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
Wenn **unselectCard()** ohne Argumente aufgerufen wird, wird die Auswahl aller Karten gelöscht.
:::

### Parameter

- `id` - (erforderlich) die eindeutige Kennung der Karte, deren Auswahl aufgehoben werden soll.

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Auswahl der Karte mit der ID 1 aufheben
board.unselectCard({ id: 1 });
~~~
