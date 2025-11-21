---
sidebar_label: spalten
title: Spalten-Konfiguration
description: Sie können die Spalten-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek nachlesen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Spalten

### Beschreibung

@short: Optional. Ein Array von Objekten, das die Spaltendaten enthält

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

Für jede Spalte können Sie die folgenden Parameter (Daten) angeben:

- `id` - (erforderlich) eine Spalten-**ID**. Sie wird zur Verwaltung der Spalte über die entsprechenden Methoden verwendet
- `label` - (optional) eine Spaltenbeschriftung. Sie wird im Spaltenbereich angezeigt
- `collapsed` - (optional) der aktuelle Zustand der Spalte. Wenn ***true***, ist die Spalte anfangs eingeklappt. Standardwert ist ***false*** (erweiterter Zustand)
- `limit` - (optional) dieser Parameter kann einen von zwei Werttypen annehmen:
    - `number` - eine Begrenzung der Kartenanzahl in der aktuellen Spalte
    - `object` - ein Objekt mit Begrenzungen der Kartenanzahl für jede Zeile (Swimlane) anhand ihrer ID
- `strictLimit` - (optional) ein strenger Limit-Modus. Wenn ***true***, kann der Benutzer keine neuen Karten über die durch den **limit**-Parameter angegebene Anzahl hinaus erstellen. Standardwert ist ***false***
- `css` - (optional) definiert CSS-Stile für eine einzelne Spalte
- `overlay` - (optional) definiert eine Überlagerungsschicht für eine einzelne Spalte. Hier können Sie eine Vorlage angeben, die eine einzelne Spalte wie folgt überdeckt:

    ~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">Drop ist nicht erlaubt</span>
            <span class="disable-drop-description">Nur Tester können Karten in diese
                Spalte verschieben</span>
        </div>`)
    ~~~

:::info
Wenn Sie neue Daten für Spalten dynamisch laden möchten, können Sie die [`setConfig()`](../../methods/js_kanban_setconfig_method) oder  [`parse()`](../../methods/js_kanban_parse_method) Methode verwenden!
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
        label: "In Bearbeitung", 
        id: "inprogress",
        collapsed: false,
        limit: {
            // Begrenzung der Kartenzahl für die "Feature" und "Task" Zeilen der "In Bearbeitung" Spalte
            feature: 3, 
            task: 2
        },
        strictLimit: false
    },
    { 
        label: "Erledigt", 
        id: "done",
        overlay: template(`
            <div class="blockOverlay disable-drop">
                <span class="disable-drop-header">Drop ist nicht erlaubt</span>
                <span class="disable-drop-description">Nur Tester können Karten in diese
                    Spalte verschieben</span>
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

### Benutzerdefinierte Gestaltung

Um benutzerdefinierte Stile auf Spalten mit dem `css`-Parameter anzuwenden, fügen Sie CSS-Regeln für Ihre benutzerdefinierte Klasse hinzu.

```css
.wx-header .wx-column.red,
.wx-column.red {
    background: #FFA29C;
}
```

Falls die Stile nicht angewendet werden, stellen Sie sicher, dass:

- Ihr Selektor genügend Kontext enthält (z. B. Eltern- und interne DHTMLX-Klassen)
- Falls die Eigenschaft durch einen Inline-Stil überschrieben wird, können Sie `!important` verwenden

**Änderungsprotokoll:** Die Parameter **css** und **overlay** wurden in Version v1.4 hinzugefügt

**Verwandte Artikel:**
- [Arbeiten mit Daten](guides/working_with_data.md)
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**Verwandte Beispiele:**
- [Kanban. Limits für Spalten und Swimlanes](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. Farbänderung der Spalte über ein benutzerdefiniertes Menü](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Drag & Drop für bestimmte Spalten deaktivieren](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
