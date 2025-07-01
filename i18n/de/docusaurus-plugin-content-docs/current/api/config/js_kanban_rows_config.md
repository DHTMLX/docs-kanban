---
sidebar_label: zeilen
title: rows Konfiguration
description: Erkunden Sie die rows-Konfiguration in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Sehen Sie sich Entwicklerleitfäden, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# rows

### Beschreibung

@short: Optional. Ein Array von Objekten, das die Daten der Zeilen (Swimlanes) enthält.

### Nutzung

~~~jsx {}
rows?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        css?: string,
    }, {...} // andere Zeilendaten
];
~~~

:::info
Um Swimlanes einzurichten, geben Sie die entsprechenden Daten im **rows**-Array an. Sie können Swimlanes über die Benutzeroberfläche oder durch Verwendung der [zugehörigen API](/howtos/#arbeiten-mit-zeilen-swimlanes) einklappen/ausklappen, umbenennen, löschen und verschieben.
:::

### Parameter

Jede Zeile (Swimlane) kann die folgenden Parameter enthalten:

- `id` - (erforderlich) die Zeilen- (Swimlane-) **ID**, die zur Steuerung der Zeile über ihre Methoden verwendet wird
- `label` - (optional) die Bezeichnung für die Zeile (Swimlane), die im Zeilenbereich angezeigt wird
- `collapsed` - (optional) gibt an, ob die Zeile (Swimlane) zu Beginn eingeklappt ist. Wenn ***true***, ist sie initial eingeklappt. Der Standardwert ist ***false*** (ausgeklappt)
- `css` - (optional) wendet CSS-Stile auf eine einzelne Zeile an

:::info
Um neue Zeilen- (Swimlane-) Daten dynamisch zu laden, kann die [**parse()**](../../methods/js_kanban_parse_method) Methode verwendet werden.
:::

### Beispiel

~~~jsx {1-4,9}
const rows = [
    { label: "Feature", id: "feature", collapsed: false, css: "red" },
    { label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows, // Swimlane-Daten
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Der ***css*** Parameter wurde in Version 1.4 eingeführt

**Verwandte Artikel:**
- [Arbeiten mit Daten](/guides/working_with_data)
- [updateRow()](/api/methods/js_kanban_updaterow_method.md)

**Verwandtes Beispiel:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
