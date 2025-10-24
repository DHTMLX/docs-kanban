---
sidebar_label: GET /links
title: GET /links
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route GET /links. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/links`

### Beschreibung

@short: Ruft Daten zu allen Links ab und gibt ein JSON-Objekt mit einem Array von Link-Objekten zurück

Die Route verarbeitet die **HTTP GET**-Anfrage, die an den Pfad `/links` gesendet wird.

### Payload

Es wird keine Payload benötigt.

### Antwort

Die Route gibt ein JSON-Objekt mit einem Array aller Link-Objekte zurück.

Beispiel:

~~~json
[
    {
        "id": 1,
        "source": 2,
        "target": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "source": 4,
        "target": 9,
        "relation": "relatesTo",
    },
]
~~~

Ein weiteres Beispiel des zurückgegebenen Objekts finden Sie unter [**links**](api/config/js_kanban_links_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)