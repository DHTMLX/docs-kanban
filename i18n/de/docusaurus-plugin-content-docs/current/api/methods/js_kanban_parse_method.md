---
sidebar_label: parse()
title: parse Methode
description: Sie können sich über die parse-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek informieren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# parse()

### Beschreibung

@short: Parst Daten in Kanban

Diese Methode führt denselben Vorgang aus wie [`setConfig`](/api/methods/js_kanban_setconfig_method), wenn sie mit datenbezogenen Kanban-Einstellungen verwendet wird. Es wird daher empfohlen, `setConfig` zu verwenden, um Konsistenz mit anderen Konfigurationsoptionen zu gewährleisten, obwohl `parse` weiterhin als Alias für das Parsen von Daten unterstützt wird.

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

**Änderungsprotokoll:** Seit Version v1.1 müssen Sie die Startdaten nicht mehr im Konstruktor zurücksetzen, bevor Sie neue Daten parsen.

**Verwandte Artikel:** [Arbeiten mit Daten](guides/working_with_data.md#loading-data-from-local-source)
