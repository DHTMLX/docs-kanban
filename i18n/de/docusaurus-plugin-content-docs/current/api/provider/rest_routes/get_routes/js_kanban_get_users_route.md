---
sidebar_label: GET /users
title: GET /users
description: Erkunden Sie den REST-Endpunkt GET /users in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# GET `/users`

### Beschreibung

@short: Ruft Daten für alle Benutzer ab und gibt ein JSON-Objekt zurück, das ein Array von Benutzerobjekten enthält.

Dieser Endpunkt verarbeitet **HTTP GET**-Anfragen, die an die URL `/users` gesendet werden.

### Payload

Es muss keine Payload gesendet werden.

### Antwort

Die Antwort enthält ein JSON-Array mit Benutzer-Datenobjekten.

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

Für ein weiteres Beispiel des zurückgegebenen Objekts siehe [**cardShape**](/api/config/js_kanban_cardshape_config.md).

Der HTTP-Statuscode gibt an, ob die Anfrage erfolgreich war (response.status == 200) oder einen Fehler verursachte (response.status == 500).

---

**Verwandte Artikel**:
- [Arbeiten mit dem Server](/guides/working_with_server.md)
- [getUsers()](/api/provider/rest_methods/js_kanban_getusers_method.md)
