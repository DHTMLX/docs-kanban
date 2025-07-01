---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move
description: Sie können mehr über die PUT /columns/{id}/move REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/columns/{id}/move`

### Beschreibung

@short: Ändert die Position einer Spalte, indem sie an eine bestimmte Stelle verschoben wird.

Diese Route verarbeitet eine **HTTP PUT**-Anfrage, die an `columns/{id}/move` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------|
| `id`       |  number     | *Erforderlich*. Die Kennung der zu verschiebenden Spalte.|

### Nutzlast

Der Server erwartet ein JSON-Objekt mit folgender Eigenschaft:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------|
| `before`   |  number     | *Optional*. Die ID der Spalte, vor der die verschobene Spalte platziert werden soll.|

Beispiel:

~~~json
{
    "before": 3
}
~~~

### Antwort

Der Server antwortet mit einem JSON-Objekt, das die ID der verschobenen Spalte angibt.

Beispiel:

~~~json
{
    "id": 4
}
~~~

Der HTTP-Statuscode zeigt das Ergebnis der Anfrage an: Ein Status von 200 bedeutet Erfolg, während 500 einen Fehler anzeigt.

---

**Verwandte Artikel**: [Arbeiten mit dem Server](/guides/working_with_server.md)
