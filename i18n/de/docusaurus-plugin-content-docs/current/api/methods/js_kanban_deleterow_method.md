---
sidebar_label: deleteRow()
title: deleteRow Methode
description: Sie können mehr über die deleteRow Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteRow()

### Beschreibung

@short: Entfernt die angegebene Zeile aus dem Datenspeicher des Kanban

### Verwendung

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu löschenden Zeile

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Zeile anhand ihrer ID entfernen
board.deleteRow({ id: "feature" });
~~~