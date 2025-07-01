---
sidebar_label: GET /rows
title: GET /rows
description: Erkunden Sie die REST-Route GET /rows in der DHTMLX JavaScript Kanban-Bibliothek. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, testen Sie Live-Demos und Codebeispiele und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/rows`

### Beschreibung

@short: Ruft Daten für alle Zeilen ab und gibt ein JSON-Objekt zurück, das ein Array von Zeilen- (Swimlane-) Datenobjekten enthält.

Diese Route antwortet auf **HTTP GET**-Anfragen, die an den Endpunkt `/rows` gesendet werden.

### Payload

Es muss kein Payload mit der Anfrage gesendet werden.

### Antwort

Die Antwort ist ein JSON-Objekt, das ein Array von Zeilendatenobjekten enthält.

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

Ein weiteres Beispiel für das zurückgegebene Objekt finden Sie unter [**rows**](/api/config/js_kanban_rows_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder einen Fehler enthielt (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](/guides/working_with_server.md)
- [getRows()](/api/provider/rest_methods/js_kanban_getrows_method.md)
