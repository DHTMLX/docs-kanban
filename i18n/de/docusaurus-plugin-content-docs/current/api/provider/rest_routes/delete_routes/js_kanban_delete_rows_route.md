---
sidebar_label: DELETE /rows
title: DELETE /rows REST-Route API
description: Lesen Sie die API-Referenz der REST-Route DELETE /rows für DHTMLX Kanban. Erfahren Sie, wie Sie eine Zeile (Swimlane) löschen.
---

# DELETE `/rows`

### Beschreibung

@short: Löscht Daten in einer Zeile (Swimlane)

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `/rows/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name       | Typ         | Beschreibung |
| ---------- | ----------- | ------------ |
| `id`       | number      | *Erforderlich*. Die ID der zu löschenden Zeile. |

### Payload

Es ist kein Payload erforderlich.

### Antwort

Es werden keine Daten zurückgegeben. Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](guides/working_with_server.md)
