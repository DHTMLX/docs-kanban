---
sidebar_label: PUT /rows
title: PUT /rows REST-Route API
description: Lesen Sie die REST-Route-API PUT /rows für DHTMLX Kanban. Erfahren Sie, wie Sie Daten einer Zeile (Swimlane) aktualisieren.
---

# PUT `/rows`

### Beschreibung

@short: Aktualisiert Daten in einer angegebenen Zeile (Swimlane) und gibt ein leeres JSON-Objekt zurück

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `/rows/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------|
| `id`       | number      | *Erforderlich*. Die ID der Zeile (Swimlane), die aktualisiert werden soll.|

### Payload

Der Server muss ein JSON-Objekt mit allen Eigenschaften der Zeile erhalten (sowohl unveränderte als auch neue/geänderte).

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------|
| `label`     | string      | *Erforderlich*. Der Name der zu aktualisierenden Zeile.|
| `collapsed` | boolean     | *Optional*. Der Zustand der Zeile: **true**, wenn die Zeile anfangs eingeklappt ist, und **false** für den ausgeklappten Zustand (Standard).|

Beispiel:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

Ein weiteres Beispiel für das row-Objekt finden Sie im Abschnitt [**rows**](api/config/js_kanban_rows_config.md).

### Antwort

Im Erfolgsfall wird ein leeres JSON-Objekt zurückgegeben.
  
Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)