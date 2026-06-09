---
sidebar_label: unselectCard()
title: unselectCard Methode API
description: Lesen Sie die API-Dokumentation der unselectCard-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie die Auswahl von Karten anhand ihrer IDs aufheben.
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