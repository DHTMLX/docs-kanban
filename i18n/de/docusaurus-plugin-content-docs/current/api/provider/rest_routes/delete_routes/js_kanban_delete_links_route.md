---
sidebar_label: DELETE /links
title: DELETE /links
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die REST-Route DELETE /links. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# DELETE `/links`

### Beschreibung

@short: Löscht Daten zu einem Link

Die Route verarbeitet die **HTTP DELETE**-Anfrage, die an den Pfad `/links/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter wird in der Anforderungszeile übergeben:

| Name | Typ     | Beschreibung                              |
| ---- | ------- | --------------------------------------- |
| `id` | number  | *Erforderlich*. Die ID des zu löschenden Links. |

### Payload

Kein Payload erforderlich.

### Antwort

Es werden keine Daten zurückgegeben. Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Working with server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)