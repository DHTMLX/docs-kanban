---
sidebar_label: GET /columns 
title: GET /columns 
description: Dieser Abschnitt behandelt die GET /columns REST-Route in der DHTMLX JavaScript Kanban Bibliothek. Enthalten sind Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos sowie ein kostenloser 30-Tage-Test von DHTMLX Kanban. 
---

# GET `/columns`

### Beschreibung

@short: Ruft Informationen über alle Spalten ab und gibt ein JSON-Objekt mit einem Array von Spaltendaten zurück.

Diese Route verarbeitet **HTTP GET**-Anfragen, die an den Endpunkt `/columns` gesendet werden.

### Payload

Es muss kein Payload gesendet werden.

### Antwort

Die Antwort enthält ein JSON-Objekt mit einem Array von Spaltendatenobjekten.

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

Ein weiteres Beispiel des zurückgegebenen Objekts finden Sie unter [**columns**](/api/config/js_kanban_columns_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:  
- [Working with server](/guides/working_with_server.md)  
- [getColumns()](/api/provider/rest_methods/js_kanban_getcolumns_method.md)
