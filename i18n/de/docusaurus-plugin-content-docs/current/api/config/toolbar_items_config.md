---
sidebar_label: items
title: items Konfiguration
description: Entdecken Sie die (Toolbar) items Konfiguration in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Schauen Sie sich Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# items

### Beschreibung

@short: Optional. Ein Array, das die auf der Kanban Toolbar angeordneten Steuerelemente enthält.

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

Im **items** Array können Sie die folgenden Parameter verwenden:

:::info
#### Um eine *Standard-Suchleiste* hinzuzufügen, verwenden Sie einfach den String `"search"`.
#### Um eine *benutzerdefinierte Suchleiste* zu konfigurieren, übergeben Sie ein Objekt mit diesen Parametern:

- `type` - (erforderlich) gibt den Steuerungstyp an (*"search"*)
- `options` - (optional) ein Array zur Definition der Suchparameter. Jedes Objekt (*Suchoption*) kann enthalten:
    - `id` - (erforderlich) der Kartenfeld-Schlüssel, der für die Suche verwendet wird
    - `label` - (erforderlich) der im Dropdown der Suchleiste angezeigte Name der Option
    - `searchRule` (optional) - eine benutzerdefinierte Funktion zur Definition der Suchkriterien. Sie erhält:
        - ***card*** - das Karten-Datenobjekt
        - ***value*** - der Such-Eingabewert
        - ***by*** - der Kartenfeld-Schlüssel, der für die Suche verwendet wird
- `searchResult` - (optional) eine Vorlage zur Anpassung der Anzeige der Suchergebnisse

~~~jsx
items: [
    "search", // Standard-Suchleiste
    // weitere Steuerelemente
]

// oder 

items: [
    { // benutzerdefinierte Suchleiste
        type: "search",
        options: [
            {
                id: "label",
                label: "Nach Bezeichnung"
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
    // weitere Steuerelemente
]
~~~
:::

:::info
#### Um eine *Standard-Sortiersteuerung* hinzuzufügen, verwenden Sie einfach den String `"sort"`.
#### Um eine *benutzerdefinierte Sortiersteuerung* zu konfigurieren, übergeben Sie ein Objekt mit den folgenden Parametern:

- `type` - (erforderlich) gibt den Steuerungstyp an (*"sort"*)
- `options` - (optional) ein Array zur Definition der Sortierparameter. Jedes Objekt (*Sortieroption*) kann enthalten:
    - `text` - (erforderlich) der im Sortier-Dropdown angezeigte Name der Option
    - `by` - (optional) der Kartenfeld-Schlüssel oder eine Funktion, die zum Sortieren verwendet wird
    - `dir` - (optional) die Sortierrichtung, entweder *"asc"* oder *"desc"*

~~~jsx
items: [
    "sort", // Standard-Sortiersteuerung
    // weitere Steuerelemente
]
// oder 
items: [
    { // benutzerdefinierte Sortiersteuerung
        type: "sort",
        options: [
            {
                text: "Sortieren nach Bezeichnung",
                by: "label",
                dir: "asc"
            },
            {
                text: "Sortieren nach Beschreibung",
                by: "description",
                dir: "desc"
            }
        ]
    }, {...} // weitere Steuerelemente
]
~~~
:::

- `"spacer"` - fügt einen Leerraum zwischen den Steuerelementen ein
- `"undo"` - Steuerung zum Rückgängig machen von Aktionen (ein Klick geht einen Schritt zurück)
- `"redo"` - Steuerung zum Wiederherstellen von Aktionen (ein Klick geht einen Schritt vorwärts)
- `"addColumn"` - Steuerung zum Hinzufügen neuer Spalten
- `"addRow"` - Steuerung zum Hinzufügen neuer Zeilen
- `custom_control` - (optional) eine benutzerdefinierte Steuerung, die ein **String** oder eine **Funktion** sein kann. Details finden Sie im Abschnitt [Customization](/guides/customization#individuelle-toolbar).

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

- Die *"Undo"* und *"Redo"* Steuerungen wurden in Version v1.3 eingeführt
- Der Parameter ***items.options[0].label*** in der **sort** Steuerung wurde in v1.4 zu ***items.options[0].text*** umbenannt
- Der Parameter ***items.searchResult*** für die **"search"** Steuerung wurde in v1.6 hinzugefügt

**Verwandte Artikel:** [Konfiguration](/guides/configuration#toolbar) und [Anpassung](/guides/customization#individuelle-toolbar)

**Verwandte Beispiele:**
- [Kanban. Benutzerdefinierte Toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Anpassung der Vorschläge in Suchergebnissen](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)
