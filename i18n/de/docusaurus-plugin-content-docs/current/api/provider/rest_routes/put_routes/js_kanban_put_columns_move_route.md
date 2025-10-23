---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move
description: Sie können die PUT /columns/{id}/move REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/columns/{id}/move`

### Beschreibung

@short: Verschiebt eine Spalte an eine angegebene Position

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `columns/{id}/move` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der zu verschiebenden Spalte. |

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `before`   |  number     | *Optional*. Die ID der Spalte, vor der die verschobene Spalte platziert werden soll. |

Beispiel:

~~~json
{
    "before": 3
}
~~~

### Antwort

Der Server gibt ein JSON-Objekt mit der ID der verschobenen Spalte zurück.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)