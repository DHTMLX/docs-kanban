---
sidebar_label: setEdit()
title: setEdit-Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die setEdit-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# setEdit()

### Beschreibung

@short: Schaltet den Kanban-Karten-Editor ein oder aus

### Verwendung

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### Parameter

Diese Methode akzeptiert entweder *null* oder ein Objekt mit der folgenden Eigenschaft:

- `cardId` - (erforderlich) die ID der Karte, die Sie bearbeiten möchten

:::note
Um den Editor zu schließen, verwenden Sie die **setEdit()**-Methode mit dem Argument ***null***
:::

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Editor für die angegebene Karten-ID öffnen
board.setEdit({ cardId: 1 });
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 eingeführt
