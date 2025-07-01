---
sidebar_label: PUT /columns
title: PUT /columns
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route PUT /columns. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# PUT `/columns`

### Beschreibung

@short: Aktualisiert die Details einer bestimmten Spalte und gibt ein leeres JSON-Objekt zurück.

Diese Route verarbeitet eine **HTTP PUT**-Anfrage, die an den Endpunkt `/columns/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der Spalte, die aktualisiert werden soll.|

### Payload

Der Server erwartet ein JSON-Objekt, das alle Eigenschaften der Spalte enthält, einschließlich der unveränderten und der neuen oder geänderten Eigenschaften.

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `label`    | string      | *Erforderlich*. Der aktualisierte Name der Spalte.|
| `collapsed`| boolean     | *Optional*. Gibt an, ob die Spalte anfangs eingeklappt (**true**) oder ausgeklappt (**false**, Standard) ist.|

Beispiel:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

Ein weiteres Beispiel für das Spaltenobjekt finden Sie im Abschnitt [**columns**](/api/config/js_kanban_columns_config.md).

### Antwort

Bei erfolgreicher Anfrage wird ein leeres JSON-Objekt zurückgegeben.

Der HTTP-Statuscode gibt das Ergebnis an: Erfolg mit Status 200 oder Fehler mit Status 500.

---

**Verwandte Artikel**: [Arbeiten mit dem Server](/guides/working_with_server.md)
