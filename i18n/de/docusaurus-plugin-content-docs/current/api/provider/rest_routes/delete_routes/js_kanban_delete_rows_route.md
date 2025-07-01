---
sidebar_label: DELETE /rows
title: DELETE /rows
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route DELETE /rows. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/rows`

### Beschreibung

@short: Entfernt eine Zeile (Swimlane) aus den Daten.

Diese Route verarbeitet eine **HTTP DELETE**-Anfrage, die an den Endpunkt `/rows/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       |  number     | *Erforderlich*. Die eindeutige Kennung der zu entfernenden Zeile. |

### Payload

Es muss kein Payload mit der Anfrage gesendet werden.

### Antwort

Es wird kein Inhalt zurückgegeben. Der HTTP-Statuscode zeigt das Ergebnis an: Ein Status von 200 bedeutet, dass die Löschung erfolgreich war, während 500 auf einen Fehler hinweist.

---

**Verwandte Artikel**: [Working with server](/guides/working_with_server.md)
