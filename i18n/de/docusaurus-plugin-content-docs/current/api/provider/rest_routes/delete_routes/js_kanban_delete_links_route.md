---
sidebar_label: DELETE /links
title: DELETE /links
description: Dieser Abschnitt behandelt die DELETE /links REST-Route in der DHTMLX JavaScript Kanban-Bibliothek. Er enthält Entwickleranleitungen, API-Referenzen, Beispiele, Live-Demos und eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# DELETE `/links`

### Beschreibung

@short: Entfernt einen Link-Eintrag

Dieser Endpunkt verarbeitet eine **HTTP DELETE** Anfrage, die an `/links/{id}` gesendet wird.

### Pfadparameter

Der folgende Parameter ist in der Anforderungs-URL enthalten:

| Name | Typ     | Beschreibung                                    |
| ---- | ------- | ---------------------------------------------- |
| `id` | number  | *Erforderlich*. Die Kennung des zu löschenden Links. |

### Payload

Für diese Anfrage wird kein Payload benötigt.

### Antwort

Es wird kein Inhalt zurückgegeben. Der HTTP-Statuscode zeigt Erfolg (response.status == 200) oder Fehler (response.status == 500) an.

---

**Verwandte Artikel**:
- [Working with server](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
