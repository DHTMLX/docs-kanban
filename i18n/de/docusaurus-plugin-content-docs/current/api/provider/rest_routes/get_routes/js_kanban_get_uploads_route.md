---
sidebar_label: GET /uploads
title: GET /uploads
description: Entdecken Sie die GET /uploads REST-Route in der DHTMLX JavaScript Kanban Bibliothek-Dokumentation. Erkunden Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Beispielcode und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/uploads`

### Beschreibung

@short: Ruft die angegebene Binärdatei vom Server ab

Diese Route verarbeitet **HTTP GET**-Anfragen, die an den Endpunkt `/uploads/{id}/{name}` gesendet werden.

### Pfadparameter

Die folgenden Parameter sind in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die ID der abzurufenden Datei. |
| `name`     |  string     | *Erforderlich*. Der abzurufende Dateiname. |

### Payload

Es wird keine Payload benötigt.

### Antwort

Die Route antwortet mit der angeforderten Binärdatei.

Der HTTP-Statuscode zeigt Erfolg (response.status == 200) oder Fehlschlag (response.status == 500) an.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
