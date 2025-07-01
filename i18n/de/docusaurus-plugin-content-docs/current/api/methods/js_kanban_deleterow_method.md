---
sidebar_label: deleteRow()
title: deleteRow Methode
description: Sie können die deleteRow Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# deleteRow()

### Beschreibung

@short: Löscht die angegebene Zeile aus dem Kanban-Datenspeicher.

### Verwendung

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### Parameter

- `id` - (erforderlich) die Kennung der Zeile, die entfernt werden soll

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Löschen einer Zeile anhand ihrer ID
board.deleteRow({ id: "feature" });
~~~
