---
sidebar_label: setEdit()
title: setEdit Methode
description: Sie können mehr über die setEdit Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
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