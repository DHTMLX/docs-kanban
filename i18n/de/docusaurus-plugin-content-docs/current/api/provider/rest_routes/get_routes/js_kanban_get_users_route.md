---
sidebar_label: GET /users
title: GET /users
description: Sie können die REST-Route GET /users in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/users`

### Beschreibung

@short: Ruft Daten aller Benutzer ab und gibt ein JSON-Objekt mit einem Array von Benutzerobjekten zurück

Die Route verarbeitet die **HTTP GET**-Anfrage, die an den Pfad `/users` gesendet wird.

### Payload

Es wird keine Payload benötigt.

### Antwort

Die Route gibt ein JSON-Objekt mit einem Array von Objekten mit Benutzerdaten zurück.

Beispiel:

~~~json
[
    {
        "id": 1,
        "label": "Jhon",
        "avatar": "https://serv.com/images/jhon.png"
    },
    {
        "id": 2,
        "label": "Ben",
        "avatar": "https://serv.com/images/ben.png"
    },
    {
        "id": 3,
        "label": "Alex",
        "avatar": "https://serv.com/images/alex.png"
    }
]
~~~

Ein weiteres Beispiel des zurückgegebenen Objekts finden Sie unter [**cardShape**](api/config/js_kanban_cardshape_config.md).

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**:
- [Working with server](guides/working_with_server.md)
- [getUsers()](api/provider/rest_methods/js_kanban_getusers_method.md)