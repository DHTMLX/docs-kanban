---
sidebar_label: PUT /rows
title: PUT /rows
description: Sie können die PUT /rows REST-Route in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# PUT `/rows`

### Beschreibung

@short: Aktualisiert die Daten für eine bestimmte Zeile (Swimlane) und gibt ein leeres JSON-Objekt zurück.

Diese Route verarbeitet eine **HTTP PUT**-Anfrage, die an den Endpunkt `/rows/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der Zeile (Swimlane), die aktualisiert werden soll.|

### Nutzlast

Der Server erwartet ein JSON-Objekt, das alle Eigenschaften der Zeile enthält, einschließlich unveränderter und aktualisierter Felder.

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `label`     | string      | *Erforderlich*. Der Name der Zeile, die aktualisiert werden soll.|
| `collapsed` | boolean     | *Optional*. Gibt an, ob die Zeile anfangs eingeklappt (**true**) oder ausgeklappt ist (**false**, Standardwert).|

Beispiel:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

Ein weiteres Beispiel für das row-Objekt finden Sie im Abschnitt [**rows**](/api/config/js_kanban_rows_config.md).

### Antwort

Nach einer erfolgreichen Aktualisierung antwortet der Server mit einem leeren JSON-Objekt.

Der HTTP-Statuscode gibt das Ergebnis an: Ein Status von 200 bedeutet, die Anfrage war erfolgreich, während 500 auf einen Fehler hinweist.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
