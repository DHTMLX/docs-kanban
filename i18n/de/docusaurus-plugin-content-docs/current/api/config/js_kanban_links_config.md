---
sidebar_label: links
title: links Konfiguration
description: Erfahren Sie mehr über die links Konfiguration in der DHTMLX JavaScript Kanban Bibliothek. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# links

### Beschreibung

@short: Optional. Dies ist ein Array von Objekten, das die Links-Daten enthält.

### Verwendung

~~~jsx {}
links?: [
    {
        id: string | number,
        masterId: string | number,
        slaveId: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // weitere Links-Daten
];
~~~

### Parameter

Jeder Link enthält die folgenden Datenfelder:

- `id` - (erforderlich) die eindeutige ID für den Link
- `masterId` - (erforderlich) die Karten-ID, die die dominante Rolle im Link darstellt (z. B. „Is required for")
- `slaveId` - (erforderlich) die Karten-ID, die die passive Rolle im Link darstellt (z. B. „Depends on")
- `relation` - (erforderlich) der Linktyp. Die verfügbaren Typen sind:
    - ***"relatesTo"*** - zeigt eine Abhängigkeit an, bei der die aktuelle Aufgabe mit einer anderen verbunden ist
    - ***"requiredFor"*** - zeigt eine Abhängigkeit an, bei der eine Aufgabe zuerst von einer anderen abgeschlossen werden muss
    - ***"duplicate"*** - markiert eine Abhängigkeit zwischen duplizierten Aufgaben
    - ***"parent"*** - stellt eine Abhängigkeit zwischen einer übergeordneten (master) Aufgabe und ihrer untergeordneten (slave) Aufgabe her

:::info
Um neue Links-Daten dynamisch zu laden, können Sie die Methode [**parse()**](../../methods/js_kanban_parse_method) verwenden!
:::

### Beispiel

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        masterId: 2,
        slaveId: 5,
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

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version v1.4 eingeführt

**Verwandte Artikel:** [Arbeiten mit Daten](/guides/working_with_data)

**Verwandte Beispiel:** [Kanban. Links zwischen Aufgaben](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)
