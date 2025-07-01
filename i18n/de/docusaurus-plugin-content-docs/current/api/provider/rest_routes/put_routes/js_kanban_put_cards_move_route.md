---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: Sie können die PUT /cards/{id}/move REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# PUT `/cards/{id}/move`

### Beschreibung

@short: Verschiebt Karten an eine bestimmte Position

Diese Route behandelt die **HTTP PUT**-Anfrage, die an den Endpunkt `cards/{id}/move` gesendet wird.

### Pfadparameter

Der folgende Parameter sollte in der Anforderungs-URL enthalten sein:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der zu verschiebenden Karte. Zum Verschieben mehrerer Karten muss die id auf 0 gesetzt werden.|

:::info
Wenn mehrere Karten verschoben werden, muss `id` auf 0 gesetzt sein; andernfalls wird nur die Karte mit der angegebenen id verschoben.
:::

### Payload

Der Server erwartet ein JSON-Objekt mit folgenden Eigenschaften:

| Name        | Typ        | Beschreibung |
| ----------- | ---------- | ------------ |
| `id`        | number     | *Erforderlich*. Die ID der verschobenen Karte. |
| `columnId`  | number     | *Erforderlich*. Die ID der Spalte, in der die Karte platziert wird. |
| `rowId`     | number     | *Erforderlich*. Die ID der Zeile, in der die Karte platziert wird. |
| `before`    | number     | *Optional*. Die ID der Karte, vor der die verschobene Karte positioniert werden soll. |
| `batch`     | object     | *Erforderlich bei Mehrfachauswahl*. Ein Array von Kartenobjekten, die verschoben werden.|

Beispiel:

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

Beim Verschieben mehrerer Karten sollte die Eigenschaft `batch` ein Array aller zu verschiebenden Kartenobjekte enthalten:

~~~json
{
    "batch": [
        {
            "id": 2,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        },
        {
            "id": 7,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        }
    ]
}
~~~

### Antwort

Der Server antwortet mit einem JSON-Objekt, das die Karten-ID enthält (bei Einzelkartenverschiebung) oder mit der ID auf 0 gesetzt, wenn mehrere Karten verschoben werden.

Beispiel:

~~~json title="Antwort auf die Anfrage zur Einzelkartenoperation"
{
    "id": 4
}
~~~

~~~json title="Antwort auf die Anfrage zur Mehrfachkartenoperation"
{
    "id": 0
}
~~~

Der HTTP-Statuscode zeigt den Erfolg der Anfrage (response.status == 200) oder einen Fehler (response.status == 500) an.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
