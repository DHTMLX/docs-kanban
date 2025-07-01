---
sidebar_label: deleteLink()
title: deleteLink-Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die deleteLink-Methode. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteLink()

### Beschreibung

@short: Löscht den angegebenen Link aus dem Kanban-Datenspeicher.

### Verwendung

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID des Links, der entfernt werden soll

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
