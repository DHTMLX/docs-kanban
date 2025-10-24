---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: Sie können mehr über die PUT /rows/{id}/move REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/rows/{id}/move`

### Beschreibung

@short: Verschiebt eine Zeile an eine bestimmte Position

Die Route verarbeitet die **HTTP PUT**-Anfrage, die an den Pfad `rows/{id}/move` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der zu verschiebenden Zeile.|

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `before`   |  number     | *Optional*. Die ID der Zeile, vor der die verschobene Zeile platziert werden soll.|

Beispiel:

~~~json
{
    "before": 3
}
~~~

### Antwort

Der Server gibt ein JSON-Objekt mit der ID der verschobenen Zeile zurück.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)