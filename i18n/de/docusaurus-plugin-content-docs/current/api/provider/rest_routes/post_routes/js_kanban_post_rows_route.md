---
sidebar_label: POST /rows
title: POST /rows
description: Sie können die REST-Route POST /rows in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST /rows

### Beschreibung

@short: Fügt eine neue Zeile hinzu und antwortet mit einem JSON-Objekt, das die ID der Zeile enthält.

Diese Route verarbeitet **HTTP POST**-Anfragen, die an den Endpunkt **'/rows'** gesendet werden.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name       | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `label`       | string      | *Erforderlich*. Der Name für die hinzuzufügende neue Zeile. |
| `collapsed`   | boolean     | *Optional*. Gibt den Anfangszustand der Zeile (Swimlane) an. Der Standardzustand ist erweitert (**false**). Wird **true** gesetzt, startet die Zeile eingeklappt.|

Beispiel:

~~~json
{
    "label": "Neue Zeile",
    "collapsed": "true",
}
~~~

### Antwort

Die Antwort enthält ein JSON-Objekt mit der ID der neu erstellten Zeile.

Beispiel:

~~~json
{    
   "id": 2
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (**200**) oder einen Fehler hatte (**500**).

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
