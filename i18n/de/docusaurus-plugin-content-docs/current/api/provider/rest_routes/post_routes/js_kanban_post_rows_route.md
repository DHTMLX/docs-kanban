---
sidebar_label: POST /rows
title: POST /rows
description: Sie können die REST-Route POST /rows in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST /rows

### Beschreibung

@short: Fügt eine neue Zeile hinzu und gibt ein JSON-Objekt mit der Zeilen-ID zurück.

Die Route verarbeitet die **HTTP POST**-Anfrage, die an den Pfad **'/rows'** gesendet wird.

### Payload

Der Server erwartet ein JSON-Objekt mit den folgenden Eigenschaften:

| Name       | Typ        | Beschreibung |
| ----------- | ----------- | ----------- |
| `label`       |  string  | *Erforderlich*. Der Name der hinzuzufügenden neuen Zeile.|
| `collapsed`   |  boolean | *Optional*. Der aktuelle Zustand der Zeile (Swimlane). Standardmäßig ist die Zeile erweitert (der Wert ist **false**). Ist der Wert **true**, wird die Zeile initial eingeklappt.|

Beispiel:

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~

### Antwort

Die Route gibt ein JSON-Objekt mit der neuen Zeilen-ID zurück.

Beispiel:

~~~json
{    
   "id": 2
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)