---
sidebar_label: addLink()
title: addLink Methode API
description: Lesen Sie die API der addLink-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie einen neuen Link zwischen Karten hinzufügen.
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