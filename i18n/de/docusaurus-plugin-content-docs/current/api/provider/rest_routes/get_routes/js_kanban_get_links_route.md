---
sidebar_label: GET /links
title: GET /links
description: Entdecken Sie den REST-Endpunkt GET /links in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Greifen Sie auf Entwicklerrichtlinien zu, sehen Sie API-Referenzen ein, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/links`

### Beschreibung

@short: Ruft Informationen über alle Links ab und gibt ein JSON-Objekt zurück, das ein Array von Link-Objekten enthält.

Dieser Endpunkt reagiert auf **HTTP GET**-Anfragen, die an den Pfad `/links` gesendet werden.

### Payload

Für diese Anfrage muss kein Payload gesendet werden.

### Antwort

Die Antwort enthält ein JSON-Objekt mit einem Array aller Link-Objekte.

Beispiel:

~~~json
[
    {
        "id": 1,
        "masterId": 2,
        "slaveId": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "masterId": 4,
        "slaveId": 9,
        "relation": "relatesTo",
    },
]
~~~

Ein weiteres Beispiel des zurückgegebenen Objekts finden Sie unter [**links**](/api/config/js_kanban_links_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder einen Fehler verursacht hat (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
