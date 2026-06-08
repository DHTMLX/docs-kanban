---
sidebar_label: deleteLink()
title: deleteLink Methode API
description: Lesen Sie die API-Dokumentation der Methode deleteLink für DHTMLX Kanban. Erfahren Sie, wie Sie einen Link anhand seiner ID vom Board entfernen.
---

# deleteLink()

### Beschreibung

@short: Entfernt den angegebenen Link aus dem Datenspeicher von Kanban

### Verwendung

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID des zu löschenden Links

### Beispiel

~~~jsx {8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// Link anhand seiner ID entfernen
board.deleteLink({ id: 5 });
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.5 hinzugefügt