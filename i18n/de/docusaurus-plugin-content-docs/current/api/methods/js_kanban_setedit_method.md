---
sidebar_label: setEdit()
title: setEdit Methode API
description: Lesen Sie die API-Dokumentation der setEdit-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie den Karten-Editor ein- und ausblenden.
---

# setEdit()

### Beschreibung

@short: Schaltet einen Editor im Kanban um

### Verwendung

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### Parameter

Die Methode kann einen *null*-Wert oder ein Objekt mit folgendem Parameter annehmen:

- `cardId` - (erforderlich) die ID der zu bearbeitenden Karte

:::note
Um einen Editor zu schließen, rufen Sie die **setEdit()** Methode mit dem Wert ***null*** auf
:::

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Editor für die Karte anhand ihrer ID öffnen
board.setEdit({ cardId: 1 });
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 hinzugefügt