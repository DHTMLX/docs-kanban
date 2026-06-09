---
sidebar_label: parse()
title: parse Methode API
description: Lesen Sie die API-Dokumentation der parse-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie Karten, Spalten, Zeilen und Board-Daten aus JSON laden.
---

# parse()

### Beschreibung

@short: Parst Daten in Kanban

Die Methode `parse()` ist ein Alias für [`setConfig()`](/api/methods/js_kanban_setconfig_method), der auf datenbezogene Eigenschaften (`cards`, `columns`, `rows`, `links`) beschränkt ist. Beide Methoden führen für diese Eigenschaften intern denselben Vorgang aus.

:::tip setConfig() bevorzugen
Verwenden Sie die Methode [`setConfig()`](/api/methods/js_kanban_setconfig_method), die dieselben Dateneigenschaften **sowie** weitere Kanban-Konfigurationsoptionen akzeptiert. Rufen Sie `setConfig()` einmal für alle Props auf, anstatt `parse()` für Daten und `setConfig()` für die übrigen Props (wie [`columnKey`](api/config/js_kanban_columnkey_config.md), [`rowKey`](api/config/js_kanban_rowkey_config.md), [`cardShape`](api/config/js_kanban_cardshape_config.md)) aufzurufen:

~~~js
// statt zwei Aufrufen
kanban.setConfig({ columnKey: "type" });
kanban.parse({ columns });

// einen verwenden
kanban.setConfig({
    columnKey: "type",
    columns
});
~~~
:::

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

// äquivalenter Aufruf über setConfig()
// board.setConfig({ columns, cards, rows, links });
~~~

**Änderungsprotokoll:** Seit Version v1.1 müssen Sie die Startdaten nicht mehr im Konstruktor zurücksetzen, bevor Sie neue Daten parsen.

**Verwandte Artikel:** [Arbeiten mit Daten](guides/working_with_data.md#load-data-from-a-local-source)
