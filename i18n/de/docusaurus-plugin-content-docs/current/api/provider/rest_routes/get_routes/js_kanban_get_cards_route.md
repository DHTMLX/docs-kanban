---
sidebar_label: GET /cards
title: GET /cards
description: Sie können mehr über die REST-Route GET /cards in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/cards`

### Beschreibung

@short: Ruft Informationen zu allen Karten ab und gibt ein JSON-Objekt mit einem Array von Kartenobjekten zurück.

Diese Route verarbeitet eine **HTTP GET**-Anfrage, die an den Endpunkt `/cards` gesendet wird.

### Payload

Kein Payload ist erforderlich.

### Antwort

Die Antwort liefert ein JSON-Objekt mit einem Array aller Kartenobjekte.

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
Start- und Enddaten von Ereignissen sollten dem ISO-Format **yyyy-MM-dd'T'HH:mm:ss.SSSXXX** entsprechen.
:::

Ein weiteres Beispiel für das zurückgegebene Objekt finden Sie unter [**cards**](/api/config/js_kanban_cards_config.md).

Der HTTP-Statuscode gibt das Ergebnis der Anfrage an: Erfolg (response.status == 200) oder Fehler (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](/guides/working_with_server.md)
- [getCards()](/api/provider/rest_methods/js_kanban_getcards_method.md)
