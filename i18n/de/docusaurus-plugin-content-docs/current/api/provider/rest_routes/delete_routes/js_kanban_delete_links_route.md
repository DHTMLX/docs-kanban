---
sidebar_label: DELETE /links
title: DELETE /links REST-Route API
description: Lesen Sie die API-Referenz der REST-Route DELETE /links für DHTMLX Kanban. Erfahren Sie, wie Sie einen Link löschen.
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

- [Arbeiten mit dem Server](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)
