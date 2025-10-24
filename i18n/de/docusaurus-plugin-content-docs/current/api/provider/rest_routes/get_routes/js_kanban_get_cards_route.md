---
sidebar_label: GET /cards
title: GET /cards
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route GET /cards. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# GET `/cards`

### Beschreibung

@short: Ruft Daten aller Karten ab und gibt ein JSON-Objekt mit einem Array von Kartenobjekten zurück

Die Route verarbeitet die **HTTP GET**-Anfrage, die an den Pfad `/cards` gesendet wird.

### Payload

Es ist kein Payload erforderlich.

### Antwort

Die Route gibt ein JSON-Objekt mit einem Array aller Kartenobjekte zurück.

Beispiel:

~~~json
[
    {
        "id": 4,
        "label": "Set the tasks priorities",
        "description": "",
        "column": 2,
        "row": 1,
        "start_date": "2018-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
    {
        "id": 5,
        "label": "Custom icons",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2019-01-01T00:00:00Z",
        "end_date": null,
        "progress": 0,
        "attached": [],
        "color": "#65D3B3",
        "users": []
    },
    {
        "id": 6,
        "label": "Integration with Gantt",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2020-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
]
~~~

:::note
Die Start- und Enddaten des Ereignisses sollten dem ISO-Format **yyyy-MM-dd'T'HH:mm:ss.SSSXXX** entsprechen.
:::

Für ein weiteres Beispiel des zurückgegebenen Objekts siehe [**cards**](api/config/js_kanban_cards_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Working with server](guides/working_with_server.md)
- [getCards()](api/provider/rest_methods/js_kanban_getcards_method.md)