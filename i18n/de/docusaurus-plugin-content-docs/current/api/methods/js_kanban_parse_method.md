---
sidebar_label: parse()
title: parse Methode
description: Sie können die parse-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# parse()

### Beschreibung

@short: Parst Daten in Kanban

### Verwendung

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array,
    links?: array
}): void;
~~~

### Parameter

- [`columns`](api/config/js_kanban_columns_config.md) - (optional) das Array von Objekten mit den Spalten-Daten
- [`rows`](api/config/js_kanban_rows_config.md) - (optional) das Array von Objekten mit den Zeilen-Daten
- [`cards`](api/config/js_kanban_cards_config.md) - (optional) das Array von Objekten mit den Karten-Daten
- [`links`](api/config/js_kanban_links_config.md) - (optional) das Array von Objekten mit den Verknüpfungs-Daten

### Beispiel

~~~jsx {4-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Daten in Kanban parsen
board.parse({
    columns,
    cards,
    rows,
    links
});
~~~

**Änderungsprotokoll:** Ab Version v1.1 müssen Sie die Anfangsdaten im Konstruktor nicht mehr zurücksetzen, bevor Sie neue Daten parsen

**Verwandte Artikel:** [Arbeiten mit Daten](guides/working_with_data.md#loading-data-from-local-source)