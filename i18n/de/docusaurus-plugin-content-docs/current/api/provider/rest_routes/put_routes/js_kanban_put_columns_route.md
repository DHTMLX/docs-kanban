---
sidebar_label: PUT /columns
title: PUT /columns REST-Route API
description: Lesen Sie die REST-Route-API PUT /columns für DHTMLX Kanban. Erfahren Sie, wie Sie Daten einer Spalte aktualisieren.
---

# PUT `/columns`

### Beschreibung

@short: Aktualisiert Daten einer angegebenen Spalte und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `/columns/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der zu aktualisierenden Spalte.|

### Nutzlast

Der Server muss ein JSON-Objekt mit allen Spalteneigenschaften erhalten (sowohl unveränderte als auch neue/geänderte).

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `label`    |  string     | *Erforderlich*. Der Name der zu aktualisierenden Spalte.|
| `collapsed`|  boolean    | *Optional*. Der Zustand der Spalte: **true**, wenn die Spalte initial eingeklappt ist, und **false** für den ausgeklappten Zustand (Standard).|

Beispiel:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

Ein weiteres Beispiel für das Spaltenobjekt finden Sie im Abschnitt [**columns**](api/config/js_kanban_columns_config.md).

### Antwort

Im Erfolgsfall wird ein leeres JSON-Objekt zurückgegeben.

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)