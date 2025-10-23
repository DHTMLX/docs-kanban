---
sidebar_label: zeilen
title: Zeilen-Konfiguration
description: Sie können mehr über die Zeilen-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# zeilen

### Beschreibung

@short: Optional. Ein Array von Objekten, die die Daten der Zeilen (Swimlanes) enthalten.

### Verwendung

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
Um Swimlanes zu erstellen, müssen Sie die entsprechenden Daten im Array der **rows**-Eigenschaft angeben. Sie können Swimlanes über die Benutzeroberfläche oder mit der [entsprechenden API](howtos.md#how-to-work-with-rows-swimlanes) einklappen/ausklappen, umbenennen, löschen und verschieben.
:::

### Parameter

Für jede Zeile (Swimlane) können Sie folgende Parameter (Daten) angeben:

- `id` - (erforderlich) eine Zeilen-(Swimlane-)ID. Sie wird zur Verwaltung der Zeile über die entsprechenden Methoden verwendet.
- `label` - (optional) ein Bezeichner der Zeile (Swimlane). Er wird im Bereich der Zeile angezeigt.
- `collapsed` - (optional) der aktuelle Zustand der Zeile (Swimlane). Ist der Wert ***true***, ist die Zeile initial eingeklappt. Der Standardwert ist ***false*** (ausgeklappter Zustand).
- `css` - (optional) definiert CSS-Stile für eine einzelne Zeile.

:::info
Wenn Sie neue Daten für Zeilen (Swimlanes) dynamisch laden möchten, können Sie die [**parse()**](api/methods/js_kanban_parse_method.md) Methode verwenden!
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
    rows, // Swimlanes-Daten
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Der Parameter ***css*** wurde in Version 1.4 hinzugefügt.

**Verwandte Artikel:**
- [Arbeiten mit Daten](guides/working_with_data.md)
- [updateRow()](api/methods/js_kanban_updaterow_method.md)

**Verwandte Beispiel:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)