---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: Sie können mehr über die PUT /cards/{id}/move REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/cards/{id}/move`

### Beschreibung

@short: Verschiebt Karten an eine bestimmte Position

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `cards/{id}/move` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der zu verschiebenden Karte. Falls mehrere Karten verschoben werden sollen, muss die id auf 0 gesetzt werden.|

:::info
Wenn Sie mehrere Karten verschieben, stellen Sie sicher, dass `id` auf 0 gesetzt ist. Andernfalls (wenn ein anderer Wert gesetzt ist) wird nur eine Karte (mit diesem angegebenen id-Wert) verschoben.
:::

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `id`        | number      | *Erforderlich*. Die ID der verschobenen Karte. |
| `columnId`  | number      | *Erforderlich*. Die ID der Spalte, in die die Karte verschoben wird. |
| `rowId`     | number      | *Erforderlich*. Die ID der Zeile, in die die Karte verschoben wird. |
| `before`    | number      | *Optional*. Die ID der Karte, vor der die verschobene Karte platziert werden soll. |
| `batch`     | object      | *Erforderlich bei Mehrfachauswahl*. Ein Array von Kartenobjekten, die verschoben werden. |

Beispiel:

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

Wenn mehrere Karten verschoben werden, sollte die Eigenschaft `batch` ein Array aller zu verschiebenden Kartenobjekte enthalten:

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

Der Server gibt ein JSON-Objekt mit einer Karten-ID zurück (wenn eine einzelne Karte verschoben wird) oder mit der ID auf 0 gesetzt bei einer Operation auf mehreren Karten.

Beispiel:

~~~json title="Antwort auf die Anfrage für die einzelne Kartenoperation"
{
    "id": 4
}
~~~

~~~json title="Antwort auf die Anfrage für die Operation mit mehreren Karten"
{
    "id": 0
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)