---
sidebar_label: POST /uploads
title: POST /uploads
description: Sie können die REST-Route POST /uploads in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# POST `/uploads`

### Beschreibung

@short: Lädt eine Binärdatei auf den Server hoch und gibt ein JSON-Objekt mit der Datei-ID, dem Namen und der URL zurück

Diese Route akzeptiert eine **HTTP POST**-Multipart-Anfrage, die an den Endpunkt `/uploads` gesendet wird.

### Nutzlast

Der Server erwartet eine Binärdatei, die über eine **multipart/form-data**-Anfrage gesendet wird. Wie bei allen Multipart-MIME-Anfragen sollte der Body Folgendes enthalten:

- einen **Content-Disposition**-Header, der auf **form-data** gesetzt ist
  - ein **name**-Attribut mit dem Wert **upload**
  - ein **filename**-Feld mit dem ursprünglichen Namen der hochgeladenen Datei
- einen **Content-Type**-Header, der den Datentyp der Datei angibt

Pro Anfrage ist nur eine Datei erlaubt.

Beispiel:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### Antwort

Der Server antwortet mit einem JSON-Objekt, das die Datei-ID, den Namen und die URL der Datei enthält.

Die Eigenschaft **isCover** zeigt an, ob das Bild ein Titelbild (`true`) ist oder nicht (`false`).

Beispiel:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

Der HTTP-Statuscode zeigt an, ob die Anfrage erfolgreich war (`response.status == 200`) oder einen Fehler enthielt (`response.status == 500`).

---

**Verwandte Artikel**: [Arbeiten mit dem Server](/guides/working_with_server.md)
