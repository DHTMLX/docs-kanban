---
sidebar_label: items
title: items Konfiguration
description: Sie können die Konfiguration der (Toolbar) items in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek nachlesen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# items

### Beschreibung

@short: Optional. Ein Array mit Steuerelementen, die in der Toolbar des Kanban angeordnet sind.

### Verwendung

~~~jsx {}
items?: [
    "search" | {
        // Suchparameter
        type: "search",
        options?: [
            {
                id: string,
                label: string,
                searchRule?: (card, value, by) => {
                    return boolean
                }
            }, {...}
        ],
        resultTemplate?: template(searchResult => {
            return "Die HTML-Vorlage des Suchergebnisses";
        }) 
    },
    "sort" | {
        // Sortierparameter
        type: "sort",
        options?: [
            {    
                text: string,
                by?: string, // by?: ((card: object) => any),
                dir?: "asc" | "desc"
            }, {...}
        ]  
    },
    "spacer",
    "undo",
    "redo",
    "addColumn",
    "addRow",
    custom_control // string oder function
];
~~~

### Parameter

Im **items**-Array können Sie folgende Parameter angeben:

:::info
#### Um eine *Standard-Suchleiste* einzustellen, können Sie den String `"search"` angeben.
#### Um eine *benutzerdefinierte Suchleiste* einzustellen, können Sie ein Objekt mit den folgenden Parametern angeben:

- `type` - (erforderlich) ein Steuerelementtyp (*"search"*)
- `options` - (optional) ein Array von Objekten, die die Suchparameter definieren. Für jedes Objekt (*Suchoption*) können Sie folgende Parameter spezifizieren:
    - `id` - (erforderlich) ein Schlüssel des Kartenfeldes, nach dem die Karten durchsucht werden
    - `label` - (erforderlich) ein Name der Option, der in einer Dropdown-Liste des Suchleisten-Selectors verwendet wird
    - `searchRule` (optional) - eine benutzerdefinierte Funktion, die Suchregeln definiert. Sie erhält folgende Argumente:
        - ***card*** - ein Objekt mit Kartendaten
        - ***value*** - ein gesuchter Wert, der in der Suchleiste eingegeben wurde
        - ***by*** - ein Schlüssel des Kartenfeldes, nach dem gesucht wird
- `resultTemplate` - (optional) eine Vorlage zur Darstellung des benutzerdefinierten Suchergebnisses

~~~jsx
items: [
    "search", // Standard-Suchleiste
    // andere Steuerelemente
]

// oder 

items: [
    { // benutzerdefinierte Suchleiste
        type: "search",
        options: [
            {
                id: "label",
                label: "Nach Label"
            },
            {
                id: "start_date",
                label: "Nach Datum",
                searchRule: (card, value, by) => {
                    const date = card[by];
                    return date?.toString().includes(value);
                }
            }
        ],
        resultTemplate: kanban.template(searchResult => {
            return `<div class="list-item">
                <div class="list-item-text">${searchResult.result.label}</div>
                ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
            </div>`
        })
    },
    // andere Steuerelemente
]
~~~
:::

:::info
#### Um eine *Standard-Sortiersteuerung* einzustellen, können Sie den String `"sort"` angeben.
#### Um eine *benutzerdefinierte Sortiersteuerung* einzustellen, können Sie ein Objekt mit den folgenden Parametern angeben:

- `type` - (erforderlich) ein Steuerelementtyp (*"sort"*)
- `options` - (optional) ein Array von Objekten, die die Sortierparameter definieren. Für jedes Objekt (*Sortieroption*) können Sie folgende Parameter angeben:
    - `text` - (erforderlich) ein Name der Option, der in einer Dropdown-Liste des Sortier-Selectors verwendet wird
    - `by` - (optional) ein Schlüssel des Kartenfeldes, nach dem die Karten sortiert werden. Dieser Parameter kann als *String* oder *Funktion* angegeben werden. Die Funktion muss das Kartenfeld für die Sortierung zurückgeben.
    - `dir` - (optional) eine Sortierreihenfolge. Mögliche Werte sind *"asc"* und *"desc"*

~~~jsx
items: [
    "sort", // Standard-Sortiersteuerung
    // andere Steuerelemente
]
// oder 
items: [
    { // benutzerdefinierte Sortiersteuerung
        type: "sort",
        options: [
            {
                text: "Sortiere nach Label",
                by: "label",
                dir: "asc"
            },
            {
                text: "Sortiere nach Beschreibung",
                by: "description",
                dir: "desc"
            }
        ]
    }, {...} // andere Steuerelemente
]
~~~
:::

- `"spacer"` - ein Leerraum zwischen Steuerelementen
- `"undo"` - eine Steuerung zur Verwaltung der Historie (ein Klick macht einen Schritt zurück)
- `"redo"` - eine Steuerung zur Verwaltung der Historie (ein Klick macht einen Schritt vorwärts)
- `"addColumn"` - eine Steuerung zum Hinzufügen neuer Spalten
- `"addRow"` - eine Steuerung zum Hinzufügen neuer Zeilen
- `custom_control` - (optional) benutzerdefiniertes Steuerelement. Hier können Sie benutzerdefinierte Steuerelemente sowohl als **String** als auch als **Funktion** angeben. Siehe den Abschnitt [Customization](guides/customization.md#custom-toolbar)

### Beispiel

~~~jsx {8-24}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        {
            type: "search",
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer",
        "sort",
        "undo",
        "redo", 
        "addColumn",
        "addRow"
    ]
});
~~~

**Änderungsprotokoll:**

- Die Steuerelemente *"Undo"* und *"Redo"* wurden in v1.3 hinzugefügt
- Der Parameter ***items.options[0].label*** der **sort** Steuerung wurde in v1.4 durch den Parameter ***items.options[0].text*** ersetzt
- Der Parameter ***items.searchResult*** der **"search"** Steuerung wurde in v1.6 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#toolbar) und [Anpassung](guides/customization.md#custom-toolbar)

**Verwandte Beispiele:**
- [Kanban. Benutzerdefinierte Toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Anpassung der Vorschläge in Suchergebnissen](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)