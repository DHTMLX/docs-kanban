---
sidebar_label: GET /columns
title: GET /columns
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route GET /columns. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/columns`

### Beschreibung

@short: Ruft Daten aller Spalten ab und gibt ein JSON-Objekt mit einem Array von Objekten mit Spaltendaten zurück

Die Route verarbeitet die **HTTP GET**-Anfrage, die an den Pfad `/columns` gesendet wird.

### Payload

Es wird kein Payload benötigt.

### Antwort

Die Route gibt ein JSON-Objekt mit einem Array von Objekten mit Spaltendaten zurück.

Beispiel:

~~~json
[
    {
        "id": 1,
        "label": "Backlog",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "In Progress",
        "collapsed": false
    },
    {
        "id": 3,
        "label": "Testing",
        "collapsed": false
    },
    {
        "id": 4,
        "label": "Done",
        "collapsed": false
    }
]
~~~

Ein weiteres Beispiel des zurückgegebenen Objekts finden Sie unter [**columns**](api/config/js_kanban_columns_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](guides/working_with_server.md)
- [getColumns()](api/provider/rest_methods/js_kanban_getcolumns_method.md)