---
sidebar_label: rowShape
title: rowShape Konfiguration
description: Die rowShape-Konfiguration in der DHTMLX JavaScript Kanban-Bibliothek ermöglicht es Ihnen, das Erscheinungsbild der Zeilen anzupassen. Entdecken Sie Entwicklerleitfäden und API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# rowShape

### Beschreibung

@short: Optional. Ein Objekt mit Einstellungen zur Anpassung des Erscheinungsbilds von Zeilen

### Verwendung

~~~jsx {}
rowShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void
            }, {...} // andere Elementdaten
        ] | ({ row, rowIndex, rows, store }) => array | boolean
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### Parameter

Um das Erscheinungsbild der Zeilen zu steuern, unterstützt das **rowShape**-Objekt folgende Optionen:

- `menu` - (optional) Einstellungen für das Kontextmenü der Zeile. Es beinhaltet:
    - `show` - (optional) schaltet das Kontextmenü der Zeile ein oder aus
    - `items` - (optional) ein Array von Objekten, die Menüeinträge für Zeilen definieren. Jeder Eintrag kann enthalten:
        - `id` - (optional) Menüeintrag-ID. Verwenden Sie diese Werte für eingebaute Aktionen:
            - ***"set-edit"*** - ermöglicht das Bearbeiten des Zeilennamens
            - ***"move-row:up"*** - verschiebt die Zeile nach oben
            - ***"move-row:down"*** - verschiebt die Zeile nach unten
            - ***"delete-row"*** - löscht die Zeile

        - `icon` - (optional) Icon-Klassenname für den Menüeintrag (z.B. *mdi-delete*)
        - `text` - (optional) Beschriftung des Menüeintrags
        - `disabled` - (optional) gibt an, ob der Menüeintrag aktiv oder deaktiviert ist (boolescher Wert)
        - `onClick` - (optional) benutzerdefinierte Callback-Funktion, die empfängt:
            - ***id*** - aktuelle Menüeintrag-ID
            - ***item*** - aktuelle Menüeintragsdaten
            - ***row*** - Daten der Zielzeile

:::info
Der Parameter `items` kann auch eine benutzerdefinierte Funktion mit diesen Argumenten sein:

- ***row*** - aktuelle Zeilendaten
- ***rowIndex*** - Index der aktuellen Zeile
- ***rows*** - Array aller Zeilen
- ***store*** - das *dataStore*-Objekt

Diese Funktion gibt Ihnen die Flexibilität, das Menü für bestimmte Zeilen anzupassen oder es vollständig zu deaktivieren (indem *null* oder *false* zurückgegeben wird):

~~~jsx {}
    items: ({ row, rowIndex, rows, store }) => {
        if(rowIndex == 0)
            return null
        return [
            { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
            {
                id: "custom-delete-row",
                icon: "wxi-delete",
                text: "Zeile entfernen"
            },
            {
                id: "custom-move-row:up",
                icon: "wxi-arrow-up",
                text: "Nach oben verschieben"
            }
        ]
    }
~~~
:::

- `css` - eine Funktion, die eine CSS-Klasse zurückgibt, die bedingt auf Zeilen angewendet wird
- `confirmDeletion` - (optional) aktiviert oder deaktiviert einen Bestätigungsdialog beim Löschen von Zeilen

### Standardkonfiguration

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, store }) => [
    { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "Nach oben verschieben",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "Nach unten verschieben",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "Löschen" }
];
const rowShape = {
    menu: {
        show: true,
        items: getDefaultRowMenuItems
    },
    confirmDeletion: true
};
~~~

### Beispiel

~~~jsx {10-43,48}
const changeRowColor = (row, cssClass) => board.updateRow({
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
    menu: {
        show: true,
        items: ({ row, rowIndex, rows, store }) => {
            if (rowIndex == 0)
                return false
            return [
                {
                    id: "color",
                    text: "Farbe",
                    items: [
                        {
                            id:"gray",
                            text: "Grau",
                            onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                        },
                        {
                            id:"yellow",
                            text: "Gelb",
                            onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                        },
                        {
                            id:"red",
                            text: "Rot",
                            onClick: ({ id, item, row }) => changeRowColor(row, "red")
                        }
                    ]
                }
            ]
        }
    },
    css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red",
    confirmDeletion: false
};

new kanban.Kanban("#root", {
    cards,
    rows,
    rows,
    rowShape,
    // andere Parameter
});
~~~

**Änderungsprotokoll:**
- Der Parameter ***css*** wurde in Version 1.4 eingeführt
- Der Parameter ***menu.items[0].label*** wurde in Version 1.4 zu ***menu.items[0].text*** umbenannt

**Verwandte Artikel:** [Konfiguration](/guides/configuration)

**Verwandte Beispiele:** [Kanban. Farbe von Zeilen über benutzerdefiniertes Menü ändern](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)
