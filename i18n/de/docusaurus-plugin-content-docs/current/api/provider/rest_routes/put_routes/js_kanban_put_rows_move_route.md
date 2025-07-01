---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: Sie können mehr über die PUT /rows/{id}/move REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# PUT `/rows/{id}/move`

### Beschreibung

@short: Ändert die Position einer Zeile, indem sie an eine bestimmte Stelle verschoben wird.

Diese Route verarbeitet eine **HTTP PUT**-Anfrage, die an den Endpunkt `rows/{id}/move` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die Kennung der Zeile, die verschoben werden soll. |

### Nutzlast

Der Anfragekörper sollte ein JSON-Objekt mit der folgenden Eigenschaft enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `before`   | number      | *Optional*. Die ID der Zeile, vor der die verschobene Zeile positioniert werden soll. |

Beispiel:

~~~json
{
    "before": 3
}
~~~

### Antwort

Die Antwort ist ein JSON-Objekt, das die ID der verschobenen Zeile enthält.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
