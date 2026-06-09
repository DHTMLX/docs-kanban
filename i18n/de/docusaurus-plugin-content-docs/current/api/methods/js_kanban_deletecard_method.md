---
sidebar_label: deleteCard()
title: deleteCard Methode API
description: Lesen Sie die API-Dokumentation der Methode deleteCard für DHTMLX Kanban. Erfahren Sie, wie Sie eine Karte anhand ihrer ID vom Board entfernen.
---

# deleteCard()

### Beschreibung

@short: Entfernt die angegebene Karte aus dem Datenspeicher des Kanban

### Verwendung

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu löschenden Karte

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Karte anhand ihrer ID entfernen
board.deleteCard({ id: 1 });
~~~