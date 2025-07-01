---
sidebar_label: POST /columns
title: POST /columns
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route POST /columns. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/columns`

### Beschreibung

@short: Fügt eine neue Spalte hinzu und gibt ein JSON-Objekt mit der Spalten-ID zurück.

Diese Route verarbeitet eine **HTTP POST**-Anfrage, die an den Endpunkt `/columns` gesendet wird.

### Payload

Der Server erwartet ein JSON-Objekt mit folgender Eigenschaft:

| Name        | Typ         | Beschreibung |
| ----------- | ----------- | ------------ |
| `label`     | string      | *Erforderlich*. Der Name für die zu erstellende neue Spalte.|

Beispiel:

~~~json
{
    "label": "New column",
}
~~~

### Antwort

Die Antwort enthält ein JSON-Objekt mit der ID der neu erstellten Spalte.

Beispiel:

~~~json
{ 
   "id": 4
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder ein Fehler aufgetreten ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
