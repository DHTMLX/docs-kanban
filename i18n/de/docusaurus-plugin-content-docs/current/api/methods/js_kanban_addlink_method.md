---
sidebar_label: addLink()
title: addLink Methode
description: Sie können mehr über die addLink Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# addLink()

### Beschreibung

@short: Fügt einen neuen Link in das Kanban-Board ein

### Verwendung

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### Parameter

- `id` - (optional) die ID des neuen Links
- `link` - (erforderlich) das Datenobjekt des neuen Links. Die vollständige Liste der Link-Parameter finden Sie [hier](api/config/js_kanban_links_config.md)

### Beispiel

~~~jsx {7-14}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// neuen Link hinzufügen
board.addLink({
    id: 3,
    link: {
        source: 4,
        target: 6,
        relation: "relatesTo",
    }
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.5 hinzugefügt