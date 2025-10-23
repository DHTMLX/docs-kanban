---
sidebar_label: deleteLink()
title: deleteLink-Methode
description: Sie können die deleteLink-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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