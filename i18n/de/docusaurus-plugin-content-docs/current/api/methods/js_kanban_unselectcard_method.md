---
sidebar_label: unselectCard()
title: Methode unselectCard
description: Sie können die Methode unselectCard in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# unselectCard()

### Beschreibung

@short: Hebt die Auswahl von Karte(n) anhand ihrer ID auf

### Verwendung

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
Um alle Karten abzuwählen, rufen Sie die Methode **unselectCard()** ohne Parameter auf
:::

### Parameter

- `id` - (erforderlich) die ID der Karte, deren Auswahl aufgehoben werden soll

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// hebt die Auswahl der Karte mit der ID 1 auf
board.unselectCard({ id: 1 });
~~~