---
sidebar_label: addLink()
title: Methode addLink
description: Sie können mehr über die Methode addLink in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# addLink()

### Beschreibung

@short: Fügt ein neues Link-Element in das Kanban-Board ein.

### Verwendung

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### Parameter

- `id` - (optional) die Kennung für den neuen Link
- `link` - (erforderlich) das Datenobjekt, das den neuen Link darstellt. Die vollständige Liste der Link-Parameter finden Sie [hier](/api/config/js_kanban_links_config.md)

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
        masterId: 4,
        slaveId: 6,
        relation: "relatesTo",
    }
});
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version v1.5 eingeführt
