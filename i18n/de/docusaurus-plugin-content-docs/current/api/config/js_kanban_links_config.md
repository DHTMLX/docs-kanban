---
sidebar_label: links
title: links Konfiguration
description: Sie können mehr über die links Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# links

### Beschreibung

@short: Optional. Ein Array von Objekten, die die Link-Daten enthalten

### Verwendung

~~~jsx {}
links?: [
    {
        id: string | number,
        source: string | number,
        target: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // weitere Link-Daten
];
~~~

### Parameter

Für jeden Link können Sie die folgenden Parameter (Daten) angeben:

- `id` - (erforderlich) die ID des Links
- `source` - (erforderlich) die Karten-ID am Anfang des Links (z.B. „Aufgabe A ist erforderlich für Aufgabe B“)
- `target` - (erforderlich) die Karten-ID am Ende des Links (z.B. „Aufgabe B hängt von Aufgabe A ab“)
- `relation` - (erforderlich) der Typ des Links. Hier können Sie die folgenden Typen angeben:
    - ***"relatesTo"*** - definiert eine Abhängigkeit zwischen Aufgaben, bei der die aktuelle Aufgabe an eine andere gebunden ist
    - ***"requiredFor"*** - definiert eine Abhängigkeit zwischen Aufgaben, bei der eine Aufgabe die andere erfordert
    - ***"duplicate"*** - definiert eine Abhängigkeit zwischen duplizierten Aufgaben
    - ***"parent"*** - definiert eine Abhängigkeit zwischen übergeordneten (Master) und untergeordneten (Slave) Aufgaben

:::info
Wenn Sie neue Daten für links dynamisch laden möchten, können Sie die [**setConfig()**](api/methods/js_kanban_setconfig_method.md) oder [**parse()**](api/methods/js_kanban_parse_method.md) Methode verwenden!
:::

### Beispiel

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        source: 2,
        target: 5,
        relation: "relatesTo",
    }, {...} // weitere Link-Daten
];

new kanban.Kanban("#root", {
   columns,
   cards,
   links
   // weitere Parameter
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in Version 1.7 aktualisiert:
    - Der Parameter **masterId** wurde durch den Parameter **source** ersetzt
    - Der Parameter **slaveId** wurde durch den Parameter **target** ersetzt

**Verwandte Artikel:** [Arbeiten mit Daten](guides/working_with_data.md)

**Verwandte Beispiel:** [Kanban. Links zwischen Aufgaben](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)
