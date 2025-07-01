---
sidebar_label: parse()
title: parse Methode
description: Sie können die parse Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# parse()

### Beschreibung

@short: Lädt Daten in das Kanban-Board

### Verwendung

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array
}): void;
~~~

### Parameter

- [`columns`](/api/config/js_kanban_columns_config.md) - (optional) ein Array, das Spalten-Datenobjekte enthält
- [`rows`](/api/config/js_kanban_rows_config.md) - (optional) ein Array, das Zeilen-Datenobjekte enthält
- [`cards`](/api/config/js_kanban_cards_config.md) - (optional) ein Array, das Karten-Datenobjekte enthält

### Beispiel

~~~jsx {4-8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Daten in Kanban laden
board.parse({
    columns,
    cards,
    rows
});
~~~

**Änderungsprotokoll:** Ab Version v1.1 ist es nicht mehr notwendig, die Anfangsdaten im Konstruktor zurückzusetzen, bevor neue Daten geparst werden

**Verwandte Artikel:** [Arbeiten mit Daten](/guides/working_with_data#laden-von-daten-aus-einer-lokalen-quelle)
