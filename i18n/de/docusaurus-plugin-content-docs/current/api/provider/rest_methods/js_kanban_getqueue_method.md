---
sidebar_label: getQueue()
title: getQueue REST-Methode API
description: Lesen Sie die getQueue REST-Methoden-API für DHTMLX Kanban. Erfahren Sie, wie Sie die interne Warteschlange der von RestDataProvider verarbeiteten Aktionen abrufen.
---

# getQueue()

### Beschreibung

@short: Gibt die interne Warteschlange der Aktionen zurück, die RestDataProvider verarbeitet

:::info
Die Methode `getQueue()` ist Teil des **RestDataProvider**-Dienstes für die Arbeit mit dem Server.
:::

### Verwendung

~~~jsx {}
getQueue(): object;
~~~

### Rückgabewert

Die Methode gibt die interne `ActionQueue`-Instanz zurück, die von `RestDataProvider` zur Verarbeitung der an den Server gesendeten Datenoperationen verwendet wird. Die Warteschlange ist verantwortlich für:

- das Puffern von Aktionen, bis ausstehende Anfragen abgeschlossen sind
- das Zuweisen temporärer clientseitiger IDs an neu erstellte Entitäten und deren Ersetzung durch Backend-IDs, sobald der Server antwortet

Die Warteschlange wird intern von anderen Methoden von `RestDataProvider` verwendet. Die häufigste indirekte Verwendung erfolgt über [`getIDResolver()`](api/provider/rest_methods/js_kanban_getidresolver_method.md), das auf der ID-Auflösungslogik der Warteschlange aufbaut.

In der Regel ist es nicht notwendig, `getQueue()` direkt aufzurufen. Verwenden Sie diese Methode nur, wenn Sie detaillierten Zugriff auf die Warteschlange benötigen (z. B. bei der Implementierung einer erweiterten benutzerdefinierten Synchronisierung zwischen Client und Server).

**Verwandte Artikel:** [Arbeiten mit dem Server](guides/working_with_server.md)
