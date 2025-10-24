---
sidebar_label: GET /rows
title: GET /rows
description: Sie können mehr über die GET /rows REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/rows`

### Beschreibung

@short: Ruft Daten zu allen Zeilen ab und gibt ein JSON-Objekt mit einem Array von Objekten mit Zeilendaten (Swimlanes) zurück.

Die Route verarbeitet die **HTTP GET**-Anfrage, die an den Pfad `/rows` gesendet wird.

### Payload

Es ist keine Payload erforderlich.

### Antwort

Die Route gibt ein JSON-Objekt mit einem Array von Objekten mit Zeilendaten zurück.

Beispiel:

~~~json
[
    {
        "id": 1,
        "label": "Feature",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "Task",
        "collapsed": false
    }
]
~~~

Für ein weiteres Beispiel des zurückgegebenen Objekts siehe [**rows**](api/config/js_kanban_rows_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](guides/working_with_server.md)
- [getRows()](api/provider/rest_methods/js_kanban_getrows_method.md)