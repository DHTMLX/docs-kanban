---
sidebar_label: spalten
title: Spalten-Konfiguration
description: Entdecken Sie die Spaltenkonfiguration in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Finden Sie Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Spalten

### Beschreibung

@short: Optional. Ein Array von Objekten, die die Spaltendaten enthalten

### Verwendung

~~~jsx {}
columns?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        limit?: number | object,
        strictLimit?: boolean,
        css?: string,
        overlay?: any
    },
    {...} // weitere Spaltendaten
];
~~~

### Parameter

Jede Spalte kann mit den folgenden Eigenschaften (Daten) konfiguriert werden:

- `id` - (erforderlich) die eindeutige **ID** der Spalte. Diese wird verwendet, um die Spalte über die zugehörigen Methoden zu verwalten.
- `label` - (optional) die Bezeichnung, die im Spaltenkopf angezeigt wird.
- `collapsed` - (optional) gibt den Anfangszustand der Spalte an. Wenn ***true***, startet die Spalte eingeklappt. Der Standardwert ist ***false*** (ausgeklappt).
- `limit` - (optional) kann zwei Typen haben:
    - `number` - legt eine maximale Anzahl von Karten fest, die in der Spalte erlaubt sind.
    - `object` - definiert Kartenlimits pro Zeile (Swimlane) anhand ihrer IDs.
- `strictLimit` - (optional) aktiviert die strikte Limitierung. Wenn ***true***, können Benutzer nicht mehr Karten hinzufügen als im **limit**-Parameter angegeben. Standard ist ***false***.
- `css` - (optional) wendet benutzerdefinierte CSS-Stile auf die einzelne Spalte an.
- `overlay` - (optional) fügt der Spalte eine Überlagerungsebene hinzu. Dies ist nützlich, um eine Vorlage zu definieren, die die Spalte überdeckt, zum Beispiel:

~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop is not allowed</span>
            <span class="disable-drop-description">Only testers can move cards to this
                column</span>
        </div>`)
~~~

:::info
Um Spaltendaten dynamisch zu aktualisieren, können Sie die [`parse()`](../../methods/js_kanban_parse_method) Methode verwenden.
:::

### Beispiel

~~~jsx {1-31,34}
const columns = [
    {
        label: "Backlog",
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true,
        css: "red"
    },
    {
        label: "In progress",
        id: "inprogress",
        collapsed: false,
        limit: {
            // begrenzt die Anzahl der Karten für die Zeilen "Feature" und "Task" in der Spalte "In progress"
            feature: 3,
            task: 2
        },
        strictLimit: false
    },
    {
        label: "Done",
        id: "done",
        overlay: template(`
            <div class="blockOverlay disable-drop">
                <span class="disable-drop-header">Drop is not allowed</span>
                <span class="disable-drop-description">Only testers can move cards to this
                    column</span>
            </div>`)
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    // weitere Parameter
});
~~~

**Änderungshistorie:** Die Eigenschaften **css** und **overlay** wurden in Version 1.4 eingeführt.

**Verwandte Artikel:**
- [Arbeiten mit Daten](/guides/working_with_data)
- [updateColumn()](/api/methods/js_kanban_updatecolumn_method.md)

**Verwandte Beispiele:**
- [Kanban. Limits für Spalten und Swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Ändern der Spaltenfarbe über benutzerdefiniertes Menü](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
