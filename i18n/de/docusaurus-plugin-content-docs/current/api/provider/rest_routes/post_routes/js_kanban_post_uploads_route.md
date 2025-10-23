---
sidebar_label: POST /uploads
title: POST /uploads
description: Sie können die REST-Route POST /uploads in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek nachlesen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/uploads`

### Beschreibung

@short: Lädt eine Binärdatei auf den Server hoch und gibt ein JSON-Objekt mit der Datei-ID, dem Namen und der URL zurück

Die Route verarbeitet die **HTTP POST** Multipart-Anfrage, die an den Pfad `/uploads` gesendet wird.

### Payload

Der Server muss eine Binärdatei über eine **multipart/form-data**-Anfrage erhalten. Wie bei allen Multipart-MIME-Typen sollte der Anfrage-Body Folgendes enthalten:

- den **Content-Disposition**-Header, der auf **form-data** gesetzt sein muss
  - das **name**-Attribut mit dem Wert **upload**
  - **filename** – der ursprüngliche Dateiname der hochgeladenen Datei
- den **Content-Type**-Header – der Typ des Datei-Inhalts

Pro Anfrage kann nur eine Datei gesendet werden.

Beispiel:

~~~
------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--
~~~

### Antwort

Die Route gibt ein JSON-Objekt mit der Datei-ID, dem Namen und der URL zurück.

Die Eigenschaft **isCover** zeigt an, ob es sich bei dem Bild um ein Titelbild (true) oder nicht (false) handelt.

Beispiel:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (response.status == 200) oder fehlgeschlagen ist (response.status == 500).

---

**Verwandte Artikel**: [Working with server](guides/working_with_server.md)